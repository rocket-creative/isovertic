import React from "react";
import Link from "next/link";
import { essayTemplate } from "@/content/thought";
import { InlineDiagram } from "@/components/thought/InlineDiagram";

// Small markdown renderer for field notes. Supports: ## and ### headings, ordered and unordered lists,
// paragraphs, inline links [text](url), **bold**, *italic*, pull quotes (a paragraph starting with "> "),
// markdown pipe tables, horizontal rules (---), HTML comments (stripped), two callout blocks fenced with
// ":::source" and ":::counterargument" on their own lines, closed with ":::", and ":::diagram <name>"
// which renders an inline SVG from components/thought/InlineDiagram.
// Internal links render through next/link. No raw HTML, no images. Anything else renders as a paragraph.

function inline(text: string, keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\n]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      const href = m[2];
      const internal = href.startsWith("/");
      out.push(
        internal ? (
          <Link key={`${keyBase}-${i}`} href={href} className="underline underline-offset-4 hover:text-navy">{m[1]}</Link>
        ) : (
          <a key={`${keyBase}-${i}`} href={href} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{m[1]}</a>
        )
      );
    } else if (m[3]) {
      out.push(<strong key={`${keyBase}-${i}`}>{m[3]}</strong>);
    } else if (m[4]) {
      out.push(<em key={`${keyBase}-${i}`}>{m[4]}</em>);
    }
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function isTableBlock(lines: string[]): boolean {
  if (lines.length < 2) return false;
  if (!lines.every((l) => l.includes("|"))) return false;
  return /^\|?[\s:|-]+\|[\s:|-]+/.test(lines[1].trim());
}

function parseRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  return trimmed.split("|").map((c) => c.trim());
}

function table(lines: string[], i: number): React.ReactNode {
  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow);
  return (
    <div key={i} className="t-wrap prose-iso-table">
      <table className="t t--stack t--560">
        <thead>
          <tr>
            {headers.map((h, j) => (
              <th key={j}>{inline(h, `th-${i}-${j}`)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, ri) => (
            <tr key={ri}>
              {cells.map((cell, ci) => (
                <td key={ci} data-label={headers[ci] || ""}>
                  {inline(cell, `td-${i}-${ri}-${ci}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function block(t: string, i: number): React.ReactNode {
  if (t === "---" || /^(-{3,}|\*{3,}|_{3,})$/.test(t)) return null;
  if (t.startsWith("### ")) return <h3 key={i}>{inline(t.slice(4), `h3-${i}`)}</h3>;
  if (t.startsWith("## ")) return <h2 key={i}>{inline(t.slice(3), `h2-${i}`)}</h2>;
  const lines = t.split("\n");
  if (isTableBlock(lines)) return table(lines, i);
  if (lines.every((l) => /^>\s?/.test(l))) {
    return (
      <blockquote key={i} className="pull-quote">
        <p>{inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), `q-${i}`)}</p>
      </blockquote>
    );
  }
  if (lines.every((l) => /^\d+\.\s/.test(l))) {
    return (
      <ol key={i}>
        {lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s/, ""), `ol-${i}-${j}`)}</li>)}
      </ol>
    );
  }
  if (lines.every((l) => /^[-*]\s/.test(l))) {
    return (
      <ul key={i}>
        {lines.map((l, j) => <li key={j}>{inline(l.replace(/^[-*]\s/, ""), `ul-${i}-${j}`)}</li>)}
      </ul>
    );
  }
  return <p key={i}>{inline(lines.join(" "), `p-${i}`)}</p>;
}

export function renderMd(md: string) {
  const out: React.ReactNode[] = [];
  // Strip HTML comments (editorial notes for reviewers) before parsing.
  const cleaned = md.replace(/<!--[\s\S]*?-->/g, "").trim();
  // Split callout fences out first so their inner paragraphs render inside the box.
  const parts = cleaned.split(/^(:::(?:source|counterargument|diagram[^\n]*)\s*$[\s\S]*?^:::\s*$)/m);
  parts.forEach((part, pi) => {
    const diagram = part.match(/^:::diagram\s+([\w-]+)\s*$/m);
    if (diagram) {
      out.push(<InlineDiagram key={`d-${pi}`} name={diagram[1]} />);
      return;
    }
    const fence = part.match(/^:::(source|counterargument)\s*$([\s\S]*?)^:::\s*$/m);
    if (fence) {
      const kind = fence[1] as "source" | "counterargument";
      const inner = fence[2].trim().split(/\n\n+/).filter(Boolean);
      out.push(
        <aside key={`c-${pi}`} className={`callout callout--${kind}`}>
          <p className="callout__label">{kind === "source" ? essayTemplate.sourceLabel : essayTemplate.counterLabel}</p>
          {inner.map((b, j) => block(b.trim(), j))}
        </aside>
      );
      return;
    }
    part.split(/\n\n+/).forEach((b, bi) => {
      const t = b.trim();
      if (!t) return;
      const node = block(t, pi * 1000 + bi);
      if (node) out.push(node);
    });
  });
  return out;
}
