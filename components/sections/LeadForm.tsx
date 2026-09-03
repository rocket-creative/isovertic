"use client";
import { useActionState } from "react";
import { usePathname } from "next/navigation";
import { submitLead, type LeadState } from "@/app/contact/actions";
import { Arrow } from "@/components/ui/Arrow";

export function LeadForm() {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, null);
  const pathname = usePathname();

  if (state?.ok) {
    return (
      <div className="border border-rule p-10">
        <p className="font-display text-h3 font-medium">Received. We answer the same business day.</p>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
          You will hear from George, not a sequence. If it is urgent, the calendar link in the confirmation email books a time directly.
        </p>
      </div>
    );
  }

  const field = "w-full border-b border-ink/20 bg-transparent px-0 py-3 text-[16px] focus:border-ink focus:outline-none";
  const label = "mb-1 block text-[11px] uppercase tracking-[0.1em] text-ink-soft";

  return (
    <form action={action} className="max-w-[560px]" noValidate>
      <input type="hidden" name="source_path" value={pathname} />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="space-y-8">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-required="true" className={field} style={{ fontSize: 16 }} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required aria-required="true" className={field} style={{ fontSize: 16 }} />
        </div>
        <div>
          <label htmlFor="company" className={label}>Company</label>
          <input id="company" name="company" type="text" autoComplete="organization" className={field} style={{ fontSize: 16 }} />
        </div>
        <div>
          <label htmlFor="message" className={label}>Where does your pipeline break?</label>
          <textarea id="message" name="message" rows={3} className={field} style={{ fontSize: 16 }} />
        </div>
      </div>
      {state?.error && (
        <p role="alert" className="mt-6 border border-navy/30 bg-navy/5 p-4 text-[14px]">{state.error}</p>
      )}
      <button type="submit" disabled={pending} className="btn btn-solid mt-10 disabled:opacity-60">
        {pending ? "Sending" : "Request the call"} <Arrow />
      </button>
    </form>
  );
}
