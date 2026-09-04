import Link from "next/link";
import { notFound } from "next/navigation";
import { glossary, getTerm } from "@/content/glossary";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { definedTermLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) return {};
  return { title: { absolute: `${t.term}: Definition | ISOVERTIC Glossary` }, description: t.definition, alternates: { canonical: `/glossary/${slug}` } };
}

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTerm(slug);
  if (!t) notFound();
  const others = glossary.filter((x) => x.slug !== t.slug).slice(0, 6);
  return (
    <>
      <JsonLd data={[definedTermLd(t), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }, { name: t.term, path: `/glossary/${t.slug}` }])]} />
      <article className="mx-auto max-w-[1440px] px-5 pt-32 sm:px-8 lg:pt-40 xl:px-16">
        <p className="eyebrow">Glossary</p>
        <h1 className="mt-5 max-w-[20ch] font-display text-h1 font-medium">{t.term}</h1>
        <p className="mt-8 max-w-[62ch] font-display text-[clamp(20px,2.2vw,26px)] font-medium leading-snug">{t.definition}</p>
        <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">{t.detail}</p>
        <div className="iso-mark rule-draw mt-10 max-w-[560px]" aria-hidden="true" />
      </article>
      <Section label="Related">
        <RevealBlock>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {t.related.map((r) => <Link key={r.href} href={r.href} className="cta-link">{r.label} <Arrow /></Link>)}
          </div>
          <h2 className="mt-14 font-display text-h3 font-medium">More terms</h2>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((o) => <li key={o.slug}><Link href={`/glossary/${o.slug}`} className="text-[15px] underline underline-offset-4 hover:text-navy">{o.term}</Link></li>)}
          </ul>
        </RevealBlock>
      </Section>
      <CTABand />
    </>
  );
}
