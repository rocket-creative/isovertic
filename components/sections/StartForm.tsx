"use client";
import { useActionState, useState } from "react";
import { startCheckout, type StartState } from "@/app/start/actions";
import { startCopy } from "@/content/checkout";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
import { formCopy } from "@/content/form";

// Serializable plan data comes from the server page; no Stripe import on the client.
export type StartTier = { slug: string; name: string; for: string; spend: string };
export type StartPlan = { key: string; tier: string; billing: "monthly" | "term" | "quarterly" | "upfront"; label: string; summary: string; term: boolean; unitAmount: number; bankRecommended: boolean };

const field = "field";
const labelClass = "field-label";
const billingLabel: Record<StartPlan["billing"], string> = { monthly: "Month to month", term: "12 month term, billed monthly", quarterly: "12 month term, billed quarterly", upfront: "12 month term, paid up front" };
const quarterlyOnlyLabel = "1 year term, paid quarterly";

export function StartForm({ tiers, plans, initial }: { tiers: StartTier[]; plans: StartPlan[]; initial: string }) {
  const [state, action, pending] = useActionState<StartState, FormData>(startCheckout, null);
  const initialPlan = plans.find((p) => p.key === initial) ?? plans[0];
  const [tier, setTier] = useState(initialPlan.tier);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [billing, setBilling] = useState<StartPlan["billing"]>(initialPlan.billing);
  const current = plans.find((p) => p.tier === tier && p.billing === billing) ?? plans[0];
  const forTier = plans.filter((p) => p.tier === tier);

  return (
    <form action={action} className="max-w-[600px]">
      <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="plan" value={current.key} />

      <fieldset>
        <legend className={labelClass}>{startCopy.tierLabel}</legend>
        <div className="grid gap-px bg-rule sm:grid-cols-2">
          {tiers.map((t) => (
            <label key={t.slug} className={`flex min-h-[48px] cursor-pointer gap-3 p-4 ${tier === t.slug ? "bg-slate-soft" : "surface-card"}`}>
              <input type="radio" name="tier_pick" value={t.slug} checked={tier === t.slug} onChange={() => setTier(t.slug)} className="mt-0.5 h-5 w-5 shrink-0 accent-navy" />
              <span>
                <span className="block font-display text-[16px] font-medium">{t.name}</span>
                <span className="mt-1 block text-[13px] leading-relaxed text-ink-soft">{t.for}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className={labelClass}>{startCopy.billingLabel}</legend>
        <div className="divide-y divide-rule border-y border-rule">
          {forTier.map((p) => (
            <label key={p.key} className="flex min-h-[48px] cursor-pointer gap-4 py-4">
              <input type="radio" name="billing_pick" value={p.billing} checked={billing === p.billing} onChange={() => setBilling(p.billing)} className="mt-0.5 h-5 w-5 shrink-0 accent-navy" />
              <span>
                <span className="block font-display text-[16px] font-medium">{p.billing === "quarterly" && forTier.length === 2 ? quarterlyOnlyLabel : billingLabel[p.billing]}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{p.summary}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {current.bankRecommended && <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">{startCopy.bankNote}</p>}
      {tiers.find((t) => t.slug === tier)?.spend && <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{startCopy.mediaNote}</p>}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>{startCopy.emailLabel}</label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-required="true" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>{startCopy.companyLabel}</label>
          <input id="company" name="company" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={field} />
        </div>
      </div>

      {current.term && (
        <label className="mt-8 flex min-h-[48px] cursor-pointer gap-4 py-2 text-[14px] leading-relaxed text-ink/90">
          <input type="checkbox" name="agree" required className="mt-0.5 h-5 w-5 shrink-0 accent-navy" />
          <span>{startCopy.agreeLabel}</span>
        </label>
      )}
      {state?.error && <p role="alert" className="mt-6 border border-navy/30 bg-navy/5 p-4 text-[14px]">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn btn-solid mt-10 disabled:opacity-60">
        {pending ? "Opening Stripe" : startCopy.submit}
        <Arrow />
      </button>
      <p className="mt-6 text-[13px] text-ink-soft">
        {formCopy.emailFallback} <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-navy">{site.email}</a>
      </p>
    </form>
  );
}
