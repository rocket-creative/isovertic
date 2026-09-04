import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd, offersLd } from "@/lib/schema";
import { Arrow } from "@/components/ui/Arrow";
import { tiers, tierGrid, billing, multiBrand, addOns, protocolTiers, pricingContext, pricingFaqs, tierMath, usd } from "@/content/tiers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Sales and Marketing Pricing | ISOVERTIC" },
  description: "Published pricing for four tiers. Month to month from $3,000, or on a 12 month term from $2,500 with two months free and the $15,000 website rebuild included. Baseline signs up on the page, no call.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  const offers = tiers.flatMap((t) => [
    { name: `${t.name}, month to month`, price: t.monthly },
    { name: `${t.name}, 12 month term`, price: t.term },
  ]);
  return (
    <>
      <JsonLd data={[offersLd("ISOVERTIC growth system", offers, "/pricing"), faqLd(pricingFaqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} />
      <PageHero
        eyebrow="Pricing"
        h1={<>The <span className="text-signal">price</span>, before the pitch.</>}
        lead="Nobody in this category publishes pricing, which tells you something about how they sell. Here is ours. Four tiers, month to month or on a 12 month term that costs what ten months cost and includes the website rebuild. Baseline signs up on this page with a card and no call."
      />
      <Section label="Tiers">
        <PricingTiers />
      </Section>

      <Section label="Which steps" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Which steps each tier runs</h2>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-4 pr-4 font-display text-[15px] font-medium">Step</th>
                {tiers.map((c) => (
                  <th key={c.name} className="px-3 py-4 font-medium">
                    <span className="block">{c.name}</span>
                    <span className="mt-1 block text-[12px] font-normal text-ink-soft">{c.from ? "From " : ""}{usd(c.term)} on term, {usd(c.monthly)} monthly</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tierGrid.map((r) => (
                <tr key={r.step} className="border-b border-rule align-top">
                  <th className="py-4 pr-4 font-medium text-ink">{r.step}</th>
                  {r.cells.map((cell, i) => (
                    <td key={i} className="px-3 py-4 text-ink-soft">{cell || "·"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label={billing.eyebrow}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{billing.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{billing.intro}</p>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                {billing.columns.map((c) => (
                  <th key={c} className="py-4 pr-4 font-display text-[15px] font-medium">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {billing.rows.map((r, i) => (
                <tr key={i} className="border-b border-rule align-top">
                  {r.map((cell, j) => (
                    <td key={j} className="py-4 pr-4 text-ink-soft">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RevealBlock className="mt-14">
          <h2 className="font-display text-h3 font-medium">{billing.savingsH2}</h2>
        </RevealBlock>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                {billing.savingsCols.map((c) => (
                  <th key={c} className="py-4 pr-4 font-medium">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tiers.map((t) => {
                const m = tierMath(t);
                const f = t.from ? "From " : "";
                return (
                  <tr key={t.slug} className="border-b border-rule align-top">
                    <th className="py-4 pr-4 font-medium text-ink">{t.name}</th>
                    <td className="py-4 pr-4 text-ink-soft">{f}{usd(m.monthlyYear)}</td>
                    <td className="py-4 pr-4 text-ink-soft">{f}{usd(m.termYear)}</td>
                    <td className="py-4 pr-4 text-ink">{usd(m.cashSaved)}, two months</td>
                    <td className="py-4 pr-4 text-ink-soft">{usd(15000)}{t.slug === "critical-mass" ? " per brand" : ""}</td>
                    <td className="py-4 pr-4 font-display font-semibold text-brass">{usd(m.totalValue)}</td>
                    <td className="py-4 pr-4 text-ink-soft">{f}{usd(m.upfront)}, saves {usd(m.upfrontSaved)} more</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <RevealBlock className="mt-8 max-w-[72ch]">
          <p className="leading-relaxed text-ink/90">{billing.note}</p>
        </RevealBlock>
      </Section>

      <Section label={multiBrand.eyebrow} tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{multiBrand.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{multiBrand.body}</p>
        </RevealBlock>
      </Section>

      <Section label="Add ons">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Bolt on what your market needs.</h2>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-4 pr-4 font-display text-[15px] font-medium">Add on</th>
                <th className="px-3 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((a) => (
                <tr key={a.name} className="border-b border-rule align-top">
                  <td className="py-4 pr-4 text-ink">{a.name}</td>
                  <td className="px-3 py-4 text-ink-soft">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Protocol" tone="bright">
        <RevealBlock>
          <p className="eyebrow">For teams that run it themselves</p>
          <h2 className="mt-4 font-display text-h2 font-medium">Protocol. The system, taught at your office.</h2>
        </RevealBlock>
        <div className="mt-12 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2">
          {protocolTiers.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 100} className="flex h-full flex-col surface-card p-8">
              <p className="eyebrow">{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{t.price}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{t.per}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/90">{t.for}</p>
              <ul className="mt-6 grow space-y-3 border-t border-rule pt-6 text-[14px] leading-relaxed text-ink-soft">
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-ghost mt-9">Book a Protocol call</Link>
            </RevealBlock>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/protocol" className="cta-link">Full detail and the runbook list on the Protocol page <Arrow /></Link>
        </div>
      </Section>

      <Section label="Context">
        <RevealBlock className="max-w-[72ch]">
          <h2 className="font-display text-h3 font-medium">{pricingContext.commitmentH2}</h2>
          <p className="mt-4 leading-relaxed text-ink/90">{pricingContext.commitment}</p>
          <h2 className="mt-10 font-display text-h3 font-medium">{pricingContext.comparisonH2}</h2>
          <p className="mt-4 leading-relaxed text-ink/90">{pricingContext.comparison}</p>
        </RevealBlock>
      </Section>

      <Section label="Questions" tone="bright">
        <h2 className="font-display text-h2 font-medium">Money questions, answered on the page</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={pricingFaqs} /></div>
      </Section>
      <CTABand />
    </>
  );
}
