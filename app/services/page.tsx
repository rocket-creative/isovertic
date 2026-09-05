import Link from "next/link";
import { services } from "@/content/services";
import { steps } from "@/content/tiers";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Sales and Marketing Services | ISOVERTIC" },
  description: "Six services run as one system by one senior team: web development, SEO and AI search content, Google Ads, TV and CTV, outbound appointment setting, and team training. Published pricing from $2,500 a month.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        h1="Outsourced sales and marketing, six services, one team."
        lead="Each service below is a step of the same system: Build, Rank, Run, Buy, Book, Educate. Buy one step or the whole pipeline. The same senior team runs every step, and every price is on the pricing page."
      />
      <Section label="The six">
        <ul className="divide-y divide-rule border-y border-rule">
          {services.map((s, i) => (
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
          <RevealBlock as="li" delay={360}>
            <Link href="/protocol" className="group grid gap-2 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="eyebrow">07</span>
              <span>
                <span className="font-display text-[clamp(18px,2.4vw,26px)] font-medium leading-snug group-hover:text-signal">Educate: Protocol team training</span>
                <span className="mt-2 block max-w-[68ch] text-[14px] text-ink-soft">One or two days at your office. Your team leaves with the eight runbooks our account teams work from, rewritten in your name. From $5,000.</span>
              </span>
              <span className="hidden sm:block"><Arrow /></span>
            </Link>
          </RevealBlock>
        </ul>
      </Section>
      <Section label="How they connect" tone="bright">
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
            <Link href="/how-it-works" className="cta-link">How the system works <Arrow /></Link>
            <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
