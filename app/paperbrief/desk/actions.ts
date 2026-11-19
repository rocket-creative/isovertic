"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { paperbrief } from "@/content/paperbrief";
import { capture, text } from "@/lib/capture";
import { ACCESS_COOKIE, WINDOWS, parseNames, unseal } from "@/lib/paperbrief";
import { domainMatchesCompany, emailDomain } from "@/lib/paperbrief-domain";
import { aiConfigured, draftPaper } from "@/lib/paperbrief-ai";
import { DRAFTS_PER_DAY, db, draftsToday, getWorkspace, runCheck, saveWorkspace, type Cadence, type Status } from "@/lib/paperbrief-db";

const desk = paperbrief.deskPath;

// Every action starts here: a verified session, the database, and the workspace that session owns.
async function context() {
  const session = unseal<{ n: string; e: string; a?: string }>((await cookies()).get(ACCESS_COOKIE)?.value);
  const client = db();
  if (!session?.a || !client) redirect(`${paperbrief.path}#access`);
  return { session, client, accountId: session.a };
}

export async function saveSettings(formData: FormData): Promise<void> {
  const { client, accountId, session } = await context();
  const names = parseNames(text(formData, "company").slice(0, 100), text(formData, "aliases").slice(0, 500));
  if (!names) redirect(`${desk}?error=names`);
  const days = WINDOWS.find((w) => String(w) === text(formData, "days")) ?? 90;
  const cadence = (["monthly", "weekly", "off"] as const).find((c) => c === text(formData, "cadence")) ?? "monthly";
  // Does the inbox they verified belong to the company they are searching for? Never blocks; sales sees it.
  const domain = emailDomain(session.e);
  const match = domainMatchesCompany(domain, names);
  const before = await getWorkspace(client, accountId);
  const workspace = await saveWorkspace(client, accountId, {
    domain_match: match,
    company: names[0],
    aliases: names.slice(1),
    days,
    cadence: cadence as Cadence,
    alerts: formData.get("alerts") === "on",
  });
  if (!workspace) redirect(`${desk}?error=save`);
  if (!before || before.company !== workspace.company) {
    await capture({
      name: session.n,
      email: session.e,
      company: workspace.company,
      message: `PaperBrief company set: ${workspace.company}${workspace.aliases.length ? ` (also: ${workspace.aliases.join(", ")})` : ""}\nEmail domain: ${domain}\nDomain matches company: ${match ? "yes" : "NO, check this one. They may be researching another company."}`,
      sourcePath: desk,
      subject: `PaperBrief: ${session.n} is tracking ${workspace.company}${match ? "" : " (domain does not match)"}`,
    });
  }
  let added = 0;
  try {
    added = (await runCheck(client, workspace)).length;
  } catch (e) {
    console.error("PaperBrief check failed:", (e as Error).message);
    redirect(`${desk}?error=search`);
  }
  revalidatePath(desk);
  redirect(`${desk}?added=${added}`);
}

export async function checkNow(): Promise<void> {
  const { client, accountId } = await context();
  const workspace = await getWorkspace(client, accountId);
  if (!workspace) redirect(desk);
  // One manual check a minute is plenty; the literature does not move faster than that.
  if (workspace.last_checked_at && Date.now() - Date.parse(workspace.last_checked_at) < 60_000) redirect(`${desk}?added=0`);
  let added = 0;
  try {
    added = (await runCheck(client, workspace)).length;
  } catch (e) {
    console.error("PaperBrief check failed:", (e as Error).message);
    redirect(`${desk}?error=search`);
  }
  revalidatePath(desk);
  redirect(`${desk}?added=${added}`);
}

export async function setStatus(formData: FormData): Promise<void> {
  const { client, accountId } = await context();
  const workspace = await getWorkspace(client, accountId);
  const status = (["review", "ours", "not_ours"] as const).find((s) => s === text(formData, "status")) as Status | undefined;
  if (workspace && status) {
    await client.from("paperbrief_papers").update({ status }).eq("id", text(formData, "id")).eq("workspace_id", workspace.id);
  }
  revalidatePath(desk);
  redirect(`${desk}${text(formData, "show") ? `?show=${encodeURIComponent(text(formData, "show"))}` : ""}`);
}

// The automated step: Claude reads the abstract and any passages naming the company, then drafts
// a summary and two posts. Nobody at Isovertic reviews it, which is why the desk prints a warning beside it.
export async function draftPost(formData: FormData): Promise<void> {
  const { client, accountId } = await context();
  const workspace = await getWorkspace(client, accountId);
  if (!workspace) redirect(desk);
  if (!aiConfigured()) redirect(`${desk}?error=ai`);
  const { data: paper } = await client
    .from("paperbrief_papers")
    .select("id, pmid, title, authors, journal, pub_date")
    .eq("id", text(formData, "id"))
    .eq("workspace_id", workspace.id)
    .maybeSingle();
  if (!paper) redirect(desk);
  if ((await draftsToday(client, workspace.id)) >= DRAFTS_PER_DAY) redirect(`${desk}?error=cap`);
  try {
    const draft = await draftPaper(paper, { name: workspace.company, aliases: workspace.aliases });
    await client.from("paperbrief_papers").update({ draft, drafted_at: new Date().toISOString() }).eq("id", paper.id);
  } catch (e) {
    console.error("PaperBrief draft failed:", (e as Error).message);
    redirect(`${desk}?error=${(e as Error).message === "declined" ? "declined" : "draft"}`);
  }
  revalidatePath(desk);
  redirect(`${desk}?drafted=${paper.id}#paper-${paper.id}`);
}

// Optional and not shown on the desk today: asks a person at Isovertic to check a post.
export async function requestPost(formData: FormData): Promise<void> {
  const { client, accountId, session } = await context();
  const workspace = await getWorkspace(client, accountId);
  if (!workspace) redirect(desk);
  const { data: paper } = await client
    .from("paperbrief_papers")
    .select("id, pmid, title, post_requested_at")
    .eq("id", text(formData, "id"))
    .eq("workspace_id", workspace.id)
    .maybeSingle();
  if (paper && !paper.post_requested_at) {
    await capture({
      name: session.n,
      email: session.e,
      company: workspace.company,
      message: `PaperBrief: checked post requested.\nPaper: ${paper.title}\nhttps://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`,
      sourcePath: desk,
      subject: `PaperBrief post request: ${workspace.company}`,
    });
    await client.from("paperbrief_papers").update({ post_requested_at: new Date().toISOString(), status: "ours" }).eq("id", paper.id);
  }
  revalidatePath(desk);
  redirect(`${desk}?requested=1`);
}

export async function signOut(): Promise<void> {
  (await cookies()).delete({ name: ACCESS_COOKIE, path: "/paperbrief" });
  redirect(paperbrief.path);
}
