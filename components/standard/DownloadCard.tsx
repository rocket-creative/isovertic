"use client";
import { useActionState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { requestStandard } from "@/app/resources/actions";
import type { CaptureState } from "@/lib/capture";
import { track } from "@/lib/analytics";
import { Arrow } from "@/components/ui/Arrow";

// Lead gated one page version of a resource. Email required. On success the print ready page opens,
// and standard_downloaded fires with the email domain and tier interest.

export function DownloadCard({
  title,
  body,
  href,
  showTier = true,
}: {
  title: string;
  body: string;
  href: string;
  showTier?: boolean;
}) {
  const [state, action, pending] = useActionState<CaptureState, FormData>(requestStandard, null);
  const pathname = usePathname();

  useEffect(() => {
    if (state?.ok) track("standard_downloaded", { destination: href });
  }, [state, href]);

  return (
    <div className="border border-rule p-8 md:p-10">
      <p className="eyebrow">One page version</p>
      <h3 className="mt-3 font-display text-h3 font-semibold">{title}</h3>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-ink/90">{body}</p>
      {state?.ok ? (
        <div className="mt-8">
          <p className="font-display text-[17px] font-medium">Thank you. The one page version is ready.</p>
          <Link href={href} className="btn btn-solid mt-5" target="_blank" rel="noopener">
            Open and print to PDF <Arrow />
          </Link>
        </div>
      ) : (
        <form action={action} className="mt-8 grid gap-6 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <input type="hidden" name="source_path" value={pathname} />
          <input type="hidden" name="resource" value={title} />
          <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div>
            <label htmlFor="dl-email" className="field-label">Work email</label>
            <input id="dl-email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
          </div>
          {showTier ? (
            <div>
              <label htmlFor="dl-tier" className="field-label">Tier you are weighing</label>
              <select id="dl-tier" name="tier" className="field field-select" defaultValue="">
                <option value="">Not sure yet</option>
                <option value="Baseline">Baseline</option>
                <option value="Catalyst">Catalyst</option>
                <option value="Kinetic">Kinetic</option>
                <option value="Critical Mass">Critical Mass</option>
              </select>
            </div>
          ) : (
            <div>
              <label htmlFor="dl-company" className="field-label">Company</label>
              <input id="dl-company" name="company" type="text" autoComplete="organization" className="field" />
            </div>
          )}
          <button type="submit" disabled={pending} className="btn btn-solid">
            {pending ? "One moment" : "Send me the page"}
          </button>
          {state && !state.ok && <p className="text-[14px] text-signal sm:col-span-3">{state.error}</p>}
        </form>
      )}
    </div>
  );
}
