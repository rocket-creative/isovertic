import React from "react";

export function renderMd(md: string) {
  const blocks = md.split(/\n\n+/);
  return blocks.map((b, i) => {
    const t = b.trim();
    if (!t) return null;
    if (t.startsWith("## ")) return <h2 key={i}>{t.slice(3)}</h2>;
    return <p key={i}>{t.replace(/\n/g, " ")}</p>;
  });
}
