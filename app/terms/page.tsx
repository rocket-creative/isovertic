import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { terms, legalUpdated } from "@/content/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: terms.title },
  description: terms.lead,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])} />
      <PageHero eyebrow={`Terms · Updated ${legalUpdated}`} h1={terms.h1} lead={terms.lead} />
      <Section label="Terms">
        <div className="max-w-[72ch] space-y-12">
          {terms.sections.map((s) => (
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
