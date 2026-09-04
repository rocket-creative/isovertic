import Link from "next/link";
import type { Page } from "@/content/types";
import { Section, PageHero } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, serviceLd, breadcrumbLd } from "@/lib/schema";

export function PageTemplate({
  page,
  basePath,
  crumbRoot,
  ld,
  searchPhrases,
  faqHeading = "What founders ask first",
}: {
  page: Page;
  basePath: string;
  crumbRoot: { name: string; path: string };
  ld?: object;
  searchPhrases?: string[];
  faqHeading?: string;
}) {
  const path = `${basePath}/${page.slug}`.replace("//", "/");
  return (
    <>
      <JsonLd
        data={[
          ld ?? serviceLd(page.h1, page.metaDescription, path),
          faqLd(page.faqs),
          breadcrumbLd([{ name: "Home", path: "/" }, crumbRoot, { name: page.eyebrow, path }]),
        ]}
      />
      <PageHero eyebrow={page.eyebrow} h1={page.h1} lead={page.lead} />
      {searchPhrases && searchPhrases.length > 0 && (
        <div className="border-b border-rule">
          <p className="mx-auto max-w-[1440px] px-5 py-5 text-[13px] leading-relaxed text-ink-soft sm:px-8 xl:px-16">
            <span className="uppercase tracking-[0.1em]">How people search this</span>
            <span aria-hidden="true"> · </span>
            {searchPhrases.join(" · ")}
          </p>
        </div>
      )}
      {page.callout && (
        <Section label={page.callout.label} deferred={false}>
          <RevealBlock>
            <p className="max-w-[62ch] leading-relaxed text-ink/90">{page.callout.body}</p>
          </RevealBlock>
        </Section>
      )}
      <Section label={page.eyebrow} tone="bright">
        <div className="max-w-[72ch] space-y-16">
          {page.sections.map((s, i) => (
            <RevealBlock key={i}>
              <h2 className="font-display text-h2 font-medium">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-5 leading-relaxed text-ink/90">{p}</p>
              ))}
            </RevealBlock>
          ))}
        </div>
      </Section>
      <Section label="Questions">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{faqHeading}</h2>
          <div className="mt-10 max-w-[72ch]">
            <FAQ faqs={page.faqs} />
          </div>
        </RevealBlock>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          {page.related.map((r) => (
            <Link key={r.href} href={r.href} className="cta-link">
              {r.label} <Arrow />
            </Link>
          ))}
        </div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
