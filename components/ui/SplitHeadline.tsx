export function SplitHeadline({ text, className = "", delay = 80 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden="true">
          <span className="inline-block animate-word-in" style={{ animationDelay: `${delay + i * 70}ms` }}>
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}
