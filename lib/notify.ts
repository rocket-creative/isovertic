import { site } from "@/lib/site";

// Server only. Every form and payment notice goes to sales, with a copy to George.
export const NOTIFY_BCC = "georgestoff@rocketcreative.net";

export function notifyEnvelope() {
  const fromAddress = process.env.LEAD_FROM_EMAIL || site.email;
  return {
    from: `ISOVERTIC <${fromAddress}>`,
    to: site.email,
    bcc: NOTIFY_BCC,
  };
}
