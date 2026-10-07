import { EmphasisGlow } from "@/components/ui/EmphasisGlow";

export function SplitHeadline({ text, emphasis = "", highlight = "", className = "", delay = 80 }: { text: string; emphasis?: string; highlight?: string; className?: string; delay?: number }) {
  const marks = new Set(emphasis.toLowerCase().split(" ").filter(Boolean));
  const lights = new Set(highlight.toLowerCase().split(" ").filter(Boolean));
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(" ").map((word, i) => {
        const token = word.replace(/[^a-z]/gi, "").toLowerCase();
        const marked = marks.has(token);
        const lit = !marked && lights.has(token);
        const enter = delay + i * 70;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
            {marked ? (
              <EmphasisGlow word={word} delay={enter} />
            ) : (
              <span
                className={`inline-block animate-word-in${lit ? " hero-highlight" : ""}`}
                style={{ animationDelay: `${enter}ms` }}
              >
                {word}&nbsp;
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
