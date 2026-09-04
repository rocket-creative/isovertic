"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-navy focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 pt-safe-top transition-colors duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur" : "bg-transparent"
        } ${scrolled ? "border-b border-rule lg:border-b-0" : "border-b border-transparent"}`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-16">
          <div className="flex h-[5.5rem] items-center justify-between lg:h-[4.75rem]">
            <Link href="/" className="flex items-center select-none" aria-label={`${site.name} home`}>
              <BrandLogo priority className="h-[3.5rem] w-auto" />
            </Link>
            <Link href="/contact" className="btn btn-solid !min-h-[44px] !px-5 hidden lg:inline-flex">
              Book a pipeline call
            </Link>
            <button
              className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block h-[1px] w-6 bg-current" />
              <span className="block h-[1px] w-6 bg-current" />
              <span className="block h-[1px] w-4 self-start ml-[10px] bg-current" />
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
        <div className="fixed inset-0 z-[100] flex flex-col bg-background pt-safe-top pb-safe-bottom" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="flex h-[5.5rem] items-center justify-between border-b border-rule px-5">
            <BrandLogo className="h-[3rem] w-auto" />
            <button className="flex h-11 w-11 items-center justify-center text-2xl" onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-8" aria-label="Mobile">
            {[...links, { href: "/contact", label: "Book a pipeline call" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-display text-[clamp(26px,7vw,44px)] font-medium leading-tight"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto px-5 pb-8 text-[12px] uppercase tracking-[0.12em] text-ink-soft">Long Island, New York</p>
        </div>
      )}
    </>
  );
}
