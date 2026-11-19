import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { discoverPapers, type Paper } from "@/lib/paperbrief";
import type { Draft } from "@/lib/paperbrief-ai";

// PaperBrief storage. Server only: uses the service role key, which bypasses RLS.
// Tables: paperbrief_accounts, paperbrief_workspaces, paperbrief_papers (supabase/paperbrief.sql).
// When the Supabase keys are missing, db() returns null and the desk falls back to a search that saves nothing.

export type Status = "review" | "ours" | "not_ours";
export type Cadence = "monthly" | "weekly" | "off";
export type Workspace = {
  id: string; account_id: string; company: string; aliases: string[]; days: number; cadence: Cadence;
  alerts: boolean; unsubscribe_token: string; last_checked_at: string | null; next_check_at: string | null; domain_match: boolean | null;
};
export type SavedPaper = {
  id: string; pmid: string; title: string; authors: string | null; journal: string | null; pub_date: string;
  first_seen_at: string; status: Status; post_requested_at: string | null; draft: Draft | null; drafted_at: string | null;
};

// A free tool with a paid model behind it: each company gets this many AI drafts a day.
export const DRAFTS_PER_DAY = 15;
export async function draftsToday(c: SupabaseClient, workspaceId: string): Promise<number> {
  const since = new Date().toISOString().slice(0, 10);
  const { count } = await c.from("paperbrief_papers").select("id", { count: "exact", head: true }).eq("workspace_id", workspaceId).gte("drafted_at", since);
  return count ?? 0;
}

export function db(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? createClient(url, key, { auth: { persistSession: false } }) : null;
}

export async function upsertAccount(c: SupabaseClient, a: { name: string; email: string; phone: string; domain: string; site: boolean }): Promise<string | null> {
  const now = new Date().toISOString();
  const { data, error } = await c
    .from("paperbrief_accounts")
    .upsert({ name: a.name, email: a.email, phone: a.phone, email_domain: a.domain, domain_has_site: a.site, verified_at: now, last_seen_at: now }, { onConflict: "email" })
    .select("id")
    .single();
  if (error) console.error("PaperBrief account:", error.message);
  return data?.id ?? null;
}

export async function getWorkspace(c: SupabaseClient, accountId: string): Promise<Workspace | null> {
  const { data } = await c.from("paperbrief_workspaces").select("*").eq("account_id", accountId).maybeSingle();
  return (data as Workspace | null) ?? null;
}

export function nextCheck(cadence: Cadence, from = new Date()): string | null {
  if (cadence === "off") return null;
  return new Date(from.getTime() + (cadence === "weekly" ? 7 : 30) * 86_400_000).toISOString();
}

export async function saveWorkspace(
  c: SupabaseClient,
  accountId: string,
  w: { company: string; aliases: string[]; days: number; cadence: Cadence; alerts: boolean; domain_match: boolean },
): Promise<Workspace | null> {
  const { data, error } = await c
    .from("paperbrief_workspaces")
    .upsert({ account_id: accountId, ...w, next_check_at: nextCheck(w.cadence) }, { onConflict: "account_id" })
    .select("*")
    .single();
  if (error) console.error("PaperBrief workspace:", error.message);
  return (data as Workspace | null) ?? null;
}

/** Runs the literature search and stores papers not seen before. Returns only the new ones. */
export async function runCheck(c: SupabaseClient, w: Workspace, days = w.days): Promise<Paper[]> {
  const found = await discoverPapers([w.company, ...w.aliases], days);
  let fresh: Paper[] = [];
  if (found.length) {
    const { data, error } = await c
      .from("paperbrief_papers")
      .upsert(
        found.map((p) => ({ workspace_id: w.id, pmid: p.pmid, title: p.title, authors: p.authors, journal: p.journal, pub_date: p.date })),
        { onConflict: "workspace_id,pmid", ignoreDuplicates: true },
      )
      .select("pmid");
    if (error) throw new Error(error.message);
    const added = new Set((data ?? []).map((r) => r.pmid as string));
    fresh = found.filter((p) => added.has(p.pmid));
  }
  await c
    .from("paperbrief_workspaces")
    .update({ last_checked_at: new Date().toISOString(), next_check_at: nextCheck(w.cadence) })
    .eq("id", w.id);
  return fresh;
}

export async function listPapers(c: SupabaseClient, workspaceId: string): Promise<SavedPaper[]> {
  const { data } = await c
    .from("paperbrief_papers")
    .select("id, pmid, title, authors, journal, pub_date, first_seen_at, status, post_requested_at, draft, drafted_at")
    .eq("workspace_id", workspaceId)
    .order("pub_date", { ascending: false })
    .limit(300);
  return (data as SavedPaper[] | null) ?? [];
}
