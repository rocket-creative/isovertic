import Link from "next/link";
import { people } from "@/content/people";

export function FounderStrip() {
  return (
    <section className="border-t border-rule">
      <div className="mx-auto grid max-w-[1440px] gap-10 gutter py-12 lg:grid-cols-2">
        {people.map((p) => (
          <div key={p.slug} className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] bg-navy font-display text-lg font-semibold text-paper" aria-hidden="true">
              {p.initials}
            </div>
            <div>
              <p className="font-display text-[16px] font-medium">
                <Link href={`/people/${p.slug}`} className="hover:text-signal">{p.name}</Link>, {p.title}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{p.card}</p>
              {p.sameAs?.[0] && (
                <a href={p.sameAs[0]} rel="noopener noreferrer" className="cta-link mt-4">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
