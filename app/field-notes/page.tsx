import Link from "next/link";
import { getArticles } from "@/lib/articles";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Sales and Marketing Field Notes | ISOVERTIC" },
  description: "Operator notes on outsourced sales and marketing, appointment setting, pipeline math, and TV for growing businesses. Written by the founder.",
  alternates: { canonical: "/field-notes" },
};

export default function FieldNotes() {
  const articles = getArticles();
  return (
    <>
      <PageHero eyebrow="Field notes" h1="Notes from the operating side." lead="No thought leadership. Numbers, mechanisms, and the math we run for clients, published. Every piece ends the same way, because the drumbeat never stops." />
      <Section label="Index">
        <ol className="divide-y divide-rule border-y border-rule">
          {articles.map((a, i) => (
            <RevealBlock key={a.slug} as="li" delay={Math.min(i * 60, 300)}>
              <Link href={`/field-notes/${a.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{a.title}</span>
                  <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{a.description}</span>
                  <span className="mt-2 block text-[12px] uppercase tracking-[0.1em] text-ink-soft">{a.datePublished}</span>
                </span>
                <span className="hidden sm:block"><Arrow /></span>
              </Link>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <CTABand />
    </>
  );
}
