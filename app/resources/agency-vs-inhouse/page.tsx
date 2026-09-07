import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { CostCalculator } from "@/components/resources/CostCalculator";
import { DownloadCard } from "@/components/standard/DownloadCard";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { breadcrumbLd, faqLd, resourceLd } from "@/lib/schema";
import { cfoGuide as g } from "@/content/decision-guides";

export const metadata: Metadata = {
  title: { absolute: g.title },
  description: g.description,
  alternates: { canonical: g.path },
  openGraph: { type: "article", title: g.title, description: g.description, images: ["/og.png"] },
};

export default function AgencyVsInHouse() {
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

      <Section label="Options" deferred={false}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{g.options.h2}</h2>
        </RevealBlock>
        <div className="mt-10 grid gap-px bg-rule md:grid-cols-3">
          {g.options.items.map((it, i) => (
            <RevealBlock key={it.name} delay={i * 60} className="surface-card p-8">
              <h3 className="font-display text-h3 font-semibold">{it.name}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{it.body}</p>
            </RevealBlock>
          ))}
        </div>
      </Section>

      <Section label="The model" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{g.calculator.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{g.calculator.intro}</p>
        </RevealBlock>
        <div className="mt-10">
          <CostCalculator />
        </div>
      </Section>

      <Section label="Who wins">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{g.whoWins.h2}</h2>
        </RevealBlock>
        <div className="mt-10 grid gap-px bg-rule md:grid-cols-3">
          {g.whoWins.items.map((it, i) => (
            <RevealBlock key={it.name} delay={i * 60} className="surface-card p-8">
              <p className="eyebrow">{it.name}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{it.body}</p>
            </RevealBlock>
          ))}
        </div>
      </Section>

      <Section label="Checklist" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{g.checklist.h2}</h2>
          <ol className="mt-8 space-y-4">
            {g.checklist.items.map((it, i) => (
              <li key={it} className="grid gap-2 sm:grid-cols-[48px_1fr]">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed text-ink/90">{it}</span>
              </li>
            ))}
          </ol>
        </RevealBlock>
        <RevealBlock className="mt-14">
          <DownloadCard title="The agency versus in house checklist" body="The six questions above on one printable page, with room for your numbers. Email required." href="/resources/agency-vs-inhouse/one-page" />
        </RevealBlock>
      </Section>

      <Section label="Questions">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What CFOs ask first</h2>
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
