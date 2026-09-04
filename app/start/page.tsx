import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { StartForm } from "@/components/sections/StartForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { plans, isPlanKey, type PlanKey } from "@/lib/stripe";
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
  const initial: PlanKey = plan && isPlanKey(plan) ? plan : "baseline-term";
  const options = (Object.keys(plans) as PlanKey[]).map((k) => ({ key: k, label: plans[k].label, summary: plans[k].summary, term: plans[k].termMonths > 0 }));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }, { name: "Start Baseline", path: "/start" }])} />
      <PageHero eyebrow={startCopy.eyebrow} h1={startCopy.h1} lead={startCopy.lead} />
      <Section label="Checkout" deferred={false}>
        <div className="grid gap-14 lg:grid-cols-2">
          <RevealBlock>
            <StartForm options={options} initial={initial} />
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
              <Link href="/contact" className="cta-link">Would rather talk first <Arrow /></Link>
            </div>
            <div className="iso-mark mt-10 max-w-[280px]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
