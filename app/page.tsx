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
import { closeNote, systemNote, heroAudit, commitmentStandard } from "@/content/system";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BuyerRoleTabs } from "@/components/sections/BuyerRoleTabs";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ClientQuote, LinkedCopy } from "@/components/ui/ClientQuote";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "ISOVERTIC | The capture engine for companies that sell to specialists" },
  description: "We build long-tail websites that get found by the specialist already searching for what you sell, wired to a tracking and compliance stack that proves which page produced which lead. One senior team runs a codified seven-layer method on every account. 12-month default, 6-month floor. Long Island, NY.",
  alternates: { canonical: "/" },
};

const offerBody =
  "Brand, creative, positioning, sales enablement, and copy are all commoditized now. A competent freelancer with an AI subscription can produce most of them. The one part of the marketing program AI and generalists still cannot ship well is the long-tail website that gets found by the specialist who is already searching for what you sell. Not because writing pages is hard. Because the work underneath is a systems job: knowing which specialist terms are worth building for, architecting the site so hundreds of pages do not cannibalize each other, writing pages a scientist or a billing director will trust, wiring tracking so we can prove which page produced which lead, doing all of it inside HIPAA or FDA constraints when the client is regulated, and maintaining it while the algorithm shifts. That is the capture engine. It is what we sell. The full breakdown lives on the [system page](/system).";

const homeFaqs = [
  { q: "What does ISOVERTIC actually do?", a: "Everything between your offer and a booked sales meeting. We build the website, create the content, run the search ads, buy digital and TV media, and run outbound outreach that books qualified meetings directly on your calendar. You choose how much of that we run." },
  { q: "How is this different from a marketing agency?", a: "An agency hands you traffic and reports. We hand you meetings, or, on the smaller tiers, the content and campaigns that a meeting program is built on, produced by the team that will eventually run it." },
  { q: "How is this different from an appointment setting company?", a: "Appointment setters book meetings into whatever you already have. If the website is weak and the brand is invisible, those meetings show up cold and close poorly. We build the asset and the air cover, then book the meetings into a system designed to convert them." },
  { q: "What does it cost?", a: "Engagements start at $2,500 per month for content and run to $25,000 and up for multi-brand programs with TV. Every tier is a 12-month term that includes the $15,000 website rebuild and hosting, because the website is the capture engine, not an add-on. Every tier, every add-on, and the term table are on the pricing page, and every tier checks out on the page by card or bank debit, no call." },
  { q: "Which tier should we start on?", a: "If you publish nothing today, Baseline. If you have a site and no paid demand, Catalyst. If you need meetings this quarter, Kinetic. If you run more than one brand or want TV, Critical Mass. Wrong tier, we move you." },
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
            <SplitHeadline text="We build the website that gets found by the specialist already searching for what you sell." />
          </h1>
          <p className="hero-sub mt-4 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px] sm:leading-relaxed">
            Then we spend ads only on those people. One senior team runs a codified seven-layer method on every account, from the first catalog page to the compliance stack that keeps it defensible. Pricing is published. Every engagement is a 12-month default with a 6-month floor.
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

      {/* Problem */}
      <Section label="The problem">
        <RevealBlock>
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">You have a web guy, an ads guy, and a sales hire who <span className="text-signal">quit.</span></h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">
            Most growing companies run their pipeline across four vendors who have never spoken to each other. The agency celebrates impressions. The web shop celebrates a launch. A rented sales team celebrates dialed numbers. Nobody owns the number you actually care about, and when revenue stalls, everyone points at someone else. More than 70 percent of marketing leads are never contacted by sales at all. That is not a lead problem. That is an ownership problem. It is also why every tier here, down to the smallest, is run by the same team that runs the largest.
          </p>
          <p className="mt-6 max-w-[62ch] font-display text-[18px] font-medium leading-snug text-ink">
            One firm. One method. One number at the end.
          </p>
        </RevealBlock>
      </Section>

      {/* The offer */}
      <Section label="The offer">
        <RevealBlock>
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">What we actually sell, in one paragraph.</h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">
            <LinkedCopy text={offerBody} />
          </p>
        </RevealBlock>
      </Section>

      {/* The system */}
      <Section label="The system" tone="bright">
        <RevealBlock>
          <p className="eyebrow">One firm. The whole build.</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-h2 font-medium">Six steps. One <span className="text-signal">number</span> that matters.</h2>
        </RevealBlock>
        <div className="mt-14">
          <PipelineDiagram />
        </div>
        <RevealBlock className="mt-8">
          <p className="max-w-[62ch] font-display text-[18px] font-medium leading-snug text-ink">
            {closeNote}
          </p>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">
            {systemNote}
          </p>
        </RevealBlock>
      </Section>

      <AiHuman />
      <WhyBuyers />
      <BuyerRoleTabs />

      {/* Proof */}
      <Section label="Proof">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Numbers first. Adjectives never.</h2>
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

      {/* Commitment */}
      <section className="section-deferred bg-slate-soft text-ink">
        <div className="mx-auto max-w-[1440px] gutter py-24">
          <RevealBlock>
            <p className="eyebrow">The commitment</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-h2 font-medium">12 months. <span className="text-signal">Two clocks.</span> Revenue judged on the right one.</h2>
            <p className="mt-6 max-w-[58ch] leading-relaxed text-ink/85">
              Every engagement is a 12-month default with a 6-month floor, staged as a 3-month foundation into a 6-to-12-month growth term. The reason is the shape of the work. Healthcare, biotech, and medtech sales cycles run 125 days to 24 months, so a lead we generate in month 2 may not close until month 12 or later. Judging pipeline on a 90-day clock measures marketing that has not had time to convert.
            </p>
            <p className="mt-5 max-w-[58ch] leading-relaxed text-ink/85">
              We run two clocks in every engagement. Leading indicators (rankings, impressions, cost per lead, learning-phase status) arrive every 30 days. Lagging indicators (pipeline, revenue, CAC payback) are reviewed at months six and twelve, tied to your actual sales cycle. Kinetic and above carry a meeting-volume commitment in writing.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
              <Link href={commitmentStandard.href} className="cta-link">{commitmentStandard.label} <Arrow /></Link>
            </div>
          </RevealBlock>
        </div>
      </section>

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
