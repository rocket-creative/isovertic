import Link from "next/link";
import { services, servicesOverview as o } from "@/content/services";
import { steps } from "@/content/tiers";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { LinkedCopy } from "@/components/ui/ClientQuote";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Services That Book Meetings, Not Reports | ISOVERTIC" },
  description: "The growth agency for healthcare, biotech, medical devices, and life sciences. Six connected steps: website, publishing, Google Ads, media, outbound, and training.",
  alternates: { canonical: "/services" },
};

// Step order: Build, Rank, Run, Buy, Book, then Protocol as 06. Brand and design is a supporting layer, listed last.
const stepOrder = ["web-development", "seo-content", "google-ads", "tv-ctv-advertising", "outbound-appointment-setting"];
const stepPages = stepOrder.map((slug) => services.find((s) => s.slug === slug)!);
const brand = services.find((s) => s.slug === "design-brand")!;

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero eyebrow={o.eyebrow} h1={o.h1} lead={o.lead} />
      <Section label="The six">
        <ul className="divide-y divide-rule border-y border-rule">
          {stepPages.map((s, i) => (
            <RevealBlock key={s.slug} as="li" delay={Math.min(i * 60, 300)}>
              <Link href={`/${s.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{s.eyebrow}: {s.h1}</span>
                  <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{s.metaDescription}</span>
                </span>
                <span className="hidden sm:block"><Arrow /></span>
              </Link>
            </RevealBlock>
          ))}
          <RevealBlock as="li" delay={300}>
            <Link href="/protocol" className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="eyebrow">06</span>
              <span>
                <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{o.protocolListing.heading}</span>
                <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{o.protocolListing.blurb}</span>
              </span>
              <span className="hidden sm:block"><Arrow /></span>
            </Link>
          </RevealBlock>
          <RevealBlock as="li" delay={360}>
            <Link href={`/${brand.slug}`} className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="eyebrow">{o.supportingListing.eyebrow}</span>
              <span>
                <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">{o.supportingListing.heading}</span>
                <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">{o.supportingListing.blurb}</span>
              </span>
              <span className="hidden sm:block"><Arrow /></span>
            </Link>
          </RevealBlock>
        </ul>
      </Section>
      <Section label="Each step" tone="bright">
        <div className="max-w-[72ch] space-y-16">
          {[...o.steps, o.supporting, o.connect].map((s) => (
            <RevealBlock key={s.h2}>
              <h2 className="font-display text-h2 font-medium">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-5 leading-relaxed text-ink/90"><LinkedCopy text={p} /></p>
              ))}
            </RevealBlock>
          ))}
        </div>
      </Section>
      <Section label="How they connect">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Which step each service is</h2>
          <ul className="mt-8 space-y-3">
            {steps.map((s) => (
              <li key={s.k} className="flex gap-4 text-[15px] leading-relaxed text-ink/90">
                <span className="eyebrow !text-ink-soft">{s.k}</span>
                <Link href={s.href} className="underline underline-offset-4 hover:text-navy">{s.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <Link href="/system" className="cta-link">How the system works <Arrow /></Link>
            <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
