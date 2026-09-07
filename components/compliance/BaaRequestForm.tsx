"use client";
import { useActionState, useEffect } from "react";
import { requestBaa } from "@/app/resources/actions";
import type { CaptureState } from "@/lib/capture";
import { track } from "@/lib/analytics";

const statuses = [
  { value: "", label: "Pick one" },
  { value: "Covered entity", label: "Covered entity (provider, plan, or clearinghouse)" },
  { value: "Business associate", label: "Business associate of a covered entity" },
  { value: "Not covered", label: "Not a covered entity, but we handle health data" },
  { value: "Not sure", label: "Not sure" },
];

export function BaaRequestForm() {
  const [state, action, pending] = useActionState<CaptureState, FormData>(requestBaa, null);

  useEffect(() => {
    if (state?.ok) track("baa_requested", {});
  }, [state]);

  if (state?.ok) {
    return (
      <div className="border border-rule p-10">
        <p className="font-display text-h3 font-medium">Received. Legal has it.</p>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">A named person answers the same business day with the packet and the BAA. If you sent your own paper, redlines usually take one round.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-7">
      <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div>
        <label htmlFor="baa-name" className="field-label">Your name</label>
        <input id="baa-name" name="name" type="text" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="baa-company" className="field-label">Company</label>
        <input id="baa-company" name="company" type="text" required autoComplete="organization" className="field" />
      </div>
      <div>
        <label htmlFor="baa-email" className="field-label">Work email</label>
        <input id="baa-email" name="email" type="email" required autoComplete="email" className="field" />
      </div>
      <div>
        <label htmlFor="baa-status" className="field-label">Covered entity status</label>
        <select id="baa-status" name="covered_entity_status" className="field field-select" defaultValue="">
          {statuses.map((s) => <option key={s.label} value={s.value}>{s.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="baa-notes" className="field-label">Notes, no patient information</label>
        <textarea id="baa-notes" name="notes" rows={4} className="field" placeholder="Your own BAA, a deadline, the systems involved" />
      </div>
      <div>
        <button type="submit" disabled={pending} className="btn btn-solid">{pending ? "Sending" : "Send the request"}</button>
        {state && !state.ok && <p className="mt-4 text-[14px] text-signal">{state.error}</p>}
      </div>
    </form>
  );
}
