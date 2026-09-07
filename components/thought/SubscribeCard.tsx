"use client";
import { useActionState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { subscribe } from "@/app/resources/actions";
import type { CaptureState } from "@/lib/capture";
import { track } from "@/lib/analytics";
import { hub } from "@/content/thought";

// One form, two uses: the monthly essay list (default) and the research notify list.

export function SubscribeCard({ variant = "essays" }: { variant?: "essays" | "research" }) {
  const [state, action, pending] = useActionState<CaptureState, FormData>(subscribe, null);
  const pathname = usePathname();
  const research = variant === "research";
  const copy = research
    ? { headline: hub.research.title, dek: hub.research.dek, cta: hub.research.cta, cadence: "", list: hub.research.list, eyebrow: hub.research.eyebrow }
    : { headline: hub.subscribe.headline, dek: hub.subscribe.dek, cta: hub.subscribe.cta, cadence: hub.subscribe.cadence, list: hub.subscribe.list, eyebrow: "Subscribe" };

  useEffect(() => {
    if (state?.ok) track(research ? "research_notify_signup" : "subscribed", { source_page: pathname, cta_label: copy.cta });
  }, [state, research, pathname, copy.cta]);

  return (
    <div className={`${research ? "surface-card" : "border border-rule"} flex h-full flex-col p-8 md:p-10`}>
      <p className="eyebrow">{copy.eyebrow}</p>
      <h3 className="mt-4 font-display text-h3 font-semibold">{copy.headline}</h3>
      <p className="mt-4 grow text-[15px] leading-relaxed text-ink/90">{copy.dek}</p>
      {state?.ok ? (
        <p className="mt-8 font-display text-[16px] font-medium">{research ? "Noted. You will hear when it publishes." : hub.subscribe.success}</p>
      ) : (
        <form action={action} className="mt-8">
          <input type="hidden" name="list" value={copy.list} />
          <input type="hidden" name="source_path" value={pathname} />
          <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="grow">
              <label htmlFor={`sub-${variant}`} className="field-label">Email</label>
              <input id={`sub-${variant}`} name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
            </div>
            <button type="submit" disabled={pending} className="btn btn-solid">{pending ? "One moment" : copy.cta}</button>
          </div>
          {copy.cadence && <p className="mt-3 text-[12px] uppercase tracking-[0.1em] text-ink-soft">{copy.cadence}</p>}
          {state && !state.ok && <p className="mt-3 text-[14px] text-signal">{state.error}</p>}
        </form>
      )}
    </div>
  );
}
