import Stripe from "stripe";
import { tiers, tierMath, TERM_MONTHS, UPFRONT_MONTHS, WEBSITE_BUILD, usd, type Tier } from "@/content/tiers";

// Self serve checkout for every tier. Prices are provisioned in Stripe on first use from content/tiers.ts,
// keyed by lookup_key, so the same code works against a test key and a live key with no dashboard setup
// beyond the keys, the webhook, and ACH Direct Debit switched on under Settings, Payment methods.

export type Billing = "monthly" | "term" | "quarterly" | "upfront";
export type TierSlug = Tier["slug"];
export type PlanKey = `${TierSlug}-${Billing}`;

export type Plan = {
  key: PlanKey;
  tier: TierSlug;
  tierName: string;
  billing: Billing;
  label: string;
  unitAmount: number; // cents
  interval: "month" | "year";
  intervalCount: number; // 3 for quarterly
  termMonths: number; // 0 = month to month
  lookupKey: string;
  summary: string;
  websiteIncluded: boolean;
  from: boolean; // "from" pricing: media or ad spend billed on top
};

export const billings: Billing[] = ["monthly", "term", "quarterly", "upfront"];

function build(t: Tier, b: Billing): Plan {
  const m = tierMath(t);
  const from = Boolean(t.from);
  const base = {
    tier: t.slug,
    tierName: t.name,
    billing: b,
    websiteIncluded: b !== "monthly",
    from,
  };
  if (b === "monthly") {
    return {
      ...base,
      key: `${t.slug}-monthly`,
      label: `${t.name}, month to month`,
      unitAmount: t.monthly * 100,
      interval: "month",
      intervalCount: 1,
      termMonths: 0,
      lookupKey: `isovertic_${t.slug}_monthly`,
      summary: `${usd(t.monthly)} a month${t.spend ? `, ${t.spend}` : ""}. 90 day ramp, then cancel at any month end. Website rebuild available at ${usd(WEBSITE_BUILD)} up front.`,
    };
  }
  if (b === "term") {
    return {
      ...base,
      key: `${t.slug}-term`,
      label: `${t.name}, 12 month term, billed monthly`,
      unitAmount: t.term * 100,
      interval: "month",
      intervalCount: 1,
      termMonths: TERM_MONTHS,
      lookupKey: `isovertic_${t.slug}_term_monthly`,
      summary: `${usd(t.term)} a month for 12 months${t.spend ? `, ${t.spend}` : ""}. Two months free against month to month, ${usd(m.cashSaved)}, plus the ${usd(WEBSITE_BUILD)} website rebuild and hosting included.`,
    };
  }
  if (b === "quarterly") {
    return {
      ...base,
      key: `${t.slug}-quarterly`,
      label: `${t.name}, 12 month term, billed quarterly`,
      unitAmount: m.quarterly * 100,
      interval: "month",
      intervalCount: 3,
      termMonths: TERM_MONTHS,
      lookupKey: `isovertic_${t.slug}_term_quarterly`,
      summary: t.quarterlyOnly
        ? `${usd(m.quarterly)} a quarter, four payments on a 1 year term${t.spend ? `, ${t.spend} billed separately` : ""}. Two months free against month to month, ${usd(m.cashSaved)}, plus the ${usd(WEBSITE_BUILD)} website rebuild and hosting included.`
        : `${usd(m.quarterly)} a quarter, four payments${t.spend ? `, ${t.spend} billed separately` : ""}. 4 percent off the term, ${usd(m.quarterlySaved)} more than billed monthly. Website rebuild and hosting included.`,
    };
  }
  return {
    ...base,
    key: `${t.slug}-upfront`,
    label: `${t.name}, 12 month term, paid up front`,
    unitAmount: m.upfront * 100,
    interval: "year",
    intervalCount: 1,
    termMonths: TERM_MONTHS,
    lookupKey: `isovertic_${t.slug}_term_upfront`,
    summary: `${usd(m.upfront)} once for the year, eleven months for twelve${t.spend ? `, ${t.spend} billed separately` : ""}. Saves ${usd(m.upfrontSaved)} more than the monthly term. Website rebuild and hosting included.`,
  };
}

// Kinetic and Critical Mass: month to month, or a 1 year term paid quarterly. Baseline and Catalyst: all four billings.
export function billingsFor(t: Tier): Billing[] {
  return t.quarterlyOnly ? ["monthly", "quarterly"] : billings;
}

export const plans: Partial<Record<PlanKey, Plan>> = Object.fromEntries(
  tiers.flatMap((t) => billingsFor(t).map((b) => [`${t.slug}-${b}`, build(t, b)]))
);

export const planList: Plan[] = Object.values(plans) as Plan[];

export function isPlanKey(v: string): v is PlanKey {
  return v in plans;
}

export function getPlan(key: PlanKey): Plan {
  const p = plans[key];
  if (!p) throw new Error(`unknown plan ${key}`);
  return p;
}

// Card and ACH Direct Debit on every plan. Above this amount the checkout page recommends the bank.
export const BANK_RECOMMENDED_FROM = 10000 * 100;

export function paymentMethodTypes(): Stripe.Checkout.SessionCreateParams.PaymentMethodType[] {
  return ["card", "us_bank_account"];
}

let client: Stripe | null = null;
export function stripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key);
  return client;
}

const priceCache = new Map<string, string>();
const productCache = new Map<string, string>();

async function ensureProduct(s: Stripe, tier: Tier): Promise<string> {
  const cached = productCache.get(tier.slug);
  if (cached) return cached;
  const found = await s.products.search({ query: `active:'true' AND metadata['isovertic_tier']:'${tier.slug}'`, limit: 1 });
  let id = found.data[0]?.id;
  if (!id) {
    const created = await s.products.create({
      name: `ISOVERTIC ${tier.name}`,
      description: tier.for,
      url: "https://isovertic.com/pricing",
      metadata: { isovertic_tier: tier.slug },
    });
    id = created.id;
  }
  productCache.set(tier.slug, id);
  return id;
}

// Returns the Stripe price id for a plan, creating product and price on first use.
export async function ensurePrice(plan: Plan): Promise<string> {
  const cached = priceCache.get(plan.lookupKey);
  if (cached) return cached;
  const s = stripe();
  const existing = await s.prices.list({ lookup_keys: [plan.lookupKey], active: true, limit: 1 });
  let id = existing.data[0]?.id;
  if (!id) {
    const tier = tiers.find((t) => t.slug === plan.tier)!;
    const product = await ensureProduct(s, tier);
    const created = await s.prices.create({
      product,
      currency: "usd",
      unit_amount: plan.unitAmount,
      recurring: { interval: plan.interval, interval_count: plan.intervalCount },
      lookup_key: plan.lookupKey,
      transfer_lookup_key: true,
      nickname: plan.label,
      metadata: { plan: plan.key, tier: plan.tier, billing: plan.billing, term_months: String(plan.termMonths) },
    });
    id = created.id;
  }
  priceCache.set(plan.lookupKey, id);
  return id;
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://isovertic.com";
}
