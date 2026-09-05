"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { welcomeCopy } from "@/content/checkout";

export type OnboardingState = { ok: boolean; error?: string; call?: boolean } | null;

function text(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

export async function submitOnboarding(_prev: OnboardingState, formData: FormData): Promise<OnboardingState> {
  if (text(formData, "hp_url")) return { ok: true };
  const sessionId = text(formData, "session_id");
  const email = text(formData, "email");
  const planKey = text(formData, "plan_key");
  const keys = ["company", "website", "contact_name", "role", "audience", "problems", "topics", "competitors", "voice", "social", "newsletter", "ads", "closer", "claims", "reviewer", "access", "call", "notes"] as const;
  const answers: Record<string, string> = {};
  for (const k of keys) answers[k] = text(formData, k);
  if (!answers.company || !answers.website || !answers.contact_name) return { ok: false, error: welcomeCopy.error };
  const wantsCall = answers.call.startsWith("Yes");

  const body = keys.map((k) => `${k}: ${answers[k] || "(blank)"}`).join("\n");
  const errors: string[] = [];

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    try {
      const supabase = createClient(url, key, { auth: { persistSession: false } });
      const { error } = await supabase.from("onboarding").insert({
        checkout_session_id: sessionId || null,
        email,
        plan: planKey,
        company: answers.company,
        website: answers.website,
        contact_name: answers.contact_name,
        wants_call: wantsCall,
        answers,
      });
      if (error) errors.push(`supabase: ${error.message}`);
    } catch (e) {
      errors.push(`supabase: ${(e as Error).message}`);
    }
  } else errors.push("supabase env missing");

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL || "sale@isovertic.com";
  if (resendKey && to) {
    try {
      await new Resend(resendKey).emails.send({
        from: `ISOVERTIC <${from}>`,
        to,
        replyTo: email || undefined,
        subject: `Intake: ${answers.company} (${planKey || "unknown plan"})${wantsCall ? " wants a call" : ""}`,
        text: `Email: ${email}\nCheckout: ${sessionId}\n\n${body}`,
      });
    } catch (e) {
      errors.push(`resend: ${(e as Error).message}`);
    }
  } else errors.push("resend env missing");

  if (errors.length === 2) {
    console.error("Onboarding delivery failed entirely:", errors);
    if (process.env.NODE_ENV !== "production") return { ok: true, call: wantsCall };
    return { ok: false, error: "Something failed on our side. Email sale@isovertic.com with your answers and we will take it from there." };
  }
  if (errors.length) console.warn("Onboarding partially delivered:", errors);
  return { ok: true, call: wantsCall };
}
