import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ISOVERTIC | Founder Led Growth Firm on Long Island" },
  description: "ISOVERTIC was built for companies that have to prove their results. One senior team on every account, every tier. Founded by George Stoff.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About"
        h1="One senior team. Every account. Every tier."
        lead="ISOVERTIC was built for companies that have to prove their results to someone: a review board, an investor, a regulator, a patient. That buyer does not want a deck of adjectives. They want the number, the method, and the person who owns both."
      />
      <Section label="The name">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Why the name</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Iso means constant. Vertic means the vertical. The name is the shape of the growth line we are paid to produce: a fixed, rising heading, not a spike that falls back. Our tiers are named the same way, from Baseline, the measurement you start from, to Critical Mass, the point where growth sustains itself.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Founder" className="border-t border-rule">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{site.founder}, Founder and Lead Engineer</h2>
          <p className="mt-6 leading-relaxed text-ink/90">George Stoff is a full stack engineer and founder. He has spent more than 30 years building the systems companies sell through: production software on Next.js, TypeScript, and Supabase, server rendered sites with thousands of schema backed pages, the data pipelines that feed outbound, and the ad and content systems that run on top of them. He writes the build briefs our coding agents execute. He has shipped SaaS products of his own, operated agencies, run media brands, and managed go to market for healthcare, biotech, and professional service companies. He has written more pages about mouse models than most people who make them.</p>
          <p className="mt-5 leading-relaxed text-ink/90">ISOVERTIC exists because every owner he worked with was buying these capabilities in pieces, from vendors who never spoke, and wondering why the pieces never became a pipeline.</p>
        </RevealBlock>
      </Section>
      <Section label="Operations" className="border-t border-rule">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Kristen Coughlin, Chief Operating Officer</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Kristen Coughlin is Chief Operating Officer at ISOVERTIC, bringing a powerful combination of scientific discipline and business acumen to the agency&apos;s operations. A trained molecular biologist who completed her graduate laboratory work at Stony Brook University, Kristen spent more than a decade driving sales, marketing, and business development at Ingenious Targeting Laboratory, a CRO specializing in genetic engineering and translational product development. Most recently, she managed complex institutional operations in the Department of Microbial Pathogenesis at the Yale School of Medicine.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            Under her operational leadership, ISOVERTIC builds your digital presence, automates leads for your SaaS or physical products, and books appointments with qualified prospects to consistently drive your sales.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Who we serve" className="border-t border-rule">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Who we serve</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Scientists and the companies built around them, from a lab selling models and reagents to a diagnostics startup with a Series A to spend. Startups that need a pipeline before they can afford a sales team. Healthcare brands that have to market under HIPAA and MLR review and still fill the calendar. The industry pages cover how the system flexes for each.
          </p>
        </RevealBlock>
      </Section>
      <Section label="How we work" className="border-t border-rule">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">How we work</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            The founder is on every account. The same senior team runs Baseline and Critical Mass; the price buys steps, not a better team. Pricing is published because our buyer hates a wasted discovery call as much as we do. Every engagement has a 90 day ramp with deliverables in writing, and we re earn it quarterly.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            The website is an asset, not a brochure. Traffic without meetings is a hobby. Numbers beat adjectives. And nobody should need a discovery call to learn a price. {site.entity}
          </p>
        </RevealBlock>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
