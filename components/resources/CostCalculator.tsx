"use client";
import { useEffect, useState } from "react";
import { tiers, usd } from "@/content/tiers";
import { cfoGuide } from "@/content/decision-guides";
import { track } from "@/lib/analytics";

// In house cost over 24 months against each tier, plus the break even meeting count at the reader's deal value
// and close rate. Every number is derived from the six inputs and content/tiers.ts. The server HTML carries the
// defaults so the table is readable without JavaScript.

const MONTHS = 24;
const f = cfoGuide.calculator.fields;
const o = cfoGuide.calculator.outputs;

function Num({ id, label, value, onChange, prefix, suffix, step = 1 }: { id: string; label: string; value: number; onChange: (n: number) => void; prefix?: string; suffix?: string; step?: number }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}</label>
      <div className="flex items-baseline gap-2">
        {prefix && <span className="text-[15px] text-ink-soft">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="field"
        />
        {suffix && <span className="text-[15px] text-ink-soft">{suffix}</span>}
      </div>
    </div>
  );
}

export function CostCalculator() {
  const d = cfoGuide.defaults;
  const [salary, setSalary] = useState(d.salary);
  const [load, setLoad] = useState(d.load);
  const [tools, setTools] = useState(d.tools);
  const [ramp, setRamp] = useState(d.ramp);
  const [deal, setDeal] = useState(d.deal);
  const [close, setClose] = useState(d.close);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) track("calculator_used", { section: "cost_model" });
  }, [touched]);

  const monthly = (salary * (1 + load / 100)) / 12 + tools;
  const total24 = monthly * MONTHS;
  const productive = Math.max(MONTHS - ramp, 1);
  const perProductive = total24 / productive;
  const valuePerMeeting = deal * (close / 100);
  const breakEven = (m: number) => (valuePerMeeting > 0 ? Math.ceil(m / valuePerMeeting) : 0);

  const mark = <T,>(set: (v: T) => void) => (v: T) => { setTouched(true); set(v); };

  return (
    <div>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Num id="c-salary" label={f.salary} value={salary} onChange={mark(setSalary)} prefix="$" step={5000} />
        <Num id="c-load" label={f.load} value={load} onChange={mark(setLoad)} suffix="%" />
        <Num id="c-tools" label={f.tools} value={tools} onChange={mark(setTools)} prefix="$" step={100} />
        <Num id="c-ramp" label={f.ramp} value={ramp} onChange={mark(setRamp)} suffix="months" />
        <Num id="c-deal" label={f.deal} value={deal} onChange={mark(setDeal)} prefix="$" step={1000} />
        <Num id="c-close" label={f.close} value={close} onChange={mark(setClose)} suffix="%" />
      </div>

      <div className="mt-12 grid gap-px bg-rule md:grid-cols-3">
        <div className="surface-card p-8">
          <p className="eyebrow">{o.inHouse24}</p>
          <p className="mt-4 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{usd(Math.round(total24))}</p>
          <p className="mt-3 text-[13px] text-ink-soft">{usd(Math.round(monthly))} a month, fully loaded</p>
        </div>
        <div className="surface-card p-8">
          <p className="eyebrow">{o.perMonth}</p>
          <p className="mt-4 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{usd(Math.round(perProductive))}</p>
          <p className="mt-3 text-[13px] text-ink-soft">After {ramp} ramp months with no output</p>
        </div>
        <div className="surface-card p-8">
          <p className="eyebrow">{o.breakEven}</p>
          <p className="mt-4 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{breakEven(monthly)}</p>
          <p className="mt-3 text-[13px] text-ink-soft">In house, at {usd(Math.round(valuePerMeeting))} of expected revenue per meeting</p>
        </div>
      </div>
      <p className="mt-6 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">{cfoGuide.calculator.note}</p>

      <h3 className="mt-16 font-display text-h3 font-semibold">{cfoGuide.breakEven.h2}</h3>
      <p className="mt-4 max-w-[62ch] leading-relaxed text-ink/90">{cfoGuide.breakEven.body}</p>
      <div className="t-wrap mt-8">
        <table className="t t--640">
          <thead>
            <tr className="border-b border-rule text-[12px] uppercase tracking-[0.1em] text-ink-soft">
              <th className="py-3 pr-6">Option</th>
              <th className="py-3 pr-6">Per month</th>
              <th className="py-3 pr-6">24 months</th>
              <th className="py-3 pr-6">Against in house</th>
              <th className="py-3">Meetings a month to break even</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-rule">
              <th scope="row" className="py-4 pr-6 font-display text-[15px] font-medium">In house hire</th>
              <td data-label="Per month" className="py-4 pr-6">{usd(Math.round(monthly))}</td>
              <td data-label="24 months" className="py-4 pr-6">{usd(Math.round(total24))}</td>
              <td data-label="Against in house" className="py-4 pr-6 text-ink-soft">Baseline</td>
              <td data-label="Break even" className="py-4">{breakEven(monthly)}</td>
            </tr>
            {tiers.map((t) => {
              const t24 = t.term * MONTHS;
              const diff = total24 - t24;
              return (
                <tr key={t.slug} className="border-b border-rule">
                  <th scope="row" className="py-4 pr-6 font-display text-[15px] font-medium">{t.name}{t.from ? " (from)" : ""}</th>
                  <td data-label="Per month" className="py-4 pr-6">{usd(t.term)}</td>
                  <td data-label="24 months" className="py-4 pr-6">{usd(t24)}</td>
                  <td data-label="Against in house" className={`py-4 pr-6 ${diff >= 0 ? "text-brass" : "text-ink-soft"}`}>
                    {diff >= 0 ? `${usd(Math.round(diff))} less` : `${usd(Math.round(-diff))} more`}
                  </td>
                  <td data-label="Break even" className="py-4">{breakEven(t.term)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">Tier figures are the 12 month term rate from the pricing page, excluding ad spend and media. Critical Mass is priced from $25,000 and scoped per brand.</p>
    </div>
  );
}
