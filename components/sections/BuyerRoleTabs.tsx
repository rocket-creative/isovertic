"use client";
import { useState } from "react";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { buyerRoles } from "@/content/system";

// All three panels are in the server HTML; the tabs only toggle the hidden attribute. Without JavaScript
// every panel shows, stacked, which is the reading order anyway.

export function BuyerRoleTabs() {
  const [active, setActive] = useState(0);
  return (
    <Section label={buyerRoles.eyebrow}>
      <RevealBlock>
        <h2 className="max-w-[24ch] font-display text-h2 font-medium">{buyerRoles.h2}</h2>
      </RevealBlock>
      <div className="mt-10">
        <div role="tablist" aria-label={buyerRoles.eyebrow} className="flex flex-wrap border-b border-rule">
          {buyerRoles.roles.map((r, i) => (
            <button
              key={r.key}
              role="tab"
              id={`tab-${r.key}`}
              aria-selected={active === i}
              aria-controls={`panel-${r.key}`}
              onClick={() => setActive(i)}
              className={`-mb-px min-h-[48px] border-b-2 px-1 pr-8 text-left font-display text-[15px] font-medium ${active === i ? "border-navy text-ink" : "border-transparent text-ink-soft hover:text-ink"}`}
            >
              {r.tab}
            </button>
          ))}
        </div>
        {buyerRoles.roles.map((r, i) => (
          <div
            key={r.key}
            role="tabpanel"
            id={`panel-${r.key}`}
            aria-labelledby={`tab-${r.key}`}
            hidden={active !== i}
            className="max-w-[68ch] pt-10"
          >
            <p className="font-display text-[clamp(20px,2.4vw,28px)] font-medium leading-snug">“{r.question}”</p>
            <p className="mt-5 leading-relaxed text-ink/90">{r.body}</p>
            <div className="mt-6">
              <TrackedLink href={r.cta.href} section="buyer_roles" label={r.cta.label} className="cta-link">
                {r.cta.label} <Arrow />
              </TrackedLink>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
