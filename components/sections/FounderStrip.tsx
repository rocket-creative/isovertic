import Link from "next/link";
import { site } from "@/lib/site";

export function FounderStrip() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 xl:px-16">
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-[2px] bg-navy font-display text-lg font-semibold text-paper" aria-hidden="true">
            GS
          </div>
          <div>
            <p className="font-display text-[16px] font-medium">
              <Link href="/people/george-stoff" className="hover:text-signal">{site.founder}</Link>, Founder and Lead Engineer
            </p>
            <p className="text-[13px] text-ink-soft">Thirty years building software, brands, and demand. On every account.</p>
          </div>
        </div>
        <a href={site.linkedin} rel="noopener noreferrer" className="cta-link">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
