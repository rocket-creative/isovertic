import type { ReactNode } from "react";
import { LinkedCopy } from "@/components/ui/ClientQuote";
import { HighlightedTitle } from "@/components/ui/HighlightedTitle";
import { describeHeroImage, ImagePlaceholder, showImagePlaceholders } from "@/components/ui/ImagePlaceholder";
import { RevealBlock } from "@/components/ui/RevealBlock";

export function Section({
  children,
  label,
  className = "",
  deferred = true,
  tone = "paper",
  backdrop,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
  deferred?: boolean;
  tone?: "paper" | "bright" | "navy";
  backdrop?: ReactNode;
}) {
  return (
    <section className={`${deferred ? "section-deferred" : ""} relative ${tone === "bright" ? "bg-bright" : tone === "navy" ? "tone-navy overflow-hidden bg-navy" : ""} ${className}`}>
      {backdrop}
      <div className="relative mx-auto grid max-w-[1440px] gap-8 gutter py-20 lg:grid-cols-[48px_1fr] lg:py-28">
        <div className="hidden lg:block" aria-hidden="true">
          {label && <span className="sidebar-label sticky top-28 lg:top-36">{label}</span>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function HeroFrame({ children, image, after, aside, backdrop }: { children: ReactNode; image: string; after?: ReactNode; aside?: ReactNode; backdrop?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-bright">
      {backdrop}
      <div className="hero-top relative mx-auto max-w-[1440px] gutter pb-8 lg:pb-10">
        <div className={showImagePlaceholders || aside ? "grid items-center gap-8 lg:grid-cols-[minmax(0,46rem)_minmax(220px,1fr)] lg:gap-12" : ""}>
          <div className="relative z-10">
            {children}
          </div>
          {aside}
          {showImagePlaceholders && !aside ? (
            <ImagePlaceholder
              description={image}
              className="aspect-[4/3] w-full lg:aspect-square lg:w-[min(62vh,600px)] lg:max-w-full lg:justify-self-end"
            />
          ) : null}
        </div>
        {after}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, h1, lead, cta, image, aside, backdrop }: { eyebrow?: string; h1: ReactNode; lead?: string | readonly string[]; cta?: ReactNode; image?: string; aside?: ReactNode; backdrop?: ReactNode }) {
  const leads = lead == null ? [] : typeof lead === "string" ? [lead] : [...lead];
  const title = typeof h1 === "string" ? h1 : undefined;
  return (
    <HeroFrame image={image ?? describeHeroImage(eyebrow, title)} aside={aside} backdrop={backdrop}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className={`${eyebrow ? "mt-5" : ""} hero-title`}>{typeof h1 === "string" ? <HighlightedTitle text={h1} /> : h1}</h1>
      {leads.map((p, i) => (
        <p key={i} className={`${i === 0 ? "mt-5" : "mt-4"} hero-sub max-w-[62ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px] sm:leading-relaxed`}><LinkedCopy text={p} /></p>
      ))}
      {cta ? <div className="hero-cta mt-8">{cta}</div> : null}
      <div className="iso-mark rule-draw mt-8 max-w-[560px]" aria-hidden="true" />
    </HeroFrame>
  );
}

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <RevealBlock delay={delay}>{children}</RevealBlock>;
}
