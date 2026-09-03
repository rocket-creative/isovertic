import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Sales and Marketing Pricing | ISOVERTIC" },
  description: "Published pricing for full pipeline growth engagements. Real ranges, three tiers, a 90 day commitment in writing. No discovery call required to learn a price.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  { name: "Foundation", price: "From $8,500", per: "per month plus ad spend", for: "For companies that need the asset and the demand engine.", includes: ["Website build or rebuild", "SEO content system", "Google Ads management", "90 day ramp deliverables stated in the agreement"] },
  { name: "Underway", price: "From $14,500", per: "per month plus ad spend", for: "The full pipeline. The flagship engagement.", includes: ["Everything in Foundation", "Outbound appointment program", "A stated monthly meeting commitment in writing", "Objection intelligence fed back into site and ads"], featured: true },
  { name: "Full Sail", price: "From $22,000", per: "per month plus media", for: "For companies ready to own a market.", includes: ["Everything in Underway", "Streaming and broadcast TV buying", "Creative production in house", "Exposed versus control measurement plan"] },
];

const faqs = [
  { q: "Why publish pricing when nobody else does?", a: "Because our buyer is a founder who hates wasted discovery calls as much as we do, and because the page you are reading ranks for the question everyone types and nobody answers." },
  { q: "What is in ad spend versus fees?", a: "Fees pay the team. Spend goes to the platforms in your own accounts, which you own." },
  { q: "Are there setup costs?", a: "Builds inside the ramp are included in tier pricing. Unusual scope is quoted before signature, never after." },
  { q: "Can we start smaller?", a: "Single service engagements exist for the right fit, priced on the relevant service pages." },
];

export default function Pricing() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} />
      <PageHero
        eyebrow="Pricing"
        h1={<>The <span className="text-signal">price</span>, before the pitch.</>}
        lead="Nobody in this category publishes pricing, which tells you something about how they sell. Here is ours. Ranges flex with scope, but you will not leave this page wondering whether we fit your budget."
      />
      <Section label="Tiers">
        <div className="grid gap-px bg-rule lg:grid-cols-3">
          {tiers.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 100} className={`flex flex-col p-9 ${t.featured ? "bg-navy text-paper" : "bg-background"}`}>
              <p className={`eyebrow ${t.featured ? "!text-brass" : ""}`}>{t.name}</p>
              <p className="mt-5 font-display text-[clamp(30px,3.4vw,44px)] font-semibold leading-none">{t.price}</p>
              <p className={`mt-2 text-[13px] ${t.featured ? "text-paper/65" : "text-ink-soft"}`}>{t.per}</p>
              <p className={`mt-6 text-[15px] leading-relaxed ${t.featured ? "text-paper/85" : "text-ink/90"}`}>{t.for}</p>
              <ul className={`mt-6 space-y-3 border-t pt-6 text-[14px] leading-relaxed ${t.featured ? "border-paper/20 text-paper/80" : "border-rule text-ink-soft"}`}>
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href="/contact" className={`btn mt-9 ${t.featured ? "btn-ghost btn-ghost--paper" : "btn-ghost"}`}>Book a pipeline call</Link>
            </RevealBlock>
          ))}
        </div>
        <RevealBlock className="mt-14 max-w-[72ch]">
          <h2 className="font-display text-h3 font-medium">The commitment</h2>
          <p className="mt-4 leading-relaxed text-ink/90">Every tier carries a defined 90 day ramp with deliverables and, for Underway and above, a meeting volume number in writing. No long term contracts. We re earn the engagement quarterly.</p>
          <h2 className="mt-10 font-display text-h3 font-medium">Context for comparison</h2>
          <p className="mt-4 leading-relaxed text-ink/90">An in house equivalent runs $160K to $190K per year for one marketing lead plus one agency, before a single SDR is hired. Standalone appointment setting firms charge $5K to $15K monthly for outbound alone, into whatever website and brand you already have. We price the whole system below the sum of its parts because the parts share a team.</p>
        </RevealBlock>
      </Section>
      <Section label="Questions" className="border-t border-rule">
        <h2 className="font-display text-h2 font-medium">Money questions, answered on the page</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <CTABand />
    </>
  );
}
