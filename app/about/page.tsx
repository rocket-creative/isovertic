import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { BrandLogo } from "@/components/ui/Logo";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ISOVERTIC | Founder Led Growth Firm on Long Island" },
  description: "ISOVERTIC was founded by George Stoff, a creative technologist with 30 plus years across design, development, media, and sales systems. One team, the whole pipeline.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="The firm"
        h1="The system is laid first. Everything is built on it."
        lead="Before the ads, before the outbound, before the name on the door, the pipeline has to exist as one structural member. Everything that follows is only as strong as that first system. We build it that way because it is how revenue actually works: one team, one pipeline, carrying every channel on top of it."
      />
      <Section label="Founder">
        <div className="grid items-start gap-12 lg:grid-cols-[260px_1fr]">
          <RevealBlock>
            <BrandLogo className="h-24 w-auto" />
          </RevealBlock>
          <RevealBlock delay={120} className="max-w-[68ch]">
            <h2 className="font-display text-h2 font-medium">{site.founder}</h2>
            <p className="mt-6 leading-relaxed text-ink/90">George Stoff has spent more than 30 years building across disciplines most firms treat as separate trades: brand and design, web and software development, photography and media production, search and content systems, and sales programs that put meetings on calendars. He has operated agencies, built and shipped SaaS products, run media brands, and managed go to market for healthcare, biotech, and professional service companies.</p>
            <p className="mt-5 leading-relaxed text-ink/90">ISOVERTIC exists because every owner he worked with was buying these capabilities in pieces, from vendors who never spoke, and wondering why the pieces never became a pipeline.</p>
          </RevealBlock>
        </div>
      </Section>
      <Section label="Beliefs" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What we believe</h2>
          <div className="mt-8 max-w-[68ch] space-y-5 leading-relaxed text-ink/90">
            <p>The website is an asset, not a brochure. Traffic without meetings is a hobby. Numbers beat adjectives. The founder should be visible, in our business and in yours. And nobody should need a discovery call to learn a price.</p>
            <p>Senior hands only. No account management layer, no juniors learning on your budget, no offshore mystery. A deliberately short client roster, because the model only works when the people who sold the engagement do the work. {site.entity}</p>
          </div>
        </RevealBlock>
      </Section>
      <CTABand />
    </>
  );
}
