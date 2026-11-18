import Link from "next/link";
import { BrandLogo } from "@/components/ui/Logo";
import { site } from "@/lib/site";
import { footerCols, footerLine, reviewNotice } from "@/content/site-nav";

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto max-w-[1440px] gutter py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex select-none" aria-label={`${site.name} home`}>
              <BrandLogo inverted />
            </Link>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-paper/70">{footerLine}</p>
            <div className="iso-mark iso-mark--paper mt-8 max-w-[280px]" aria-hidden="true" />
          </div>
          {footerCols.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <p className="eyebrow !text-paper/50">{c.h}</p>
              <ul className="mt-2 lg:mt-4 lg:space-y-2.5">
                {c.items.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="flex min-h-[44px] items-center text-[14px] text-paper/85 hover:text-paper lg:min-h-0">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 border-t border-paper/15 pt-6 text-[13px] leading-relaxed text-paper/60 sm:mt-16">{reviewNotice}</p>
        <div className="mt-4 flex flex-wrap gap-x-6 text-[13px] text-paper/60">
          <a href={`mailto:${site.email}`} className="flex min-h-[44px] items-center hover:text-paper sm:min-h-0">{site.email}</a>
          <a href={`tel:${site.phone}`} className="flex min-h-[44px] items-center hover:text-paper sm:min-h-0">{site.phone.replace("+1-", "")}</a>
        </div>
      </div>
    </footer>
  );
}
