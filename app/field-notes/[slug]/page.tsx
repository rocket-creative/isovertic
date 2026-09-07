import { getArticle, getArticles, getRelated } from "@/lib/articles";
import { renderMd } from "@/lib/md";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/schema";
import { getPerson } from "@/content/people";
import { AuthorBio, RelatedEssays, categoryLabel } from "@/components/thought/Cards";
import { SubscribeCard } from "@/components/thought/SubscribeCard";
import { ReadTracker } from "@/components/thought/ReadTracker";
import { essayTemplate as t, hub } from "@/content/thought";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: { absolute: `${a.title} | ISOVERTIC` },
    description: a.description,
    alternates: { canonical: `/field-notes/${slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, images: ["/og.png"] },
  };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const author = getPerson(a.author);
  const reviewer = a.reviewedBy ? getPerson(a.reviewedBy) : undefined;
  const related = getRelated(a, 3);
  return (
    <>
      <JsonLd data={[articleLd(a), breadcrumbLd([{ name: "Home", path: "/" }, { name: hub.eyebrow, path: hub.path }, { name: a.title, path: `/field-notes/${slug}` }])]} />
      <ReadTracker slug={a.slug} category={a.category} />
      <article>
        <header className="border-b border-rule bg-bright">
          <div className="mx-auto max-w-[1440px] gutter pt-32 pb-14 lg:pt-40">
            <p className="eyebrow">
              {a.flagship ? hub.flagshipEyebrow : categoryLabel(a.category)} · {a.readingMinutes} min read · Published {a.datePublished}
              {a.dateModified !== a.datePublished ? ` · Updated ${a.dateModified}` : ""}
            </p>
            <h1 className="mt-5 max-w-[24ch] font-display text-h1 font-medium">{a.title}</h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">{a.description}</p>
            <p className="mt-6 max-w-[62ch] text-[15px] text-ink-soft">
              By <Link href={`/people/${author?.slug}`} className="underline underline-offset-4 hover:text-navy">{author?.name}</Link>, {author?.title}
              {reviewer && <> · Reviewed by <Link href={`/people/${reviewer.slug}`} className="underline underline-offset-4 hover:text-navy">{reviewer.name}</Link>, {reviewer.title}</>}
            </p>
            <div className="iso-mark rule-draw mt-10 max-w-[560px]" aria-hidden="true" />
            {a.correction && (
              <aside className="callout callout--correction mt-10 max-w-[68ch]">
                <p className="callout__label">{t.correctionLabel}</p>
                <p>{a.correction}</p>
              </aside>
            )}
          </div>
        </header>
        <div className="mx-auto max-w-[1440px] gutter">
          <div className="prose-iso mt-14 pb-10">{renderMd(a.body)}</div>
          <div className="max-w-[68ch] pb-16">
            <AuthorBio slug={a.author} eyebrow={t.authorEyebrow} />
          </div>
        </div>
      </article>
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1440px] gutter py-20">
          <RelatedEssays items={related} heading={t.relatedH2} />
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <SubscribeCard />
            <div className="pt-4">
              <Link href={hub.path} className="cta-link">{t.allLink} <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
