import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { paperbrief } from "@/content/paperbrief";
import { notifyEnvelope } from "@/lib/notify";
import { aiConfigured, draftPaper } from "@/lib/paperbrief-ai";
import { db, runCheck, type Workspace } from "@/lib/paperbrief-db";
import { site } from "@/lib/site";

// Scheduled PaperBrief check, called once a day by Vercel Cron (vercel.json).
// Each due workspace gets a fresh literature search. If alerts are on and something new turned up,
// the verified address gets one short email with up to five papers. Nothing new, no email.
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const BATCH = 8;
// New papers drafted automatically per company per run, so the queue arrives with posts waiting.
const AUTO_DRAFTS = 3;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return NextResponse.json({ error: "CRON_SECRET is not set" }, { status: 503 });
  if (request.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const client = db();
  if (!client) return NextResponse.json({ error: "database is not configured" }, { status: 503 });

  const { data: due, error } = await client
    .from("paperbrief_workspaces")
    .select("*, account:paperbrief_accounts(email)")
    .neq("cadence", "off")
    .lte("next_check_at", new Date().toISOString())
    .order("next_check_at")
    .limit(BATCH);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
  let checked = 0;
  let emailed = 0;
  for (const row of due ?? []) {
    const w = row as Workspace & { account: { email: string } | null };
    try {
      // Look back a little past the schedule so a paper indexed late is still caught.
      const fresh = await runCheck(client, w, w.cadence === "weekly" ? 30 : 90);
      checked++;
      if (aiConfigured()) {
        await Promise.all(
          fresh.slice(0, AUTO_DRAFTS).map(async (p) => {
            try {
              const draft = await draftPaper(
                { pmid: p.pmid, title: p.title, authors: p.authors, journal: p.journal, pub_date: p.date },
                { name: w.company, aliases: w.aliases },
              );
              await client.from("paperbrief_papers").update({ draft, drafted_at: new Date().toISOString() }).eq("workspace_id", w.id).eq("pmid", p.pmid);
            } catch (e) {
              console.error("PaperBrief auto draft failed:", (e as Error).message);
            }
          }),
        );
      }
      if (!fresh.length || !w.alerts || !resend || !w.account?.email) continue;
      const a = paperbrief.alert;
      const lines = fresh.slice(0, 5).map((p) => `${p.title}\n${p.journal}, ${p.date}\n${p.url}`);
      const stop = `${site.url}/paperbrief/unsubscribe?t=${w.unsubscribe_token}`;
      const { error: sendError } = await resend.emails.send({
        from: notifyEnvelope().from,
        to: w.account.email,
        subject: a.subject(fresh.length, w.company),
        text: [
          a.intro(w.company),
          ...lines,
          fresh.length > 5 ? a.more(fresh.length - 5) : "",
          `${a.desk} ${site.url}${paperbrief.deskPath}`,
          `${a.stop} ${stop}`,
        ].filter(Boolean).join("\n\n"),
        headers: { "List-Unsubscribe": `<${stop}>` },
      });
      if (sendError) console.error("PaperBrief alert failed:", sendError.message);
      else emailed++;
    } catch (e) {
      console.error("PaperBrief scheduled check failed:", (e as Error).message);
    }
  }
  return NextResponse.json({ due: due?.length ?? 0, checked, emailed });
}
