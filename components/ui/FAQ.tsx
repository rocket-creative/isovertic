"use client";
import { useState } from "react";

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-rule">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`border-b border-rule ${isOpen ? "faq-open" : ""}`}>
            <button
              className="flex min-h-[56px] w-full items-center justify-between gap-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-[17px] font-medium leading-snug">{f.q}</span>
              <span className="shrink-0 text-2xl leading-none select-none" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div className="faq-panel">
              <div>
                <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
