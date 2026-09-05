import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { StartForm, type StartPlan, type StartTier } from "@/components/sections/StartForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { planList, isPlanKey, BANK_RECOMMENDED_FROM } from "@/lib/stripe";
import { tiers } from "@/content/tiers";
import { startCopy } from "@/content/checkout";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: startCopy.title },
  description: startCopy.metaDescription,
  alternates: { canonical: "/start" },
};

export default async function Start({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const initial = plan && isPlanKey(plan) ? plan : "baseline-term";
  const tierData: StartTier[] = tiers.map((t) => ({ slug: t.slug, name: t.name, for: t.for, spend: t.spend }));
  const planData: StartPlan[] = planList.map((p) => ({
    key: p.key,
    tier: p.tier,
    billing: p.billing,
    label: p.label,
    summary: p.summary,
    term: p.termMonths > 0,
    unitAmount: p.unitAmount,
    bankRecommended: p.unitAmount >= BANK_RECOMMENDED_FROM,
  }));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }, { name: "Start", path: "/start" }])} />
      <PageHero eyebrow={startCopy.eyebrow} h1={startCopy.h1} lead={startCopy.lead} />
      <Section label="Checkout" deferred={false}>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <RevealBlock>
            <StartForm tiers={tierData} plans={planData} initial={initial} />
          </RevealBlock>
          <RevealBlock delay={140} className="max-w-[52ch]">
            <h2 className="font-display text-h3 font-medium">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {startCopy.whatHappens.map((s, i) => (
                <li key={i} className="flex gap-4 leading-relaxed text-ink/90">
                  <span className="eyebrow !text-ink-soft">0{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-8 text-[14px] text-ink-soft">{startCopy.stripeNote}</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/pricing" className="cta-link">Back to pricing <Arrow /></Link>
              <Link href="/contact" className="cta-link">{startCopy.talkFirst} <Arrow /></Link>
            </div>
            <div className="iso-mark mt-10 max-w-[280px]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
