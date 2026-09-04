"use client";
import { useActionState, useEffect, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { submitLead, type LeadState } from "@/app/contact/actions";
import { Arrow } from "@/components/ui/Arrow";
import {
  clinicalOptions,
  closers,
  formCopy,
  industries,
  sources,
  spends,
  starts,
  tiers,
} from "@/content/form";

const field = "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-[16px] focus:border-ink focus:outline-none";
const labelClass = "mb-1 block text-[11px] uppercase tracking-[0.1em] text-ink-soft";

function Select({
  id,
  name,
  label,
  options,
}: {
  id: string;
  name: string;
  label: string;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <select id={id} name={name} className={`${field} appearance-none`} defaultValue="" style={{ fontSize: 16 }}>
        {options.map((o) => (
          <option key={o.label} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export function LeadForm() {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, null);
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (state && !state.ok) setStep(2);
  }, [state]);

  if (state?.ok) {
    return (
      <div className="border border-rule p-10">
        <p className="font-display text-h3 font-medium">{formCopy.successTitle}</p>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">{formCopy.successBody}</p>
      </div>
    );
  }

  const onStep1 = ready && step === 1;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!onStep1) return;
    e.preventDefault();
    if (!email.trim() || !/.+@.+\..+/.test(email.trim())) {
      setEmailError(formCopy.error);
      return;
    }
    setEmailError("");
    setStep(2);
  }

  return (
    <form action={action} onSubmit={handleSubmit} className="max-w-[560px]" noValidate>
      <input type="hidden" name="source_path" value={pathname} />
      <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <p className="eyebrow">{onStep1 ? formCopy.step1 : formCopy.step2}</p>

      <div className="mt-8 space-y-8">
        <div>
          <label htmlFor="email" className={labelClass}>{formCopy.emailLabel}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            style={{ fontSize: 16 }}
          />
        </div>
      </div>

      <div className={`mt-8 space-y-8 ${onStep1 ? "hidden" : ""}`}>
        <div>
          <label htmlFor="name" className={labelClass}>{formCopy.nameLabel}</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            style={{ fontSize: 16 }}
          />
        </div>
        <div>
          <label htmlFor="company_website" className={labelClass}>{formCopy.websiteLabel}</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            autoComplete="url"
            inputMode="url"
            required
            aria-required="true"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={field}
            style={{ fontSize: 16 }}
          />
        </div>
        <Select id="industry" name="industry" label={formCopy.industryLabel} options={industries} />
        <Select id="tier" name="tier" label={formCopy.tierLabel} options={tiers} />
        <Select id="marketing_spend" name="marketing_spend" label={formCopy.spendLabel} options={spends} />
        <Select id="start_when" name="start_when" label={formCopy.startLabel} options={starts} />
        <Select id="clinical_claims" name="clinical_claims" label={formCopy.clinicalLabel} options={clinicalOptions} />
        <Select id="sales_owner" name="sales_owner" label={formCopy.closerLabel} options={closers} />
        <div>
          <label htmlFor="message" className={labelClass}>{formCopy.numberLabel}</label>
          <textarea id="message" name="message" rows={3} className={field} style={{ fontSize: 16 }} />
        </div>
        <Select id="found_us" name="found_us" label={formCopy.sourceLabel} options={sources} />
      </div>

      {(state?.error || emailError) && (
        <p role="alert" className="mt-6 border border-navy/30 bg-navy/5 p-4 text-[14px]">
          {state?.error || emailError}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-solid mt-10 disabled:opacity-60">
        {pending ? formCopy.sending : onStep1 ? formCopy.continue : formCopy.submit}
        <Arrow />
      </button>
    </form>
  );
}
