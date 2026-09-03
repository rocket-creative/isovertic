"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/how-it-works", label: "How it works" },
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
          scrolled ? "bg-background/85 backdrop-blur border-b border-rule" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-16">
          <Link href="/" className="flex items-center select-none" aria-label={`${site.name} home`}>
            <Image src="/isovertic-logo.png" alt={site.name} width={150} height={45} className="h-8 w-auto" priority />
          </Link>
          <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.1em] lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-solid !min-h-[40px] !px-5">
              Book a pipeline call
            </Link>
          </nav>
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
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background pt-safe-top pb-safe-bottom" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="flex h-16 items-center justify-between border-b border-rule px-5">
            <Image src="/isovertic-logo.png" alt={site.name} width={140} height={42} className="h-7 w-auto" />
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
