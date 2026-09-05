import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh flex-col justify-center">
      <div className="mx-auto w-full max-w-[1440px] gutter">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 max-w-[16ch] font-display text-h1 font-medium">This page is below the waterline.</h1>
        <p className="mt-6 max-w-[52ch] text-ink-soft">The address does not exist, or it moved when we rebuilt. Everything worth finding is one level up.</p>
        <div className="mt-10 flex flex-wrap gap-8">
          <Link href="/" className="btn btn-solid">Back to the start</Link>
          <Link href="/field-notes" className="cta-link">Read the field notes <Arrow /></Link>
        </div>
        <div className="iso-mark mt-16 max-w-[420px]" aria-hidden="true" />
      </div>
    </section>
  );
}
