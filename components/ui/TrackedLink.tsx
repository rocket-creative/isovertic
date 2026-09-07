"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { track, type EventName } from "@/lib/analytics";

// A next/link that fires cta_click with {page, section, cta_label, destination} on click.
// External hrefs (Calendly, PDFs) render as a plain anchor.

export function TrackedLink({
  href,
  section,
  label,
  event = "cta_click",
  className = "",
  children,
}: {
  href: string;
  section: string;
  label: string;
  event?: EventName;
  className?: string;
  children: ReactNode;
}) {
  const fire = () => track(event, { section, cta_label: label, destination: href });
  if (href.startsWith("http")) {
    return (
      <a href={href} onClick={fire} className={className} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={fire} className={className}>
      {children}
    </Link>
  );
}
