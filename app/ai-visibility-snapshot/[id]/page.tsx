import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { after } from "next/server";
import { PageHero, Section } from "@/components/sections/Shell";
import { Arrow } from "@/components/ui/Arrow";
import { AutoRefresh } from "@/components/ui/AutoRefresh";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { visibility as c } from "@/content/visibility";
import { db } from "@/lib/paperbrief-db";
import { getSession } from "@/lib/session";
import { QUESTIONS, RUNS, advance, getJob, progress, type Job } from "@/lib/visibility";
import { announce, continueLater } from "@/lib/visibility-notify";
import { activeProviders } from "@/lib/visibility-providers";
import { requestGoogle, runSnapshot } from "../actions";

export const metadata: Metadata = {
  title: { absolute: c.title },
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
// A page load is what keeps a running snapshot moving, so it is allowed to work for a while.
export const maxDuration = 300;

const r = c.report;
const pct = (named: number, asked: number) => (asked ? Math.round((named / asked) * 100) : 0);

function Review({ job, error }: { job: Job; error: string }) {
  const assistants = activeProviders().map((p) => r.assistants[p]);
  return (
    <PageHero
      eyebrow={c.review.eyebrow}
      h1={c.review.h1}
      lead={c.review.lead}
      cta={
        <form action={runSnapshot} className="grid max-w-[760px] gap-5">
          <input type="hidden" name="id" value={job.id} />
          {error && <p role="alert" className="border-l-2 border-signal pl-4 leading-relaxed">{error}</p>}
          {Array.from({ length: QUESTIONS }, (_, i) => (
            <div key={i}>
              <label htmlFor={`q${i}`} className="field-label">{c.review.question(i + 1)}</label>
              <input id={`q${i}`} name={`q${i}`} className="field" required minLength={15} maxLength={300} defaultValue={job.questions[i] ?? ""} />
            </div>
          ))}
          <div className="mt-2">
            <button type="submit" className="btn btn-solid btn-block">{c.review.submit} <Arrow /></button>
          </div>
          <p className="text-[13px] text-ink-soft">{c.review.note(assistants.length * QUESTIONS * RUNS, assistants.join(", "))}</p>
        </form>
      }
    />
  );
}

function ReportView({ job }: { job: Job }) {
  const report = job.report!;
  const crawl = job.crawl;
  const { named, asked } = report.overall;
  const name = (p: string) => r.assistants[p as keyof typeof r.assistants] ?? p;
  return (
    <>
      <PageHero
        eyebrow={r.eyebrow(job.company, (job.done_at ?? job.created_at).slice(0, 10))}
        h1={
          <>
            <span className="hero-price">{named}</span>
            {r.scoreLead(named, asked)}
          </>
        }
        lead={report.headline ? [report.headline] : []}
      />
      <Section label={r.byAssistant.label} deferred={false}>
        <RevealBlock>
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.byAssistant.h2}</h2>
        </RevealBlock>
        <RevealBlock className="mt-10 max-w-[880px] space-y-7">
          {report.byProvider.map((p) => (
            <div key={p.provider}>
              <div className="flex items-baseline justify-between gap-6">
                <span className="text-[13px] uppercase tracking-[0.1em] text-ink-soft">
                  {name(p.provider)}
                  {p.failed > 0 ? ` · ${r.failedCalls(p.failed)}` : ""}
                </span>
                <span className="font-display text-[clamp(20px,2.6vw,30px)] font-medium">{r.questions.cell(p.named, p.asked)}</span>
              </div>
              <div className="relative mt-2 h-3 bg-rule">
                <span className="bar-grow absolute inset-y-0 left-0 bg-signal" style={{ width: `${pct(p.named, p.asked)}%` }} />
              </div>
            </div>
          ))}
        </RevealBlock>
      </Section>
      <Section label={r.questions.label} tone="bright" deferred={false}>
        <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.questions.h2}</h2>
        <div className="t-wrap mt-8 max-w-[1040px]">
          <table className="t">
            <thead>
              <tr>
                <th className="border-b border-ink py-3 pr-6 align-bottom">{r.questions.head}</th>
                {report.providers.map((p) => (
                  <th key={p} className="border-b border-ink py-3 pr-6 align-bottom">{name(p)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {report.byQuestion.map((q) => (
                <tr key={q.question}>
                  <td data-label={r.questions.head} className="border-b border-rule py-3 pr-6 align-top text-[15px] leading-relaxed">{q.question}</td>
                  {q.cells.map((cell) => (
                    <td key={cell.provider} data-label={name(cell.provider)} className={`border-b border-rule py-3 pr-6 align-top text-[15px] ${cell.named ? "font-medium text-signal" : "text-ink-soft"}`}>
                      {r.questions.cell(cell.named, cell.asked)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section label={r.competitors.label} deferred={false}>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="max-w-[22ch] font-display text-h2 font-medium">{r.competitors.h2}</h2>
            {report.competitors.length ? (
              <ol className="mt-8">
                {report.competitors.map((x) => (
                  <li key={x.name} className="flex items-baseline justify-between gap-6 border-t border-rule py-3">
                    <span className="font-display text-[19px] font-medium">{x.name}</span>
                    <span className="text-[14px] text-ink-soft">{r.competitors.unit(x.mentions)}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-6 leading-relaxed text-ink/90">{r.competitors.none}</p>
            )}
          </div>
          <div>
            <p className="eyebrow">{r.described.label}</p>
            <h3 className="mt-4 max-w-[24ch] font-display text-h3 font-medium">{r.described.h2}</h3>
            <p className="mt-4 max-w-[60ch] leading-relaxed text-ink/90">{report.described}</p>
          </div>
        </div>
      </Section>
      <Section label={r.wrong.label} tone="bright" deferred={false}>
        <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.wrong.h2}</h2>
        {report.wrong.length ? (
          <ul className="mt-8 max-w-[880px]">
            {report.wrong.map((w, i) => (
              <li key={i} className="border-t border-rule py-5">
                <p className="eyebrow">{w.assistant} · {w.question}</p>
                <p className="mt-3 leading-relaxed"><strong className="font-medium">{w.assistant} {r.wrong.said}:</strong> {w.said}</p>
                <p className="mt-2 leading-relaxed text-ink/90"><strong className="font-medium">{r.wrong.site}:</strong> {w.site_says}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 max-w-[68ch] leading-relaxed text-ink/90">{r.wrong.none}</p>
        )}
      </Section>
      {crawl && (
        <Section label={r.crawl.label} deferred={false}>
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.crawl.h2}</h2>
          {!crawl.reachable && <p className="mt-6 max-w-[68ch] border-l-2 border-signal pl-4 leading-relaxed">{r.crawl.unreachable}</p>}
          <ul className="mt-6 max-w-[68ch] space-y-2 leading-relaxed text-ink/90">
            {crawl.reachable && (
              <li>
                {r.crawl.words(crawl.words)} {crawl.words < 150 ? r.crawl.thin : ""}
              </li>
            )}
            {crawl.robots === "missing" && <li>{r.crawl.robotsMissing}</li>}
            <li>{r.crawl.structured[crawl.structuredData ? 0 : 1]}</li>
            <li>{r.crawl.sitemap[crawl.sitemap ? 0 : 1]}</li>
            <li>{r.crawl.llms[crawl.llmsTxt ? 0 : 1]}</li>
          </ul>
          <div className="t-wrap mt-8 max-w-[760px]">
            <table className="t">
              <thead>
                <tr>
                  {[r.crawl.bot, r.crawl.owner, r.crawl.state].map((h) => (
                    <th key={h} className="border-b border-ink py-3 pr-6 align-bottom">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {crawl.bots.map((b) => (
                  <tr key={b.name}>
                    <td data-label={r.crawl.bot} className="border-b border-rule py-3 pr-6 text-[15px] font-medium">{b.name}</td>
                    <td data-label={r.crawl.owner} className="border-b border-rule py-3 pr-6 text-[15px]">{b.owner}</td>
                    <td data-label={r.crawl.state} className={`border-b border-rule py-3 pr-6 text-[15px] ${b.blocked ? "font-medium text-signal" : "text-ink-soft"}`}>{b.blocked ? r.crawl.blocked : r.crawl.allowed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}
      {report.fixes.length > 0 && (
        <Section label={r.fixes.label} tone="bright" deferred={false}>
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.fixes.h2}</h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {report.fixes.map((f, i) => (
              <RevealBlock key={f.title} delay={i * 120} className="copy-card">
                <p className="eyebrow">{i + 1}</p>
                <h3 className="mt-4 font-display text-h3 font-medium">{f.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/90"><strong className="font-medium text-ink">{r.why}:</strong> {f.why}</p>
                <p className="mt-3 leading-relaxed text-ink/90"><strong className="font-medium text-ink">{r.how}:</strong> {f.how}</p>
              </RevealBlock>
            ))}
          </div>
          <p className="draft-warning mt-12 max-w-[80ch]">{r.caveat}</p>
        </Section>
      )}
      <Section label={r.google.label} deferred={false}>
        <div id="google" className="scroll-mt-32">
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{r.google.h2}</h2>
          <p className="mt-6 max-w-[68ch] leading-relaxed text-ink/90">{r.google.text}</p>
          {job.google_requested_at ? (
            <p role="status" className="mt-8 max-w-[68ch] border-l-2 border-signal pl-4 leading-relaxed">{r.google.requested}</p>
          ) : (
            <form action={requestGoogle} className="mt-8">
              <input type="hidden" name="id" value={job.id} />
              <button type="submit" className="btn btn-solid">{r.google.button} <Arrow /></button>
            </form>
          )}
        </div>
      </Section>
      <Section tone="navy" deferred={false}>
        <h2 className="font-display text-h2 font-medium">{r.next.h2}</h2>
        <p className="mt-6 max-w-[68ch] leading-relaxed">{r.next.text}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          {r.next.buttons.map(([label, href], i) => (
            <Link key={href} href={href} className={i === 0 ? "btn btn-solid" : "cta-link"}>{label} <Arrow /></Link>
          ))}
        </div>
      </Section>
    </>
  );
}

export default async function SnapshotPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = await getSession();
  const client = db();
  if (!session?.a || !client) redirect(`${c.path}#start`);
  const { id } = await params;
  const job = await getJob(client, id, session.a);
  if (!job) notFound();

  if (job.status === "questions") {
    const sp = await searchParams;
    return <Review job={job} error={sp.error === "questions" ? c.review.errors.questions : ""} />;
  }
  if (job.status === "done" && job.report) return <ReportView job={job} />;
  if (job.status === "failed") return <PageHero h1={c.failed.h1} lead={c.failed.lead} />;

  // Still running. The run carries itself forward; this is a second push in case a hand off was missed.
  // The lock makes repeats harmless.
  after(() => advance(client, job.id, announce, continueLater));
  const { total, finished } = await progress(client, job.id);
  const done = total > 0 && finished === total;
  return (
    <>
      <AutoRefresh seconds={8} />
      <PageHero
        eyebrow={c.running.eyebrow}
        h1={c.running.h1}
        lead={c.running.lead}
        cta={
          <div className="max-w-[640px]" role="status" aria-live="polite">
            <p className="font-display text-h3 font-medium">{done ? c.running.analyzing : c.running.progress(finished, total)}</p>
            <div className="relative mt-4 h-3 bg-rule">
              <span className="absolute inset-y-0 left-0 bg-signal transition-[width] duration-700" style={{ width: `${total ? Math.round((finished / total) * 100) : 0}%` }} />
            </div>
          </div>
        }
      />
    </>
  );
}
