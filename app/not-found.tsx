import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { HeroFrame } from "@/components/sections/Shell";

export default function NotFound() {
  return (
    <HeroFrame image="Photorealistic documentary photograph, natural window light, 35mm lens. A person stands in a plain office doorway and looks back at a colleague seated at a desk. Off white walls, plain clothes, no logos, no readable text. Page: a missing address.">
      <p className="eyebrow">404</p>
      <h1 className="hero-title mt-5">This page is below the waterline.</h1>
      <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft sm:text-[17px]">The address does not exist, or it moved when we rebuilt. Everything worth finding is one level up.</p>
      <div className="mt-8 flex flex-wrap gap-8">
        <Link href="/" className="btn btn-solid">Back to the start</Link>
        <Link href="/field-notes" className="cta-link">Read the field notes <Arrow /></Link>
      </div>
      <div className="iso-mark mt-8 max-w-[420px]" aria-hidden="true" />
    </HeroFrame>
  );
}
