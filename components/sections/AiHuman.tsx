import { RevealBlock } from "@/components/ui/RevealBlock";
import { Section } from "@/components/sections/Shell";
import { aiHuman, aiRuns, humansDo } from "@/content/system";

export function AiHuman() {
  return (
    <Section label={aiHuman.eyebrow} className="border-t border-rule">
      <RevealBlock>
        <h2 className="max-w-[20ch] font-display text-h2 font-medium">
          AI for automation. Humans for <span className="text-signal">creation.</span>
        </h2>
        <p className="mt-6 max-w-[62ch] leading-relaxed text-ink/90">{aiHuman.lead}</p>
      </RevealBlock>
      <div className="mt-12 grid gap-px bg-rule lg:grid-cols-2">
        <RevealBlock className="bg-background p-8">
          <p className="eyebrow">{aiHuman.aiLabel}</p>
          <ol className="mt-6 space-y-3">
            {aiRuns.map((item, i) => (
              <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-ink/90">
                <span className="eyebrow !text-ink-soft">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[14px] leading-relaxed text-ink-soft">{aiHuman.aiNote}</p>
        </RevealBlock>
        <RevealBlock delay={80} className="bg-background p-8">
          <p className="eyebrow">{aiHuman.humanLabel}</p>
          <ol className="mt-6 space-y-3">
            {humansDo.map((item, i) => (
              <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-ink/90">
                <span className="eyebrow !text-ink-soft">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[14px] leading-relaxed text-ink-soft">{aiHuman.humanNote}</p>
        </RevealBlock>
      </div>
      <RevealBlock className="mt-10">
        <p className="max-w-[62ch] leading-relaxed text-ink/90">{aiHuman.close}</p>
      </RevealBlock>
    </Section>
  );
}
