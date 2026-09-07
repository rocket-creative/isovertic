import fs from "fs";
import path from "path";
import { categoryBySlug, type CategoryKey } from "@/content/thought";

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
  readingMinutes: number; // computed from the body at 230 words a minute
  correction?: string; // shown at the top of the essay with its date, never silently edited
  body: string; // markdown after the H1
};

const dir = path.join(process.cwd(), "content", "articles");

export function getArticles(): Article[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseArticle(fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
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
    datePublished: meta.datePublished || "2026-06-12",
    dateModified: meta.dateModified || meta.datePublished || "2026-06-12",
    author: meta.author || "george-stoff",
    reviewedBy: meta.reviewedBy || undefined,
    category: (meta.category as CategoryKey) || categoryBySlug[slug] || "pipeline-ownership",
    flagship: meta.flagship === "true",
    formerFlagship: meta.formerFlagship === "true",
    readingMinutes: Math.max(1, Math.round(words / 230)),
    correction: meta.correction || undefined,
    body,
  };
}
