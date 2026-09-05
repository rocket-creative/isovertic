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
import { FounderStrip } from "@/components/sections/FounderStrip";
import { AiHuman } from "@/components/sections/AiHuman";
import { WhyBuyers } from "@/components/sections/WhyBuyers";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/schema";
import { closeNote, systemNote } from "@/content/system";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISOVERTIC | Growth Firm That Builds Your Pipeline and Books Your Meetings",
  description: "One senior team running a six step growth system for companies that have to prove their results. Content from $2,500 a month, or the whole pipeline with meetings on your calendar. Long Island, NY.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { q: "What does ISOVERTIC actually do?", a: "Everything between your offer and a booked sales meeting. We build the website, create the content, run the search ads, buy digital and TV media, and run outbound outreach that books qualified meetings directly on your calendar. You choose how much of that we run." },
  { q: "How is this different from a marketing agency?", a: "An agency hands you traffic and reports. We hand you meetings, or, on the smaller tiers, the content and campaigns that a meeting program is built on, produced by the team that will eventually run it." },
  { q: "How is this different from an appointment setting company?", a: "Appointment setters book meetings into whatever you already have. If the website is weak and the brand is invisible, those meetings show up cold and close poorly. We build the asset and the air cover, then book the meetings into a system designed to convert them." },
  { q: "What does it cost?", a: "Engagements start at $2,500 per month for content on a 12 month term, or $3,000 month to month, and run to $25,000 and up for multi brand programs with TV. The term costs what ten months cost and includes the $15,000 website rebuild. Every tier, every add on, and the term table are on the pricing page, and Baseline signs up with a card, no call." },
  { q: "Which tier should we start on?", a: "If you publish nothing today, Baseline. If you have a site and no paid demand, Catalyst. If you need meetings this quarter, Kinetic. If you run more than one brand or want TV, Critical Mass. Wrong tier, we move you. The ramp is 90 days, not a year." },
  { q: "What if we already have an in house team?", a: "Then we teach them. That is step six, Protocol: one or two days at your office where your team learns the system and leaves with our runbooks in your brand. It starts at $5,000 and is priced on the page." },
  { q: "Where are you located?", a: "Long Island, New York. We serve clients nationally." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-rule bg-bright">
        <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-[calc(var(--spacing-safe-top)+5.625rem)] sm:px-8 sm:pb-16 lg:pt-[calc(var(--spacing-safe-top)+8.25rem)] xl:px-16">
          <p className="eyebrow hero-sub">Growth firm · Long Island, NY · Scientists, startups, and healthcare brands</p>
          <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(36px,5.8vw,88px)] font-semibold leading-[0.96] tracking-[-0.02em]">
            <SplitHeadline text="We build your pipeline." />
            <br />
            <SplitHeadline text="You close it." delay={520} className="text-signal" />
          </h1>
          <p className="hero-sub mt-4 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px] sm:leading-relaxed">
            ISOVERTIC is one senior team running a six step growth system for companies that have to prove their results. Start with content at $2,500 a month, or hand us the whole pipeline and we book qualified meetings on your calendar. No vendor juggling. No finger pointing. One firm accountable for the number.
          </p>
          <div className="hero-cta mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/contact" className="btn btn-solid">Book a pipeline call</Link>
            <Link href="/how-it-works" className="cta-link">See how the system works <Arrow /></Link>
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* Problem */}
      <Section label="The problem">
        <RevealBlock>
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">You have a web guy, an ads guy, and a sales hire who <span className="text-signal">quit.</span></h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">
            Most growing companies run their pipeline across four vendors who have never spoken to each other. The agency celebrates impressions. The web shop celebrates a launch. The SDR firm celebrates dials. Nobody owns the number you actually care about, and when revenue stalls, everyone points at someone else. More than 70 percent of marketing leads are never contacted by sales at all. That is not a lead problem. That is an ownership problem. It is also why every tier here, down to the smallest, is run by the same team that runs the largest.
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
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 xl:px-16">
          <RevealBlock>
            <p className="eyebrow">The commitment</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-h2 font-medium">A <span className="text-signal">90 day</span> ramp with a number attached.</h2>
            <p className="mt-6 max-w-[58ch] leading-relaxed text-ink/85">
              Every engagement starts with a defined 90 day ramp and stated deliverables for your tier. Kinetic and above carry a meeting volume commitment in writing. No long term contract is required. If we are not producing the number we wrote down, you should not be paying us.
            </p>
            <div className="mt-8">
              <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
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

      <FounderStrip />
      <CTABand />
    </>
  );
}
