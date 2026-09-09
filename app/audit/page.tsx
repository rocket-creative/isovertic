import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { TeamBios } from "@/components/sections/TeamBios";
import { LinkedCopy } from "@/components/ui/ClientQuote";
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
      <Section label="What you get">
        <div className="max-w-[72ch] space-y-16">
          {m.sections.map((s) => (
            <RevealBlock key={s.h2}>
              <h2 className="font-display text-h2 font-medium">{s.h2}</h2>
              {s.body.map((p) => <p key={p} className="mt-5 leading-relaxed text-ink/90"><LinkedCopy text={p} /></p>)}
              {s.list && (
                <ul className="mt-5 space-y-3 leading-relaxed text-ink/90">
                  {s.list.map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true">·</span><span>{x}</span></li>)}
                </ul>
              )}
              {s.after && <p className="mt-5 leading-relaxed text-ink/90"><LinkedCopy text={s.after} /></p>}
            </RevealBlock>
          ))}
        </div>
      </Section>
      <Section label="The Isovertic move" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Take the Isovertic move.</h2>
          <p className="mt-6 leading-relaxed text-ink/90"><LinkedCopy text={m.move} /></p>
          <p className="mt-5 leading-relaxed text-ink/90"><LinkedCopy text={m.moveNote} /></p>
        </RevealBlock>
      </Section>
      <TeamBios heading="The people behind the system." />
      <CTABand />
    </>
  );
}
