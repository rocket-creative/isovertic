import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Client Results and Case Studies | ISOVERTIC" },
  description: "Named client work across biotech, healthcare, revenue services, hospitality, and wellness: content systems at scale, compliant funnels, outbound engines, and full builds.",
  alternates: { canonical: "/results" },
};

const cases = [
  { name: "ingenious targeting laboratory", tag: "Biotech and life sciences", href: "/industries/biotech", work: "A complete scientific content system: more than 100 SEO optimized pages designed, written, and shipped across a 147 page sitemap, a documented technical content system governing terminology and accuracy, an editorial researcher spotlight series engineered for institutional backlinks, and outbound sequences targeting venture backed biotech prospects.", point: "Technical authority converted into compounding search demand, at a scale most agencies will not attempt." },
  { name: "ISS Health", tag: "Healthcare", href: "/industries/healthcare", work: "A seven page concussion program hub and spoke architecture covering the full patient journey, the matching Google Ads campaign built ad group to page, HIPAA compliant form delivery through encrypted email infrastructure, privacy documentation drafted for real review, and a patient guide built for referral channels.", point: "A service line turned into a complete acquisition system, compliant from intake to inbox." },
  { name: "Kronos Revenue", tag: "Healthcare revenue services", href: "/outbound-appointment-setting", work: "The full go to market engine for a No Surprises Act IDR service: positioning and campaign architecture, the sales kickoff deck, an 18 play outbound execution runbook, LinkedIn and cold email systems, landing page copy, and prospect data engineering built from federal public use files, provider registries, and Medicare datasets.", point: "This is the outbound machine our appointment setting page describes, built end to end and documented play by play." },
  { name: "COGAI Health", tag: "Healthcare technology", href: "/industries/healthcare", work: "Sitewide conversion overhaul for a workforce mental health platform: a full implementation brief resolving pricing presentation, competing offers, intake friction, and social proof gaps, plus the Google Ads program and the LinkedIn sales infrastructure behind the outbound motion.", point: "Product sites win or lose on coherence; we rebuilt it page by page and wired demand to it." },
  { name: "Sydra", tag: "Healthcare technology", href: "/industries/healthcare", work: "Full SEO and design gap analysis, ten article content launch, and the master implementation brief for the rebuild, taking the brand from invisible to architected.", point: "The audit to brief to build pattern our SEO page promises, executed." },
  { name: "Kavera", tag: "Healthcare technology", href: "/industries/healthcare", work: "Brand transition from the original Synaptix identity through naming, positioning, launch infrastructure, and the outbound sales program reaching neurology, sports medicine, and pediatric practices.", point: "A rebrand is only finished when the pipeline runs under the new name; we built both." },
  { name: "Riviera Waterfront Mansion", tag: "Hospitality and events", href: "/industries/hospitality", work: "Sales packaging and pricing architecture for a premier waterfront wedding venue: tiered collection design, vendor partnership structuring, seasonal showcase bundles, and the sales collateral the venue team closes with.", point: "Hospitality marketing from the operating side, where the booking is won in the package, the tour, and the follow up." },
  { name: "Pathways Within", tag: "Wellness and behavioral health", href: "/industries/healthcare", work: "A two phase platform engagement: full ecosystem migration and architecture across three connected sites with a practitioner portal, followed by a twelve month platform build integrating scheduling infrastructure, plus the compliance documentation set and cross promotion strategy.", point: "Wellness brands need infrastructure as much as imagery; we delivered both phases as one architecture." },
];

export default function Results() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Results", path: "/results" }])} />
      <PageHero eyebrow="Results" h1="The roster, with the numbers attached." lead="These are real clients and real engagements. Where a number appears, we can show the work behind it." />
      <Section label="Roster">
        <ol className="space-y-px bg-rule">
          {cases.map((c, i) => (
            <RevealBlock key={c.name} as="li" className="grid gap-6 bg-background py-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {c.tag}</p>
                <h2 className="mt-3 font-display text-[clamp(20px,2.6vw,30px)] font-semibold leading-tight">{c.name}</h2>
                <Link href={c.href} className="cta-link mt-5">Industry page <Arrow /></Link>
              </div>
              <div className="max-w-[68ch]">
                <p className="leading-relaxed text-ink/90">{c.work}</p>
                <p className="mt-4 text-[14px] italic text-ink-soft">{c.point}</p>
              </div>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <CTABand />
    </>
  );
}
