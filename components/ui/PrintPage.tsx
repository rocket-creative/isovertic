import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { PrintButton } from "@/components/ui/PrintButton";

// Shell for the printable single page versions of the compliance and measurement standards.
// Print styles live in globals.css under @media print and hide the header, footer, and mobile bar.

export function PrintPage({
  eyebrow,
  title,
  backHref,
  backLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <article className="print-page mx-auto max-w-[1100px] gutter pt-32 pb-24 lg:pt-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-[20ch] font-display text-h2 font-medium">{title}</h1>
        </div>
        <div className="print-hide flex items-center gap-6">
          <Link href={backHref} className="cta-link">{backLabel}</Link>
          <PrintButton />
        </div>
      </div>
      <div className="iso-mark mt-8 max-w-[420px]" aria-hidden="true" />
      <div className="mt-10">{children}</div>
      <p className="mt-12 border-t border-rule pt-5 text-[12px] leading-relaxed text-ink-soft">
        {site.name} · {site.entity} {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode} · {site.email} · {site.url}
      </p>
    </article>
  );
}
