import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { site } from "@/lib/site";

// Reads the page drafts in content/site-copy/*.md and turns them into typed pages.
// Each file holds several pages. A page starts at "# NAME" and carries a "URL:" line.
// Sections start at "## ". Lines such as "H2:", "Button:", and "Link:" are layout directives.
// Bracketed reviewer notes and "Primary query" lines never reach the page.

export type CopyLink = { label: string; href: string };
export type CopyBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "kicker"; text: string }
  | { type: "quote"; text: string }
  | { type: "small"; text: string; href?: string }
  | { type: "closing"; text: string }
  | { type: "ul" | "ol"; items: { text: string; link?: CopyLink }[] }
  | { type: "stats"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "buttons"; links: CopyLink[] }
  | { type: "link"; link: CopyLink }
  | { type: "choice" | "fields"; items: string[] }
  | { type: "diagram"; name: string }
  | { type: "image"; brief: string }
  | { type: "video"; src: string; srcVertical?: string; caption: string }
  | { type: "cards"; items: { kicker?: string; title: string; blocks: CopyBlock[] }[] }
  | { type: "linkcards"; items: { title: string; text: string; link: CopyLink }[] };
export type CopySection = { id: string; title: string; h2?: string; blocks: CopyBlock[]; faqs?: { q: string; a: string }[] };
export type CopyPage = {
  name: string;
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
  h1: string;
  lead: string[];
  buttons: CopyLink[];
  trust?: string;
  sections: CopySection[];
};

const DIR = path.join(process.cwd(), "content", "site-copy");
const SHARED_PATHS = new Set(["/cdmo-marketing", "/life-science-consulting-marketing"]);
const SKIP_SECTIONS = /^(thank you page)$/i;

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const stripNotes = (s: string) =>
  s.replace("[site phone number]", site.phone.replace("+1-", "")).replace(/\s*\[[^\]]*\](?!\()/g, "").trim();
/** Plain text for places that cannot hold links, such as FAQ answers and structured data. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

// Labels that point somewhere other than a page of the same name.
const LINKS: [RegExp, string][] = [
  [/paperbrief/i, "/paperbrief"],
  [/what we automate/i, "/life-science-ai-automation"],
  [/what the snapshot checks|full audit|^ai visibility audit$/i, "/ai-visibility-audit"],
  [/snapshot|whether ai names/i, "/ai-visibility-snapshot"],
  [/how the build goes/i, "/life-science-website-design#how-it-goes"],
  [/how we handle your science/i, "/life-science-website-design#how-we-handle-your-science"],
  [/price|pricing|hipaa/i, "/pricing"],
  [/4,995|website includes|what is included/i, "/life-science-website-design"],
  [/^search and publishing$/i, "/life-science-seo"],
  [/^ai search optimization$/i, "/ai-search-optimization-life-sciences"],
  [/editorial standard/i, "/field-notes/editorial-standard"],
  [/more about (kristen|george)/i, "/about"],
];

type Raw = { name: string; body: string; file: string };

function rawPages(): Raw[] {
  const out: Raw[] = [];
  for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith(".md")).sort()) {
    const text = fs.readFileSync(path.join(DIR, file), "utf8").replace(/\r\n/g, "\n");
    const parts = text.split(/^# (.+)$/m);
    for (let i = 1; i < parts.length; i += 2) out.push({ name: parts[i].trim(), body: parts[i + 1], file });
  }
  return out;
}

function splitSections(body: string): { title: string; text: string }[] {
  const parts = body.split(/^## (.+)$/m);
  const out: { title: string; text: string }[] = [];
  for (let i = 1; i < parts.length; i += 2) out.push({ title: parts[i].replace(/\s*\([^)]*\)\s*$/, "").trim(), text: parts[i + 1].replace(/^---\s*$/gm, "") });
  return out;
}

const directive = (line: string, key: string) => {
  const m = line.match(new RegExp(`^(?:${key}):\\s*(.*)$`, "i"));
  return m ? m[1].trim() : null;
};

function build(): CopyPage[] {
  const raws = rawPages();
  const named = new Map<string, string>();
  for (const r of raws) {
    const url = r.body.match(/^URL:\s*(\S+)/m);
    if (url) named.set(r.name.toLowerCase(), url[1]);
  }
  const resolve = (label: string): CopyLink => {
    const clean = label.replace(/\.$/, "").trim();
    const direct = named.get(clean.toLowerCase());
    if (direct) return { label: clean, href: direct };
    for (const [re, href] of LINKS) if (re.test(clean)) return { label: clean, href };
    return { label: clean, href: "/contact" };
  };

  function parseFaqs(text: string): { q: string; a: string }[] {
    const faqs: { q: string; a: string }[] = [];
    for (const chunk of text.split(/\n\n+/)) {
      const lines = chunk.trim().split("\n");
      const q = lines[0]?.match(/^\*\*(.+)\*\*$/);
      if (q && lines.length > 1) faqs.push({ q: q[1], a: plain(stripNotes(lines.slice(1).join(" "))) });
    }
    return faqs;
  }

  function parseBlocks(text: string): { h2?: string; blocks: CopyBlock[] } {
    const blocks: CopyBlock[] = [];
    let h2: string | undefined;
    let pending: "stats" | "choice" | "fields" | null = null;
    for (const chunk of text.split(/\n\n+/)) {
      const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
      if (!lines.length) continue;
      if (/^note for george and kristen:/i.test(lines[0])) continue;
      if (lines.every((l) => l.includes("|")) && lines.length > 2 && /^\|?[\s:|-]+$/.test(lines[1])) {
        const row = (l: string) => l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => stripNotes(c));
        blocks.push({ type: "table", head: row(lines[0]), rows: lines.slice(2).map(row) });
        continue;
      }
      let para: string[] = [];
      let list: { type: "ul" | "ol"; items: { text: string; link?: CopyLink }[] } | null = null;
      const flushPara = () => {
        if (!para.length) return;
        const t = stripNotes(para.join(" "));
        para = [];
        if (!t) return;
        blocks.push(/^".*"$/.test(t) ? { type: "quote", text: t.slice(1, -1) } : { type: "p", text: t });
      };
      const flushList = () => {
        if (!list) return;
        if (pending) blocks.push({ type: pending, items: list.items.map((i) => i.text) });
        else blocks.push(list);
        pending = null;
        list = null;
      };
      for (const line of lines) {
        const item = line.match(/^(-|\d+\.)\s+(.*)$/);
        if (item) {
          flushPara();
          const type = item[1] === "-" ? "ul" : "ol";
          if (!list) list = { type, items: [] };
          const withLink = item[2].match(/^(.*?)\s*Link:\s*(.+)$/);
          const text = stripNotes(withLink ? withLink[1] : item[2]);
          if (text) list.items.push({ text, link: withLink ? resolve(withLink[2]) : undefined });
          continue;
        }
        flushList();
        let v: string | null;
        if ((v = directive(line, "H2")) !== null || (v = directive(line, "\\*\\*H2")) !== null) { flushPara(); h2 = v.replace(/\*\*$/, ""); continue; }
        if (line.startsWith("### ")) { flushPara(); blocks.push({ type: "h3", text: line.slice(4) }); continue; }
        if ((v = line.match(/^\*\*Tab \d+:\s*(.+)\*\*$/)?.[1] ?? null) !== null) { flushPara(); blocks.push({ type: "kicker", text: v }); continue; }
        if (/^\*\*[^*]+\*\*$/.test(line) && !para.length) { blocks.push({ type: "h3", text: line.slice(2, -2).replace(/^"|"$/g, "") }); continue; }
        if ((v = directive(line, "(?:Primary |Secondary )?Buttons?")) !== null) {
          flushPara();
          const links = v.split("·").map((s) => s.trim()).filter(Boolean).map(resolve);
          const last = blocks[blocks.length - 1];
          if (last?.type === "buttons") last.links.push(...links);
          else blocks.push({ type: "buttons", links });
          continue;
        }
        if ((v = directive(line, "Link")) !== null) { flushPara(); blocks.push({ type: "link", link: resolve(v) }); continue; }
        if ((v = directive(line, "Small link")) !== null) { flushPara(); blocks.push({ type: "small", text: v, href: "/contact" }); continue; }
        if ((v = directive(line, "Small print|Under the button|Trust line|Disclosure|Sources")) !== null) {
          flushPara();
          const label = line.match(/^(Disclosure|Sources)/i)?.[1];
          blocks.push({ type: "small", text: stripNotes(label ? `${label}: ${v}` : v) });
          continue;
        }
        if ((v = directive(line, "Closing line")) !== null) { flushPara(); blocks.push({ type: "closing", text: v }); continue; }
        if (directive(line, "Stat row") !== null) { flushPara(); pending = "stats"; continue; }
        if ((v = directive(line, "Diagram")) !== null) { flushPara(); blocks.push({ type: "diagram", name: v }); continue; }
        if ((v = directive(line, "Video")) !== null) {
          flushPara();
          // "Video: /wide.mp4 /tall.mp4 | caption". The second file, when given, plays on narrow screens.
          const [srcs, ...rest] = v.split("|");
          const [src, srcVertical] = srcs.trim().split(/\s+/);
          blocks.push({ type: "video", src, srcVertical, caption: stripNotes(rest.join("|")) });
          continue;
        }
        if ((v = directive(line, "Image")) !== null) { flushPara(); blocks.push({ type: "image", brief: v }); continue; }
        if (/^Choice \(.*\):$/i.test(line)) { flushPara(); pending = "choice"; continue; }
        if (/^Fields:$/i.test(line)) { flushPara(); pending = "fields"; continue; }
        if (/^(Logo bar|Primary query):/i.test(line) || /^Short answer \(.*\):$/i.test(line)) continue;
        para.push(line);
      }
      flushPara();
      flushList();
    }
    return { h2, blocks: group(blocks) };
  }

  // Layout grouping. A run of two or more "heading, text, link" groups becomes a row of cards,
  // and a list where every item opens in bold and carries a link becomes a grid of linked cards.
  function group(blocks: CopyBlock[]): CopyBlock[] {
    const out: CopyBlock[] = [];
    let i = 0;
    while (i < blocks.length) {
      const b = blocks[i];
      if (b.type === "ul" && b.items.length > 1) {
        const items = b.items.map((it) => {
          const m = it.text.match(/^\*\*(.+?)\.?\*\*\s*(.*)$/);
          return m && it.link ? { title: m[1], text: m[2], link: it.link } : null;
        });
        if (items.every(Boolean)) {
          out.push({ type: "linkcards", items: items as { title: string; text: string; link: CopyLink }[] });
          i++;
          continue;
        }
      }
      if (b.type === "kicker" || b.type === "h3") {
        const cards: { kicker?: string; title: string; blocks: CopyBlock[] }[] = [];
        let j = i;
        while (j < blocks.length) {
          let kicker: string | undefined;
          let k = j;
          const first = blocks[k];
          if (first.type === "kicker") { kicker = first.text; k++; }
          const head = blocks[k];
          if (!head || head.type !== "h3") break;
          k++;
          const body: CopyBlock[] = [];
          while (k < blocks.length && (blocks[k].type === "p" || blocks[k].type === "image")) body.push(blocks[k++]);
          const link = blocks[k];
          if (!link || link.type !== "link" || !body.some((x) => x.type === "p")) break;
          body.push(link);
          cards.push({ kicker, title: head.text, blocks: body });
          j = k + 1;
        }
        if (cards.length > 1) {
          out.push({ type: "cards", items: cards });
          i = j;
          continue;
        }
      }
      out.push(b);
      i++;
    }
    return out;
  }

  const shared = raws.find((r) => r.file === "_shared.md");
  const sharedSections = shared ? splitSections(shared.body) : [];
  const sharedSection = (title: string): CopySection | null => {
    const s = sharedSections.find((x) => x.title === title);
    if (!s) return null;
    const { h2, blocks } = parseBlocks(s.text);
    return { id: slugify(title), title, h2, blocks };
  };

  const pages: CopyPage[] = [];
  for (const r of raws) {
    const url = r.body.match(/^URL:\s*(\S+)/m)?.[1];
    if (!url) continue;
    const title = r.body.match(/^Title tag:\s*(.+)$/m)?.[1].trim() ?? r.name;
    const description = r.body.match(/^Meta description:\s*(.+)$/m)?.[1].trim() ?? "";
    const page: CopyPage = { name: r.name, path: url, title, description, h1: r.name, lead: [], buttons: [], sections: [] };
    for (const s of splitSections(r.body)) {
      if (SKIP_SECTIONS.test(s.title)) continue;
      if (/^hero$/i.test(s.title)) {
        const eyebrow = s.text.match(/^Eyebrow:\s*(.+)$/m)?.[1];
        const h1 = s.text.match(/^H1:\s*(.+)$/m)?.[1];
        if (eyebrow) page.eyebrow = eyebrow.trim();
        if (h1) page.h1 = h1.trim();
        const rest = s.text.replace(/^(Eyebrow|H1):.*$/gm, "").replace(/^Subhead:\s*/m, "");
        for (const b of parseBlocks(rest).blocks) {
          if (b.type === "p") page.lead.push(plain(b.text));
          else if (b.type === "buttons") page.buttons.push(...b.links);
          else if (b.type === "small") page.trust = b.text;
        }
        continue;
      }
      if (/^questions/i.test(s.title)) {
        const h2 = s.text.match(/^H2:\s*(.+)$/m)?.[1].trim();
        page.sections.push({ id: "questions", title: "Questions", h2: h2 ?? "Questions", blocks: [], faqs: parseFaqs(s.text) });
        continue;
      }
      const { h2, blocks } = parseBlocks(s.text);
      const bare = /^(proof|call to action)/i.test(s.title);
      page.sections.push({ id: slugify(s.title), title: s.title, h2: h2 ?? (bare ? undefined : s.title), blocks });
    }
    if (r.file === "03-industries.md" || SHARED_PATHS.has(url)) {
      const marketer = sharedSection("Already have a marketer?");
      const prices = sharedSection("Prices");
      const q = page.sections.findIndex((s) => s.faqs);
      if (marketer) page.sections.splice(q < 0 ? page.sections.length : q, 0, marketer);
      const end = page.sections.findIndex((s) => /call to action/i.test(s.title));
      if (prices) page.sections.splice(end < 0 ? page.sections.length : end, 0, prices);
    }
    pages.push(page);
  }
  return pages;
}

/** Title, description, canonical, and share card for a page, all from its copy. Every route uses this. */
export function copyMetadata(p: string): Metadata {
  const page = copyPage(p);
  const share = { title: page.title.split(" | ")[0], description: page.description };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { ...share, url: page.path, type: "website", siteName: site.name, images: [site.images.og] },
    twitter: { card: "summary_large_image", ...share, images: [site.images.og.url] },
  };
}

let cache: CopyPage[] | null = null;
export function copyPages(): CopyPage[] {
  if (!cache || process.env.NODE_ENV !== "production") cache = build();
  return cache;
}
export function copyPage(p: string): CopyPage {
  const page = copyPages().find((x) => x.path === p);
  if (!page) throw new Error(`No site copy for ${p}`);
  return page;
}
