import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, localBusinessLd, breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Long Island Marketing Agency That Books Your Meetings | ISOVERTIC" },
  description: "The only Long Island growth firm running web, SEO, Google Ads, TV, and outbound appointment setting as one system. Nassau and Suffolk. Book a pipeline call.",
  alternates: { canonical: "/long-island" },
};

const faqs = [
  { q: "Do you meet in person?", a: "Yes, across Nassau and Suffolk, and we find it shows in the work." },
  { q: "Do you only serve Long Island?", a: "We serve clients nationally; the island is home field." },
  { q: "Which local industries fit best?", a: "Healthcare practices, professional firms, home services, and hospitality, all deep patterns for us." },
];

export default function LongIsland() {
  return (
    <>
      <JsonLd data={[localBusinessLd(), faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Long Island", path: "/long-island" }])]} />
      <PageHero
        eyebrow="Long Island, NY"
        h1="The Long Island firm that hands you meetings, not reports."
        lead="Long Island has web shops, ad agencies, and SEO vendors. What it has not had is one senior firm that builds the site, runs the ads, buys the media including TV, and cold calls the market until meetings land on your calendar. ISOVERTIC is based in Suffolk County and built for the owner operated businesses that run this island."
      />
      <Section label="Home field">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">One system, served locally</h2>
          <p className="mt-6 leading-relaxed text-ink/90">The system is the same one we run nationally: build the asset, rank the content, run the search ads, buy the media, and book the meetings. Locally it comes with the things national vendors cannot offer: a founder who will sit across the table in Nassau or Suffolk, streaming TV buys targeted to the exact counties you serve, and a roster short enough that your category can be yours alone here.</p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Link href="/industries/healthcare" className="cta-link">Healthcare practices <Arrow /></Link>
            <Link href="/industries/home-services" className="cta-link">Home services <Arrow /></Link>
            <Link href="/industries/hospitality" className="cta-link">Hospitality and venues <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>
      <Section label="Questions" className="border-t border-rule">
        <h2 className="font-display text-h2 font-medium">Local questions</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
