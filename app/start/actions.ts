"use server";

import { redirect } from "next/navigation";
import { ensurePrice, isPlanKey, plans, siteUrl, stripe } from "@/lib/stripe";
import { startCopy } from "@/content/checkout";

export type StartState = { error?: string } | null;

export async function startCheckout(_prev: StartState, formData: FormData): Promise<StartState> {
  const planKey = String(formData.get("plan") || "");
  const email = String(formData.get("email") || "").trim();
  const agreed = formData.get("agree") === "on";
  const honey = String(formData.get("hp_url") || "");
  if (honey) return null;
  if (!isPlanKey(planKey)) return { error: startCopy.planMissing };
  const plan = plans[planKey];
  if (!/.+@.+\..+/.test(email) || (plan.termMonths > 0 && !agreed)) return { error: startCopy.error };

  let url: string | null = null;
  try {
    const s = stripe();
    const price = await ensurePrice(plan);
    const base = siteUrl();
    const session = await s.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price, quantity: 1 }],
      customer_email: email,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      success_url: `${base}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/start?plan=${plan.key}`,
      metadata: { plan: plan.key, term_months: String(plan.termMonths), agreed_term: agreed ? "yes" : "no" },
      subscription_data: {
        metadata: { plan: plan.key, term_months: String(plan.termMonths), agreed_term: agreed ? "yes" : "no" },
        description: plan.label,
      },
      custom_text: {
        submit: { message: plan.termMonths > 0 ? "12 month term. Website rebuild and hosting included. Early exit: unbilled balance of the $15,000 build, prorated." : "90 day ramp, then month to month. Cancel at any month end." },
      },
    });
    url = session.url;
  } catch (e) {
    console.error("checkout failed", (e as Error).message);
    return { error: startCopy.checkoutError };
  }
  if (!url) return { error: startCopy.checkoutError };
  redirect(url);
}
