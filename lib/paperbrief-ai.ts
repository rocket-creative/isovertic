import Anthropic from "@anthropic-ai/sdk";

// PaperBrief drafting. Server only. No person reviews this output before the user sees it, so the
// job is to stay inside what the paper's own text supports: read the abstract and the sentences that
// name the company, say plainly whether the paper shows the company's product in use, then write a
// summary and two posts that claim nothing the source does not.

export type Verdict = "used" | "mentioned" | "not_found";
export type Draft = {
  verdict: Verdict;
  reason: string;
  evidence: string;
  summary: string;
  linkedin: string;
  x: string;
  source: "full_text" | "abstract";
  model: string;
};

export const aiConfigured = () => Boolean(process.env.ANTHROPIC_API_KEY);

const EPMC = "https://www.ebi.ac.uk/europepmc/webservices/rest";

type Source = { abstract: string; mentions: string[]; fullText: boolean };

const strip = (xml: string) =>
  xml.replace(/<(xref|sup|sub)[^>]*>[\s\S]*?<\/\1>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

/** Abstract from Europe PMC, plus the sentences that name the company when the full text is open access. */
export async function paperSource(pmid: string, names: string[]): Promise<Source> {
  const url = new URL(`${EPMC}/search`);
  url.search = new URLSearchParams({ query: `EXT_ID:${pmid} AND SRC:MED`, format: "json", resultType: "core", pageSize: "1" }).toString();
  const res = await fetch(url.href, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(12_000), next: { revalidate: 86_400 } });
  if (!res.ok) throw new Error(`Europe PMC record failed (${res.status})`);
  const row = ((await res.json()) as { resultList?: { result?: Record<string, unknown>[] } }).resultList?.result?.[0] ?? {};
  const abstract = strip(String(row.abstractText ?? "")).slice(0, 6000);
  const pmcid = /^PMC\d{1,12}$/.test(String(row.pmcid)) ? String(row.pmcid) : "";

  const mentions: string[] = [];
  let fullText = false;
  if (pmcid && row.isOpenAccess === "Y") {
    try {
      const ft = await fetch(`${EPMC}/${pmcid}/fullTextXML`, { signal: AbortSignal.timeout(15_000), next: { revalidate: 86_400 } });
      if (ft.ok) {
        const xml = await ft.text();
        // The reference list names companies only as publishers or funders of other work; leave it out.
        const body = strip(xml.replace(/<ref-list[\s\S]*?<\/ref-list>/g, " "));
        const sentences = body.split(/(?<=[.!?])\s+(?=[A-Z(])/);
        const lower = names.map((n) => n.toLowerCase());
        fullText = true;
        for (let i = 0; i < sentences.length && mentions.length < 6; i++) {
          const s = sentences[i].toLowerCase();
          if (!lower.some((n) => s.includes(n))) continue;
          // One sentence either side, so the model can see what the company's part actually was.
          mentions.push([sentences[i - 1], sentences[i], sentences[i + 1]].filter(Boolean).join(" ").slice(0, 900));
        }
      }
    } catch {
      // No full text is a normal case. The abstract alone still supports a cautious draft.
    }
  }
  return { abstract, mentions, fullText };
}

const SYSTEM = `You draft publication posts for PaperBrief, a free tool from Isovertic that shows life science companies the peer reviewed papers that mention them.

The reader is someone in marketing or leadership at the company. They will paste your posts onto the company's LinkedIn and X accounts. No scientist reviews your output before they see it, and scientists in their field will read the posts. A post that overstates a finding, or that credits the company with something the paper does not show, damages the company's standing with exactly the people it sells to. So accuracy matters more than excitement, and a modest true post is the goal.

You receive the paper's citation, its abstract, and, when the full text is open access, the passages that name the company. That is everything you know about this paper. Work only from it.

First decide how the company appears in the paper:
- "used": a passage states that the authors obtained or used the company's product, model, reagent, instrument, or service in this work. Quote the sentence that shows it.
- "mentioned": the company is named, but the passages do not show its product in use in this study. Examples: an author works there, it funded the work, it is thanked, it is cited for something else, or the wording is ambiguous.
- "not_found": you were given no passage that names the company. This happens when only the abstract was available. It does not mean the company was absent from the paper.

Then write:
- summary: two or three plain sentences on what the study looked at and found, for a reader who is not a specialist in this subfield. Keep the authors' level of certainty. If the work was in mice or cells, say so, and do not extend it to people.
- linkedin: 60 to 110 words. Lead with the research, not the company. When the verdict is "used", say what the company supplied in the terms the paper uses, and no more. When it is "mentioned" or "not_found", congratulate the authors and describe the research without claiming the company's product was used. Do not include a link; the tool adds the PubMed link as the first comment.
- x: one post of at most 230 characters, same rules, no link and no hashtags.

Writing rules, which come from the company's style guide:
- Use the paper's own terminology for genes, models, and methods. Do not rename or simplify them into something a specialist would call wrong.
- No superlatives and no claims of a first, a breakthrough, or a cure. No treatment or clinical claims.
- Do not use dashes as punctuation. No emoji. No hashtags. No exclamation marks.
- Do not invent author names, affiliations, numbers, or findings. If the abstract is missing or too thin to summarize, say that in the summary and keep the posts to the citation facts.

For "reason", give one sentence a non scientist can act on, such as what to check in the paper before posting. For "evidence", copy one sentence verbatim from the passages that best shows the company's role, or leave it empty when there is none.`;

const SCHEMA = {
  type: "object",
  properties: {
    verdict: { type: "string", enum: ["used", "mentioned", "not_found"] },
    reason: { type: "string" },
    evidence: { type: "string" },
    summary: { type: "string" },
    linkedin: { type: "string" },
    x: { type: "string" },
  },
  required: ["verdict", "reason", "evidence", "summary", "linkedin", "x"],
  additionalProperties: false,
} as const;

const MODEL = "claude-opus-5-5";
// House style for anything a prospect reads: no dashes used as punctuation.
const tidy = (s: string) => s.replace(/\s*[—–]\s*/g, ", ").replace(/\s+/g, " ").trim();

export async function draftPaper(
  paper: { pmid: string; title: string; authors: string | null; journal: string | null; pub_date: string },
  company: { name: string; aliases: string[] },
): Promise<Draft> {
  const names = [company.name, ...company.aliases];
  const source = await paperSource(paper.pmid, names);
  const client = new Anthropic();
  const input = [
    `Company: ${company.name}${company.aliases.length ? ` (also written as: ${company.aliases.join("; ")})` : ""}`,
    `Title: ${paper.title}`,
    `Authors: ${paper.authors ?? "not given"}`,
    `Journal: ${paper.journal ?? "not given"}, first published ${paper.pub_date}`,
    `<abstract>\n${source.abstract || "No abstract is available for this record."}\n</abstract>`,
    source.fullText
      ? `<passages_naming_the_company>\n${source.mentions.length ? source.mentions.map((m, i) => `${i + 1}. ${m}`).join("\n") : "The open access full text was searched and no sentence outside the reference list names the company."}\n</passages_naming_the_company>`
      : "The full text is not open access, so no passages naming the company are available. Only the abstract is.",
  ].join("\n\n");

  // Life science abstracts can trip a safety classifier by topic alone. The fallback keeps a false
  // positive from leaving the user with nothing.
  const response = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 8000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
    system: SYSTEM,
    messages: [{ role: "user", content: input }],
  });
  if (response.stop_reason === "refusal") throw new Error("declined");
  const text = response.content.find((b) => b.type === "text");
  if (!text || text.type !== "text") throw new Error("no draft returned");
  const out = JSON.parse(text.text) as Omit<Draft, "source" | "model">;
  return {
    // A "used" verdict has to rest on a passage from the paper. Without full text there is none to rest on.
    verdict: out.verdict === "used" && !source.mentions.length ? "mentioned" : out.verdict,
    reason: tidy(out.reason),
    evidence: out.evidence.trim(),
    summary: tidy(out.summary),
    linkedin: tidy(out.linkedin),
    x: tidy(out.x),
    source: source.fullText ? "full_text" : "abstract",
    model: response.model,
  };
}
