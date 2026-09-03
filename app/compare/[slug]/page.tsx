import { compares, getCompare } from "@/content/compare";
import { PageTemplate } from "@/components/sections/PageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return compares.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompare(slug);
  if (!page) return {};
  return { title: { absolute: page.title }, description: page.metaDescription, alternates: { canonical: `/compare/${slug}` } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCompare(slug);
  if (!page) notFound();
  return <PageTemplate page={page} basePath="/compare" crumbRoot={{ name: "Compare", path: "/compare/" + slug }} />;
}
