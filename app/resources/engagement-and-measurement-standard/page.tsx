import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { DownloadCard } from "@/components/standard/DownloadCard";
import { ChannelTimingTable, SalesCycleTable, TwoClockScorecard, EngagementStages, ChurnCallout } from "@/components/standard/Tables";
import { breadcrumbLd, faqLd, resourceLd } from "@/lib/schema";
import { site } from "@/lib/site";
import {
  standardMeta as m,
  headings as h,
  rule,
  anchors,
  mathParagraph,
  cacPayback,
  inHouse,
  shorterTerm,
  caveats,
  standardFaqs,
  standardRelated,
} from "@/content/standard";

export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  alternates: { canonical: m.path },
  openGraph: { type: "article", title: m.title, description: m.description, images: ["/og.png"] },
};

export default function EngagementStandard() {
  return (
    <>
      <JsonLd
        data={[
          resourceLd({ headline: m.h1, description: m.description, path: m.path, datePublished: m.datePublished, dateModified: m.dateModified }),
          faqLd(standardFaqs),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }, { name: m.eyebrow, path: m.path }]),
        ]}
      />
      <PageHero eyebrow={m.eyebrow} h1={m.h1} lead={m.lead} />

      {/* 1. The rule */}
      <Section label="The rule" deferred={false}>
        <div className="grid gap-px bg-rule md:grid-cols-2">
          {[rule.minimums, rule.method].map((r) => (
            <RevealBlock key={r.label} className="surface-card p-8 md:p-10">
              <p className="eyebrow">{r.label}</p>
              <p className="mt-4 font-display text-[clamp(18px,2vw,24px)] font-medium leading-snug">{r.body}</p>
            </RevealBlock>
          ))}
        </div>
        <RevealBlock className="mt-8">
          <p className="max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">{rule.monthToMonth}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <TrackedLink href="/audit" section="rule" label={h.ctas.primary} className="btn btn-solid">
              {h.ctas.primary} <Arrow />
            </TrackedLink>
            <TrackedLink href="/contact" section="rule" label={h.ctas.secondary} className="cta-link">
              {h.ctas.secondary} <Arrow />
            </TrackedLink>
          </div>
        </RevealBlock>
      </Section>

      {/* 2. Time to results by channel */}
      <Section label="By channel" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.channel.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{h.channel.lead}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <ChannelTimingTable />
        </RevealBlock>
        <div className="mt-12 grid gap-px bg-rule md:grid-cols-2">
          {anchors.map((a, i) => (
            <RevealBlock key={a.heading} delay={i * 60} className="surface-card p-8">
              <h3 className="font-display text-h3 font-semibold">{a.heading}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{a.body}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
                {a.source.map((s) => (
                  <a key={s.href} href={s.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{s.label}</a>
                ))}
              </p>
            </RevealBlock>
          ))}
        </div>
      </Section>

      {/* 3. Why quarterly fails */}
      <Section label="Sales cycles">
        <RevealBlock>
          <h2 className="max-w-[24ch] font-display text-h2 font-medium">{h.cycles.h2}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <SalesCycleTable />
        </RevealBlock>
        <RevealBlock className="mt-10">
          <p className="max-w-[62ch] font-display text-[clamp(18px,2vw,24px)] font-medium leading-snug">{mathParagraph}</p>
        </RevealBlock>
        <RevealBlock className="mt-10 border-l-2 border-signal pl-6">
          <p className="eyebrow">CAC payback</p>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-ink/90">{cacPayback.body}</p>
          <p className="mt-3 text-[13px] text-ink-soft">
            <a href={cacPayback.source.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{cacPayback.source.label}</a>
          </p>
        </RevealBlock>
      </Section>

      {/* 4. Two clock scorecard */}
      <Section label="The scorecard" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.scorecard.h2}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <TwoClockScorecard />
        </RevealBlock>
      </Section>

      {/* 5. In house comparison */}
      <Section label="For the CFO">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.inHouse.h2}</h2>
        </RevealBlock>
        <div className="mt-10 grid gap-px bg-rule md:grid-cols-2">
          <RevealBlock className="surface-card p-8">
            <h3 className="font-display text-h3 font-semibold">{inHouse.left.heading}</h3>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/90">
              {inHouse.left.items.map((it) => (
                <li key={it} className="flex gap-3"><span aria-hidden="true" className="text-signal">·</span>{it}</li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-ink-soft">
              <a href={inHouse.left.source.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{inHouse.left.source.label}</a>
            </p>
          </RevealBlock>
          <RevealBlock delay={80} className="surface-card p-8">
            <h3 className="font-display text-h3 font-semibold">{inHouse.right.heading}</h3>
            <p className="mt-6 leading-relaxed text-ink/90">{inHouse.right.body}</p>
            <Link href="/resources/agency-vs-inhouse" className="cta-link mt-8">{h.inHouse.cta} <Arrow /></Link>
          </RevealBlock>
        </div>
      </Section>

      {/* 6. Engagement structure */}
      <Section label="Structure" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.structure.h2}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <EngagementStages />
        </RevealBlock>
      </Section>

      {/* 7. Shorter term */}
      <Section label="Shorter terms">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.shorter.h2}</h2>
        </RevealBlock>
        <div className="mt-10 grid gap-px bg-rule md:grid-cols-2">
          {[shorterTerm.yes, shorterTerm.no].map((s, i) => (
            <RevealBlock key={s.label} delay={i * 80} className="surface-card p-8">
              <p className={`eyebrow ${i === 0 ? "!text-signal" : ""}`}>{s.label}</p>
              <p className="mt-4 leading-relaxed text-ink/90">{s.body}</p>
            </RevealBlock>
          ))}
        </div>
      </Section>

      {/* 8. Churn */}
      <Section label="The churn data" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.churn.h2}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <ChurnCallout />
        </RevealBlock>
      </Section>

      {/* 9. Caveats */}
      <Section label="Caveats">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h3 font-semibold">{h.caveats.h2}</h2>
          <ul className="mt-6 space-y-3 text-[14px] leading-relaxed text-ink-soft">
            {caveats.map((c) => (
              <li key={c} className="flex gap-3"><span aria-hidden="true">·</span>{c}</li>
            ))}
          </ul>
        </RevealBlock>
      </Section>

      {/* 10. Download and FAQ */}
      <Section label="Take it with you" tone="bright">
        <RevealBlock>
          <DownloadCard
            title={h.download.title}
            body={h.download.body}
            href={`${m.path}/one-page`}
          />
        </RevealBlock>
        <RevealBlock className="mt-20">
          <h2 className="font-display text-h2 font-medium">{h.faq.h2}</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={standardFaqs} />
          </div>
        </RevealBlock>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {standardRelated.map((r) => (
            <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>
          ))}
        </div>
        <p className="mt-10 text-[13px] text-ink-soft">Written by {site.founder}. Published {m.datePublished}.</p>
      </Section>

      <FounderStrip />
      <CTABand />
    </>
  );
}
