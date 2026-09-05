import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Long Island Marketing Agency That Books Your Meetings | ISOVERTIC" },
  description: "Long Island marketing agency in Bohemia, NY, running web, SEO, Google Ads, streaming TV, and outbound appointment setting as one system for Nassau and Suffolk businesses. Published pricing.",
  alternates: { canonical: "/long-island" },
};

const faqs = [
  { q: "Do you meet in person?", a: "Yes, across Nassau and Suffolk. The office is at 600 Johnson Ave, Suite D5, Bohemia, off Veterans Memorial Highway, and the founder sits across the table for the kickoff and the day 90 review." },
  { q: "Do you only serve Long Island?", a: "We serve clients nationally; the island is home field. Two of the nine brands on our roster are our own Long Island companies, run on the same system we sell." },
  { q: "Which local industries fit best?", a: "Healthcare practices and medical groups, professional firms, home services, and hospitality and wedding venues. Each has its own page and its own starting tier." },
  { q: "What does a Long Island engagement cost?", a: "The same published prices as everywhere else: from $2,500 a month on a 12 month term for content, $5,000 with Google Ads, $10,000 for the full pipeline with outbound. No local surcharge and no discovery call to learn the number." },
  { q: "Can you buy TV just for Nassau or Suffolk?", a: "Yes. Streaming TV is bought by ZIP code, so a practice in Garden City or a contractor in Smithtown can be the only company in its category homeowners have seen on screen, for a test budget of $10,000 to $15,000 a month." },
];

const localWork = [
  { h: "Healthcare practices and medical groups", body: "Service line hubs matched to Google Ads ad group by ad group, HIPAA covered intake from form to inbox, referral outreach to other physicians, and the review velocity that moves the map pack. The concussion program we built for a Suffolk County spine practice is the pattern.", href: "/industries/healthcare", label: "Healthcare" },
  { h: "Wedding venues and hospitality", body: "We operate a Long Island wedding photography studio of our own and have run sales packaging for a waterfront wedding venue since 2020, so the tour funnel, the season pacing, and the follow up sequence are things we run, not things we read about.", href: "/industries/hospitality", label: "Hospitality" },
  { h: "Home services and trades", body: "Local service pages per town and service, Google Business Profile discipline, search ads to a cost per booked job, and streaming TV in the ZIP codes you serve. Commercial outbound to property managers and GCs for the B2B side of the book.", href: "/industries/home-services", label: "Home services" },
  { h: "Professional firms", body: "Founder led content, authority pages a referred prospect converts on, and outbound to the right 200 accounts on the island instead of the easiest 20,000.", href: "/industries/professional-services", label: "Professional services" },
];

export default function LongIsland() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Long Island", path: "/long-island" }])]} />
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
      <Section label="Local work" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What we run for Long Island businesses</h2>
        </RevealBlock>
        <ul className="mt-10 grid gap-px bg-rule lg:grid-cols-2">
          {localWork.map((w) => (
            <RevealBlock key={w.h} as="li" className="surface-card p-8">
              <h3 className="font-display text-h3 font-medium">{w.h}</h3>
              <p className="mt-4 leading-relaxed text-ink/90">{w.body}</p>
              <Link href={w.href} className="cta-link mt-5">{w.label} <Arrow /></Link>
            </RevealBlock>
          ))}
        </ul>
      </Section>
      <Section label="Find us">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Bohemia, Suffolk County</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            {site.legalName}, doing business as {site.name}. {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}. Ten minutes from MacArthur Airport, forty from the Nassau line on the LIE. Call <a href={`tel:${site.phone}`} className="underline underline-offset-4 hover:text-navy">{site.phone.replace("+1-", "")}</a> or email <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-navy">{site.email}</a>. Same business day reply.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Questions" tone="bright">
        <h2 className="font-display text-h2 font-medium">Local questions</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
