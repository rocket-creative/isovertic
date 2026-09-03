import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { compares } from "@/content/compare";
import { getArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["", "/how-it-works", "/pricing", "/about", "/results", "/contact", "/long-island", "/field-notes"];
  const urls: MetadataRoute.Sitemap = core.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8,
  }));
  for (const s of services) urls.push({ url: `${site.url}/${s.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  for (const i of industries) urls.push({ url: `${site.url}/industries/${i.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  for (const c of compares) urls.push({ url: `${site.url}/compare/${c.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 });
  for (const a of getArticles()) urls.push({ url: `${site.url}/field-notes/${a.slug}`, lastModified: new Date(a.datePublished), changeFrequency: "monthly", priority: 0.6 });
  return urls;
}
