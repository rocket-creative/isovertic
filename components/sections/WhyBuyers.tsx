import { RevealBlock } from "@/components/ui/RevealBlock";
import { Section } from "@/components/sections/Shell";
import { whyBuyers } from "@/content/system";

export function WhyBuyers() {
  return (
    <Section label={whyBuyers.eyebrow} className="border-t border-rule">
      <RevealBlock className="max-w-[62ch]">
        <h2 className="font-display text-h2 font-medium">
          <span className="text-signal">85 percent</span> future. 15 percent past.
        </h2>
        <p className="mt-6 leading-relaxed text-ink/90">{whyBuyers.body}</p>
      </RevealBlock>
    </Section>
  );
}
