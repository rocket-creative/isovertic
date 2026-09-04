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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["", "/how-it-works", "/pricing", "/protocol", "/about", "/answers", "/glossary", "/results", "/contact", "/long-island", "/field-notes", "/problems"];
  const urls: MetadataRoute.Sitemap = core.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  for (const s of services) urls.push({ url: `${site.url}/${s.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  for (const i of industries) urls.push({ url: `${site.url}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  for (const c of compares) urls.push({ url: `${site.url}/compare/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  for (const a of getArticles()) urls.push({ url: `${site.url}/field-notes/${a.slug}`, lastModified: new Date(a.dateModified), changeFrequency: "monthly", priority: 0.6 });
  for (const p of people) urls.push({ url: `${site.url}/people/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  for (const c of publishedCaseStudies) urls.push({ url: `${site.url}/results/${c.slug}`, lastModified: new Date(c.publishedDate), changeFrequency: "monthly", priority: 0.8 });
  for (const a of answers) urls.push({ url: `${site.url}/answers/${a.slug}`, lastModified: new Date(a.dateModified), changeFrequency: "monthly", priority: 0.7 });
  for (const p of problems) urls.push({ url: `${site.url}/problems/${p.slug}`, lastModified: new Date(p.dateModified), changeFrequency: "monthly", priority: 0.7 });
  for (const t of glossary) urls.push({ url: `${site.url}/glossary/${t.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.5 });
  return urls;
}
