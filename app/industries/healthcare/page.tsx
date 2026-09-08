import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { FAQ } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ClientQuote } from "@/components/ui/ClientQuote";
import { CompliancePosture, SensitiveDataGovernance, MlrWorkflow, ClaimDiscipline, MedicareNote } from "@/components/compliance/Compliance";
import { SalesCycleTable } from "@/components/standard/Tables";
import { DownloadCard } from "@/components/standard/DownloadCard";
import { breadcrumbLd, faqLd, resourceLd, serviceLd } from "@/lib/schema";
import { healthcareMeta as m, healthcareHeadings as h, whyDifferent, mlr, claims, complianceFaqs, healthcareRelated } from "@/content/compliance";
import { healthcareComplianceOfficer } from "@/content/voice-audit";

// Static route wins over app/industries/[slug]. The healthcare entry in content/industries.ts still feeds
// the industries index, the footer, and the sitemap.

export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  alternates: { canonical: m.path },
};

export default function Healthcare() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd(m.h1, m.description, m.path),
          resourceLd({ headline: m.h1, description: m.description, path: m.path, datePublished: "2026-09-05", dateModified: m.dateModified, section: "Compliance" }),
          faqLd(complianceFaqs),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: m.eyebrow, path: m.path }]),
        ]}
      />
      <PageHero eyebrow={m.eyebrow} h1={m.h1} lead={m.lead} />

      <Section label="Client" deferred={false}>
        <RevealBlock>
          <ClientQuote />
        </RevealBlock>
      </Section>

      <Section label="Why it is different" deferred={false}>
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{h.why}</h2>
          {whyDifferent.map((p) => <p key={p} className="mt-6 leading-relaxed text-ink/90">{p}</p>)}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <TrackedLink href="/compliance/baa-request" section="intro" label={h.ctas.packet} className="btn btn-solid">
              {h.ctas.packet} <Arrow />
            </TrackedLink>
            <Link href="/pricing" className="cta-link">{h.ctas.pricing} <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>

      <Section label="HIPAA posture" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.posture.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{h.posture.lead}</p>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">{healthcareComplianceOfficer}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <CompliancePosture />
        </RevealBlock>
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <TrackedLink href="/compliance/baa-request" section="posture" label={h.posture.baa} className="cta-link">{h.posture.baa} <Arrow /></TrackedLink>
          <Link href="/compliance/hipaa-posture" className="cta-link">{h.posture.print} <Arrow /></Link>
        </div>
      </Section>

      <Section label="Sensitive data">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{h.governance.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{h.governance.lead}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <SensitiveDataGovernance />
        </RevealBlock>
        <div className="mt-8">
          <Link href="/compliance/sensitive-data-governance" className="cta-link">{h.governance.print} <Arrow /></Link>
        </div>
      </Section>

      <Section label="MLR" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[22ch] font-display text-h2 font-medium">{mlr.heading}</h2>
        </RevealBlock>
        <RevealBlock className="mt-8">
          <MlrWorkflow />
        </RevealBlock>
      </Section>

      <Section label="Claims">
        <RevealBlock>
          <h2 className="max-w-[24ch] font-display text-h2 font-medium">{claims.heading}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <ClaimDiscipline />
        </RevealBlock>
        <RevealBlock className="mt-10">
          <MedicareNote />
        </RevealBlock>
      </Section>

      <Section label="Sales cycles" tone="bright">
        <RevealBlock>
          <h2 className="max-w-[24ch] font-display text-h2 font-medium">{h.cycles.h2}</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">{h.cycles.lead}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <SalesCycleTable />
        </RevealBlock>
        <div className="mt-8">
          <Link href="/resources/engagement-and-measurement-standard" className="cta-link">{h.cycles.link} <Arrow /></Link>
        </div>
      </Section>

      <Section label="Questions">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{h.faq}</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={complianceFaqs} />
          </div>
        </RevealBlock>
        <RevealBlock className="mt-16">
          <DownloadCard
            title={h.download.title}
            body={h.download.body}
            href="/compliance/hipaa-posture"
            showTier={false}
          />
        </RevealBlock>
        <div className="mt-14 flex flex-wrap items-center gap-6">
          <TrackedLink href="/compliance/baa-request" section="close" label={h.ctas.packet} className="btn btn-solid">
            {h.ctas.packet} <Arrow />
          </TrackedLink>
          <TrackedLink href="/contact" section="close" label={h.ctas.call} className="cta-link">
            {h.ctas.call} <Arrow />
          </TrackedLink>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
          {healthcareRelated.map((r) => (
            <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>
          ))}
        </div>
      </Section>

      <FounderStrip />
      <CTABand />
    </>
  );
}
