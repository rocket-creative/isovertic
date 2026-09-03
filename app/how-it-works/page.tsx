import { PageHero, Section } from "@/components/sections/Shell";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "How the ISOVERTIC System Works | One Team, Whole Pipeline" },
  description: "The five stage pipeline system: build the asset, rank the content, run the ads, buy the media, book the meetings. One senior team, one number.",
  alternates: { canonical: "/how-it-works" },
};

const faqs = [
  { q: "Who do we actually work with?", a: "The senior team, founder included. There is no account management layer between you and the people doing the work." },
  { q: "What do you need from us?", a: "Roughly two hours per week in the ramp, your calendar for meetings, and honesty about what closes." },
  { q: "What if a stage underperforms?", a: "Budget moves between stages monthly. One team means reallocation is a decision, not a renegotiation between vendors." },
];

const ramp = [
  { phase: "Weeks 1 to 3", body: "Positioning, keyword and list architecture, build sprint begins." },
  { phase: "Weeks 4 to 8", body: "Site live, ads live, sequences in market, first meetings booked." },
  { phase: "Weeks 9 to 13", body: "Cost per meeting stabilizes, TV test scoped where tiered, the commitment number reviewed against actuals in writing." },
];

export default function HowItWorks() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "How it works", path: "/how-it-works" }])]} />
      <PageHero
        eyebrow="The system"
        h1="One system, five stages, one number that matters."
        lead="Vendors fail in the seams: the agency does not talk to the web shop, the SDR firm has never read the website. ISOVERTIC removes the seams. One senior team runs five stages of the same pipeline, and every stage is graded against the same number: qualified meetings that close."
      />
      <Section label="Pipeline">
        <PipelineDiagram />
      </Section>
      <Section label="The ramp" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">The 90 day ramp</h2>
        </RevealBlock>
        <ol className="mt-12 grid gap-px bg-rule lg:grid-cols-3">
          {ramp.map((r, i) => (
            <RevealBlock key={i} as="li" delay={i * 100} className="bg-background p-8">
              <p className="eyebrow">{r.phase}</p>
              <p className="mt-4 leading-relaxed text-ink/90">{r.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <Section label="Questions" className="border-t border-rule">
        <h2 className="font-display text-h2 font-medium">The fine print, out loud</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
