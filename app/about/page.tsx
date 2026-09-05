import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { site } from "@/lib/site";
import Link from "next/link";
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
      <Section label="Founder" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium"><Link href="/people/george-stoff" className="hover:text-signal">{site.founder}</Link>, Founder and Lead Engineer</h2>
          <p className="mt-6 leading-relaxed text-ink/90">Full stack engineer and founder, more than 30 years building the systems companies sell through: server rendered sites with thousands of schema backed pages, the data pipelines that feed outbound, and the ad and content systems on top. He has shipped SaaS products of his own and run go to market for healthcare, biotech, and professional service companies. <Link href="/people/george-stoff" className="underline underline-offset-4 hover:text-navy">Full bio and credentials</Link>.</p>
          <p className="mt-5 leading-relaxed text-ink/90">ISOVERTIC exists because every owner he worked with was buying these capabilities in pieces, from vendors who never spoke, and wondering why the pieces never became a pipeline.</p>
        </RevealBlock>
      </Section>
      <Section label="Operations">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium"><Link href="/people/kristen-coughlin" className="hover:text-signal">Kristen Coughlin</Link>, Chief Operating Officer</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Molecular biologist, ten years selling custom mouse models for a genetic engineering CRO, then institutional operations in the Department of Microbial Pathogenesis at the Yale School of Medicine. She runs operations and is on every life science account. <Link href="/people/kristen-coughlin" className="underline underline-offset-4 hover:text-navy">Full bio and credentials</Link>.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Who we serve" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Who we serve</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Scientists and the companies built around them, from a lab selling models and reagents to a diagnostics startup with a Series A to spend. Startups that need a pipeline before they can afford a sales team. Healthcare brands that have to market under HIPAA and MLR review and still fill the calendar. The industry pages cover how the system flexes for each.
          </p>
        </RevealBlock>
      </Section>
      <Section label="How we work">
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
