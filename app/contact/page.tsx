import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { LeadForm } from "@/components/sections/LeadForm";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Book a Pipeline Call | ISOVERTIC" },
  description: "Thirty minutes with the founder. You already know the price, so the call is about your market, your number, and whether the tier you picked is the right one.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Book a pipeline call"
        h1="Book a pipeline call."
        lead="Thirty minutes with the founder. You already know the price, so the call is about your market, your number, and whether the tier you picked is the right one."
      />
      <Section label="The call" deferred={false}>
        <div className="grid gap-14 lg:grid-cols-2">
          <RevealBlock>
            <LeadForm />
          </RevealBlock>
          <RevealBlock delay={140} className="max-w-[48ch]">
            <h2 className="font-display text-h3 font-medium">What happens next</h2>
            <p className="mt-4 leading-relaxed text-ink/90">Same business day reply with a calendar link. On the call we map your pipeline math, tell you which tier fits or whether none does, and if we are not the right firm, point you somewhere honest.</p>
            <p className="mt-4 text-[14px] text-ink-soft">If you would rather read first:</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/pricing" className="cta-link">Pricing <Arrow /></Link>
              <Link href="/how-it-works" className="cta-link">How it works <Arrow /></Link>
              <Link href="/protocol" className="cta-link">Protocol <Arrow /></Link>
            </div>
            <div className="iso-mark mt-10 max-w-[280px]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
