import Link from "next/link";
import { compares } from "@/content/compare";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Compare ISOVERTIC to the Alternatives | ISOVERTIC" },
  description: "Honest comparisons: ISOVERTIC against Abstrakt Marketing Group, Belkins, and hiring in house, with the cases where the other choice is the right one.",
  alternates: { canonical: "/compare" },
};

export default function Compare() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Compare", path: "/compare" }])} />
      <PageHero
        eyebrow="Compare"
        h1="Us against the alternatives, including the ones we would pick."
        lead="Every comparison names the case where the other option wins. Read the one that matches the decision in front of you."
      />
      <Section label="Comparisons">
        <ul className="divide-y divide-rule border-y border-rule">
          {compares.map((c, i) => (
            <RevealBlock key={c.slug} as="li" delay={Math.min(i * 60, 300)}>
              <Link href={`/compare/${c.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{c.h1}</span>
                  <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{c.metaDescription}</span>
                </span>
                <span className="hidden sm:block"><Arrow /></span>
              </Link>
            </RevealBlock>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          <Link href="/field-notes/best-appointment-setting-companies" className="cta-link">The 7 best appointment setting companies <Arrow /></Link>
          <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
