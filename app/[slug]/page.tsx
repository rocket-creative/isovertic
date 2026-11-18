import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyPageView } from "@/components/sections/CopyPage";
import { copyPages } from "@/lib/sitecopy";

// Pages drafted in content/site-copy that do not have a route folder of their own.
const OWN_ROUTE = new Set(["/", "/about", "/contact", "/pricing"]);
const find = (slug: string) => copyPages().find((p) => p.path === `/${slug}` && !OWN_ROUTE.has(p.path));

export const dynamicParams = false;
export function generateStaticParams() {
  return copyPages().filter((p) => !OWN_ROUTE.has(p.path)).map((p) => ({ slug: p.path.slice(1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = find((await params).slug);
  if (!page) return {};
  return { title: { absolute: page.title }, description: page.description, alternates: { canonical: page.path } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const page = find((await params).slug);
  if (!page) notFound();
  return <CopyPageView path={page.path} />;
}
