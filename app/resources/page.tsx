import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { IsoverticMove } from "@/components/sections/IsoverticMove";
import { LinkedCopy } from "@/components/ui/ClientQuote";
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

      <Section label="Start here" deferred={false}>
        <RevealBlock className="max-w-[68ch]">
          <p className="eyebrow">{r.startHere.eyebrow}</p>
          <h2 className="mt-4 font-display text-h2 font-medium">{r.startHere.title}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{r.startHere.body}</p>
          <div className="mt-8">
            <Link href={r.startHere.cta.href} className="btn btn-solid">
              {r.startHere.cta.label} <Arrow />
            </Link>
          </div>
        </RevealBlock>
      </Section>

      <Section label="Buying committee" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{r.committee.h2}</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[72ch] grid gap-px bg-rule">
          {r.committee.items.map((it, i) => (
            <RevealBlock key={it.title} as="li" delay={Math.min(i * 60, 300)} className="surface-card p-8">
              <p className="eyebrow">{it.role}</p>
              <h3 className="mt-3 font-display text-h3 font-medium">{it.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/90">{it.body}</p>
              <div className="mt-6">
                <Link href={it.cta.href} className="cta-link">
                  {it.cta.label} <Arrow />
                </Link>
              </div>
            </RevealBlock>
          ))}
        </ol>
      </Section>

      <Section label="The argument">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{r.fieldNote.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            <LinkedCopy text={r.fieldNote.body} />
          </p>
        </RevealBlock>
      </Section>

      <CTABand />
      <IsoverticMove body={r.move} />
    </>
  );
}
