import Link from "next/link";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { Arrow } from "@/components/ui/Arrow";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ProofBand } from "@/components/sections/ProofBand";
import { ResultsTicker } from "@/components/sections/ResultsTicker";
import { Section } from "@/components/sections/Shell";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { TeamBios } from "@/components/sections/TeamBios";
import { IsoverticMove } from "@/components/sections/IsoverticMove";
import { AiHuman } from "@/components/sections/AiHuman";
import { WhyBuyers } from "@/components/sections/WhyBuyers";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/schema";
import { closeNote, heroAudit, commitmentStandard, home } from "@/content/system";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BuyerRoleTabs } from "@/components/sections/BuyerRoleTabs";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ClientQuote, LinkedCopy } from "@/components/ui/ClientQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "ISOVERTIC | The Website That Finds the Specialist" },
  description: "We build the website that gets found by the specialist already searching for what you sell, then spend ads only on those people. One team, six steps, published pricing, 12-month term.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { q: "What does ISOVERTIC actually do?", a: "We build the website that gets found by the specialist already searching for what you sell, then spend ads only on those people. One team runs the site, content, paid search, media, outbound, and training on one method. You choose how much of that we run." },
  { q: "How is this different from a marketing agency or a web design company?", a: "A marketing agency hands you traffic and reports. A web design company hands you a launch. We hand you meetings, or, on the smaller tiers, the site, content, and campaigns that a meeting program is built on, produced by the team that will eventually run it." },
  { q: "How is this different from an appointment setting company?", a: "Appointment setters book meetings into whatever you already have. If the website is weak and the brand is invisible, those meetings show up cold and close poorly. We build the asset and the air cover, then book the meetings into a system designed to convert them." },
  { q: "What does it cost?", a: "Engagements start at $2,500 per month for content and run to $25,000 and up for multi-brand programs with TV. Every tier is a 12-month term that includes the $15,000 website rebuild and hosting, because the website is where the pipeline starts, not an add-on. Every tier, every add-on, and the term table are on the pricing page, and every tier checks out on the page by card or bank debit, no call." },
  { q: "Which tier should we start on?", a: "If you publish nothing today, Ground State. If you have a site and no paid demand, Excitation. If you need meetings this quarter, Amplification. If you run more than one brand or want TV, Quantum Leap. Wrong tier, we move you." },
  { q: "What if we already have an in house team?", a: "Then we teach them. That is step six, Protocol: one or two days at your office where your team learns the system and leaves with our runbooks in your brand. It starts at $5,000 and is priced on the page." },
  { q: "Where are you located?", a: "Long Island, New York. We serve clients nationally." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule bg-bright">
        <div className="hero-top mx-auto max-w-[1440px] gutter pb-20 lg:pb-28">
          <h1 className="max-w-[20ch] font-display text-h1 font-medium">
            <SplitHeadline text={home.h1} />
          </h1>
          <p className="hero-sub mt-4 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px] sm:leading-relaxed">
            {home.sub}
          </p>
          <p className="hero-sub mt-3 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px] sm:leading-relaxed">
            {home.sub2}
          </p>
          <TrustStrip />
          <div className="hero-cta mt-9 flex flex-wrap items-center gap-5 sm:mt-12 sm:gap-8">
            <Link href="/contact" className="btn btn-solid btn-block">Book a pipeline call</Link>
            <Link href="/system" className="cta-link">See how the system works <Arrow /></Link>
            <TrackedLink href={heroAudit.href} section="hero" label={heroAudit.label} className="cta-link">{heroAudit.label} <Arrow /></TrackedLink>
          </div>
        </div>
      </section>

      <Section label="Client" deferred={false}>
        <RevealBlock>
          <ClientQuote />
        </RevealBlock>
      </Section>

      <ClientStrip />

      {/* Demand */}
      <Section label="Demand">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">{home.demand.h2}</h2>
          {home.demand.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} max-w-[62ch] leading-relaxed text-ink/90`}>{p}</p>
          ))}
        </RevealBlock>
      </Section>

      {/* The system */}
      <Section label="The system" tone="bright">
        <RevealBlock>
          <p className="eyebrow">{home.system.eyebrow}</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-h2 font-medium">{home.system.h2}</h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">{home.system.intro}</p>
          <ol className="mt-6 max-w-[62ch] list-decimal space-y-3 pl-5 leading-relaxed text-ink/90">
            {home.system.steps.map((st) => (
              <li key={st.name}><strong>{st.name}</strong> {st.body}</li>
            ))}
          </ol>
        </RevealBlock>
        <div className="mt-14">
          <PipelineDiagram />
        </div>
        <RevealBlock className="mt-8">
          <p className="max-w-[62ch] font-display text-[18px] font-medium leading-snug text-ink">
            {closeNote}
          </p>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">
            <LinkedCopy text={home.system.after} />
          </p>
        </RevealBlock>
      </Section>

      {/* Seven layers */}
      <Section label="Under Build">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">{home.layers.h2}</h2>
          {home.layers.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} max-w-[62ch] leading-relaxed text-ink/90`}><LinkedCopy text={p} /></p>
          ))}
        </RevealBlock>
      </Section>

      <AiHuman />
      <WhyBuyers />
      <BuyerRoleTabs />

      {/* Proof */}
      <Section label="Proof">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{home.proof.h2}</h2>
          {home.proof.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} max-w-[62ch] leading-relaxed text-ink/90`}>{p}</p>
          ))}
        </RevealBlock>
        <div className="mt-12">
          <ResultsTicker />
        </div>
        <div className="mt-12">
          <ProofBand />
        </div>
        <div className="mt-10">
          <Link href="/results" className="cta-link">See the client roster <Arrow /></Link>
        </div>
      </Section>

      {/* Tiers */}
      <Section label="Tiers" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">{home.tiers.h2}</h2>
          <ul className="mt-6 space-y-4 leading-relaxed text-ink/90">
            {home.tiers.items.map((t) => (
              <li key={t.name}><strong>{t.name}</strong> {t.body}</li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-ink/90"><LinkedCopy text={home.tiers.after} /></p>
        </RevealBlock>
      </Section>

      {/* Commitment */}
      <section className="section-deferred bg-slate-soft text-ink">
        <div className="mx-auto max-w-[1440px] gutter py-24">
          <RevealBlock>
            <p className="eyebrow">The commitment</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-h2 font-medium">{home.commitment.h2}</h2>
            {home.commitment.body.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} max-w-[58ch] leading-relaxed text-ink/85`}><LinkedCopy text={p} /></p>
            ))}
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
              <Link href={commitmentStandard.href} className="cta-link">{commitmentStandard.label} <Arrow /></Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Start */}
      <Section label="Start">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">{home.start.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90"><LinkedCopy text={home.start.body} /></p>
        </RevealBlock>
      </Section>

      {/* FAQ */}
      <Section label="Questions" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What founders ask first</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={homeFaqs} />
          </div>
        </RevealBlock>
      </Section>

      <TeamBios />
      <CTABand />
      <IsoverticMove />
    </>
  );
}
