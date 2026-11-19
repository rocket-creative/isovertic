import { Resend } from "resend";
import { visibility } from "@/content/visibility";
import { capture } from "@/lib/capture";
import { notifyEnvelope } from "@/lib/notify";
import { db } from "@/lib/paperbrief-db";
import type { Job } from "@/lib/visibility";

// Server only. Kept out of the actions file so it can never be called from a browser.
const base = visibility.path;

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
