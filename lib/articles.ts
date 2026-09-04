import fs from "fs";
import path from "path";

export type Article = {
  slug: string;
  title: string;
  description: string;
  primaryKeyword: string;
  datePublished: string;
  dateModified: string;
  author: string; // people slug
  reviewedBy?: string; // people slug
  body: string; // markdown after the H1
};

const dir = path.join(process.cwd(), "content", "articles");

export function getArticles(): Article[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseArticle(fs.readFileSync(path.join(dir, f), "utf8")))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
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
  return {
    slug: meta.slug || "",
    title: meta.title || "",
    description: meta.description || "",
    primaryKeyword: meta.primaryKeyword || "",
    datePublished: meta.datePublished || "2026-06-12",
    dateModified: meta.dateModified || meta.datePublished || "2026-06-12",
    author: meta.author || "george-stoff",
    reviewedBy: meta.reviewedBy || undefined,
    body,
  };
}
