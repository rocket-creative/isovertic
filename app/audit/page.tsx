import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { AuditWizard } from "@/components/audit/AuditWizard";
import { breadcrumbLd, webApplicationLd } from "@/lib/schema";
import { auditMeta as m } from "@/content/audit";

export const metadata: Metadata = {
  title: { absolute: m.title },
  description: m.description,
  alternates: { canonical: m.path },
};

export default function Audit() {
  return (
    <>
      <JsonLd
        data={[
          webApplicationLd({ name: "The Pipeline Ownership Audit", description: m.description, path: m.path }),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Field notes", path: "/field-notes" }, { name: m.eyebrow, path: m.path }]),
        ]}
      />
      <PageHero eyebrow={m.eyebrow} h1={m.h1} lead={m.lead} />
      <Section label="The audit" deferred={false}>
        <div className="max-w-[820px]">
          <AuditWizard />
        </div>
      </Section>
      <Section label="Why these ten" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{m.whyH2}</h2>
          {m.why.map((p) => <p key={p} className="mt-6 leading-relaxed text-ink/90">{p}</p>)}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {m.related.map((r) => <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>)}
          </div>
        </RevealBlock>
      </Section>
      <CTABand />
    </>
  );
}
