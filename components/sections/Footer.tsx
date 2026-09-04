import Link from "next/link";
import { BrandLogo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Services",
    items: [
      ["Appointment setting", "/outbound-appointment-setting"],
      ["Google Ads", "/google-ads"],
      ["SEO and content", "/seo-content"],
      ["Web development", "/web-development"],
      ["TV and CTV", "/tv-ctv-advertising"],
      ["Brand and design", "/design-brand"],
      ["Protocol (team training)", "/protocol"],
    ],
  },
  {
    h: "Industries",
    items: [
      ["Healthcare", "/industries/healthcare"],
      ["Biotech", "/industries/biotech"],
      ["Startups", "/industries/startups"],
      ["Professional services", "/industries/professional-services"],
      ["Home services", "/industries/home-services"],
      ["Hospitality", "/industries/hospitality"],
    ],
  },
  {
    h: "Firm",
    items: [
      ["How it works", "/how-it-works"],
      ["Results", "/results"],
      ["Pricing", "/pricing"],
      ["Field notes", "/field-notes"],
      ["Answers", "/answers"],
      ["Glossary", "/glossary"],
      ["About", "/about"],
      ["Long Island", "/long-island"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex select-none" aria-label={`${site.name} home`}>
              <BrandLogo inverted />
            </Link>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-relaxed text-paper/70">
              One team builds the asset, runs the ads, buys the media, and books the meetings. One number that matters: meetings that close.
            </p>
            <div className="iso-mark iso-mark--paper mt-8 max-w-[280px]" aria-hidden="true" />
          </div>
          {cols.map((c) => (
            <nav key={c.h} aria-label={c.h}>
              <p className="eyebrow !text-paper/50">{c.h}</p>
              <ul className="mt-4 space-y-2.5">
                {c.items.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[14px] text-paper/85 hover:text-paper">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[12px] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.entity} {site.locality}.</p>
          <a href={site.linkedin} className="uppercase tracking-[0.1em] hover:text-paper" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
