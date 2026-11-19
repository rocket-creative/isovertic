import { site } from "@/lib/site";

// Server only. Every form and payment notice goes to sales, with a copy to George.
export const NOTIFY_BCC = "georgestoff@rocketcreative.net";

// Who gets the weekly PaperBrief signup report: George, Kristen, and the sales inbox.
// PAPERBRIEF_DIGEST_TO (comma separated) overrides the list without a code change.
export const DIGEST_TO: readonly string[] = (process.env.PAPERBRIEF_DIGEST_TO || `${NOTIFY_BCC},kristencoughlin@rocketcreative.net,${site.email}`)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function notifyEnvelope() {
  const fromAddress = process.env.LEAD_FROM_EMAIL || site.email;
  return {
    from: `ISOVERTIC <${fromAddress}>`,
    to: site.email,
    bcc: NOTIFY_BCC,
  };
}
