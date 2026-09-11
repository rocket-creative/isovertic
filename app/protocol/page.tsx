import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { TeamBios } from "@/components/sections/TeamBios";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import { LinkedCopy } from "@/components/ui/ClientQuote";
import { protocol as c } from "@/content/protocol";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Protocol. Train Your Team to Run the System | ISOVERTIC" },
  description: "Protocol is the training offer for healthcare, biotech, medical devices, and life sciences. One or two days at your office, eight runbooks. $5,000 or $20,000.",
  alternates: { canonical: "/protocol" },
};

export default function Protocol() {
  return (
    <>
      <JsonLd data={[faqLd(c.faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Protocol", path: "/protocol" }])]} />
      <PageHero eyebrow={c.eyebrow} h1={c.h1} lead={c.lead} />
      <section className="border-b border-rule">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-4 gutter py-8">
          <Link href="/contact" className="btn btn-solid">Book a Protocol call</Link>
          <Link href="/pricing" className="cta-link">See the monthly packages <Arrow /></Link>
        </div>
      </section>

      <Section label="Who this is for">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.keep.h2}</h2>
          {c.keep.body.map((p) => (
            <p key={p} className="mt-6 leading-relaxed text-ink/90">{p}</p>
          ))}
        </RevealBlock>
      </Section>

      <Section label="Who teaches" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.teachers.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90"><LinkedCopy text={c.teachers.body} /></p>
        </RevealBlock>
      </Section>

      <Section label="The six steps">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.steps.h2}</h2>
          <ul className="mt-6 space-y-4 leading-relaxed text-ink/90">
            {c.steps.items.map((item) => (
              <li key={item.name}><strong>{item.name}</strong> {item.body}</li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-ink/90">{c.steps.after}</p>
        </RevealBlock>
      </Section>

      <Section label="Two versions" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Two ways to buy Protocol.</h2>
        </RevealBlock>
        <div className="mt-12 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2">
          {c.versions.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 100} className="flex h-full flex-col surface-card p-8">
              <p className="eyebrow">{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{t.price}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{t.per}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/90">{t.for}</p>
              <ul className="mt-6 grow space-y-3 border-t border-rule pt-6 text-[14px] leading-relaxed text-ink-soft">
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-ghost mt-9">Book a Protocol call</Link>
            </RevealBlock>
          ))}
        </div>
        <RevealBlock className="mt-10 max-w-[68ch]">
          <p className="leading-relaxed text-ink/90">{c.departmentNote}</p>
          <p className="mt-5 leading-relaxed text-ink/90">{c.fullTeamNote}</p>
        </RevealBlock>
      </Section>

      <Section label="Current clients">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.clientAddOn.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.clientAddOn.body}</p>
        </RevealBlock>
      </Section>

      <Section label="What it does not do" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.notDo.h2}</h2>
          {c.notDo.body.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-ink/90">{p}</p>
          ))}
        </RevealBlock>
      </Section>

      <Section label="The finish line">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.finish.h2}</h2>
          {c.finish.body.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-ink/90">{p}</p>
          ))}
        </RevealBlock>
      </Section>

      <Section label="Questions">
        <h2 className="font-display text-h2 font-medium">What operators ask first</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={c.faqs} /></div>
      </Section>

      <Section label="Start here" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.start.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            <strong>{c.start.known.label}</strong> <LinkedCopy text={c.start.known.body} />
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            <strong>{c.start.talk.label}</strong> <LinkedCopy text={c.start.talk.body} />
          </p>
        </RevealBlock>
      </Section>

      <TeamBios heading="The people who teach this." />
      <CTABand />
    </>
  );
}
