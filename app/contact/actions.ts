"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export type LeadState = { ok: boolean; error?: string } | null;

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const tier = String(formData.get("tier") || "").trim();
  const clinicalClaims = String(formData.get("clinical_claims") || "").trim();
  const messageRaw = String(formData.get("message") || "").trim();
  const sourcePath = String(formData.get("source_path") || "/contact");
  const honey = String(formData.get("website") || ""); // honeypot

  if (honey) return { ok: true }; // silently drop bots
  if (!name || !email || !/.+@.+\..+/.test(email)) {
    return { ok: false, error: "A name and a working email are required." };
  }

  const messageParts = [
    messageRaw ? `Number to move:\n${messageRaw}` : "",
    `Tier: ${tier || "Not sure yet"}`,
    `Clinical claims: ${clinicalClaims || "Not sure"}`,
  ].filter(Boolean);
  const message = messageParts.join("\n\n");

  const errors: string[] = [];

  // 1. Store in Supabase (service role, server only)
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("leads").insert({ name, email, company, message, source_path: sourcePath });
      if (error) errors.push(`supabase: ${error.message}`);
    } catch (e) {
      errors.push(`supabase: ${(e as Error).message}`);
    }
  } else {
    errors.push("supabase env missing");
  }

  // 2. Notify via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "georgestoff@rocketcreative.net";
  if (resendKey && to) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: `ISOVERTIC <${from}>`,
        to,
        replyTo: email,
        subject: `Pipeline call request: ${name}${company ? ` (${company})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTier: ${tier || "Not sure yet"}\nClinical claims: ${clinicalClaims || "Not sure"}\nFrom page: ${sourcePath}\n\nWhat number are they trying to move:\n${messageRaw || "(blank)"}`,
      });
    } catch (e) {
      errors.push(`resend: ${(e as Error).message}`);
    }
  } else {
    errors.push("resend env missing");
  }

  if (errors.length === 2) {
    console.error("Lead delivery failed entirely:", errors);
    return { ok: false, error: "Something failed on our side. Email georgestoff@rocketcreative.net directly and we will take the hint about our own form." };
  }
  if (errors.length) console.warn("Lead partially delivered:", errors);
  return { ok: true };
}
