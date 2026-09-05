import Link from "next/link";
import { notFound } from "next/navigation";
import { answers, getAnswer } from "@/content/answers";
import { tiers } from "@/content/tiers";
import { getPerson } from "@/content/people";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { qaLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return answers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) return {};
  return { title: { absolute: `${a.question} | ISOVERTIC` }, description: a.answer, alternates: { canonical: `/answers/${slug}` } };
}

export default async function AnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getAnswer(slug);
  if (!a) notFound();
  const author = getPerson(a.author);
  const tier = a.tier && a.tier !== "protocol" ? tiers.find((t) => t.slug === a.tier) : undefined;
  const siblings = answers.filter((x) => x.audience === a.audience && x.slug !== a.slug).slice(0, 4);
  return (
    <>
      <JsonLd data={[qaLd(a), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Answers", path: "/answers" }, { name: a.question, path: `/answers/${a.slug}` }])]} />
      <article className="mx-auto max-w-[1440px] gutter pt-32 lg:pt-40">
        <p className="eyebrow">Answers · Updated {a.dateModified}</p>
        <h1 className="mt-5 max-w-[26ch] font-display text-h1 font-medium">{a.question}</h1>
        <p className="mt-8 max-w-[62ch] font-display text-[clamp(20px,2.2vw,26px)] font-medium leading-snug text-ink">{a.answer}</p>
        <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">{a.detail}</p>
        <p className="mt-6 text-[14px] text-ink-soft">
          Answered by <Link href={`/people/${author?.slug}`} className="underline underline-offset-4 hover:text-navy">{author?.name}</Link>, {author?.title}
        </p>
        <div className="iso-mark rule-draw mt-10 max-w-[560px]" aria-hidden="true" />
      </article>
      {(tier || a.tier === "protocol") && (
        <Section label="Where it lives">
          <RevealBlock className="max-w-[62ch]">
            <p className="eyebrow">Where this lives in the system</p>
            {tier ? (
              <>
                <h2 className="mt-3 font-display text-h3 font-medium">{tier.name}, {tier.price} {tier.per}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/90">{tier.for}</p>
                <Link href="/pricing" className="cta-link mt-5">Pricing is published <Arrow /></Link>
              </>
            ) : (
              <>
                <h2 className="mt-3 font-display text-h3 font-medium">Protocol, $5,000 or $20,000, one time</h2>
                <Link href="/protocol" className="cta-link mt-5">See the Protocol <Arrow /></Link>
              </>
            )}
          </RevealBlock>
        </Section>
      )}
      <Section label="Related" tone="bright">
        <RevealBlock>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {a.related.map((r) => <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>)}
          </div>
          {siblings.length > 0 && (
            <>
              <h2 className="mt-14 font-display text-h3 font-medium">Also asked</h2>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {siblings.map((s) => (
                  <li key={s.slug}><Link href={`/answers/${s.slug}`} className="group block py-4 font-display text-[16px] font-medium group-hover:text-signal">{s.question}</Link></li>
                ))}
              </ul>
            </>
          )}
        </RevealBlock>
      </Section>
      <CTABand />
    </>
  );
}
