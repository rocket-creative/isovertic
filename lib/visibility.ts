import Anthropic from "@anthropic-ai/sdk";
import type { SupabaseClient } from "@supabase/supabase-js";
import { PROVIDER_ORDER, activeProviders, ask, type Provider } from "@/lib/visibility-providers";

// The free AI visibility snapshot, software only. Server only.
// 1. Read the company's own site and check whether AI crawlers can.
// 2. Write the questions a buyer would ask (the requester can edit them).
// 3. Ask each assistant each question several times, because answers change from run to run.
// 4. Count how often the company is named, and have Claude compare what was said with the site.
// Nobody at Isovertic reads a snapshot before the requester does. The report says so.

export const QUESTIONS = 10;
export const RUNS = 3;
export const DAYS_BETWEEN = 30;
export const JOBS_PER_DAY = 20;

export type Crawl = {
  reachable: boolean;
  robots: "found" | "missing";
  bots: { name: string; owner: string; blocked: boolean }[];
  words: number;
  title: string;
  description: string;
  structuredData: boolean;
  sitemap: boolean;
  llmsTxt: boolean;
};
export type Job = {
  id: string; created_at: string; account_id: string; company: string; domain: string; sells: string; buyers: string | null;
  competitors: string[]; questions: string[]; crawl: Crawl | null; site_text: string | null;
  status: "questions" | "running" | "analyzing" | "done" | "failed"; report: Report | null; origin: string | null;
  locked_until: string | null; started_at: string | null; done_at: string | null; google_requested_at: string | null;
};
export type Report = {
  providers: Provider[];
  overall: { named: number; asked: number };
  byProvider: { provider: Provider; named: number; asked: number; failed: number }[];
  byQuestion: { question: string; cells: { provider: Provider; named: number; asked: number }[] }[];
  headline: string;
  described: string;
  competitors: { name: string; mentions: number }[];
  wrong: { assistant: string; question: string; said: string; site_says: string }[];
  fixes: { title: string; why: string; how: string }[];
};

// ---------- reading the site ----------

const BOTS: [string, string][] = [
  ["GPTBot", "OpenAI training"],
  ["OAI-SearchBot", "ChatGPT search"],
  ["ChatGPT-User", "ChatGPT browsing"],
  ["ClaudeBot", "Anthropic"],
  ["Claude-SearchBot", "Claude search"],
  ["PerplexityBot", "Perplexity"],
  ["Google-Extended", "Gemini"],
  ["Googlebot", "Google Search and AI answers"],
];

async function get(url: string, max = 700_000): Promise<{ ok: boolean; status: number; text: string }> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "IsoverticSnapshot/1.0 (+https://isovertic.com/ai-visibility-audit)", Accept: "text/html,text/plain,*/*" },
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const text = res.ok ? (await res.text()).slice(0, max) : "";
    return { ok: res.ok, status: res.status, text };
  } catch {
    return { ok: false, status: 0, text: "" };
  }
}

/** Is this crawler shut out of the whole site by robots.txt? Reads its own group, else the * group. */
function blocked(robots: string, bot: string): boolean {
  const groups: { agents: string[]; rules: string[] }[] = [];
  let current: { agents: string[]; rules: string[] } | null = null;
  let lastWasAgent = false;
  for (const raw of robots.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, "").trim();
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "user-agent") {
      if (!current || !lastWasAgent) groups.push((current = { agents: [], rules: [] }));
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
    } else {
      lastWasAgent = false;
      if (current && (key === "disallow" || key === "allow")) current.rules.push(`${key}:${value}`);
    }
  }
  const group = groups.find((g) => g.agents.includes(bot.toLowerCase())) ?? groups.find((g) => g.agents.includes("*"));
  return Boolean(group && group.rules.includes("disallow:/") && !group.rules.includes("allow:/"));
}

const visible = (html: string) =>
  html
    .replace(/<(script|style|noscript|svg|template)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Fetches the site the way a crawler does, with no JavaScript, and reports what a crawler would find. */
export async function readSite(domain: string): Promise<{ crawl: Crawl; text: string }> {
  const base = `https://${domain}`;
  const [home, robots, llms, sitemap] = await Promise.all([get(`${base}/`), get(`${base}/robots.txt`, 100_000), get(`${base}/llms.txt`, 2000), get(`${base}/sitemap.xml`, 2000)]);
  const homeText = visible(home.text);
  const robotsOk = robots.ok && !/<html/i.test(robots.text);

  // A few more pages give the fact check something to check against. Same host only.
  const links = [...home.text.matchAll(/href=["']([^"'#?]+)["']/gi)]
    .map((m) => m[1])
    .filter((h) => /about|service|product|capabilit|technolog|platform|solution|what-we|model|catalog/i.test(h))
    .map((h) => {
      try {
        const u = new URL(h, `${base}/`);
        return u.hostname.replace(/^www\./, "") === domain.replace(/^www\./, "") ? u.href : "";
      } catch {
        return "";
      }
    })
    .filter(Boolean);
  const extra = await Promise.all([...new Set(links)].slice(0, 4).map((u) => get(u, 400_000)));
  const text = [homeText.slice(0, 9000), ...extra.map((p) => visible(p.text).slice(0, 5000))].filter(Boolean).join("\n\n").slice(0, 26_000);

  return {
    text,
    crawl: {
      reachable: home.ok,
      robots: robotsOk ? "found" : "missing",
      bots: BOTS.map(([name, owner]) => ({ name, owner, blocked: robotsOk ? blocked(robots.text, name) : false })),
      words: homeText ? homeText.split(" ").length : 0,
      title: visible(home.text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").slice(0, 160),
      description: (home.text.match(/<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1] ?? "").slice(0, 300),
      structuredData: /application\/ld\+json/i.test(home.text),
      sitemap: sitemap.ok || /^sitemap:/im.test(robots.text),
      llmsTxt: llms.ok && !/<html/i.test(llms.text),
    },
  };
}

// ---------- Claude: questions and the final read ----------

const MODEL = "claude-opus-5-5";
const tidy = (s: string) => s.replace(/\s*[—–]\s*/g, ", ").replace(/\s+/g, " ").trim();

async function structured<T>(system: string, user: string, schema: Record<string, unknown>, effort: "low" | "medium" | "high"): Promise<T> {
  const client = new Anthropic({ timeout: 180_000, maxRetries: 1 });
  const response = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 16_000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort, format: { type: "json_schema", schema } },
    system,
    messages: [{ role: "user", content: user }],
  });
  if (response.stop_reason === "refusal") throw new Error("declined");
  const block = response.content.find((b) => b.type === "text");
  if (!block || block.type !== "text") throw new Error("no output");
  return JSON.parse(block.text) as T;
}

const QUESTION_SYSTEM = `You write the test questions for an AI visibility snapshot. The snapshot asks AI assistants (ChatGPT, Gemini, Perplexity, Claude) the questions a buyer would ask when looking for a vendor, then counts how often a particular life science company is named in the answers.

Write exactly ${QUESTIONS} questions a real buyer of this company's products or services would type into an AI assistant. The buyer is a working professional in the field: a scientist, lab manager, study director, procurement lead, or founder, depending on what the company sells.

What makes a question useful here:
- It asks for vendors, providers, suppliers, or options, so that a good answer names companies. "Which CROs run GLP toxicology studies in minipigs?" works. "What is a GLP toxicology study?" does not, because no company would be named.
- It never contains the company's own name or its product brand names. The point is to see whether the assistant brings the company up unprompted.
- It is specific to what this company actually offers, in the terms a specialist would use. Use the company's site text to find its real specialties, and spread the questions across them.
- It reads like something a person would type: one sentence, no preamble.

Cover a range: a few broad category questions, several about specific capabilities, one or two comparison or "alternatives to" questions (naming a competitor if any were given), and one about a location or a constraint such as budget, turnaround, or company size when that fits the business.`;

export async function writeQuestions(input: { company: string; domain: string; sells: string; buyers: string | null; competitors: string[]; siteText: string }): Promise<string[]> {
  const out = await structured<{ questions: string[] }>(
    QUESTION_SYSTEM,
    [
      `Company: ${input.company} (${input.domain})`,
      `What it sells, in the requester's words: ${input.sells}`,
      `Who buys it: ${input.buyers || "not given"}`,
      `Competitors the requester expects to be named beside: ${input.competitors.join("; ") || "none given"}`,
      `<site_text>\n${input.siteText.slice(0, 9000) || "The site returned no readable text."}\n</site_text>`,
    ].join("\n\n"),
    { type: "object", properties: { questions: { type: "array", items: { type: "string" } } }, required: ["questions"], additionalProperties: false },
    "medium",
  );
  return out.questions.map(tidy).filter(Boolean).slice(0, QUESTIONS);
}

const ANALYSIS_SYSTEM = `You write the findings for an AI visibility snapshot from Isovertic, an agency that builds websites for life science companies. The reader runs or markets the company in question. They are not an AI specialist. No person at Isovertic reviews this before they read it, so it has to be right and it has to be plain.

You are given the company's details, the readable text of its own website, a crawler check, counts of how often each assistant named the company, and the assistants' answers to the buyer questions.

Produce:
- headline: one sentence that states the main finding with its number, for example how many of the answers named the company.
- described: one or two sentences on how the assistants describe the company in the answers that mention it. If none mention it, say that plainly.
- competitors: the other companies named most often across the answers as vendors or providers, with a count of answers naming each. Real company names only, most named first, at most eight. Leave out the company itself, the AI assistants, and publishers or directories.
- wrong: statements the assistants made about this company that its own website contradicts. Quote or closely paraphrase what was said, then say what the site says. Include an item only when the site text you were given clearly says otherwise. A statement the site neither confirms nor contradicts is not an error; leave it out. At most six. An empty list is a good and common result.
- fixes: exactly three, in priority order, chosen from what this evidence shows. Each has a short title, why it matters given these results, and how to do it in two or three sentences a marketing lead could hand to whoever maintains the website. Typical causes worth checking: a crawler blocked in robots.txt, a homepage with little readable text without JavaScript, no page that answers a question buyers asked, capabilities described vaguely where competitors are specific, or facts on the site that the assistants got wrong.

Rules:
- Use only what is in front of you. Do not invent rankings, traffic, or anything about the company that is not in the site text or the answers.
- Do not promise outcomes. Nobody can guarantee an assistant will name a company.
- Plain words, short sentences, no dashes used as punctuation, no hype.`;

type Analysis = Pick<Report, "headline" | "described" | "competitors" | "wrong" | "fixes">;

const ANALYSIS_SCHEMA = {
  type: "object",
  properties: {
    headline: { type: "string" },
    described: { type: "string" },
    competitors: { type: "array", items: { type: "object", properties: { name: { type: "string" }, mentions: { type: "integer" } }, required: ["name", "mentions"], additionalProperties: false } },
    wrong: {
      type: "array",
      items: {
        type: "object",
        properties: { assistant: { type: "string" }, question: { type: "string" }, said: { type: "string" }, site_says: { type: "string" } },
        required: ["assistant", "question", "said", "site_says"],
        additionalProperties: false,
      },
    },
    fixes: {
      type: "array",
      items: { type: "object", properties: { title: { type: "string" }, why: { type: "string" }, how: { type: "string" } }, required: ["title", "why", "how"], additionalProperties: false },
    },
  },
  required: ["headline", "described", "competitors", "wrong", "fixes"],
  additionalProperties: false,
};

// ---------- counting ----------

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Is the company named in this answer? Matches the name, or its domain, as whole words. */
export function names(company: string, domain: string): RegExp {
  const core = domain.replace(/^www\./, "");
  const parts = [company.trim(), core].filter((s) => s.length >= 3).map((s) => escape(s).replace(/\s+/g, "\\s+"));
  return new RegExp(`(^|[^a-z0-9])(${parts.join("|")})([^a-z0-9]|$)`, "i");
}

type AnswerRow = { id: string; provider: Provider; q_index: number; run: number; status: "pending" | "done" | "error"; answer: string | null; mentioned: boolean | null };

function score(job: Job, rows: AnswerRow[]): Pick<Report, "providers" | "overall" | "byProvider" | "byQuestion"> {
  const providers = PROVIDER_ORDER.filter((p) => rows.some((r) => r.provider === p));
  const done = rows.filter((r) => r.status === "done");
  const count = (rs: AnswerRow[]) => ({ named: rs.filter((r) => r.mentioned).length, asked: rs.length });
  return {
    providers,
    overall: count(done),
    byProvider: providers.map((p) => ({ provider: p, ...count(done.filter((r) => r.provider === p)), failed: rows.filter((r) => r.provider === p && r.status === "error").length })),
    byQuestion: job.questions.map((question, i) => ({
      question,
      cells: providers.map((p) => ({ provider: p, ...count(done.filter((r) => r.provider === p && r.q_index === i)) })),
    })),
  };
}

// ---------- running a job ----------

const PER_PROVIDER = 6;
const BUDGET_MS = 235_000;

/**
 * Moves a job forward: asks whatever is still unasked, then writes the report.
 * Safe to call from every page load. A lock keeps two calls from doing the same work, and a call
 * that runs out of time simply stops; the next one picks up where it left off.
 */
export async function advance(
  c: SupabaseClient,
  jobId: string,
  onDone?: (job: Job) => Promise<void>,
  onUnfinished?: (job: Job) => Promise<void>,
): Promise<void> {
  const started = Date.now();
  const now = new Date().toISOString();
  const { data: locked } = await c
    .from("visibility_jobs")
    .update({ locked_until: new Date(started + 290_000).toISOString() })
    .eq("id", jobId)
    .in("status", ["running", "analyzing"])
    .or(`locked_until.is.null,locked_until.lt."${now}"`)
    .select("*");
  const job = (locked?.[0] as Job | undefined) ?? null;
  if (!job) return;
  const release = (patch: Record<string, unknown> = {}) => c.from("visibility_jobs").update({ locked_until: null, ...patch }).eq("id", jobId);

  try {
    const match = names(job.company, job.domain);
    const { data: pendingRows } = await c.from("visibility_answers").select("id, provider, q_index, run").eq("job_id", jobId).eq("status", "pending");
    const pending = (pendingRows ?? []) as Pick<AnswerRow, "id" | "provider" | "q_index" | "run">[];

    // Each assistant gets its own short queue, so one slow provider does not hold up the others.
    await Promise.all(
      activeProviders().map(async (provider) => {
        const queue = pending.filter((r) => r.provider === provider);
        const worker = async () => {
          for (let row = queue.shift(); row; row = queue.shift()) {
            if (Date.now() - started > BUDGET_MS) return;
            try {
              const answer = await ask(provider, job.questions[row.q_index]);
              await c.from("visibility_answers").update({ status: "done", answer, mentioned: match.test(answer), finished_at: new Date().toISOString() }).eq("id", row.id);
            } catch (e) {
              await c.from("visibility_answers").update({ status: "error", error: (e as Error).message.slice(0, 300), finished_at: new Date().toISOString() }).eq("id", row.id);
            }
          }
        };
        await Promise.all(Array.from({ length: PER_PROVIDER }, worker));
      }),
    );

    const { count: left } = await c.from("visibility_answers").select("id", { count: "exact", head: true }).eq("job_id", jobId).eq("status", "pending");
    if ((left ?? 0) > 0 || Date.now() - started > BUDGET_MS) {
      await release();
      // Out of time with work left. Hand the rest to a fresh run so it finishes with nobody watching.
      if (onUnfinished) await onUnfinished(job);
      return;
    }

    await c.from("visibility_jobs").update({ status: "analyzing" }).eq("id", jobId);
    const { data: all } = await c.from("visibility_answers").select("id, provider, q_index, run, status, answer, mentioned").eq("job_id", jobId);
    const rows = (all ?? []) as AnswerRow[];
    const scores = score(job, rows);
    if (scores.overall.asked === 0) {
      await release({ status: "failed" });
      return;
    }

    const answers = rows
      .filter((r) => r.status === "done" && r.answer)
      .sort((a, b) => a.q_index - b.q_index || a.provider.localeCompare(b.provider) || a.run - b.run)
      .map((r) => `<answer assistant="${r.provider}" question="${r.q_index + 1}" run="${r.run}" names_company="${r.mentioned ? "yes" : "no"}">\n${(r.answer ?? "").slice(0, 1700)}\n</answer>`)
      .join("\n");
    let analysis: Analysis;
    try {
      analysis = await structured<Analysis>(
        ANALYSIS_SYSTEM,
        [
          `Company: ${job.company} (${job.domain})`,
          `What it sells: ${job.sells}`,
          `Named in ${scores.overall.named} of ${scores.overall.asked} answers. By assistant: ${scores.byProvider.map((p) => `${p.provider} ${p.named}/${p.asked}`).join(", ")}.`,
          `Questions:\n${job.questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`,
          `<crawler_check>\n${JSON.stringify(job.crawl)}\n</crawler_check>`,
          `<site_text>\n${job.site_text || "The site returned no readable text."}\n</site_text>`,
          `<answers>\n${answers}\n</answers>`,
        ].join("\n\n"),
        ANALYSIS_SCHEMA,
        "medium",
      );
    } catch (e) {
      // The counts stand on their own. A report without the written findings beats no report.
      console.error("Snapshot analysis failed:", (e as Error).message);
      analysis = { headline: "", described: "", competitors: [], wrong: [], fixes: [] };
    }
    const report: Report = {
      ...scores,
      headline: tidy(analysis.headline),
      described: tidy(analysis.described),
      competitors: analysis.competitors.slice(0, 8).map((x) => ({ name: tidy(x.name), mentions: x.mentions })),
      wrong: analysis.wrong.slice(0, 6).map((w) => ({ assistant: tidy(w.assistant), question: tidy(w.question), said: tidy(w.said), site_says: tidy(w.site_says) })),
      fixes: analysis.fixes.slice(0, 3).map((f) => ({ title: tidy(f.title), why: tidy(f.why), how: tidy(f.how) })),
    };
    const done_at = new Date().toISOString();
    await release({ status: "done", report, done_at });
    if (onDone) await onDone({ ...job, status: "done", report, done_at });
  } catch (e) {
    console.error("Snapshot run failed:", (e as Error).message);
    await release();
  }
}

/** Snapshots that were started and have sat untouched for a while. The daily sweep restarts them. */
export async function stalled(c: SupabaseClient, limit = 3): Promise<string[]> {
  const cutoff = new Date(Date.now() - 10 * 60_000).toISOString();
  const { data } = await c
    .from("visibility_jobs")
    .select("id")
    .in("status", ["running", "analyzing"])
    .lt("started_at", cutoff)
    .or(`locked_until.is.null,locked_until.lt."${new Date().toISOString()}"`)
    .order("started_at")
    .limit(limit);
  return (data ?? []).map((r) => r.id as string);
}

export async function getJob(c: SupabaseClient, id: string, accountId: string): Promise<Job | null> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const { data } = await c.from("visibility_jobs").select("*").eq("id", id).eq("account_id", accountId).maybeSingle();
  return (data as Job | null) ?? null;
}

export async function progress(c: SupabaseClient, jobId: string): Promise<{ total: number; finished: number }> {
  const [total, pending] = await Promise.all([
    c.from("visibility_answers").select("id", { count: "exact", head: true }).eq("job_id", jobId),
    c.from("visibility_answers").select("id", { count: "exact", head: true }).eq("job_id", jobId).eq("status", "pending"),
  ]);
  return { total: total.count ?? 0, finished: (total.count ?? 0) - (pending.count ?? 0) };
}
