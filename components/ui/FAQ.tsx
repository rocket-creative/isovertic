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
              className="flex w-full items-center justify-between gap-6 py-5 text-left min-h-[44px]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-[17px] font-medium leading-snug">{f.q}</span>
              <span className="text-xl leading-none select-none" aria-hidden="true">{isOpen ? "−" : "+"}</span>
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
