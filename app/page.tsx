import Link from "next/link";
import { SplitHeadline } from "@/components/ui/SplitHeadline";
import { Arrow } from "@/components/ui/Arrow";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ProofBand } from "@/components/sections/ProofBand";
import { Section } from "@/components/sections/Shell";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISOVERTIC | Growth Firm That Builds Your Pipeline and Books Your Meetings",
  description: "One senior team builds your site, runs your ads, buys your media including TV, and books qualified meetings on your calendar. You close. Long Island, NY.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { q: "What does ISOVERTIC actually do?", a: "Everything between your offer and a booked sales meeting. We build the website, create the content, run the search ads, buy digital and TV media, and run outbound outreach that books qualified meetings directly on your calendar." },
  { q: "How is this different from a marketing agency?", a: "An agency hands you traffic and reports. We hand you meetings. Marketing that stops at the click leaves most of the sale unowned. We own the pipeline to the calendar." },
  { q: "How is this different from an appointment setting company?", a: "Appointment setters book meetings into whatever you already have. If the website is weak and the brand is invisible, those meetings show up cold and close poorly. We build the asset and the air cover, then book the meetings into a system designed to convert them." },
  { q: "What does it cost?", a: "Engagements start in the low five figures monthly depending on scope and tier. Full ranges are published on our pricing page, because you should not need a discovery call to learn a price." },
  { q: "Where are you located?", a: "Long Island, New York. We serve clients nationally." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />

      {/* Hero */}
      <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden border-b border-rule pt-safe-top">
        <div className="hero-drift pointer-events-none absolute inset-x-0 top-[18%] hidden lg:block" aria-hidden="true">
          <div className="mx-auto max-w-[1440px] px-16">
            <div className="iso-mark opacity-60" />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 xl:px-16">
          <p className="eyebrow hero-sub">Growth firm · Long Island, NY</p>
          <h1 className="mt-6 font-display text-display font-semibold">
            <SplitHeadline text="We build your pipeline." />
            <br />
            <SplitHeadline text="You close it." delay={520} className="text-signal" />
          </h1>
          <p className="hero-sub mt-8 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft">
            ISOVERTIC is one senior team that designs your website, runs your Google Ads, buys your media including TV, and cold calls your market until qualified meetings land on your calendar. No vendor juggling. No finger pointing. One firm accountable for revenue.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn btn-solid">Book a pipeline call</Link>
            <Link href="/how-it-works" className="cta-link">See how the system works <Arrow /></Link>
          </div>
          <div className="iso-mark rule-draw mt-16" aria-hidden="true" />
        </div>
      </section>

      <ClientStrip />

      {/* Problem */}
      <Section label="The problem">
        <RevealBlock>
          <h2 className="max-w-[20ch] font-display text-h2 font-medium">You have a web guy, an ads guy, and a sales hire who <span className="text-signal">quit.</span></h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">
            Most growing companies run their pipeline across four vendors who have never spoken to each other. The agency celebrates impressions. The web shop celebrates a launch. The SDR firm celebrates dials. Nobody owns the number you actually care about, and when revenue stalls, everyone points at someone else. More than 70 percent of marketing leads are never contacted by sales at all. That is not a lead problem. That is an ownership problem.
          </p>
        </RevealBlock>
      </Section>

      {/* The system */}
      <Section label="The system" className="border-t border-rule">
        <RevealBlock>
          <p className="eyebrow">One firm. The whole build.</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-h2 font-medium">Five stages. One <span className="text-signal">number</span> that matters.</h2>
        </RevealBlock>
        <div className="mt-14">
          <PipelineDiagram />
        </div>
      </Section>

      {/* Proof */}
      <Section label="Proof" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Numbers first. Adjectives never.</h2>
        </RevealBlock>
        <div className="mt-12">
          <ProofBand />
        </div>
        <div className="mt-10">
          <Link href="/results" className="cta-link">See the client roster <Arrow /></Link>
        </div>
      </Section>

      {/* Commitment */}
      <section className="section-deferred border-t border-rule bg-navy text-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 xl:px-16">
          <RevealBlock>
            <p className="eyebrow !text-paper/50">The commitment</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-h2 font-medium">A <span className="text-signal">90 day</span> ramp with a number attached.</h2>
            <p className="mt-6 max-w-[58ch] leading-relaxed text-paper/80">
              Every engagement starts with a defined 90 day ramp and a stated meeting volume commitment for your tier. No long term contracts. If we are not putting qualified conversations on your calendar, you should not be paying us.
            </p>
            <div className="mt-8">
              <Link href="/pricing" className="cta-link text-paper hover:text-paper/80">Pricing is published <Arrow /></Link>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* FAQ */}
      <Section label="Questions">
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
