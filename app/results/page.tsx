import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import { getCaseStudyByClient, REPORTING_METHOD } from "@/content/case-studies";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Client Results and Case Studies | ISOVERTIC" },
  description: "Named work across biotech, healthcare technology, medical devices, wellness, and hospitality, plus two brands we own and run on the same system: content systems at scale, compliant funnels, outbound engines, and full builds.",
  alternates: { canonical: "/results" },
};

const cases = [
  { name: "ingenious targeting laboratory", tag: "Biotech and life sciences", href: "/industries/biotech", work: "A complete scientific content system: more than 100 SEO optimized pages designed, written, and shipped across a 147 page site, a 14,000 page product catalog generated one page per model, a documented technical content system governing terminology and accuracy, an editorial researcher spotlight series engineered for institutional backlinks, and outbound sequences targeting venture backed biotech prospects.", point: "Technical authority converted into compounding search demand, at a scale most agencies will not attempt." },
  { name: "Sydra", tag: "Healthcare technology", href: "/industries/healthcare", work: "Full SEO and design gap analysis, ten article content launch, and the master implementation brief for the rebuild, taking the brand from invisible to architected.", point: "The audit to brief to build pattern our SEO page promises, executed." },
  { name: "Kavera", tag: "Healthcare technology", href: "/industries/healthcare", work: "Brand transition from the original Synaptix identity through naming, positioning, launch infrastructure, and the outbound sales program reaching neurology, sports medicine, and pediatric practices.", point: "A rebrand is only finished when the pipeline runs under the new name; we built both." },
  { name: "Pathways Within", tag: "Wellness and behavioral health", href: "/industries/healthcare", work: "A two phase platform engagement: full ecosystem migration and architecture across three connected sites with a practitioner portal, followed by a twelve month platform build integrating scheduling infrastructure, plus the compliance documentation set and cross promotion strategy.", point: "Wellness brands need infrastructure as much as imagery; we delivered both phases as one architecture." },
  { name: "Capseus", tag: "Medical devices", href: "/industries/healthcare", work: "Content program for a spine surgery device company: the site rebuilt around the surgeon's question, a monthly newsletter, blog, and social cadence starting September 2026, with every clinical claim routed through a named reviewer before it publishes.", point: "Device marketing that a surgeon will read and a regulator will not flag, written from the operating side of medical review." },
  { name: "Metablify", tag: "Biotech and life sciences", href: "/industries/biotech", work: "Content program for an LC-MS metabolomics software company: a technical content system written for researchers, a monthly newsletter, blog, and social cadence starting September 2026, structured so the pages are found by the scientists who search for the method.", point: "Scientific software sells when the researcher finds the answer before the demo. The Baseline cadence, run on a research tools company." },
  { name: "Riviera Waterfront Mansion", tag: "Hospitality and events", href: "/industries/hospitality", work: "Sales packaging and pricing architecture for a premier waterfront wedding venue: tiered collection design, vendor partnership structuring, seasonal showcase bundles, and the sales collateral the venue team closes with.", point: "Hospitality marketing from the operating side, where the booking is won in the package, the tour, and the follow up." },
  { name: "Aisle & Time", tag: "Owned brand, SaaS", href: "/industries/startups", work: "Our own wedding day timeline and shot list software for photographers and couples, built on the same stack we sell: server rendered, schema on every page, published pricing at $29.95, and a content system aimed at the questions photographers type before a wedding.", point: "We run the six step system on our own products first. What works here ships to clients; what does not, does not." },
  { name: "Elena Kay Photography", tag: "Owned brand, Long Island weddings", href: "/long-island", work: "Our own Long Island wedding photography studio, marketed with the system: venue specific pages, real prices on the site, a review velocity program across Nassau and Suffolk, and search campaigns run to a cost per booked consultation.", point: "The local playbook we sell to practices and venues, proven on a business we own in the same market." },
];

export default function Results() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Results", path: "/results" }])} />
      <PageHero eyebrow="Results" h1="The roster, with the numbers attached." lead="Seven clients and two brands we own, all run on the same six step system. Where a number appears, we can show the work behind it." />
      <Section label="Roster">
        <ol className="space-y-px bg-rule">
          {cases.map((c, i) => {
            const study = getCaseStudyByClient(c.name);
            return (
              <RevealBlock key={c.name} as="li" className="surface-card grid gap-6 py-10 lg:grid-cols-[1fr_2fr]">
                <div>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {c.tag}</p>
                  <h2 className="mt-3 font-display text-[clamp(20px,2.6vw,30px)] font-semibold leading-tight">{c.name}</h2>
                  <Link href={c.href} className="cta-link mt-5">Industry page <Arrow /></Link>
                </div>
                <div className="max-w-[68ch]">
                  <p className="leading-relaxed text-ink/90">{c.work}</p>
                  <p className="mt-4 text-[14px] italic text-ink-soft">{c.point}</p>
                  {study && (
                    <>
                      <p className="mt-6 border-t border-rule pt-5 text-[14px] leading-relaxed text-ink-soft">
                        {study.stats.slice(0, 3).map((s, j) => (
                          <span key={s.label}>
                            {j > 0 && <span aria-hidden="true"> · </span>}
                            <span className="font-display font-semibold text-brass">{s.value}</span> {s.label}
                          </span>
                        ))}
                      </p>
                      <Link href={`/results/${study.slug}`} className="cta-link mt-4">Read the case study <Arrow /></Link>
                    </>
                  )}
                </div>
              </RevealBlock>
            );
          })}
        </ol>
      </Section>
      <div id="method" className="scroll-mt-28">
        <Section label="Method" tone="bright">
          <RevealBlock>
            <h2 className="font-display text-h2 font-medium">{REPORTING_METHOD.heading}</h2>
            <div className="mt-8 max-w-[68ch]">
              {REPORTING_METHOD.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-[14px] leading-relaxed text-ink-soft first:mt-0">{p}</p>
              ))}
            </div>
          </RevealBlock>
        </Section>
      </div>
      <CTABand />
    </>
  );
}
