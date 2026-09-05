"use server";

import { redirect } from "next/navigation";
import { ensurePrice, isPlanKey, paymentMethodTypes, getPlan, siteUrl, stripe } from "@/lib/stripe";
import { startCopy } from "@/content/checkout";

export type StartState = { error?: string } | null;

export async function startCheckout(_prev: StartState, formData: FormData): Promise<StartState> {
  const planKey = String(formData.get("plan") || "");
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const agreed = formData.get("agree") === "on";
  const honey = String(formData.get("hp_url") || "");
  if (honey) return null;
  if (!isPlanKey(planKey)) return { error: startCopy.planMissing };
  const plan = getPlan(planKey);
  if (!/.+@.+\..+/.test(email) || (plan.termMonths > 0 && !agreed)) return { error: startCopy.error };

  const meta = {
    plan: plan.key,
    tier: plan.tier,
    billing: plan.billing,
    term_months: String(plan.termMonths),
    agreed_term: agreed ? "yes" : "no",
    company,
  };

  let url: string | null = null;
  try {
    const s = stripe();
    const price = await ensurePrice(plan);
    const base = siteUrl();
    const session = await s.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: paymentMethodTypes(),
      payment_method_options: {
        us_bank_account: { financial_connections: { permissions: ["payment_method"] }, verification_method: "automatic" },
      },
      line_items: [{ price, quantity: 1 }],
      customer_email: email,
      customer_creation: "always",
      allow_promotion_codes: true,
      billing_address_collection: "required",
      success_url: `${base}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/start?plan=${plan.key}`,
      metadata: meta,
      subscription_data: { metadata: meta, description: plan.label },
      custom_text: {
        submit: {
          message:
            plan.termMonths > 0
              ? `12 month term for ${plan.tierName}. Website rebuild and hosting included. Early exit: unbilled balance of the $15,000 build, prorated. Bank debits can take up to four business days to clear; the engagement starts when the first payment settles.`
              : `${plan.tierName}, 90 day ramp, then month to month. Cancel at any month end. Bank debits can take up to four business days to clear.`,
        },
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
