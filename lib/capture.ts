import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Server side capture used by every gated form on the site: the one page standard, subscribe, the audit,
// and the BAA request. Every capture lands in the existing leads table with a source_path that names the
// form, and notifies LEAD_NOTIFY_EMAIL. No new tables. Import only from server actions.

export type CaptureState = { ok: boolean; error?: string } | null;

export const EMAIL_RE = /.+@.+\..+/;

export function text(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function capture(input: { name: string; email: string; company?: string; message: string; sourcePath: string; subject: string }) {
  const errors: string[] = [];
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("leads").insert({
        name: input.name,
        email: input.email,
        company: input.company || null,
        message: input.message,
        source_path: input.sourcePath,
      });
      if (error) errors.push(`supabase: ${error.message}`);
    } catch (e) {
      errors.push(`supabase: ${(e as Error).message}`);
    }
  } else {
    errors.push("supabase env missing");
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "sale@isovertic.com";
  if (resendKey && to) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: `ISOVERTIC <${from}>`,
        to,
        replyTo: input.email,
        subject: input.subject,
        text: `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company || "(blank)"}\nFrom: ${input.sourcePath}\n\n${input.message}`,
      });
    } catch (e) {
      errors.push(`resend: ${(e as Error).message}`);
    }
  } else {
    errors.push("resend env missing");
  }

  if (errors.length === 2) {
    console.error("Capture failed entirely:", errors);
    if (process.env.NODE_ENV !== "production") return { ok: true };
    return { ok: false, error: "Something failed on our side. Email sale@isovertic.com and we will send it by hand." };
  }
  if (errors.length) console.warn("Capture partially delivered:", errors);
  return { ok: true };
}

