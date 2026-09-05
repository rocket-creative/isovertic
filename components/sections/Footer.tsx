import Link from "next/link";
import { BrandLogo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Services",
    items: [
      ["All services", "/services"],
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
      ["All industries", "/industries"],
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
      ["Problems we solve", "/problems"],
      ["Pricing", "/pricing"],
      ["Field notes", "/field-notes"],
      ["Answers", "/answers"],
      ["Glossary", "/glossary"],
      ["About", "/about"],
      ["Compare", "/compare"],
      ["Long Island", "/long-island"],
      ["Contact", "/contact"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto max-w-[1440px] gutter py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
              {/* Rows carry a 44px target on touch and tighten back up on the desktop grid. */}
              <ul className="mt-2 lg:mt-4 lg:space-y-2.5">
                {c.items.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex min-h-[44px] items-center text-[14px] text-paper/85 hover:text-paper lg:min-h-0"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 text-[13px] text-paper/60 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="order-2 sm:order-1">© {new Date().getFullYear()} {site.entity} {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}. <Link href="/privacy" className="hover:text-paper">Privacy</Link> · <Link href="/terms" className="hover:text-paper">Terms</Link></p>
          <div className="order-1 flex flex-wrap gap-x-6 sm:order-2">
            <a href={`mailto:${site.email}`} className="flex min-h-[44px] items-center hover:text-paper sm:min-h-0">{site.email}</a>
            <a href={`tel:${site.phone}`} className="flex min-h-[44px] items-center hover:text-paper sm:min-h-0">{site.phone.replace("+1-", "")}</a>
            <a href={site.linkedin} className="flex min-h-[44px] items-center uppercase tracking-[0.1em] hover:text-paper sm:min-h-0" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
