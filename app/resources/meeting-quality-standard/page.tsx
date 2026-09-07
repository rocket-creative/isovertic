import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { TwoClockScorecard } from "@/components/standard/Tables";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { breadcrumbLd, faqLd, resourceLd } from "@/lib/schema";
import { croGuide as g } from "@/content/decision-guides";

export const metadata: Metadata = {
  title: { absolute: g.title },
  description: g.description,
  alternates: { canonical: g.path },
  openGraph: { type: "article", title: g.title, description: g.description, images: ["/og.png"] },
};

export default function MeetingQualityStandard() {
  return (
    <>
      <JsonLd
        data={[
          resourceLd({ headline: g.h1, description: g.description, path: g.path, datePublished: g.datePublished, dateModified: g.dateModified }),
          faqLd(g.faqs),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: g.eyebrow, path: g.path }]),
        ]}
      />
      <PageHero eyebrow={g.eyebrow} h1={g.h1} lead={g.lead} />

      <Section label="Definition" deferred={false}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{g.definition.h2}</h2>
          <p className="mt-8 max-w-[62ch] border-l-2 border-signal pl-6 font-display text-[clamp(18px,2vw,24px)] font-medium leading-snug">{g.definition.statement}</p>
        </RevealBlock>
        <div className="mt-10 grid gap-px bg-rule sm:grid-cols-2 xl:grid-cols-4">
          {g.definition.criteria.map((c, i) => (
            <RevealBlock key={c.name} delay={i * 60} className="surface-card p-8">
              <p className="eyebrow">{c.name}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{c.body}</p>
            </RevealBlock>
          ))}
        </div>
      </Section>

      <Section label="Verification" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{g.verification.h2}</h2>
        </RevealBlock>
        <ol className="mt-10 grid gap-px bg-rule md:grid-cols-2 xl:grid-cols-4">
          {g.verification.steps.map((s, i) => (
            <RevealBlock key={s.n} as="li" delay={i * 60} className="surface-card p-8">
              <p className="eyebrow">{s.n}</p>
              <h3 className="mt-3 font-display text-h3 font-semibold">{s.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{s.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>

      <Section label="When it fails">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{g.failure.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{g.failure.body}</p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">{g.failure.note}</p>
        </RevealBlock>
      </Section>

      <Section label="Conversion" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{g.conversion.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{g.conversion.body}</p>
        </RevealBlock>
        <RevealBlock className="mt-12">
          <TwoClockScorecard />
        </RevealBlock>
      </Section>

      <Section label="Questions">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What heads of sales ask first</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={g.faqs} />
          </div>
        </RevealBlock>
        <div className="mt-14 flex flex-wrap items-center gap-6">
          <TrackedLink href="/audit" section="close" label="Take the Pipeline Ownership Audit" className="btn btn-solid">Take the Pipeline Ownership Audit <Arrow /></TrackedLink>
          <TrackedLink href="/contact" section="close" label="Book a pipeline call" className="cta-link">Book a pipeline call <Arrow /></TrackedLink>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {g.related.map((r) => <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>)}
        </div>
      </Section>

      <FounderStrip />
      <CTABand />
    </>
  );
}
