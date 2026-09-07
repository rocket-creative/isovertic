import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { BaaRequestForm } from "@/components/compliance/BaaRequestForm";
import { healthcareMeta } from "@/content/compliance";

const path = "/compliance/baa-request";

export const metadata: Metadata = {
  title: { absolute: "Request a BAA and Compliance Packet | ISOVERTIC" },
  description: "Request the ISOVERTIC Business Associate Agreement template, subcontractor list, and compliance packet. Routed to legal, answered the same business day.",
  alternates: { canonical: path },
};

export default function BaaRequest() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Healthcare and life sciences", path: healthcareMeta.path }, { name: "BAA request", path }])} />
      <PageHero
        eyebrow="Compliance · BAA request"
        h1="Request our BAA and compliance packet."
        lead="Tell us who you are and whether you are a covered entity or a business associate. We send the template BAA, the HIPAA operating standard, the sensitive data governance process, and the current subcontractor list. If you have your own BAA, attach nothing here and mention it in the notes; we review client paper."
      />
      <Section label="Request" deferred={false}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
          <RevealBlock>
            <BaaRequestForm />
          </RevealBlock>
          <RevealBlock delay={80} className="max-w-[52ch]">
            <p className="eyebrow">What you get</p>
            <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink/90">
              {[
                "Template Business Associate Agreement",
                "HIPAA operating standard, one page",
                "Sensitive data governance process, one page",
                "Current subcontractor list and downstream BAA status",
                "A named contact for your compliance officer",
              ].map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="text-signal">·</span>{x}</li>)}
            </ul>
            <p className="mt-8 text-[14px] leading-relaxed text-ink-soft">Nothing on this form is treated as PHI. Do not include patient information in the notes.</p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <Link href="/compliance/hipaa-posture" className="cta-link">Read the HIPAA posture first <Arrow /></Link>
              <Link href={healthcareMeta.path} className="cta-link">Healthcare and life sciences <Arrow /></Link>
            </div>
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
