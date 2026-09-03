import { getArticle, getArticles } from "@/lib/articles";
import { renderMd } from "@/lib/md";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: { absolute: `${a.title} | ISOVERTIC` }, description: a.description, alternates: { canonical: `/field-notes/${slug}` } };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return (
    <>
      <JsonLd data={[articleLd(a), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Field notes", path: "/field-notes" }, { name: a.title, path: `/field-notes/${slug}` }])]} />
      <article className="mx-auto max-w-[1440px] px-5 pt-32 sm:px-8 lg:pt-40 xl:px-16">
        <p className="eyebrow">Field notes · {a.datePublished}</p>
        <h1 className="mt-5 max-w-[24ch] font-display text-h1 font-medium">{a.title}</h1>
        <p className="mt-6 max-w-[62ch] text-[16px] text-ink-soft">By George Stoff, Founder</p>
        <div className="iso-mark rule-draw mt-10 max-w-[560px]" aria-hidden="true" />
        <div className="prose-iso mt-14 pb-10">{renderMd(a.body)}</div>
        <div className="border-t border-rule py-10">
          <Link href="/field-notes" className="cta-link">All field notes <Arrow /></Link>
        </div>
      </article>
      <FounderStrip />
      <CTABand />
    </>
  );
}
