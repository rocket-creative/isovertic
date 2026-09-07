import Link from "next/link";
import { quotePlaceholder } from "@/content/voice-audit";

// TODO: paste real client quote
export function ClientQuotePlaceholder() {
  return (
    <blockquote className="max-w-[62ch] border-l-2 border-signal pl-6">
      <p className="font-display text-[clamp(18px,2.2vw,24px)] font-medium leading-snug text-ink">{quotePlaceholder.quote}</p>
      <footer className="mt-5 text-[13px] uppercase tracking-[0.1em] text-ink-soft">{quotePlaceholder.attribution}</footer>
    </blockquote>
  );
}

/** Renders a body string that may contain a single [label](/path) markdown link. */
export function LinkedCopy({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <Link key={i} href={m[2]} className="underline underline-offset-4 hover:text-navy">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

export function PipelineCtaClose({ headline, body }: { headline: string; body: string }) {
  return (
    <div className="max-w-[68ch]">
      <p className="font-display text-[18px] font-medium leading-snug text-ink">{headline}</p>
      <p className="mt-4 leading-relaxed text-ink/90">
        <LinkedCopy text={body} />
      </p>
    </div>
  );
}
