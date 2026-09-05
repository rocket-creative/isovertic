import Link from "next/link";
import { industries } from "@/content/industries";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Industries: Life Science, Healthcare, Startups | ISOVERTIC" },
  description: "How the six step system flexes for life science and CROs, healthcare practices under HIPAA, startups before the sales hire, professional services, home services, and hospitality.",
  alternates: { canonical: "/industries" },
};

export default function Industries() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries"
        h1="Marketing and outbound for the buyers who check everything."
        lead="Scientists, clinicians, founders, and owner operators. The system is the same six steps everywhere; what changes is the compliance gate, the buyer of record, and the page the search lands on. One page per industry below."
      />
      <Section label="Pick yours">
        <ul className="divide-y divide-rule border-y border-rule">
          {industries.map((s, i) => (
            <RevealBlock key={s.slug} as="li" delay={Math.min(i * 60, 300)}>
              <Link href={`/industries/${s.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{s.eyebrow}: {s.h1}</span>
                  <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{s.metaDescription}</span>
                </span>
                <span className="hidden sm:block"><Arrow /></span>
              </Link>
            </RevealBlock>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link href="/problems" className="cta-link">Start from your problem instead <Arrow /></Link>
          <Link href="/long-island" className="cta-link">Long Island businesses <Arrow /></Link>
        </div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
