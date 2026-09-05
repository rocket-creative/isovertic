"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { formCopy } from "@/content/form";

export type LeadState = { ok: boolean; error?: string } | null;

function text(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const name = text(formData, "name");
  const email = text(formData, "email");
  const companyWebsite = text(formData, "company_website");
  const industry = text(formData, "industry");
  const tier = text(formData, "tier");
  const marketingSpend = text(formData, "marketing_spend");
  const startWhen = text(formData, "start_when");
  const clinicalClaims = text(formData, "clinical_claims");
  const salesOwner = text(formData, "sales_owner");
  const messageRaw = text(formData, "message");
  const foundUs = text(formData, "found_us");
  const sourcePath = text(formData, "source_path") || "/contact";
  const honey = text(formData, "hp_url");

  if (honey) return { ok: true };
  if (!name || !email || !/.+@.+\..+/.test(email) || !companyWebsite) {
    return { ok: false, error: formCopy.error };
  }

  const details = [
    `Website: ${companyWebsite}`,
    `Industry: ${industry || "Pick one"}`,
    `Tier: ${tier || "Not sure yet"}`,
    `Marketing spend: ${marketingSpend || "Pick one"}`,
    `Start: ${startWhen || "Pick one"}`,
    `Clinical claims: ${clinicalClaims || "Not sure"}`,
    `Who closes: ${salesOwner || "Pick one"}`,
    `Found us: ${foundUs || "Pick one"}`,
    `From page: ${sourcePath}`,
    "",
    "What number are they trying to move:",
    messageRaw || "(blank)",
  ].join("\n");

  const errors: string[] = [];

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("leads").insert({
        name,
        email,
        company: companyWebsite,
        message: details,
        source_path: sourcePath,
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
        replyTo: email,
        subject: `Pipeline call request: ${name} (${companyWebsite})`,
        text: `Name: ${name}\nEmail: ${email}\n${details}`,
      });
    } catch (e) {
      errors.push(`resend: ${(e as Error).message}`);
    }
  } else {
    errors.push("resend env missing");
  }

  if (errors.length === 2) {
    console.error("Lead delivery failed entirely:", errors);
    if (process.env.NODE_ENV !== "production") {
      console.warn("Lead captured in development without Supabase or Resend:", { name, email, companyWebsite, details });
      return { ok: true };
    }
    return { ok: false, error: "Something failed on our side. Email sale@isovertic.com directly and we will take the hint about our own form." };
  }
  if (errors.length) console.warn("Lead partially delivered:", errors);
  return { ok: true };
}
