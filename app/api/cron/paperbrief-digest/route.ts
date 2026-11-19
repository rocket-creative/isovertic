import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { DIGEST_TO, notifyEnvelope } from "@/lib/notify";
import { db } from "@/lib/paperbrief-db";

// Weekly PaperBrief signup report, called every Monday by Vercel Cron (vercel.json).
// Lists who verified in the last seven days, the company each one tracks, and running totals.
// Internal email to the owners; it is sent even in a week with no signups so silence never means "broken".
export const dynamic = "force-dynamic";

type Row = {
  id: string; name: string; email: string; phone: string | null; verified_at: string;
  email_domain: string | null; domain_has_site: boolean | null;
  workspace: { id: string; company: string; aliases: string[]; cadence: string; alerts: boolean; domain_match: boolean | null }[] | null;
};

const yn = (v: boolean | null | undefined) => (v == null ? "unknown" : v ? "yes" : "NO");

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ error: "CRON_SECRET is not set" }, { status: 503 });
  if (request.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const client = db();
  if (!client || !process.env.RESEND_API_KEY) return NextResponse.json({ error: "database or email is not configured" }, { status: 503 });

  const since = new Date(Date.now() - 7 * 86_400_000).toISOString();
  const [{ data: fresh, error }, total, companies, papers, drafts] = await Promise.all([
    client
      .from("paperbrief_accounts")
      .select("id, name, email, phone, verified_at, email_domain, domain_has_site, workspace:paperbrief_workspaces(id, company, aliases, cadence, alerts, domain_match)")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(200),
    client.from("paperbrief_accounts").select("id", { count: "exact", head: true }),
    client.from("paperbrief_workspaces").select("id", { count: "exact", head: true }),
    client.from("paperbrief_papers").select("id", { count: "exact", head: true }),
    client.from("paperbrief_papers").select("id", { count: "exact", head: true }).gte("drafted_at", since),
  ]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const rows = (fresh ?? []) as unknown as Row[];
  const blocks = rows.map((r, i) => {
    const w = r.workspace?.[0];
    return [
      `${i + 1}. ${r.name}`,
      `   Email: ${r.email}`,
      `   Phone: ${r.phone ?? "not given"}`,
      `   Signed up: ${r.verified_at.slice(0, 10)}`,
      `   Website at ${r.email_domain ?? "their domain"}: ${yn(r.domain_has_site)}`,
      w
        ? `   Tracking: ${w.company}${w.aliases.length ? ` (also: ${w.aliases.join(", ")})` : ""}\n   Email domain matches that company: ${yn(w.domain_match)}\n   Checks: ${w.cadence}, email alerts ${w.alerts ? "on" : "off"}`
        : "   Tracking: has not set a company yet",
    ].join("\n");
  });

  const text = [
    `PaperBrief signups, week ending ${new Date().toISOString().slice(0, 10)}`,
    rows.length ? `${rows.length} new verified ${rows.length === 1 ? "signup" : "signups"} this week:` : "No new signups this week.",
    ...blocks,
    [
      "Totals",
      `Verified accounts: ${total.count ?? 0}`,
      `Companies being tracked: ${companies.count ?? 0}`,
      `Papers in all queues: ${papers.count ?? 0}`,
      `AI drafts written this week: ${drafts.count ?? 0}`,
    ].join("\n"),
    "Every address here was verified with an emailed code. Free mail providers are blocked at the gate. The full list is in the paperbrief_accounts table in Supabase.",
  ].join("\n\n");

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error: sendError } = await resend.emails.send({
    from: notifyEnvelope().from,
    to: [...DIGEST_TO],
    subject: `PaperBrief: ${rows.length} new ${rows.length === 1 ? "signup" : "signups"} this week`,
    text,
  });
  if (sendError) return NextResponse.json({ error: sendError.message }, { status: 502 });
  return NextResponse.json({ sent: DIGEST_TO.length, signups: rows.length });
}
