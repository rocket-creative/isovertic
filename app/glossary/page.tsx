import Link from "next/link";
import { glossary } from "@/content/glossary";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Glossary: Marketing, Compliance, and Search Terms for Regulated and Technical Sellers | ISOVERTIC" },
  description: "Plain definitions of the terms that come up when a life science company, a startup, or a healthcare practice buys marketing: MLR, BAA, PHI, LegitScript, AEO, entity pages, cost per meeting, and more.",
  alternates: { canonical: "/glossary" },
};

export default function Glossary() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }])} />
      <PageHero eyebrow="Glossary" h1="The terms, defined once." lead="One definition per page, written so a founder, a scientist, and a practice administrator read the same sentence and mean the same thing." />
      <Section label="Terms">
        <RevealBlock>
          <ul className="divide-y divide-rule border-y border-rule">
            {sorted.map((t) => (
              <li key={t.slug}>
                <Link href={`/glossary/${t.slug}`} className="group grid gap-2 py-5 md:grid-cols-[280px_1fr] md:gap-8">
                  <span className="font-display text-[17px] font-medium leading-snug group-hover:text-signal">{t.term}</span>
                  <span className="max-w-[72ch] text-[14px] leading-relaxed text-ink-soft">{t.definition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </RevealBlock>
      </Section>
      <CTABand />
    </>
  );
}
