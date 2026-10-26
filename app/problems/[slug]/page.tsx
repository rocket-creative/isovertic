import { problems, getProblem } from "@/content/problems";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { problemLd } from "@/lib/schema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { metaDescription, metaTitle } from "@/lib/meta";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getProblem(slug);
  if (!page) return {};
  return { title: { absolute: metaTitle(page.title) }, description: metaDescription(page.metaDescription), alternates: { canonical: `/problems/${slug}` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getProblem(slug);
  if (!page) notFound();
  return (
    <PageTemplate
      page={page}
      basePath="/problems"
      crumbRoot={{ name: "Problems", path: "/problems" }}
      ld={problemLd(page)}
      searchPhrases={page.searchPhrases}
      faqHeading="Questions on this problem"
    />
  );
}
