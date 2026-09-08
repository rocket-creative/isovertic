import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { IsoverticMove } from "@/components/sections/IsoverticMove";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { REPORTING_METHOD } from "@/content/case-studies";
import { resultsPage as r, roster } from "@/content/results";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: r.title },
  description: r.description,
  alternates: { canonical: "/results" },
};

export default function Results() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Results", path: "/results" }])} />
      <PageHero eyebrow={r.eyebrow} h1={r.h1} lead={r.lead} />
      <Section label="Roster" deferred={false}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">The numbers, per client.</h2>
        </RevealBlock>
        <ol className="mt-12 space-y-px bg-rule">
          {roster.map((c, i) => (
            <RevealBlock
              key={c.id}
              as="li"
              className="surface-card grid gap-6 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_2fr] lg:px-10"
            >
              <div>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {c.sector}</p>
                <h3 id={c.id} className="mt-3 scroll-mt-28 font-display text-[clamp(20px,2.6vw,30px)] font-semibold leading-tight">{c.name}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">{c.window}</p>
                <Link href={c.sectorHref} className="cta-link mt-5">Industry page <Arrow /></Link>
              </div>
              <div className="max-w-[68ch]">
                <p className="text-[13px] uppercase tracking-[0.1em] text-ink-soft">{c.confirmedLabel}</p>
                <ul className="mt-4 space-y-3 leading-relaxed text-ink/90">
                  {c.confirmed.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {c.whatWeDid && (
                  <>
                    <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">What we did</p>
                    <p className="mt-3 leading-relaxed text-ink/90">{c.whatWeDid}</p>
                  </>
                )}
                {c.numbersStatus && (
                  <p className="mt-6 border-t border-rule pt-5 text-[14px] leading-relaxed text-ink-soft">{c.numbersStatus}</p>
                )}
                <p className="mt-4 text-[14px] italic text-ink-soft">{c.kicker}</p>
              </div>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <div id="method" className="scroll-mt-28">
        <Section label="Method" tone="bright">
          <RevealBlock>
            <h2 className="font-display text-h2 font-medium">{REPORTING_METHOD.heading}</h2>
            <div className="mt-8 max-w-[68ch]">
              {REPORTING_METHOD.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-[14px] leading-relaxed text-ink-soft first:mt-0">{p}</p>
              ))}
            </div>
          </RevealBlock>
        </Section>
      </div>
      <CTABand />
      <IsoverticMove />
    </>
  );
}
