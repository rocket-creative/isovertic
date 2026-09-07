import Link from "next/link";
import { trustStrip } from "@/content/system";

// Four verifiable facts under the hero subhead. Each links to the page that proves it.

export function TrustStrip() {
  return (
    <ul className="hero-sub mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] uppercase tracking-[0.12em] text-ink-soft" aria-label="What you can verify on this site">
      {trustStrip.map((t, i) => (
        <li key={t.href} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden="true">·</span>}
          <Link href={t.href} className="hover:text-navy">{t.label}</Link>
        </li>
      ))}
    </ul>
  );
}
