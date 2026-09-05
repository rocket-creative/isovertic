import { notFound } from "next/navigation";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, caseStudyLd } from "@/lib/schema";
import { getCaseStudy, publishedCaseStudies, REPORTING_METHOD, STEP_ORDER, STUDY_WINDOW_NOTE } from "@/content/case-studies";
import type { Metadata } from "next";

export function generateStaticParams() {
  return publishedCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: `/results/${slug}` },
    openGraph: { type: "article", title: c.metaTitle, description: c.metaDescription, images: ["/og.png"] },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  return (
    <>
      <JsonLd
        data={[
          caseStudyLd(c),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Results", path: "/results" },
            { name: c.clientName, path: `/results/${slug}` },
          ]),
        ]}
      />

      <article className="mx-auto max-w-[1440px] gutter pt-32 lg:pt-40">
        <p className="eyebrow">Results · {c.industry}</p>
        <p className="mt-6 text-[13px] uppercase tracking-[0.18em] text-signal">{c.clientName}</p>
        <h1 className="mt-4 max-w-[24ch] font-display text-h1 font-medium">{c.title}</h1>
        <p className="mt-6 max-w-[62ch] text-[16px] text-ink-soft">{c.clientDescriptor}</p>
        <p className="mt-8 max-w-[62ch] text-[17px] leading-relaxed text-ink/90">{c.summary}</p>
        <div className="iso-mark rule-draw mt-12 max-w-[560px]" aria-hidden="true" />

        <div className="mt-14 grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {c.stats.map((s) => (
            <RevealBlock key={s.label} className="surface-card p-8">
              <p className="font-display text-[clamp(32px,3.6vw,52px)] font-semibold leading-none text-brass">{s.value}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/90">{s.label}</p>
              {s.note && <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{s.note}</p>}
            </RevealBlock>
          ))}
        </div>
        <p className="mt-6 pb-4 text-[13px] leading-relaxed text-ink-soft">
          {STUDY_WINDOW_NOTE[c.studyType]}
        </p>
      </article>

      <Section label="Situation" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">The situation</h2>
          <div className="mt-8 max-w-[68ch]">
            {c.situation.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-ink/90 first:mt-0">{p}</p>
            ))}
          </div>
        </RevealBlock>
      </Section>

      <Section label="What we ran">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What we ran</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[72ch] space-y-12">
          {STEP_ORDER.map((step, i) => {
            const s = c.steps[step];
            return (
              <RevealBlock key={step} as="li" delay={i * 60}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} {step}</p>
                {s ? (
                  <>
                    <h3 className="mt-3 font-display text-h3 font-semibold">{s.heading}</h3>
                    <p className="mt-4 leading-relaxed text-ink/90">{s.body}</p>
                  </>
                ) : (
                  <p className="mt-3 leading-relaxed text-ink-soft">Not in this engagement.</p>
                )}
              </RevealBlock>
            );
          })}
        </ol>
      </Section>

      <Section label="Why it worked" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Why it worked</h2>
          <div className="mt-8 max-w-[68ch]">
            {c.whyItWorked.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-ink/90 first:mt-0">{p}</p>
            ))}
          </div>
        </RevealBlock>
      </Section>

      <Section label="Timeline">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Timeline</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[68ch] space-y-6">
          {c.timeline.map((t, i) => (
            <RevealBlock key={t.month} as="li" delay={i * 50} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
              <p className="text-[13px] uppercase tracking-[0.14em] text-signal">{t.month}</p>
              <p className="leading-relaxed text-ink/90">{t.text}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>

      <Section label="Who this fits" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Who this fits</h2>
          <ul className="mt-8 max-w-[68ch] space-y-4">
            {c.fits.map((f) => (
              <li key={f} className="flex gap-4 leading-relaxed text-ink/90">
                <span className="text-ink-soft" aria-hidden="true">·</span>
                {f}
              </li>
            ))}
          </ul>
        </RevealBlock>
      </Section>

      <Section label="Method">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">{REPORTING_METHOD.heading}</h2>
          <div className="mt-8 max-w-[68ch]">
            {REPORTING_METHOD.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-[14px] leading-relaxed text-ink-soft first:mt-0">{p}</p>
            ))}
          </div>
          <h3 className="mt-12 font-display text-h3 font-semibold">This study</h3>
          <p className="mt-5 max-w-[68ch] text-[14px] leading-relaxed text-ink-soft">{c.baselineNote}</p>
          <ul className="mt-5 max-w-[68ch] space-y-3">
            {c.dataSources.map((d) => (
              <li key={d} className="flex gap-4 text-[14px] leading-relaxed text-ink-soft">
                <span aria-hidden="true">·</span>
                {d}
              </li>
            ))}
          </ul>
        </RevealBlock>
      </Section>

      <CTABand />

      <div className="mx-auto max-w-[1440px] gutter py-10">
        <Link href="/results" className="cta-link">All results <Arrow /></Link>
      </div>
    </>
  );
}
