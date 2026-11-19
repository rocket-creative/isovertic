"use client";
import { useActionState } from "react";
import { requestAccess, restart, verifyCode, type GateState } from "@/app/paperbrief/actions";
import { Arrow } from "@/components/ui/Arrow";

// The PaperBrief gate: name, email, phone, then a code from the inbox. Labels come from content/paperbrief.ts.
type Labels = {
  h2: string; intro: string; name: string; email: string; phone: string; submit: string;
  sentTitle: string; sent: string; code: string; verify: string; restart: string; consent: string;
};

export function PaperBriefGate({ labels, from = "paperbrief" }: { labels: Labels; from?: "paperbrief" | "snapshot" }) {
  const [asked, ask, asking] = useActionState<GateState, FormData>(requestAccess, { step: "form" });
  const [checked, check, checking] = useActionState<GateState, FormData>(verifyCode, { step: "code" });
  const expired = checked.step === "form";
  const onCode = asked.step === "code" && !expired;
  const error = onCode ? checked.error : (expired ? checked.error : asked.error);

  return (
    <div className="gate-panel max-w-[560px]">
      <h2 className="font-display text-h3 font-medium">{onCode ? labels.sentTitle : labels.h2}</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        {onCode ? `${labels.sent} ${asked.email}.` : labels.intro}
      </p>
      {error && <p role="alert" className="mt-5 border-l-2 border-signal pl-4 text-[15px] leading-relaxed">{error}</p>}
      {onCode ? (
        <>
          <form action={check} className="mt-6 grid gap-6">
            <div>
              <input type="hidden" name="from" value={from} />
              <label htmlFor="pb-code" className="field-label">{labels.code}</label>
              <input id="pb-code" name="code" className="field font-display tracking-[0.3em] uppercase" required minLength={8} maxLength={12} autoComplete="one-time-code" autoCapitalize="characters" spellCheck={false} autoFocus />
            </div>
            <button type="submit" className="btn btn-solid btn-block" disabled={checking}>{labels.verify} <Arrow /></button>
          </form>
          <form action={restart} className="mt-2">
            <input type="hidden" name="from" value={from} />
            <button type="submit" className="cta-link">{labels.restart}</button>
          </form>
        </>
      ) : (
        <form action={ask} className="mt-6 grid gap-6">
          <input type="hidden" name="from" value={from} />
          <div>
            <label htmlFor="pb-name" className="field-label">{labels.name}</label>
            <input id="pb-name" name="name" className="field" required minLength={2} maxLength={100} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="pb-email" className="field-label">{labels.email}</label>
            <input id="pb-email" name="email" type="email" className="field" required maxLength={200} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="pb-phone" className="field-label">{labels.phone}</label>
            <input id="pb-phone" name="phone" type="tel" className="field" required maxLength={40} autoComplete="tel" />
          </div>
          <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button type="submit" className="btn btn-solid btn-block" disabled={asking}>{labels.submit} <Arrow /></button>
        </form>
      )}
      <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">{labels.consent}</p>
    </div>
  );
}
