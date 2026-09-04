import { getArticles } from "@/lib/articles";
import { answers } from "@/content/answers";
import { glossary } from "@/content/glossary";
import { tiers } from "@/content/tiers";
import { problems } from "@/content/problems";
import { site } from "@/lib/site";

export function GET() {
  const u = site.url;
  const lines = [
    `# ${site.name}`,
    ``,
    `> ${site.description}`,
    ``,
    `${site.name} is a growth firm in Bohemia, Long Island, New York, serving clients nationally. Six step system: Build, Rank, Run, Buy, Book, Educate. Then the client closes. AI runs scheduling, deployment, data collection, and research; humans create, design, review, test, and engage.`,
    ``,
    `## Pricing (published)`,
    ...tiers.map((t) => `- ${t.name}: ${t.price} ${t.per}. ${t.for} ${u}/pricing`),
    `- Protocol: $5,000 one day, $20,000 full team, $3,500 client add on. ${u}/protocol`,
    ``,
    `## Core pages`,
    `- [How it works](${u}/how-it-works)`,
    `- [Pricing](${u}/pricing)`,
    `- [Protocol](${u}/protocol)`,
    `- [About](${u}/about)`,
    `- [George Stoff, Founder and Lead Engineer](${u}/people/george-stoff)`,
    `- [Kristen Coughlin, Chief Operating Officer](${u}/people/kristen-coughlin)`,
    `- [Contact](${u}/contact)`,
    ``,
    `## Problems we solve`,
    ...problems.map((p) => `- [${p.h1}](${u}/problems/${p.slug}): ${p.metaDescription}`),
    ``,
    `## Answers`,
    ...answers.map((a) => `- [${a.question}](${u}/answers/${a.slug}): ${a.answer}`),
    ``,
    `## Glossary`,
    ...glossary.map((t) => `- [${t.term}](${u}/glossary/${t.slug}): ${t.definition}`),
    ``,
    `## Field notes`,
    ...getArticles().map((a) => `- [${a.title}](${u}/field-notes/${a.slug}): ${a.description}`),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
