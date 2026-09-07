import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { breadcrumbLd } from "@/lib/schema";
import { resourcesIndex as r } from "@/content/decision-guides";

export const metadata: Metadata = {
  title: { absolute: r.title },
  description: r.description,
  alternates: { canonical: r.path },
};

export default function Resources() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Resources", path: r.path }])} />
      <PageHero eyebrow={r.eyebrow} h1={r.h1} lead={r.lead} />
      <Section label="Index" deferred={false}>
        <ol className="divide-y divide-rule border-y border-rule">
          {r.items.map((it, i) => (
            <RevealBlock key={it.href} as="li" delay={Math.min(i * 60, 300)}>
              <Link href={it.href} className="group grid gap-2 py-7 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="eyebrow">{it.eyebrow}</span>
                <span>
                  <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{it.title}</span>
                  <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{it.body}</span>
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
