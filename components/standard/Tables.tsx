import Link from "next/link";
import { channelTiming, salesCycles, salesCycleSource, scorecard, stages, churn } from "@/content/standard";

// Reusable pieces of the engagement and measurement standard. ChannelTimingTable and SalesCycleTable use the
// site's .t table classes, which stack into labelled blocks below 768px.

export function ChannelTimingTable() {
  return (
    <div className="t-wrap">
      <table className="t t--stack t--720">
        <thead>
          <tr className="border-b border-rule text-[12px] uppercase tracking-[0.1em] text-ink-soft">
            <th className="py-3 pr-6">Channel</th>
            <th className="py-3 pr-6">Leading indicators</th>
            <th className="py-3">Lagging and revenue results</th>
          </tr>
        </thead>
        <tbody>
          {channelTiming.map((r) => (
            <tr key={r.channel} className="border-b border-rule align-top">
              <th scope="row" className="py-4 pr-6 font-display text-[15px] font-medium">{r.channel}</th>
              <td data-label="Leading" className="py-4 pr-6 leading-relaxed text-ink/90">{r.leading}</td>
              <td data-label="Lagging" className="py-4 leading-relaxed text-ink/90">{r.lagging}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SalesCycleTable() {
  return (
    <div>
      <div className="t-wrap">
        <table className="t t--stack t--640">
          <thead>
            <tr className="border-b border-rule text-[12px] uppercase tracking-[0.1em] text-ink-soft">
              <th className="py-3 pr-6">Industry or motion</th>
              <th className="py-3 pr-6">Typical sales cycle</th>
              <th className="py-3">Basis</th>
            </tr>
          </thead>
          <tbody>
            {salesCycles.map((r) => (
              <tr key={r.motion} className="border-b border-rule align-top">
                <th scope="row" className="py-4 pr-6 font-display text-[15px] font-medium">{r.motion}</th>
                <td data-label="Cycle" className="py-4 pr-6 leading-relaxed text-ink/90">{r.cycle}</td>
                <td data-label="Basis" className="py-4 text-[13px] leading-relaxed text-ink-soft">{r.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
        Healthcare and pharma figures:{" "}
        <a href={salesCycleSource.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{salesCycleSource.label}</a>.
        Ranges for the other rows are shown as ranges because they come from several vendor sources rather than one study.
      </p>
    </div>
  );
}

export function TwoClockScorecard({ compact = false }: { compact?: boolean }) {
  const cols = [scorecard.leading, scorecard.lagging];
  return (
    <div>
      <div className="grid gap-px bg-rule md:grid-cols-2">
        {cols.map((c) => (
          <div key={c.heading} className={`surface-card ${compact ? "p-6" : "p-8"}`}>
            <p className="eyebrow">{c.sub}</p>
            <h3 className="mt-3 font-display text-h3 font-semibold">{c.heading}</h3>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/90">
              {c.items.map((it) => (
                <li key={it} className="flex gap-3"><span aria-hidden="true" className="text-signal">·</span>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[62ch] font-display text-[17px] font-medium leading-snug">{scorecard.note}</p>
    </div>
  );
}

export function EngagementStages({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="grid gap-px bg-rule md:grid-cols-3">
      {stages.map((s) => (
        <li key={s.n} className={`surface-card ${compact ? "p-6" : "p-8"}`}>
          <p className="eyebrow">{s.n} · {s.window}</p>
          <h3 className="mt-3 font-display text-h3 font-semibold">{s.name}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ChurnCallout() {
  return (
    <div className="grid gap-8 border border-rule p-8 md:grid-cols-[auto_1fr] md:items-start md:gap-12 md:p-10">
      <div>
        <p className="font-display text-[clamp(56px,9vw,120px)] font-semibold leading-none text-brass">{churn.stat}</p>
        <p className="mt-3 max-w-[22ch] font-display text-[17px] font-medium leading-snug">{churn.statLabel}</p>
      </div>
      <div>
        <p className="leading-relaxed text-ink/90">{churn.body}</p>
        <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
          Sources:{" "}
          {churn.sources.map((s, i) => (
            <span key={s.href}>
              <a href={s.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{s.label}</a>
              {i < churn.sources.length - 1 ? "; " : "."}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export function StandardLink({ className = "cta-link" }: { className?: string }) {
  return (
    <Link href="/resources/engagement-and-measurement-standard" className={className}>
      What results to expect, and when
    </Link>
  );
}
