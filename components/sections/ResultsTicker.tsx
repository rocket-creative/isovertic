import Link from "next/link";
import { publishedCaseStudies } from "@/content/case-studies";

export function ResultsTicker() {
  const cards = publishedCaseStudies.flatMap((c) =>
    c.stats.map((s) => ({ value: s.value, label: s.label, clientName: c.clientName, slug: c.slug }))
  );
  if (cards.length === 0) return null;
  const row = [...cards, ...cards];

  return (
    <div>
      <div className="marquee group overflow-hidden border-y border-rule motion-reduce:overflow-x-auto" aria-label="Client results">
        <div className="marquee-track flex w-max items-stretch gap-px bg-rule [animation-duration:45s] group-focus-within:[animation-play-state:paused]">
          {row.map((card, i) => {
            const duplicate = i >= cards.length;
            return (
              <Link
                key={i}
                href={`/results/${card.slug}`}
                className="surface-card w-[220px] shrink-0 p-6 sm:w-[260px]"
                aria-hidden={duplicate}
                tabIndex={duplicate ? -1 : undefined}
              >
                <p className="font-display text-[clamp(30px,3.2vw,44px)] font-semibold leading-none text-brass">{card.value}</p>
                <p className="mt-4 text-[14px] leading-snug text-ink/90">{card.label}</p>
                <p className="mt-3 text-[12px] leading-snug text-ink-soft">{card.clientName}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">
        First eight months of each engagement, against the client&apos;s{" "}
        <Link href="/results#method" className="underline underline-offset-4 hover:text-navy">
          own prior six month baseline.
        </Link>
      </p>
    </div>
  );
}
