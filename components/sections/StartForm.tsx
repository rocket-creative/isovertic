"use client";
import { useActionState, useState } from "react";
import { startCheckout, type StartState } from "@/app/start/actions";
import { startCopy } from "@/content/checkout";
import { Arrow } from "@/components/ui/Arrow";
import type { PlanKey } from "@/lib/stripe";

const field = "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-[16px] focus:border-ink focus:outline-none";
const labelClass = "mb-1 block text-[11px] uppercase tracking-[0.1em] text-ink-soft";

export function StartForm({ options, initial }: { options: { key: PlanKey; label: string; summary: string; term: boolean }[]; initial: PlanKey }) {
  const [state, action, pending] = useActionState<StartState, FormData>(startCheckout, null);
  const [plan, setPlan] = useState<PlanKey>(initial);
  const current = options.find((o) => o.key === plan) ?? options[0];
  return (
    <form action={action} className="max-w-[560px]">
      <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <fieldset>
        <legend className={labelClass}>{startCopy.planLabel}</legend>
        <div className="divide-y divide-rule border-y border-rule">
          {options.map((o) => (
            <label key={o.key} className="flex cursor-pointer gap-4 py-4">
              <input type="radio" name="plan" value={o.key} checked={plan === o.key} onChange={() => setPlan(o.key)} className="mt-1 h-4 w-4 shrink-0 accent-navy" />
              <span>
                <span className="block font-display text-[16px] font-medium">{o.label}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{o.summary}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-8">
        <label htmlFor="email" className={labelClass}>{startCopy.emailLabel}</label>
        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required aria-required="true" className={field} style={{ fontSize: 16 }} />
      </div>
      {current.term && (
        <label className="mt-8 flex gap-4 text-[14px] leading-relaxed text-ink/90">
          <input type="checkbox" name="agree" required className="mt-1 h-4 w-4 shrink-0 accent-navy" />
          <span>{startCopy.agreeLabel}</span>
        </label>
      )}
      {state?.error && (
        <p role="alert" className="mt-6 border border-navy/30 bg-navy/5 p-4 text-[14px]">{state.error}</p>
      )}
      <button type="submit" disabled={pending} className="btn btn-solid mt-10 disabled:opacity-60">
        {pending ? "Opening Stripe" : startCopy.submit}
        <Arrow />
      </button>
    </form>
  );
}
