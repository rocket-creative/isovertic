const PHRASES: { phrase: string; className: string }[] = [
  { phrase: "growth agency", className: "title-emphasis" },
  { phrase: "medical devices", className: "title-highlight" },
  { phrase: "life sciences", className: "title-highlight" },
  { phrase: "healthcare", className: "title-highlight" },
  { phrase: "pharma", className: "title-highlight" },
  { phrase: "biotech", className: "title-highlight" },
];

function splitTitle(text: string): { text: string; className?: string }[] {
  const lower = text.toLowerCase();
  const parts: { text: string; className?: string }[] = [];
  let i = 0;
  while (i < text.length) {
    let hit: (typeof PHRASES)[number] | undefined;
    for (const phrase of PHRASES) {
      if (!lower.startsWith(phrase.phrase, i)) continue;
      const end = i + phrase.phrase.length;
      const before = i === 0 || !/[a-z]/i.test(text[i - 1]);
      const after = end >= text.length || !/[a-z]/i.test(text[end]);
      if (before && after && (!hit || phrase.phrase.length > hit.phrase.length)) hit = phrase;
    }
    if (hit) {
      parts.push({ text: text.slice(i, i + hit.phrase.length), className: hit.className });
      i += hit.phrase.length;
      continue;
    }
    let j = i + 1;
    while (j < text.length && !PHRASES.some((phrase) => lower.startsWith(phrase.phrase, j))) j++;
    parts.push({ text: text.slice(i, j) });
    i = j;
  }
  return parts;
}

export function HighlightedTitle({ text }: { text: string }) {
  return (
    <>
      {splitTitle(text).map((part, i) =>
        part.className ? (
          <span key={i} className={part.className}>{part.text}</span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}
