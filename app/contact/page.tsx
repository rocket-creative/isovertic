import { PageHero, Section } from "@/components/sections/Shell";
import { LeadForm } from "@/components/sections/LeadForm";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Book a Pipeline Call | ISOVERTIC" },
  description: "A 30 minute call about where your pipeline breaks and what the system to fix it looks like. No deck, no pressure, no junior qualifier.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Book a pipeline call"
        h1={<>Thirty minutes on where your pipeline <span className="text-signal">breaks.</span></>}
        lead="No deck, no pressure, no junior qualifier. You talk to the people who would do the work. Bring your numbers if you have them, your frustrations if you do not."
      />
      <Section label="The call" deferred={false}>
        <div className="grid gap-14 lg:grid-cols-2">
          <RevealBlock>
            <LeadForm />
          </RevealBlock>
          <RevealBlock delay={140} className="max-w-[48ch]">
            <h2 className="font-display text-h3 font-medium">What happens next</h2>
            <p className="mt-4 leading-relaxed text-ink/90">Same business day reply with a calendar link. On the call we map your pipeline math, tell you which tier fits or whether none does, and if we are not the right firm, point you somewhere honest.</p>
            <p className="mt-4 text-[14px] text-ink-soft">Pricing is already published, so the call is about your pipeline, not our pitch.</p>
            <div className="iso-mark mt-10 max-w-[280px]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
