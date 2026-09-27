import Link from "next/link";
import { clientQuote } from "@/content/voice-audit";

export function ClientQuote() {
  return (
    <blockquote className="max-w-[62ch] border-l-2 border-signal pl-6">
      <div className="space-y-4">
        {clientQuote.paragraphs.map((paragraph) => (
          <p key={paragraph} className="font-display text-[clamp(18px,2.2vw,24px)] font-medium leading-snug text-ink">{paragraph}</p>
        ))}
      </div>
      <footer className="mt-5 text-[13px] uppercase tracking-[0.1em] text-ink-soft">
        <span className="block">{clientQuote.name}</span>
        <span className="mt-1 block">{clientQuote.company}</span>
      </footer>
    </blockquote>
  );
}

/** @deprecated Use ClientQuote. Kept so older imports keep working. */
export function ClientQuotePlaceholder() {
  return <ClientQuote />;
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
