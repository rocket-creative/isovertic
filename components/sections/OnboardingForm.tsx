"use client";
import { useActionState } from "react";
import { submitOnboarding, type OnboardingState } from "@/app/welcome/actions";
import { welcomeCopy } from "@/content/checkout";
import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/lib/site";
import { formCopy } from "@/content/form";

const field = "field";
const labelClass = "field-label";
const f = welcomeCopy.fields;

function Input({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <input id={name} name={name} type="text" required={required} aria-required={required} className={field} />
    </div>
  );
}

function Area({ name, label, rows = 3 }: { name: string; label: string; rows?: number }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <textarea id={name} name={name} rows={rows} className={field} />
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: readonly { value: string; label: string }[] }) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>{label}</label>
      <select id={name} name={name} defaultValue={options[0].value} className={`${field} field-select`}>
        {options.map((o) => <option key={o.label} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

export function OnboardingForm({ sessionId, email, planKey }: { sessionId: string; email: string; planKey: string }) {
  const [state, action, pending] = useActionState<OnboardingState, FormData>(submitOnboarding, null);
  if (state?.ok) {
    return (
      <div className="border border-rule p-10">
        <p className="font-display text-h3 font-medium">{welcomeCopy.successTitle}</p>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">{welcomeCopy.successBody}</p>
        {state.call && <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">{welcomeCopy.successCall}</p>}
      </div>
    );
  }
  return (
    <form action={action} className="max-w-[640px] space-y-8">
      <input type="hidden" name="session_id" value={sessionId} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="plan_key" value={planKey} />
      <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <Input name="company" label={f.company} required />
      <Input name="website" label={f.website} required />
      <Input name="contact_name" label={f.contactName} required />
      <Input name="role" label={f.role} />
      <Area name="audience" label={f.audience} />
      <Area name="problems" label={f.problems} />
      <Area name="topics" label={f.topics} rows={6} />
      <Area name="competitors" label={f.competitors} rows={2} />
      <Area name="voice" label={f.voice} />
      <Area name="social" label={f.social} rows={2} />
      <Input name="newsletter" label={f.newsletter} />
      <Input name="ads" label={f.ads} />
      <Input name="closer" label={f.closer} />
      <Select name="claims" label={f.claims} options={welcomeCopy.claimsOptions} />
      <Input name="reviewer" label={f.reviewer} />
      <Area name="access" label={f.access} rows={2} />
      <Select name="call" label={f.call} options={welcomeCopy.callOptions} />
      <Area name="notes" label={f.notes} rows={2} />
      {state?.error && <p role="alert" className="border border-navy/30 bg-navy/5 p-4 text-[14px]">{state.error}</p>}
      <button type="submit" disabled={pending} className="btn btn-solid disabled:opacity-60">
        {pending ? welcomeCopy.sending : welcomeCopy.submit}
        <Arrow />
      </button>
      <p className="text-[13px] text-ink-soft">
        {formCopy.emailFallback} <a href={`mailto:${site.email}`} className="underline underline-offset-4 hover:text-navy">{site.email}</a>
      </p>
    </form>
  );
}
