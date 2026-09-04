import { problems, getProblem } from "@/content/problems";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { problemLd } from "@/lib/schema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getProblem(slug);
  if (!page) return {};
  return { title: { absolute: `${page.title} | ISOVERTIC` }, description: page.metaDescription, alternates: { canonical: `/problems/${slug}` } };
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
