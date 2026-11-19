import { createHash, createHmac, randomInt, timingSafeEqual } from "node:crypto";

// PaperBrief: the gated publication lookup. Server only.
// Ported from the PaperBrief developer handoff (lib/discovery.mjs). The handoff runs as one long lived
// Node process with SQLite, which Vercel cannot host, so this keeps the stateless half: a metadata search
// of Europe PMC that links every result to PubMed. Results are leads, never proof that a company made
// or supplied anything in the paper. No article text, methods, or outside URL is fetched.

// ---------- signed cookies (no database) ----------

export const PENDING_COOKIE = "pb_pending";
export const ACCESS_COOKIE = "pb_access";
export const PENDING_MINUTES = 15;
export const ACCESS_DAYS = 30;

function secret(): Buffer | null {
  const base = process.env.PAPERBRIEF_SECRET || process.env.RESEND_API_KEY;
  return base ? createHash("sha256").update(`paperbrief:${base}`).digest() : null;
}
export const configured = () => secret() !== null && Boolean(process.env.RESEND_API_KEY);

const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const mac = (body: string, key: Buffer) => createHmac("sha256", key).update(body).digest("base64url");

export function seal(payload: Record<string, unknown>, minutes: number): string | null {
  const key = secret();
  if (!key) return null;
  const body = b64(JSON.stringify({ ...payload, x: Date.now() + minutes * 60_000 }));
  return `${body}.${mac(body, key)}`;
}

export function unseal<T extends Record<string, unknown>>(token: string | undefined): (T & { x: number }) | null {
  const key = secret();
  if (!key || !token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const want = Buffer.from(mac(body, key));
  const got = Buffer.from(sig);
  if (want.length !== got.length || !timingSafeEqual(want, got)) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as T & { x: number };
    return typeof data.x === "number" && data.x > Date.now() ? data : null;
  } catch {
    return null;
  }
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export function newCode(): string {
  return Array.from({ length: 8 }, () => CODE_ALPHABET[randomInt(CODE_ALPHABET.length)]).join("");
}
export const normalizeCode = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
export function codeHash(code: string, email: string): string {
  const key = secret() ?? Buffer.alloc(0);
  return createHmac("sha256", key).update(`${normalizeCode(code)}:${email.toLowerCase()}`).digest("base64url");
}
export function sameHash(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

// ---------- discovery ----------

export type Paper = { pmid: string; title: string; authors: string; journal: string; date: string; url: string };
export const WINDOWS = [30, 90, 180, 365] as const;

const ENDPOINT = "https://www.ebi.ac.uk/europepmc/webservices/rest/search";
const NAME_RE = /^[\p{L}\p{N}][\p{L}\p{N} .&'(),_+\-]{2,99}$/u;

function clean(value: unknown, max = 500): string {
  return typeof value === "string"
    ? value.replace(/<[^>]+>/g, "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max)
    : "";
}

/** Plain names only. Quotes, query operators, and URL syntax are rejected, never interpolated. */
export function parseNames(name: string, aliases: string): string[] | null {
  const raw = [name, ...aliases.split(",")].map((s) => s.trim()).filter(Boolean);
  if (!raw.length || raw.length > 7) return null;
  for (const n of raw) if (!NAME_RE.test(n) || !/\p{L}/u.test(n)) return null;
  return [...new Set(raw)];
}

export async function discoverPapers(names: string[], days: number, now = new Date()): Promise<Paper[]> {
  const end = now.toISOString().slice(0, 10);
  const start = new Date(now.getTime() - days * 86_400_000).toISOString().slice(0, 10);
  const query = `(${names.map((n) => `"${n}"`).join(" OR ")}) AND SRC:MED AND NOT PUB_TYPE:Preprint AND NOT PUB_TYPE:preprint-withdrawal AND NOT PUB_TYPE:preprint-removal AND FIRST_PDATE:[${start} TO ${end}]`;
  const url = new URL(ENDPOINT);
  url.search = new URLSearchParams({ query, format: "json", resultType: "lite", pageSize: "100", sort: "FIRST_PDATE_D desc" }).toString();
  const response = await fetch(url.href, {
    headers: { Accept: "application/json" },
    redirect: "error",
    signal: AbortSignal.timeout(12_000),
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error(`Europe PMC search failed (${response.status})`);
  const data = (await response.json()) as { resultList?: { result?: Record<string, unknown>[] } };
  const rows = data.resultList?.result;
  if (!Array.isArray(rows)) throw new Error("Europe PMC returned an unexpected response");
  const papers: Paper[] = [];
  const seen = new Set<string>();
  for (const row of rows.slice(0, 100)) {
    if (!row || typeof row !== "object") continue;
    const title = clean(row.title, 400);
    const date = typeof row.firstPublicationDate === "string" ? row.firstPublicationDate : "";
    const journal = clean(row.journalTitle, 200);
    if (!title || /preprint/i.test(String(row.pubType ?? "")) || /research square|res sq|biorxiv|medrxiv|arxiv|preprints/i.test(journal)) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < start || date > end) continue;
    // Only a validated PubMed id produces a link. No URL from the result is trusted.
    const pmid = row.source === "MED" && /^[1-9]\d{0,11}$/.test(String(row.id)) ? String(row.id) : "";
    if (!pmid || seen.has(pmid)) continue;
    seen.add(pmid);
    papers.push({ pmid, title, authors: clean(row.authorString, 240), journal, date, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` });
    if (papers.length === 50) break;
  }
  return papers;
}
