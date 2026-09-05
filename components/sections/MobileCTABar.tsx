import Link from "next/link";

// Height is fixed at 3.5rem to match --bottom-bar-h, which reserves the body padding
// that keeps this bar and the home indicator off the end of every page.
export function MobileCTABar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-background pb-safe-bottom pl-safe-left pr-safe-right lg:hidden"
      aria-label="Quick actions"
    >
      <div className="flex">
        <Link
          href="/pricing"
          className="flex h-14 flex-1 items-center justify-center border-r border-rule text-[13px] uppercase tracking-[0.1em]"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="flex h-14 flex-1 items-center justify-center bg-navy text-[13px] uppercase tracking-[0.1em] text-paper"
        >
          Book a call
        </Link>
      </div>
    </nav>
  );
}
