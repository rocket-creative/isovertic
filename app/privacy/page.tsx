import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { privacy, legalUpdated } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: privacy.title },
  description: privacy.lead,
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }])} />
      <PageHero eyebrow={`Privacy · Updated ${legalUpdated}`} h1={privacy.h1} lead={privacy.lead} />
      <Section label="Policy">
        <div className="max-w-[72ch] space-y-12">
          {privacy.sections.map((s) => (
            <RevealBlock key={s.h2}>
              <h2 className="font-display text-h3 font-medium">{s.h2}</h2>
              {s.body.map((p, i) => <p key={i} className="mt-4 leading-relaxed text-ink/90">{p}</p>)}
            </RevealBlock>
          ))}
        </div>
      </Section>
    </>
  );
}
