import fs from "fs";
import path from "path";
import { imageSlot } from "@/content/site-visuals";
import { RevealBlock } from "@/components/ui/RevealBlock";

// An empty frame that holds the place of a photograph and prints the brief for it.
// Swap the frame for next/image once the photograph exists.
const RATIO = {
  wide: "aspect-[4/3] sm:aspect-[21/9]",
  standard: "aspect-[4/3]",
  portrait: "aspect-[4/5] max-w-[300px]",
} as const;

export function ImageSlot({ brief, src, ratio = "wide", className = "" }: { brief: string; src?: string; ratio?: keyof typeof RATIO; className?: string }) {
  if (src) {
    // A finished picture that has not been added to public/ yet renders nothing, so the page never shows a broken image.
    if (src.startsWith("/") && !fs.existsSync(path.join(process.cwd(), "public", src))) return null;
    return (
      <RevealBlock className={className}>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* The picture links to its full size file, so a reader on a phone or in a narrow column can open it and read it. */}
          <a href={src} className="block">
            <img src={src} alt={brief} loading="lazy" decoding="async" className="block h-auto w-full rounded-[2px] border border-rule bg-white" />
          </a>
        </figure>
      </RevealBlock>
    );
  }
  return (
    <RevealBlock className={className}>
      <figure className={`image-slot ${RATIO[ratio]}`}>
        <span className="image-slot-tick left-0 top-0 border-l border-t" aria-hidden="true" />
        <span className="image-slot-tick right-0 top-0 border-r border-t" aria-hidden="true" />
        <span className="image-slot-tick bottom-0 left-0 border-b border-l" aria-hidden="true" />
        <span className="image-slot-tick bottom-0 right-0 border-b border-r" aria-hidden="true" />
        <span className="image-slot-scan" aria-hidden="true" />
        <figcaption className="relative max-w-[62ch]">
          <p className="eyebrow">{imageSlot.label}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-soft sm:text-[14px]">{brief}</p>
        </figcaption>
      </figure>
    </RevealBlock>
  );
}
