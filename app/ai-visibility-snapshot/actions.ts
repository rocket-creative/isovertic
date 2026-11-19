"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { after } from "next/server";
import { visibility } from "@/content/visibility";
import { capture, text } from "@/lib/capture";
import { db } from "@/lib/paperbrief-db";
import { emailDomain } from "@/lib/paperbrief-domain";
import { getSession } from "@/lib/session";
import { DAYS_BETWEEN, JOBS_PER_DAY, QUESTIONS, RUNS, advance, getJob, readSite, writeQuestions } from "@/lib/visibility";
import { announce, continueLater } from "@/lib/visibility-notify";
import { activeProviders } from "@/lib/visibility-providers";

const base = visibility.path;

async function context() {
  const session = await getSession();
  const client = db();
  if (!session?.a || !client) redirect(`${base}#start`);
  return { session, client, accountId: session.a };
}

// Step one: read their site, check the crawlers, and write the ten questions for them to review.
export async function createSnapshot(formData: FormData): Promise<void> {
  const { session, client, accountId } = await context();
  const company = text(formData, "company").slice(0, 100);
  const sells = text(formData, "sells").slice(0, 600);
  const buyers = text(formData, "buyers").slice(0, 300);
  const competitors = text(formData, "competitors").split(",").map((s) => s.trim().slice(0, 80)).filter(Boolean).slice(0, 3);
  if (company.length < 2 || sells.length < 10) redirect(`${base}?error=fields#start`);
  if (!process.env.ANTHROPIC_API_KEY || !activeProviders().length) redirect(`${base}?error=off#start`);

  // The snapshot only ever runs on the site at the address they verified.
  const domain = emailDomain(session.e);
  const since = new Date(Date.now() - DAYS_BETWEEN * 86_400_000).toISOString();
  const { data: recent } = await client.from("visibility_jobs").select("id, status").eq("domain", domain).gte("created_at", since).neq("status", "failed").order("created_at", { ascending: false }).limit(1);
  if (recent?.[0]) redirect(recent[0].status === "questions" ? `${base}/${recent[0].id}` : `${base}?error=recent#start`);
  const today = new Date().toISOString().slice(0, 10);
  const { count } = await client.from("visibility_jobs").select("id", { count: "exact", head: true }).gte("created_at", today);
  if ((count ?? 0) >= JOBS_PER_DAY) redirect(`${base}?error=busy#start`);

  let id = "";
  try {
    const { crawl, text: siteText } = await readSite(domain);
    const questions = await writeQuestions({ company, domain, sells, buyers, competitors, siteText });
    if (questions.length < QUESTIONS) throw new Error("too few questions");
    const h = await headers();
    const origin = `${h.get("x-forwarded-proto") ?? "https"}://${h.get("x-forwarded-host") ?? h.get("host")}`;
    const { data, error } = await client
      .from("visibility_jobs")
      .insert({ account_id: accountId, company, domain, sells, buyers: buyers || null, competitors, questions, crawl, site_text: siteText, origin })
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    id = data.id as string;
  } catch (e) {
    console.error("Snapshot setup failed:", (e as Error).message);
    redirect(`${base}?error=site#start`);
  }
  redirect(`${base}/${id}`);
}

// Step two: lock in the questions and start asking. The work continues after the response is sent.
export async function runSnapshot(formData: FormData): Promise<void> {
  const { client, accountId } = await context();
  const id = text(formData, "id");
  const job = await getJob(client, id, accountId);
  if (!job) redirect(base);
  if (job.status !== "questions") redirect(`${base}/${id}`);
  const questions = Array.from({ length: QUESTIONS }, (_, i) => text(formData, `q${i}`).replace(/\s+/g, " ").slice(0, 300));
  if (questions.some((q) => q.length < 15)) redirect(`${base}/${id}?error=questions`);
  const providers = activeProviders();
  if (!providers.length) redirect(`${base}?error=off#start`);

  const rows = providers.flatMap((provider) => questions.flatMap((_, q_index) => Array.from({ length: RUNS }, (_, run) => ({ job_id: id, provider, q_index, run: run + 1 }))));
  await client.from("visibility_answers").upsert(rows, { onConflict: "job_id,provider,q_index,run", ignoreDuplicates: true });
  await client.from("visibility_jobs").update({ questions, status: "running", started_at: new Date().toISOString() }).eq("id", id);
  after(() => advance(client, id, announce, continueLater));
  redirect(`${base}/${id}`);
}

// The human run upgrade: Google's AI answers, collected by hand, with a call. This only tells sales.
export async function requestGoogle(formData: FormData): Promise<void> {
  const { session, client, accountId } = await context();
  const id = text(formData, "id");
  const job = await getJob(client, id, accountId);
  if (!job) redirect(base);
  if (!job.google_requested_at) {
    await client.from("visibility_jobs").update({ google_requested_at: new Date().toISOString() }).eq("id", id);
    await capture({
      name: session.n,
      email: session.e,
      company: job.company,
      message: `Google AI answers upgrade requested for ${job.company} (${job.domain}).\nThey want a person to run their ten questions on Google and a call to go through the report.\nSnapshot: ${job.origin ?? ""}${base}/${id}\n\nQuestions:\n${job.questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`,
      sourcePath: `${base}/${id}`,
      subject: `Google AI answers upgrade requested: ${job.company}`,
    });
  }
  redirect(`${base}/${id}#google`);
}
