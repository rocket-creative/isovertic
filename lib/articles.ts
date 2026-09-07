import fs from "fs";
import path from "path";
import { archiveOrder, categoryBySlug, type CategoryKey } from "@/content/thought";

export type Article = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  datePublished: string;
  dateModified: string;
  author: string; // people slug
  reviewedBy?: string; // people slug
  category: CategoryKey; // archive section on /field-notes
  flagship: boolean; // exactly one article carries flagship: true
  formerFlagship: boolean; // set when a new flagship replaces it
  readingMinutes: number; // from frontmatter when set, else computed at 230 words a minute
  correction?: string; // shown at the top of the essay with its date, never silently edited
  body: string; // markdown after the H1
};

const dir = path.join(process.cwd(), "content", "articles");

function orderIndex(slug: string): number {
  const i = archiveOrder.indexOf(slug);
  return i === -1 ? archiveOrder.length + 1 : i;
}

export function getArticles(): Article[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseArticle(fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => orderIndex(a.slug) - orderIndex(b.slug) || b.datePublished.localeCompare(a.datePublished));
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getFlagship(): Article | undefined {
  return getArticles().find((a) => a.flagship);
}

export function getRelated(a: Article, n = 3): Article[] {
  const all = getArticles().filter((x) => x.slug !== a.slug);
  const same = all.filter((x) => x.category === a.category);
  const rest = all.filter((x) => x.category !== a.category);
  return [...same, ...rest].slice(0, n);
}

function parseReadingMinutes(meta: Record<string, string>, words: number): number {
  if (meta.readingMinutes) {
    const n = parseInt(meta.readingMinutes, 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  if (meta.readTime) {
    const n = parseInt(meta.readTime.replace(/[^\d]/g, ""), 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }
  return Math.max(1, Math.round(words / 230));
}

function parseArticle(raw: string): Article {
  const fm = raw.match(/^---\n([\s\S]*?)\n---/);
  const meta: Record<string, string> = {};
  if (fm) {
    for (const line of fm[1].split("\n")) {
      const idx = line.indexOf(":");
      if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  let body = fm ? raw.slice(fm[0].length) : raw;
  body = body.replace(/^\s*# .*\n/m, "").trim();
  const slug = meta.slug || "";
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: meta.title || "",
    description: meta.description || "",
    primaryKeyword: meta.primaryKeyword || "",
    datePublished: meta.datePublished || "2026-09-07",
    dateModified: meta.dateModified || meta.datePublished || "2026-09-07",
    author: meta.author || "george-stoff",
    reviewedBy: meta.reviewedBy || undefined,
    category: (meta.category as CategoryKey) || categoryBySlug[slug] || "the-argument",
    flagship: meta.flagship === "true",
    formerFlagship: meta.formerFlagship === "true",
    readingMinutes: parseReadingMinutes(meta, words),
    correction: meta.correction || undefined,
    body,
  };
}
