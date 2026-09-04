import Stripe from "stripe";
import { tiers, TERM_MONTHS, UPFRONT_MONTHS } from "@/content/tiers";

// Self serve checkout. Only tiers with selfServe: true are sold here; the rest book a call.
// Prices are provisioned in Stripe on first use from content/tiers.ts, keyed by lookup_key,
// so the same code works against a test key and a live key with no dashboard setup beyond the keys and the webhook.

export type PlanKey = "baseline-monthly" | "baseline-term" | "baseline-term-upfront";

export type Plan = {
  key: PlanKey;
  tier: "baseline";
  label: string;
  unitAmount: number; // cents
  interval: "month" | "year";
  termMonths: number; // 0 = month to month
  lookupKey: string;
  summary: string;
};

const baseline = tiers.find((t) => t.slug === "baseline")!;

export const plans: Record<PlanKey, Plan> = {
  "baseline-monthly": {
    key: "baseline-monthly",
    tier: "baseline",
    label: "Baseline, month to month",
    unitAmount: baseline.monthly * 100,
    interval: "month",
    termMonths: 0,
    lookupKey: "isovertic_baseline_monthly",
    summary: `$${baseline.monthly.toLocaleString("en-US")} a month. 90 day ramp, then cancel at any month end. Website rebuild available at $15,000 up front.`,
  },
  "baseline-term": {
    key: "baseline-term",
    tier: "baseline",
    label: "Baseline, 12 month term, billed monthly",
    unitAmount: baseline.term * 100,
    interval: "month",
    termMonths: TERM_MONTHS,
    lookupKey: "isovertic_baseline_term_monthly",
    summary: `$${baseline.term.toLocaleString("en-US")} a month for 12 months. Two months free against month to month, plus the $15,000 website rebuild and hosting included.`,
  },
  "baseline-term-upfront": {
    key: "baseline-term-upfront",
    tier: "baseline",
    label: "Baseline, 12 month term, paid up front",
    unitAmount: baseline.term * UPFRONT_MONTHS * 100,
    interval: "year",
    termMonths: TERM_MONTHS,
    lookupKey: "isovertic_baseline_term_upfront",
    summary: `$${(baseline.term * UPFRONT_MONTHS).toLocaleString("en-US")} once for the year, which is eleven months for twelve. Website rebuild and hosting included.`,
  },
};

export function isPlanKey(v: string): v is PlanKey {
  return v in plans;
}

let client: Stripe | null = null;
export function stripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key);
  return client;
}

const priceCache = new Map<string, string>();

async function ensureProduct(s: Stripe): Promise<string> {
  const found = await s.products.search({ query: "active:'true' AND metadata['isovertic_tier']:'baseline'", limit: 1 });
  if (found.data[0]) return found.data[0].id;
  const created = await s.products.create({
    name: "ISOVERTIC Baseline",
    description: "Content program: one newsletter, one blog post written to be cited by search and AI, eight social posts, and a one page report each month.",
    url: "https://isovertic.com/pricing",
    metadata: { isovertic_tier: "baseline" },
  });
  return created.id;
}

// Returns the Stripe price id for a plan, creating product and price on first use.
export async function ensurePrice(plan: Plan): Promise<string> {
  const cached = priceCache.get(plan.lookupKey);
  if (cached) return cached;
  const s = stripe();
  const existing = await s.prices.list({ lookup_keys: [plan.lookupKey], active: true, limit: 1 });
  let id = existing.data[0]?.id;
  if (!id) {
    const product = await ensureProduct(s);
    const created = await s.prices.create({
      product,
      currency: "usd",
      unit_amount: plan.unitAmount,
      recurring: { interval: plan.interval },
      lookup_key: plan.lookupKey,
      transfer_lookup_key: true,
      nickname: plan.label,
      metadata: { plan: plan.key, term_months: String(plan.termMonths) },
    });
    id = created.id;
  }
  priceCache.set(plan.lookupKey, id);
  return id;
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://isovertic.com";
}
