import { posture, governance, ftcCallout, mlr, claims, medicare } from "@/content/compliance";

function Sources({ items, className = "" }: { items?: { label: string; href: string }[]; className?: string }) {
  if (!items?.length) return null;
  return (
    <p className={`text-[13px] leading-relaxed text-ink-soft ${className}`}>
      {items.map((s, i) => (
        <span key={s.href}>
          <a href={s.href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{s.label}</a>
          {i < items.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}

export function CompliancePosture({ compact = false }: { compact?: boolean }) {
  return (
    <div className="t-wrap">
      <table className="t t--stack t--720">
        <thead>
          <tr className="border-b border-rule text-[12px] uppercase tracking-[0.1em] text-ink-soft">
            <th className="py-3 pr-6">Capability</th>
            <th className="py-3">ISOVERTIC operating standard</th>
          </tr>
        </thead>
        <tbody>
          {posture.map((r) => (
            <tr key={r.capability} className="border-b border-rule align-top">
              <th scope="row" className={`${compact ? "py-3" : "py-5"} pr-6 font-display text-[15px] font-medium md:w-[26%]`}>{r.capability}</th>
              <td data-label="Standard" className={`${compact ? "py-3 text-[14px]" : "py-5 text-[15px]"} leading-relaxed text-ink/90`}>
                {r.standard}
                {!compact && <Sources items={r.sources} className="mt-2" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SensitiveDataGovernance({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <ol className="grid gap-px bg-rule md:grid-cols-2 xl:grid-cols-4">
        {governance.map((g) => (
          <li key={g.n} className={`surface-card ${compact ? "p-5" : "p-8"}`}>
            <p className="eyebrow">{g.n}</p>
            <h3 className="mt-3 font-display text-h3 font-semibold">{g.name}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{g.body}</p>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-soft"><span className="uppercase tracking-[0.1em]">Output</span> · {g.output}</p>
          </li>
        ))}
      </ol>
      <div className={`${compact ? "mt-6" : "mt-10"} border-l-2 border-signal pl-6`}>
        <p className="max-w-[68ch] leading-relaxed text-ink/90">{ftcCallout.body}</p>
        <Sources items={ftcCallout.sources} className="mt-3" />
      </div>
    </div>
  );
}

export function MlrWorkflow() {
  return (
    <div>
      <p className="max-w-[62ch] leading-relaxed text-ink/90">{mlr.intro}</p>
      <div className="mt-10 grid gap-px bg-rule md:grid-cols-2">
        <div className="surface-card p-8">
          <p className="eyebrow">What we do</p>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {mlr.weDo.map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="text-signal">·</span>{x}</li>)}
          </ul>
        </div>
        <div className="surface-card p-8">
          <p className="eyebrow">What we need from you</p>
          <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {mlr.youProvide.map((x) => <li key={x} className="flex gap-3"><span aria-hidden="true" className="text-signal">·</span>{x}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-10 border-l-2 border-signal pl-6">
        <p className="eyebrow">FDA promotional rules</p>
        <p className="mt-3 max-w-[68ch] leading-relaxed text-ink/90">{mlr.fda.body}</p>
        <Sources items={mlr.fda.sources} className="mt-3" />
      </div>
    </div>
  );
}

export function ClaimDiscipline() {
  return (
    <div>
      <div className="grid gap-px bg-rule md:grid-cols-2">
        {claims.cards.map((c, i) => (
          <div key={c.label} className="surface-card p-8">
            <p className={`eyebrow ${i === 0 ? "!text-signal" : ""}`}>{c.label}</p>
            <p className="mt-4 font-display text-h3 font-semibold">“{c.example}”</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink/90">
              {c.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden="true">·</span>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[62ch] font-display text-[17px] font-medium leading-snug">{claims.note}</p>
      <Sources items={claims.sources} className="mt-3" />
    </div>
  );
}

export function MedicareNote() {
  return (
    <details className="group border border-rule p-6">
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 font-display text-[17px] font-medium">
        {medicare.summary}
        <span aria-hidden="true" className="text-2xl leading-none group-open:hidden">+</span>
        <span aria-hidden="true" className="hidden text-2xl leading-none group-open:inline">−</span>
      </summary>
      <p className="mt-4 max-w-[68ch] leading-relaxed text-ink/90">{medicare.body}</p>
      <Sources items={[medicare.source]} className="mt-3" />
    </details>
  );
}
