import Link from "next/link";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pb-safe-bottom lg:hidden">
      <div className="flex border-t border-rule bg-background">
        <Link href="/pricing" className="flex min-h-[56px] flex-1 items-center justify-center border-r border-rule text-[12px] uppercase tracking-[0.1em]">
          Pricing
        </Link>
        <Link href="/contact" className="flex min-h-[56px] flex-1 items-center justify-center bg-navy text-[12px] uppercase tracking-[0.1em] text-paper">
          Book a call
        </Link>
      </div>
    </div>
  );
}
