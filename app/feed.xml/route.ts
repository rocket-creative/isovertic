import { getArticles } from "@/lib/articles";
import { site } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getArticles()
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${site.url}/field-notes/${a.slug}</link>
      <guid>${site.url}/field-notes/${a.slug}</guid>
      <pubDate>${new Date(a.datePublished).toUTCString()}</pubDate>
      <description>${esc(a.description)}</description>
    </item>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} Field Notes</title>
    <link>${site.url}/field-notes</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(site.description)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
