import { paperbrief } from "@/content/paperbrief";
import { llms, publishedOffers } from "@/content/site-nav";
import { visibility } from "@/content/visibility";
import { site } from "@/lib/site";
import { copyPages } from "@/lib/sitecopy";

// llms.txt: a plain summary of the company for AI assistants, built from the same copy the pages use,
// so a price or a page can never be stated here and differently on the site.
export function GET() {
  const u = site.url;
  const pages = copyPages();
  const lines = [
    `# ${llms.name}`,
    ``,
    `> ${llms.summary}`,
    ``,
    `## Facts`,
    ...llms.facts.map((f) => `- ${f}`),
    `- Legal entity: ${site.legalName}, doing business as ${llms.name}. Website: ${u}. Email: ${site.email}.`,
    ``,
    `## Published prices`,
    ...publishedOffers.map((o) => `- ${o.name}: ${o.price === 0 ? "free" : `$${o.price.toLocaleString("en-US")}`}${o.unit ? ` ${o.unit}` : ""}`),
    `- Full list: ${u}/pricing`,
    ``,
    `## Free tools`,
    `- [${visibility.product}](${u}${visibility.path}): ${visibility.description}`,
    `- [PaperBrief](${u}${paperbrief.path}): ${paperbrief.description}`,
    ``,
    `## Pages`,
    ...pages.map((p) => `- [${p.title.split(" | ")[0]}](${u}${p.path === "/" ? "" : p.path}): ${p.description}`),
    ``,
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
