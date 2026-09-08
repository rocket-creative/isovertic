import Link from "next/link";
import { tiers, billing, tierMath, usd } from "@/content/tiers";
import { RevealBlock } from "@/components/ui/RevealBlock";

// One price per tier: the 12 month term rate. No toggle, because there is no month to month option.
// Server rendered; every number is in the HTML.

export function PricingTiers() {
  return (
    <div>
      <p className="max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">{billing.cardNote} {billing.quarterlyNote} {billing.upfrontNote}</p>

      <div className="mt-10 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2 xl:grid-cols-4">
        {tiers.map((t, i) => {
          const m = tierMath(t);
          const startHref = `/start?plan=${t.slug}-${t.quarterlyOnly ? "quarterly" : "term"}`;
          return (
            <RevealBlock key={t.name} delay={i * 80} className={`flex h-full flex-col p-8 ${t.featured ? "bg-navy text-paper" : "surface-card"}`}>
              <p className={`eyebrow ${t.featured ? "!text-paper/70" : ""}`}>{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">
                {t.from ? "From " : ""}
                {usd(t.term)}
              </p>
              <p className={`mt-2 text-[13px] ${t.featured ? "text-paper/70" : "text-ink-soft"}`}>
                per month{t.spend ? `, ${t.spend}` : ""}, 12 month term
              </p>
              <p className={`mt-3 text-[13px] leading-relaxed ${t.featured ? "text-paper/80" : "text-brass"}`}>
                {usd(15000)} website rebuild and hosting included. {usd(m.totalValue)} of work on the year.
              </p>
              <p className={`mt-2 text-[12px] leading-relaxed ${t.featured ? "text-paper/70" : "text-ink-soft"}`}>
                {t.quarterlyOnly
                  ? `Four payments of ${t.from ? "from " : ""}${usd(m.quarterly)}, one each quarter.`
                  : `Billed monthly, or ${usd(m.quarterly)} a quarter (4 percent off), or ${usd(m.upfront)} up front (eleven for twelve).`}
              </p>
              <p className={`mt-6 text-[15px] leading-relaxed ${t.featured ? "text-paper/90" : "text-ink/90"}`}>{t.for}</p>
              <ul className={`mt-6 grow space-y-3 border-t pt-6 text-[14px] leading-relaxed ${t.featured ? "border-paper/20 text-paper/80" : "border-rule text-ink-soft"}`}>
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href={startHref} className={`btn mt-9 ${t.featured ? "btn-signal" : "btn-ghost"}`}>{t.cta}</Link>
              <p className={`mt-3 text-[12px] leading-relaxed ${t.featured ? "text-paper/70" : "text-ink-soft"}`}>
                Card or bank debit, no call required. <Link href="/contact" className={`underline underline-offset-4 ${t.featured ? "hover:text-paper" : "hover:text-navy"}`}>Talk first</Link> if you prefer.
              </p>
              <p className={`mt-2 text-[12px] leading-relaxed ${t.featured ? "text-paper/70" : "text-ink-soft"}`}>
                <Link href={billing.standardHref} className={`underline underline-offset-4 ${t.featured ? "hover:text-paper" : "hover:text-navy"}`}>{billing.standardLabel}</Link>
              </p>
            </RevealBlock>
          );
        })}
      </div>
    </div>
  );
}
