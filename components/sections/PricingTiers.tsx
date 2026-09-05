"use client";
import { useState } from "react";
import Link from "next/link";
import { tiers, billing, tierMath, usd } from "@/content/tiers";
import { RevealBlock } from "@/components/ui/RevealBlock";

// Both prices are in the server HTML for every tier. The toggle changes which one is large; it never hides a number.

export function PricingTiers() {
  const [term, setTerm] = useState(true);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <div role="group" aria-label="Billing" className="inline-flex border border-rule">
          <button
            type="button"
            onClick={() => setTerm(false)}
            aria-pressed={!term}
            className={`min-h-[44px] px-5 text-[13px] uppercase tracking-[0.1em] ${!term ? "bg-navy text-paper" : "text-ink"}`}
          >
            {billing.toggle.monthly}
          </button>
          <button
            type="button"
            onClick={() => setTerm(true)}
            aria-pressed={term}
            className={`min-h-[44px] px-5 text-[13px] uppercase tracking-[0.1em] ${term ? "bg-navy text-paper" : "text-ink"}`}
          >
            {billing.toggle.term}
          </button>
        </div>
        <p className="max-w-[52ch] text-[14px] leading-relaxed text-ink-soft">{term ? billing.termNote : billing.monthlyNote}</p>
      </div>

      <div className="mt-10 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2 xl:grid-cols-4">
        {tiers.map((t, i) => {
          const m = tierMath(t);
          const big = term ? t.term : t.monthly;
          const small = term ? t.monthly : t.term;
          const termBilling = t.quarterlyOnly ? "quarterly" : "term";
          const startHref = `/start?plan=${t.slug}-${term ? termBilling : "monthly"}`;
          return (
            <RevealBlock key={t.name} delay={i * 80} className={`flex h-full flex-col p-8 ${t.featured ? "bg-slate text-ink" : "surface-card"}`}>
              <p className={`eyebrow ${t.featured ? "!text-signal" : ""}`}>{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">
                {t.from ? "From " : ""}
                {usd(big)}
              </p>
              <p className="mt-2 text-[13px] text-ink-soft">
                per month{t.spend ? `, ${t.spend}` : ""}
                {term ? (t.quarterlyOnly ? ", 1 year term paid quarterly" : ", 12 month term") : ", month to month"}
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">
                {term ? `or ${t.from ? "from " : ""}${usd(small)} month to month` : `or ${t.from ? "from " : ""}${usd(small)} on a 12 month term with the website included`}
              </p>
              {term && (
                <p className="mt-3 text-[13px] leading-relaxed text-brass">
                  Two months free, {usd(m.cashSaved)}, plus the {usd(15000)} website. {usd(m.totalValue)} of value on the year.
                </p>
              )}
              {term && (
                <p className="mt-2 text-[12px] leading-relaxed text-ink-soft">
                  {t.quarterlyOnly
                    ? `Four payments of ${t.from ? "from " : ""}${usd(m.quarterly)}, one each quarter.`
                    : `Billed monthly, or ${usd(m.quarterly)} a quarter (4 percent off), or ${usd(m.upfront)} up front (eleven for twelve).`}
                </p>
              )}
              <p className="mt-6 text-[15px] leading-relaxed text-ink/90">{t.for}</p>
              <ul className={`mt-6 grow space-y-3 border-t pt-6 text-[14px] leading-relaxed text-ink-soft ${t.featured ? "border-ink/15" : "border-rule"}`}>
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href={startHref} className={`btn mt-9 ${t.featured ? "btn-solid" : "btn-ghost"}`}>{t.cta}</Link>
              <p className="mt-3 text-[12px] leading-relaxed text-ink-soft">
                Card or bank debit, no call required. <Link href="/contact" className="underline underline-offset-4 hover:text-navy">Talk first</Link> if you prefer.
              </p>
            </RevealBlock>
          );
        })}
      </div>
    </div>
  );
}
