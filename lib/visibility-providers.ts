import Anthropic from "@anthropic-ai/sdk";

// The four assistants the free snapshot asks. Server only.
// Each one gets the buyer's question exactly as a buyer would type it, with web search on and no
// system prompt, so the answer is as close as an API gets to what a person sees in the app.
// It is close, not identical: the apps add their own instructions, memory, and location.
// A provider only runs when its key is set. Model names can be changed in Vercel without a deploy.

export type Provider = "chatgpt" | "gemini" | "perplexity" | "claude";
export const PROVIDER_ORDER: Provider[] = ["chatgpt", "gemini", "perplexity", "claude"];

const KEY: Record<Provider, string> = {
  chatgpt: "OPENAI_API_KEY",
  gemini: "GEMINI_API_KEY",
  perplexity: "PERPLEXITY_API_KEY",
  claude: "ANTHROPIC_API_KEY",
};

export const activeProviders = (): Provider[] => PROVIDER_ORDER.filter((p) => Boolean(process.env[KEY[p]]));

const TIMEOUT = 80_000;

async function post(url: string, headers: Record<string, string>, body: unknown): Promise<Record<string, unknown>> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return (await res.json()) as Record<string, unknown>;
}

async function chatgpt(question: string): Promise<string> {
  const data = await post(
    "https://api.openai.com/v1/responses",
    { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    { model: process.env.OPENAI_MODEL || "gpt-5", tools: [{ type: "web_search" }], input: question },
  );
  const out = (data.output as { type: string; content?: { type: string; text?: string }[] }[] | undefined) ?? [];
  return out
    .filter((o) => o.type === "message")
    .flatMap((o) => o.content ?? [])
    .filter((c) => c.type === "output_text")
    .map((c) => c.text ?? "")
    .join("\n");
}

async function gemini(question: string): Promise<string> {
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const data = await post(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    { "x-goog-api-key": process.env.GEMINI_API_KEY ?? "" },
    { contents: [{ role: "user", parts: [{ text: question }] }], tools: [{ google_search: {} }] },
  );
  const parts = (data.candidates as { content?: { parts?: { text?: string }[] } }[] | undefined)?.[0]?.content?.parts ?? [];
  return parts.map((p) => p.text ?? "").join("");
}

async function perplexity(question: string): Promise<string> {
  const data = await post(
    "https://api.perplexity.ai/chat/completions",
    { Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` },
    { model: process.env.PERPLEXITY_MODEL || "sonar", messages: [{ role: "user", content: question }] },
  );
  return (data.choices as { message?: { content?: string } }[] | undefined)?.[0]?.message?.content ?? "";
}

async function claude(question: string): Promise<string> {
  const client = new Anthropic({ timeout: TIMEOUT, maxRetries: 1 });
  const messages: Anthropic.Beta.BetaMessageParam[] = [{ role: "user", content: question }];
  let text = "";
  // Web search runs on Anthropic's side. A long search can pause the turn; sending the turn back resumes it.
  for (let turn = 0; turn < 3; turn++) {
    const response = await client.beta.messages.create({
      model: process.env.VISIBILITY_CLAUDE_MODEL || "claude-opus-5-5",
      max_tokens: 6000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 3 }],
      messages,
    });
    if (response.stop_reason === "refusal") throw new Error("declined");
    text += response.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    if (response.stop_reason !== "pause_turn") break;
    messages.push({ role: "assistant", content: response.content });
  }
  return text;
}

const CALL: Record<Provider, (q: string) => Promise<string>> = { chatgpt, gemini, perplexity, claude };

export async function ask(provider: Provider, question: string): Promise<string> {
  const answer = (await CALL[provider](question)).trim();
  if (!answer) throw new Error("empty answer");
  return answer.slice(0, 12_000);
}
