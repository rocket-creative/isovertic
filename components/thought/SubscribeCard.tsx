"use client";
import { useActionState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { subscribe } from "@/app/resources/actions";
import type { CaptureState } from "@/lib/capture";
import { track } from "@/lib/analytics";
import { hub } from "@/content/thought";

export function SubscribeCard() {
  const [state, action, pending] = useActionState<CaptureState, FormData>(subscribe, null);
  const pathname = usePathname();
  const copy = {
    headline: hub.subscribe.headline,
    dek: hub.subscribe.dek,
    cta: hub.subscribe.cta,
    cadence: hub.subscribe.cadence,
    list: hub.subscribe.list,
    eyebrow: "Subscribe",
  };

  useEffect(() => {
    if (state?.ok) track("subscribed", { source_page: pathname, cta_label: copy.cta });
  }, [state, pathname, copy.cta]);

  return (
    <div className="flex h-full flex-col border border-rule p-8 md:p-10">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h3 className="mt-4 font-display text-h3 font-semibold">{copy.headline}</h3>
      <p className="mt-4 grow text-[15px] leading-relaxed text-ink/90">{copy.dek}</p>
      {state?.ok ? (
        <p className="mt-8 font-display text-[16px] font-medium">{hub.subscribe.success}</p>
      ) : (
        <form action={action} className="mt-8">
          <input type="hidden" name="list" value={copy.list} />
          <input type="hidden" name="source_path" value={pathname} />
          <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="grow">
              <label htmlFor="sub-essays" className="field-label">Email</label>
              <input id="sub-essays" name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
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
