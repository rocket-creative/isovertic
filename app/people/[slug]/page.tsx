import { people, getPerson } from "@/content/people";
import { getArticles } from "@/lib/articles";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { personLd, breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) return {};
  return { title: { absolute: `${p.name}, ${p.title} | ISOVERTIC` }, description: p.short, alternates: { canonical: `/people/${slug}` } };
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPerson(slug);
  if (!p) notFound();
  const articles = getArticles().filter((a) => a.author === p.slug || a.reviewedBy === p.slug);
  return (
    <>
      <JsonLd data={[personLd(p), breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: p.name, path: `/people/${p.slug}` }])]} />
      <PageHero eyebrow={p.title} h1={p.name} lead={p.short} />
      <Section label="Bio">
        <RevealBlock className="max-w-[68ch] space-y-5 leading-relaxed text-ink/90">
          {p.bio.map((b, i) => <p key={i}>{b}</p>)}
        </RevealBlock>
      </Section>
      <Section label="Credentials" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">On the record</h2>
          <ul className="mt-8 max-w-[68ch] space-y-3 leading-relaxed text-ink/90">
            {p.credentials.map((c) => <li key={c} className="flex gap-3"><span aria-hidden="true">·</span>{c}</li>)}
          </ul>
          {p.sameAs && (
            <div className="mt-8 flex flex-wrap gap-6">
              {p.sameAs.map((u) => <a key={u} href={u} rel="noopener noreferrer me" className="cta-link">LinkedIn <Arrow /></a>)}
            </div>
          )}
        </RevealBlock>
      </Section>
      {articles.length > 0 && (
        <Section label="Writing">
          <RevealBlock>
            <h2 className="font-display text-h2 font-medium">Field notes by {p.name.split(" ")[0]}</h2>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/field-notes/${a.slug}`} className="group flex items-baseline justify-between gap-6 py-5">
                    <span className="font-display text-[17px] font-medium group-hover:text-signal">{a.title}</span>
                    <span className="text-[12px] text-ink-soft">{a.author === p.slug ? "Author" : "Reviewer"}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </RevealBlock>
        </Section>
      )}
      <CTABand />
    </>
  );
}
