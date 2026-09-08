import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { AiHuman } from "@/components/sections/AiHuman";
import { WhyBuyers } from "@/components/sections/WhyBuyers";
import { TeamBios } from "@/components/sections/TeamBios";
import { CTABand } from "@/components/sections/CTABand";
import { IsoverticMove } from "@/components/sections/IsoverticMove";
import { LinkedCopy } from "@/components/ui/ClientQuote";
import { method as c } from "@/content/method";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "How the ISOVERTIC System Works | Six Steps, One Team" },
  description: "The six steps of the ISOVERTIC pipeline, Build, Rank, Run, Buy, Book, Educate, and the method under step one that gets the site found by the specialist.",
  alternates: { canonical: "/system" },
};

export default function System() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "System", path: "/system" }]),
          faqLd([...c.faqs]),
        ]}
      />
      <PageHero
        eyebrow={c.eyebrow}
        h1={c.h1}
        lead={c.lead}
        cta={
          <Link href={c.heroCta.href} className="btn btn-solid">
            {c.heroCta.label} <Arrow />
          </Link>
        }
      />

      <Section label="The six steps" deferred={false}>
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">The six steps.</h2>
        </RevealBlock>
        <div className="mt-14">
          <PipelineDiagram />
        </div>
        <RevealBlock className="mt-8">
          <p className="max-w-[62ch] font-display text-[18px] font-medium leading-snug text-ink">{c.closeNote}</p>
        </RevealBlock>
      </Section>

      <Section label="The method" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.moat.h2}</h2>
          {c.moat.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-relaxed text-ink/90`}>{p}</p>
          ))}
        </RevealBlock>
      </Section>

      <Section label="The seven layers">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{c.layers.h2}</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[72ch] grid gap-px bg-rule">
          {c.layers.items.map((layer, i) => (
            <RevealBlock key={layer.n} as="li" delay={i * 60} className="surface-card p-8">
              <p className="eyebrow">{layer.n}</p>
              <h3 className="mt-3 font-display text-h3 font-medium">{layer.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/90">{layer.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>

      <Section label="The six in practice" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{c.stepsDetail.h2}</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[72ch] grid gap-px bg-rule">
          {c.stepsDetail.items.map((step, i) => (
            <RevealBlock key={step.n} as="li" delay={i * 60} className="surface-card p-8">
              <p className="eyebrow">{step.n}</p>
              <h3 className="mt-3 font-display text-h3 font-medium">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-ink/90">{step.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>

      <AiHuman />
      <WhyBuyers />

      <Section label="Limits">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.limits.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.limits.intro}</p>
          <ol className="mt-6 list-decimal space-y-4 pl-5 leading-relaxed text-ink/90">
            {c.limits.items.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.body}
              </li>
            ))}
          </ol>
        </RevealBlock>
      </Section>

      <Section label="Scope" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.scope.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.scope.body}</p>
        </RevealBlock>
      </Section>

      <Section label="The commitment">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.commitment.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.commitment.intro}</p>
          <ol className="mt-6 list-decimal space-y-4 pl-5 leading-relaxed text-ink/90">
            {c.commitment.ramp.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.body}
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed text-ink/90">{c.commitment.after}</p>
        </RevealBlock>
      </Section>

      <Section label="Tiers" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.tiers.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.tiers.intro}</p>
          <ul className="mt-8 space-y-4 leading-relaxed text-ink/90">
            {c.tiers.items.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong> {item.body}
              </li>
            ))}
          </ul>
          <p className="mt-8 leading-relaxed text-ink/90">
            <LinkedCopy text={c.tiers.gridNote} />
          </p>
        </RevealBlock>
      </Section>

      <Section label="Questions">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Questions on the process.</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={[...c.faqs]} />
          </div>
        </RevealBlock>
      </Section>

      <TeamBios heading="The people who own this." />
      <CTABand />
      <IsoverticMove variant="system" />
    </>
  );
}
