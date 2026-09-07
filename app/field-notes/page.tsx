import Link from "next/link";
import type { Metadata } from "next";
import { getArticles, getFlagship } from "@/lib/articles";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { FlagshipCard, DiagnosticCard, EssayArchive, AuthorGrid } from "@/components/thought/Cards";
import { SubscribeCard } from "@/components/thought/SubscribeCard";
import { hub } from "@/content/thought";

export const metadata: Metadata = {
  title: { absolute: hub.title },
  description: hub.description,
  alternates: { canonical: hub.path },
};

export default function FieldNotes() {
  const articles = getArticles();
  const flagship = getFlagship();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: hub.eyebrow, path: hub.path }])} />
      <PageHero eyebrow={hub.eyebrow} h1={hub.h1} lead={hub.lead} />

      {flagship && <FlagshipCard a={flagship} />}

      <Section label="Tools" tone="bright" deferred={false}>
        <div className="grid gap-px bg-rule md:grid-cols-2">
          <RevealBlock>
            <DiagnosticCard />
          </RevealBlock>
          <RevealBlock delay={80}>
            <SubscribeCard variant="research" />
          </RevealBlock>
        </div>
      </Section>

      <Section label="Archive">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{hub.archiveH2}</h2>
        </RevealBlock>
        <div className="mt-12">
          <EssayArchive articles={articles} />
        </div>
      </Section>

      <Section label="Authors" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{hub.authorsH2}</h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">{hub.authorsNote}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <AuthorGrid articles={articles} />
        </RevealBlock>
        <div className="mt-8">
          <Link href={hub.editorialLink.href} className="cta-link">{hub.editorialLink.label} <Arrow /></Link>
        </div>
      </Section>

      <Section label="Subscribe">
        <RevealBlock className="max-w-[720px]">
          <SubscribeCard />
        </RevealBlock>
      </Section>

      <CTABand />
    </>
  );
}
