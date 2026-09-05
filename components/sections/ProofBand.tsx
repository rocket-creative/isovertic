import { CountUp } from "@/components/ui/CountUp";
import { RevealBlock } from "@/components/ui/RevealBlock";

const stats = [
  { n: 147, suffix: "", claim: "Hand built pages written for one life science client, on top of a 14,000 page product catalog generated from its own data." },
  { n: 18, suffix: "", claim: "Documented outbound plays in the runbook behind our appointment programs." },
  { n: 30, suffix: "+", claim: "Years the founder has spent building software, brands, and demand." },
];

export function ProofBand() {
  return (
    <div className="grid gap-px bg-rule sm:grid-cols-3">
      {stats.map((s, i) => (
        <RevealBlock key={i} delay={i * 100} className="surface-card p-8">
          <p className="font-display text-[clamp(48px,6vw,84px)] font-semibold leading-none text-brass">
            <CountUp end={s.n} suffix={s.suffix} />
          </p>
          <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">{s.claim}</p>
        </RevealBlock>
      ))}
    </div>
  );
}
