"use client";
import { useActionState, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { auditMeta, questions, scoreAnswers, tierResults } from "@/content/audit";
import { submitAudit } from "@/app/audit/actions";
import type { CaptureState } from "@/lib/capture";
import { track } from "@/lib/analytics";
import { Arrow } from "@/components/ui/Arrow";

// One question per screen, progress bar, keyboard navigable radio groups. The score and tier are computed
// on the client from content/audit.ts. The written diagnosis unlocks with an email, which is the lead capture.

type Answers = Record<string, number>;

export function AuditWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [started, setStarted] = useState(false);
  const [state, action, pending] = useActionState<CaptureState, FormData>(submitAudit, null);

  const total = questions.length;
  const done = step >= total;
  const result = useMemo(() => (done ? scoreAnswers(answers) : null), [done, answers]);

  useEffect(() => {
    if (!started && Object.keys(answers).length > 0) {
      setStarted(true);
      track("audit_started", {});
    }
  }, [answers, started]);

  useEffect(() => {
    if (result) track("audit_completed", { score: result.score, tier_recommendation: result.tier });
  }, [result]);

  useEffect(() => {
    if (state?.ok && result) track("standard_downloaded", { resource: "audit_report", tier_recommendation: result.tier });
  }, [state, result]);

  function choose(qid: string, idx: number) {
    setAnswers((a) => ({ ...a, [qid]: idx }));
  }

  function next() {
    track("audit_step", { step: step + 1 });
    setStep((s) => Math.min(s + 1, total));
  }

  if (done && result) {
    const tier = tierResults[result.tier];
    return (
      <div>
        <div className="border border-rule p-8 md:p-12">
          <p className="eyebrow">Your result · {result.score} of {result.max}</p>
          <p className="mt-4 font-display text-[clamp(28px,4vw,56px)] font-semibold leading-none">{tier.name}</p>
          <p className="mt-2 text-[14px] text-ink-soft">{tier.price}</p>
          <h2 className="mt-8 max-w-[22ch] font-display text-h3 font-semibold">{tier.headline}</h2>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-ink/90">{tier.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href={tier.href} className="btn btn-solid" onClick={() => track("cta_click", { section: "audit_result", cta_label: `See ${tier.name} pricing`, destination: tier.href })}>
              See {tier.name} on the pricing page <Arrow />
            </Link>
            <Link href="/contact" className="cta-link" onClick={() => track("cta_click", { section: "audit_result", cta_label: "Book a pipeline call", destination: "/contact" })}>
              Book a pipeline call <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-10 border border-rule p-8 md:p-12">
          {state?.ok ? (
            <div>
              <p className="eyebrow">Your written diagnosis</p>
              <ol className="mt-6 divide-y divide-rule">
                {questions.map((q, i) => {
                  const idx = answers[q.id];
                  const opt = idx === undefined ? undefined : q.options[idx];
                  return (
                    <li key={q.id} className="grid gap-2 py-5 sm:grid-cols-[48px_1fr]">
                      <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-[14px] text-ink-soft">{q.text}</p>
                        <p className="mt-1 font-display text-[16px] font-medium">{opt?.label ?? "Skipped"}</p>
                        {opt && <p className="mt-2 text-[15px] leading-relaxed text-ink/90">{opt.note}</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-ink/90">
                Read this beside the <Link href="/resources/engagement-and-measurement-standard" className="underline underline-offset-4 hover:text-navy">engagement and measurement standard</Link>, which explains what your sales cycle answer means for when revenue can be judged.
              </p>
              <button type="button" onClick={() => window.print()} className="btn btn-ghost mt-8">Print or save as PDF</button>
            </div>
          ) : (
            <form action={action} className="grid gap-6 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <input type="hidden" name="answers" value={JSON.stringify(answers)} />
              <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="md:col-span-3">
                <p className="eyebrow">{auditMeta.gate.label}</p>
                <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink/90">{auditMeta.gate.body}</p>
              </div>
              <div>
                <label htmlFor="audit-email" className="field-label">Work email</label>
                <input id="audit-email" name="email" type="email" required autoComplete="email" className="field" />
              </div>
              <div>
                <label htmlFor="audit-company" className="field-label">Company</label>
                <input id="audit-company" name="company" type="text" autoComplete="organization" className="field" />
              </div>
              <button type="submit" disabled={pending} className="btn btn-solid">{pending ? "One moment" : "Unlock"}</button>
              {state && !state.ok && <p className="text-[14px] text-signal md:col-span-3">{state.error}</p>}
            </form>
          )}
        </div>

        <button type="button" onClick={() => { setStep(0); setAnswers({}); }} className="cta-link mt-8">Start over</button>
      </div>
    );
  }

  const q = questions[step];
  const chosen = answers[q.id];

  return (
    <div>
      <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.14em] text-ink-soft">
        <span>Question {step + 1} of {total}</span>
        <span>{Math.round((step / total) * 100)} percent</span>
      </div>
      <div className="mt-3 h-[2px] w-full bg-rule" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step} aria-label="Audit progress">
        <div className="h-full bg-navy transition-[width] duration-300" style={{ width: `${(step / total) * 100}%` }} />
      </div>

      <fieldset className="mt-10 border-0 p-0">
        <legend className="max-w-[24ch] font-display text-h2 font-medium">{q.text}</legend>
        <div className="mt-8 grid gap-px bg-rule sm:grid-cols-2">
          {q.options.map((o, i) => {
            const id = `${q.id}-${i}`;
            const on = chosen === i;
            return (
              <label key={id} htmlFor={id} className={`flex min-h-[64px] cursor-pointer items-center gap-4 p-5 transition-colors ${on ? "bg-navy text-paper" : "surface-card hover:bg-slate-soft"}`}>
                <input
                  id={id}
                  type="radio"
                  name={q.id}
                  value={i}
                  checked={on}
                  onChange={() => choose(q.id, i)}
                  className="h-4 w-4 accent-[#0F2C3F]"
                />
                <span className="font-display text-[16px] font-medium">{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button type="button" onClick={next} disabled={chosen === undefined} className="btn btn-solid disabled:opacity-40">
          {step + 1 === total ? "See my result" : "Next"} <Arrow />
        </button>
        {step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="cta-link">Back</button>
        )}
      </div>
    </div>
  );
}
