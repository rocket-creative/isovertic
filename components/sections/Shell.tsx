import type { ReactNode } from "react";
import { RevealBlock } from "@/components/ui/RevealBlock";

export function Section({
  children,
  label,
  className = "",
  deferred = true,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
  deferred?: boolean;
}) {
  return (
    <section className={`${deferred ? "section-deferred" : ""} relative ${className}`}>
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[48px_1fr] lg:py-28 xl:px-16">
        <div className="hidden lg:block" aria-hidden="true">
          {label && <span className="sidebar-label sticky top-28">{label}</span>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, h1, lead }: { eyebrow: string; h1: ReactNode; lead?: string }) {
  return (
    <section className="border-b border-rule pt-32 lg:pt-40">
      <div className="mx-auto max-w-[1440px] px-5 pb-14 sm:px-8 xl:px-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-[18ch] font-display text-h1 font-medium">{h1}</h1>
        {lead && <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">{lead}</p>}
        <div className="iso-mark rule-draw mt-12 max-w-[560px]" aria-hidden="true" />
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <RevealBlock delay={delay}>{children}</RevealBlock>;
}
