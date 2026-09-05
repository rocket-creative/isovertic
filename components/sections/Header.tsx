"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/problems", label: "Problems" },
  { href: "/results", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/field-notes", label: "Field notes" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      // Keep the keyboard inside the panel while it covers the page.
      const focusable = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger.current?.focus();
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-navy focus:px-4 focus:py-3 focus:text-paper">
        Skip to content
      </a>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 pt-safe-top transition-colors duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur" : "bg-transparent"
        } ${scrolled ? "border-b border-rule lg:border-b-0" : "border-b border-transparent"}`}
      >
        <div className="gutter mx-auto max-w-[1440px]">
          <div className="flex h-16 items-center justify-between lg:h-[4.75rem]">
            <Link href="/" className="-ml-1 flex items-center px-1 select-none" aria-label={`${site.name} home`}>
              <BrandLogo priority className="h-9 w-auto sm:h-11 lg:h-[3.5rem]" />
            </Link>
            <Link href="/contact" className="btn btn-solid hidden !px-5 lg:inline-flex">
              Book a pipeline call
            </Link>
            <button
              ref={trigger}
              className="-mr-3 flex h-12 w-12 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="block h-[1px] w-6 bg-current" />
              <span className="block h-[1px] w-6 bg-current" />
              <span className="ml-[10px] block h-[1px] w-4 self-start bg-current" />
            </button>
          </div>
          <div className="hidden border-t border-rule lg:block" />
          <nav className="hidden h-12 items-center justify-end gap-8 text-[13px] uppercase tracking-[0.1em] lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav"
          ref={panel}
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto overscroll-contain bg-background pb-safe-bottom pt-safe-top"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-rule gutter">
            <BrandLogo className="h-9 w-auto" />
            <button
              className="-mr-3 flex h-12 w-12 items-center justify-center text-2xl leading-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              autoFocus
            >
              ×
            </button>
          </div>
          <nav className="gutter flex flex-col pt-6" aria-label="Mobile">
            {[...links, { href: "/contact", label: "Book a pipeline call" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center border-b border-rule py-3 font-display text-[clamp(24px,6.4vw,40px)] font-medium leading-tight"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="gutter mt-auto pb-8 pt-10">
            <a href={`tel:${site.phone}`} className="flex min-h-[48px] items-center font-display text-[18px] font-medium">
              {site.phone.replace("+1-", "")}
            </a>
            <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-ink-soft">Long Island, New York</p>
          </div>
        </div>
      )}
    </>
  );
}
