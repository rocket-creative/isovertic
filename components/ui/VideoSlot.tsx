import fs from "fs";
import path from "path";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RevealBlock } from "@/components/ui/RevealBlock";

// A screen recording or a talk from content/site-copy. Plays the file in public/ when it exists;
// until then it holds the place with the caption as its brief, like an image slot.
export function VideoSlot({ src, caption, className = "" }: { src: string; caption: string; className?: string }) {
  const local = src.startsWith("/") ? path.join(process.cwd(), "public", src) : null;
  if (local && !fs.existsSync(local)) return <ImageSlot brief={`Video: ${caption}`} ratio="standard" className={className} />;
  const poster = src.replace(/\.(mp4|webm|mov)$/i, ".jpg");
  const hasPoster = local ? fs.existsSync(path.join(process.cwd(), "public", poster)) : false;
  return (
    <RevealBlock className={className}>
      <figure>
        <video
          src={src}
          poster={hasPoster ? poster : undefined}
          controls
          playsInline
          muted
          preload="metadata"
          className="block aspect-[16/10] w-full rounded-[2px] border border-rule bg-ink object-contain"
          aria-label={caption}
        />
        <figcaption className="mt-3 max-w-[62ch] text-[14px] leading-relaxed text-ink-soft">{caption}</figcaption>
      </figure>
    </RevealBlock>
  );
}
