import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { PaperBriefGate } from "@/components/sections/PaperBriefGate";
import { Arrow } from "@/components/ui/Arrow";
import { ParticleField } from "@/components/ui/ParticleField";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { paperbrief as c } from "@/content/paperbrief";

export const metadata: Metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: c.path },
};

export default function PaperBriefPage() {
  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        backdrop={<ParticleField fade />}
        cta={
          <>
            <Link href="#access" className="btn btn-solid">{c.hero.button} <Arrow /></Link>
            <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">{c.hero.trust}</p>
          </>
        }
      />
      <Section label={c.how.label} deferred={false}>
        <RevealBlock>
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{c.how.h2}</h2>
        </RevealBlock>
        <RevealBlock>
          <ol className="flow mt-12 grid gap-y-10 md:grid-cols-3">
            {c.how.steps.map((s, i) => (
              <li key={s.title} className="flow-step" style={{ transitionDelay: `${i * 140}ms` }}>
                <span className="flow-figure">{s.figure}</span>
                <span className="flow-rule" aria-hidden="true" />
                <span className="mt-4 block font-display text-h3 font-medium">{s.title}</span>
                <span className="mt-2 block max-w-[32ch] leading-relaxed text-ink-soft">{s.text}</span>
              </li>
            ))}
          </ol>
        </RevealBlock>
      </Section>
      <Section label={c.gate.label} tone="bright" deferred={false}>
        <div id="access" className="grid scroll-mt-32 gap-14 lg:grid-cols-2">
          <PaperBriefGate labels={c.gate} />
          <div>
            <p className="eyebrow">{c.honest.label}</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-h3 font-medium">{c.honest.h2}</h2>
            <ul className="mt-6 space-y-5">
              {c.honest.points.map(([lead, text]) => (
                <li key={lead} className="border-t border-rule pt-4 leading-relaxed text-ink/90">
                  <strong className="font-medium text-ink">{lead}</strong> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section label={c.service.label} tone="navy" backdrop={<ParticleField tone="paper" />} deferred={false}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{c.service.h2}</h2>
        </RevealBlock>
        <p className="mt-6 max-w-[68ch] leading-relaxed">{c.service.text}</p>
        <div className="mt-8">
          <Link href={c.service.href} className="btn btn-solid">{c.service.button} <Arrow /></Link>
        </div>
      </Section>
    </>
  );
}
