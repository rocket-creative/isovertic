import { Resend } from "resend";
import { visibility } from "@/content/visibility";
import { capture } from "@/lib/capture";
import { notifyEnvelope } from "@/lib/notify";
import { seal } from "@/lib/paperbrief";
import { db } from "@/lib/paperbrief-db";
import type { Job } from "@/lib/visibility";

// Server only. Kept out of the actions file so it can never be called from a browser.
const base = visibility.path;

/**
 * Asks the site to carry on with a snapshot in a fresh run. The receiving route answers straight away,
 * so this returns in well under a second. If the call cannot get through, the daily sweep picks the job up.
 */
export async function continueLater(job: Job): Promise<void> {
  const token = seal({ j: job.id }, 10);
  if (!token || !job.origin) return;
  try {
    const res = await fetch(`${job.origin}/api/snapshot/continue`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Preview deployments sit behind Vercel's login wall. This is Vercel's own key for letting the site call itself.
        ...(process.env.VERCEL_AUTOMATION_BYPASS_SECRET ? { "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET } : {}),
      },
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    if (res.status !== 202) console.warn("Snapshot hand off was not accepted:", res.status);
  } catch (e) {
    console.warn("Snapshot hand off failed:", (e as Error).message);
  }
}

/** Emails the requester and tells sales, once, when a report is finished. */
export async function announce(job: Job): Promise<void> {
  const client = db();
  if (!client || !job.report) return;
  const { data: account } = await client.from("paperbrief_accounts").select("name, email, phone").eq("id", job.account_id).maybeSingle();
  if (!account) return;
  const { data: first } = await client.from("visibility_jobs").update({ emailed_at: new Date().toISOString() }).eq("id", job.id).is("emailed_at", null).select("id");
  if (!first?.length) return;
  const { named, asked } = job.report.overall;
  const url = `${job.origin ?? "https://isovertic.com"}${base}/${job.id}`;
  if (process.env.RESEND_API_KEY) {
    const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: notifyEnvelope().from,
      to: account.email,
      subject: visibility.email.subject(job.company),
      text: visibility.email.body(account.name.split(" ")[0], job.company, named, asked, url),
    });
    if (error) console.error("Snapshot email failed:", error.message);
  }
  await capture({
    name: account.name,
    email: account.email,
    company: job.company,
    message: `AI visibility snapshot finished for ${job.company} (${job.domain}).\nNamed in ${named} of ${asked} answers.\nPhone: ${account.phone ?? "not given"}\nSells: ${job.sells}\nCompetitors given: ${job.competitors.join(", ") || "none"}\nTop fix: ${job.report.fixes[0]?.title ?? "none written"}`,
    sourcePath: base,
    subject: `Snapshot done: ${job.company}, named in ${named} of ${asked}`,
  });
}
