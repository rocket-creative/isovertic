import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { RevealBlock } from "@/components/ui/RevealBlock";

export function CTABand() {
  return (
    <section className="bg-navy text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 xl:px-16">
        <RevealBlock>
          <p className="eyebrow !text-paper/50">The division of labor</p>
          <h2 className="mt-4 font-display text-h1 font-medium">Your only job is to <span className="text-signal">close.</span></h2>
          <div className="iso-mark iso-mark--paper mt-10 max-w-[420px]" aria-hidden="true" />
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn btn-ghost--paper btn-ghost">
              Book a pipeline call <Arrow />
            </Link>
            <Link href="/pricing" className="cta-link text-paper/80 hover:text-paper">
              Pricing is published <Arrow />
            </Link>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
