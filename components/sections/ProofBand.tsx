import { RevealBlock } from "@/components/ui/RevealBlock";
import { LinkedCopy } from "@/components/ui/ClientQuote";

const stats = [
  {
    value: "Roughly 5x",
    claim: "Form-fill lift for [ingenious targeting laboratory](/results#ingenious-targeting-laboratory), months five through eight versus the six-month baseline before start.",
  },
  {
    value: "3.7x",
    claim: "Monthly organic clicks from Google Search for ingenious targeting laboratory over the same window, measured in Search Console.",
  },
  {
    value: "One a week",
    claim: "Qualified leads for [Sydra](/results#sydra) on roughly $1,000 a month in ad spend and $2,500 a month in site and campaign work, from a brand that did not exist online at start.",
  },
  {
    value: "Hundreds",
    claim: "Hand-built specialist pages we wrote for ingenious targeting laboratory, on top of a catalog of thousands of product pages generated one page per model from the client's own data.",
  },
  {
    value: "18",
    claim: "Documented outbound plays in the runbook behind our appointment programs.",
  },
  {
    value: "30+",
    claim: "Years the founder has spent building software, brands, and demand.",
  },
];

export function ProofBand() {
  return (
    <div className="grid gap-px bg-rule sm:grid-cols-2">
      {stats.map((s, i) => (
        <RevealBlock key={i} delay={i * 100} className="surface-card p-8">
          <p className="font-display text-[clamp(32px,4.2vw,64px)] font-semibold leading-[0.95] tracking-[-0.02em] text-brass">
            {s.value}
          </p>
          <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">
            <LinkedCopy text={s.claim} />
          </p>
        </RevealBlock>
      ))}
    </div>
  );
}
