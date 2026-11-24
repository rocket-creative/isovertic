import fs from "fs";
import path from "path";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealBlock } from "@/components/ui/RevealBlock";

// A screen recording or a talk from content/site-copy. Plays the file in public/ when it exists;
// until then it holds the place with the caption as its brief, like an image slot.
// With a vertical file, phones get the tall cut and wider screens the wide one (md breakpoint).
const exists = (src: string) => !src.startsWith("/") || fs.existsSync(path.join(process.cwd(), "public", src));
const posterFor = (src: string) => {
  const p = src.replace(/\.(mp4|webm|mov)$/i, ".jpg");
  return src.startsWith("/") && exists(p) ? p : undefined;
};

function Player({ src, caption, tall, className }: { src: string; caption: string; tall?: boolean; className?: string }) {
  return (
    <video
      src={src}
      poster={posterFor(src)}
      controls
      playsInline
      muted
      preload="metadata"
      className={`block w-full rounded-[2px] border border-rule bg-ink object-contain ${tall ? "aspect-[9/16] max-w-[420px]" : "aspect-video"} ${className ?? ""}`}
      aria-label={caption}
    />
  );
}

export function VideoSlot({ src, srcVertical, caption, className = "" }: { src: string; srcVertical?: string; caption: string; className?: string }) {
  if (!exists(src)) return <ImageSlot brief={`Video: ${caption}`} ratio="standard" className={className} />;
  const tall = srcVertical && exists(srcVertical) ? srcVertical : null;
  return (
    <RevealBlock className={className}>
      <figure>
        {tall ? (
          <>
            <Player src={tall} caption={caption} tall className="md:hidden" />
            <Player src={src} caption={caption} className="hidden md:block" />
          </>
        ) : (
          <Player src={src} caption={caption} />
        )}
        <figcaption className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">{caption}</figcaption>
      </figure>
    </RevealBlock>
  );
}
