import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { compares } from "@/content/compare";
import { getArticles } from "@/lib/articles";
import { answers } from "@/content/answers";
import { glossary } from "@/content/glossary";
import { people } from "@/content/people";
import { publishedCaseStudies } from "@/content/case-studies";
import { problems } from "@/content/problems";

// lastmod is the date the page's main content last changed, not the build time. Google ignores lastmod that
// moves on every deploy, and ignores priority and changefreq entirely, so neither is emitted.
// Bump CORE_UPDATED when a static page's copy changes. Collections carry their own dateModified.
const CORE_UPDATED: Record<string, string> = {
  "": "2026-09-05",
  "/how-it-works": "2026-09-05",
  "/pricing": "2026-09-05",
  "/protocol": "2026-09-04",
  "/about": "2026-09-05",
  "/answers": "2026-09-05",
  "/glossary": "2026-09-05",
  "/results": "2026-09-05",
  "/contact": "2026-09-05",
  "/long-island": "2026-09-05",
  "/field-notes": "2026-09-05",
  "/problems": "2026-09-04",
  "/start": "2026-09-05",
  "/services": "2026-09-05",
  "/industries": "2026-09-05",
  "/compare": "2026-09-05",
  "/privacy": "2026-09-05",
  "/terms": "2026-09-05",
};

const d = (s: string) => new Date(s);

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = Object.entries(CORE_UPDATED).map(([p, when]) => ({ url: `${site.url}${p}`, lastModified: d(when) }));
  for (const s of services) urls.push({ url: `${site.url}/${s.slug}`, lastModified: d(s.dateModified ?? "2026-09-05") });
  for (const i of industries) urls.push({ url: `${site.url}/industries/${i.slug}`, lastModified: d(i.dateModified ?? "2026-09-05") });
  for (const c of compares) urls.push({ url: `${site.url}/compare/${c.slug}`, lastModified: d(c.dateModified ?? "2026-09-04") });
  for (const a of getArticles()) urls.push({ url: `${site.url}/field-notes/${a.slug}`, lastModified: d(a.dateModified) });
  for (const p of people) urls.push({ url: `${site.url}/people/${p.slug}`, lastModified: d(p.dateModified ?? "2026-09-05") });
  for (const c of publishedCaseStudies) urls.push({ url: `${site.url}/results/${c.slug}`, lastModified: d(c.publishedDate) });
  for (const a of answers) urls.push({ url: `${site.url}/answers/${a.slug}`, lastModified: d(a.dateModified) });
  for (const p of problems) urls.push({ url: `${site.url}/problems/${p.slug}`, lastModified: d(p.dateModified) });
  for (const t of glossary) urls.push({ url: `${site.url}/glossary/${t.slug}`, lastModified: d(t.dateModified ?? "2026-09-04") });
  return urls;
}
