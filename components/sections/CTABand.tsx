import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { RevealBlock } from "@/components/ui/RevealBlock";

export function CTABand() {
  return (
    <section className="bg-slate-soft text-ink">
      <div className="mx-auto max-w-[1440px] gutter py-24">
        <RevealBlock>
          <p className="eyebrow">The division of labor</p>
          <h2 className="mt-4 font-display text-h1 font-medium">Your only job is to <span className="text-signal">close.</span></h2>
          <div className="iso-mark mt-10 max-w-[420px]" aria-hidden="true" />
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn btn-solid">
              Book a pipeline call <Arrow />
            </Link>
            <Link href="/pricing" className="cta-link">
              Pricing is published <Arrow />
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
