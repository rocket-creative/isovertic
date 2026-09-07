import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { breadcrumbLd, resourceLd } from "@/lib/schema";
import { editorialStandard as e, hub } from "@/content/thought";

export const metadata: Metadata = {
  title: { absolute: e.title },
  description: e.description,
  alternates: { canonical: e.path },
};

export default function EditorialStandard() {
  return (
    <>
      <JsonLd
        data={[
          resourceLd({ headline: e.h1, description: e.description, path: e.path, datePublished: "2026-09-07", dateModified: "2026-09-07", section: "Field notes" }),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: hub.eyebrow, path: hub.path }, { name: e.eyebrow, path: e.path }]),
        ]}
      />
      <PageHero eyebrow={e.eyebrow} h1={e.h1} lead={e.lead} />
      <Section label="The standard" deferred={false}>
        <div className="max-w-[68ch] space-y-14">
          {e.sections.map((s) => (
            <RevealBlock key={s.h2}>
              <h2 className="font-display text-h2 font-medium">{s.h2}</h2>
              {s.body.map((p) => <p key={p} className="mt-5 leading-relaxed text-ink/90">{p}</p>)}
            </RevealBlock>
          ))}
        </div>
        <div className="mt-14">
          <Link href={hub.path} className="cta-link">All field notes <Arrow /></Link>
        </div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
