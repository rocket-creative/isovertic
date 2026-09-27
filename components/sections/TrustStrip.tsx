import Link from "next/link";
import { trustStrip } from "@/content/system";

// Four verifiable facts under the hero subhead. Each links to the page that proves it.

export function TrustStrip() {
  return (
    <ul className="mt-7 list-disc space-y-2 pl-4 text-[12px] uppercase tracking-[0.12em] text-ink-soft" aria-label="What you can verify on this site">
      {trustStrip.map((t) => (
        <li key={t.href}>
          <Link href={t.href} className="hover:text-navy">{t.label}</Link>
        </li>
      ))}
    </ul>
  );
}
