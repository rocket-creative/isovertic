import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import { Arrow } from "@/components/ui/Arrow";
import { educateGridCell } from "@/content/system";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Outsourced Sales and Marketing Pricing | ISOVERTIC" },
  description: "Published pricing for four tiers from $2,500 to $25,000 plus. Add ons, multi brand discount, term table, and Protocol training. No discovery call required to learn a price.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "Baseline",
    price: "$2,500",
    per: "per month",
    for: "The content drumbeat, running without meetings.",
    includes: [
      "One newsletter a month, sent from your own list",
      "One blog post a month, written to be cited by search and AI",
      "Eight social posts a month across two channels",
      "Monthly report, one page",
    ],
    cta: "Start Baseline",
    href: "/contact",
  },
  {
    name: "Catalyst",
    price: "$5,000",
    per: "per month plus ad spend",
    for: "Content plus paid demand, with a human on the account.",
    includes: [
      "Everything in Baseline, social doubled to 16 posts",
      "One Google Ads campaign, built and monitored weekly",
      "One landing page",
      "Lead follow up within one business day",
      "One strategy call a month",
    ],
    cta: "Book a pipeline call",
    href: "/contact",
  },
  {
    name: "Kinetic",
    price: "$10,000",
    per: "per month plus ad spend",
    for: "The full pipeline. The flagship engagement.",
    includes: [
      "Everything in Catalyst",
      "Multiple Google Ads campaigns with A/B testing and multiple landing pages",
      "Outbound appointment program, one seat, with a stated monthly meeting commitment in writing",
      "YouTube channel build and one video and photo production day per quarter",
      "Weekly call",
    ],
    featured: true,
    cta: "Book a pipeline call",
    href: "/contact",
  },
  {
    name: "Critical Mass",
    price: "From $25,000",
    per: "per month plus media",
    for: "For companies running more than one brand, or ready to own a market.",
    includes: [
      "Everything in Kinetic, run per brand",
      "Two outbound seats",
      "Streaming and broadcast TV buying in your own accounts",
      "Creative production in house",
      "Quarterly board ready growth review",
    ],
    cta: "Book a pipeline call",
    href: "/contact",
  },
];

const tierCols = [
  { name: "Baseline", price: "$2,500" },
  { name: "Catalyst", price: "$5,000" },
  { name: "Kinetic", price: "$10,000" },
  { name: "Critical Mass", price: "From $25,000" },
];

const tierRows = [
  { step: "01 Build", cells: ["Website on a term, or $15,000", "Landing page plus website on a term", "Landing pages plus website on a term", "Per brand"] },
  { step: "02 Rank", cells: ["Newsletter, blog, social", "Doubled social", "Full content system plus YouTube", "Per brand"] },
  { step: "03 Run", cells: ["·", "One Google Ads campaign", "Multiple campaigns, A/B tested", "Per brand"] },
  { step: "04 Buy", cells: ["·", "·", "·", "Streaming and broadcast TV"] },
  { step: "05 Book", cells: ["·", "Add on seat $4,500", "One seat, meeting number in writing", "Two seats"] },
  { step: "06 Educate", cells: [educateGridCell, educateGridCell, educateGridCell, educateGridCell] },
];

const termCols = ["90 day ramp, then monthly", "6 month term", "12 month term"];
const termRows = [
  { label: "Tier price", cells: ["Tier price", "Tier price", "Tier price"] },
  { label: "Website build", cells: ["Website build $15,000, paid up front", "Website build included at Catalyst and above; Baseline pays $7,500", "Website build included at every tier"] },
  { label: "Hosting", cells: ["Hosting on our stack at cost", "Hosting and bandwidth included for the term", "Hosting and bandwidth included for the term"] },
];

const addOns = [
  { name: "MLR review gate: named reviewer workflow, sign off log, claim library", price: "Baseline $500 per month plus $750 setup. Catalyst $750 per month plus $1,000 setup. Kinetic $1,200 per month plus $1,500 setup. Critical Mass quoted" },
  { name: "HIPAA form and call stack: BAA covered forms, call tracking, consent language", price: "$750 per month" },
  { name: "Outbound seat added to Catalyst", price: "$4,500 per month" },
  { name: "Second product line in Google Ads: separate campaigns, landing page, reporting", price: "$1,000 per month per line" },
  { name: "LinkedIn outbound and paid: sequences plus sponsored content", price: "$2,500 per month" },
  { name: "Conference sprint: meetings booked before and at one trade show", price: "$7,500 per event" },
  { name: "Production day: video and photography, edited assets delivered", price: "$4,500 per day" },
  { name: "Programmatic page expansion: 50 server rendered entity pages", price: "$2,500 per month per 50 pages" },
  { name: "CRM build: HubSpot or Pipedrive configured to the runbook", price: "$4,000 one time" },
  { name: "Protocol, one day, for current clients", price: "$3,500 one time" },
];

const protocolTiers = [
  {
    name: "Protocol",
    price: "$5,000",
    per: "one time",
    for: "For one department, up to 15 people in the room.",
    includes: [
      "One day onsite",
      "One step taught in depth: your pick of Build, Rank, Run, Buy, or Book",
      "The standard runbook library in your brand",
      "One follow up call at 30 days",
    ],
  },
  {
    name: "Protocol, full team",
    price: "$20,000",
    per: "one time",
    for: "For marketing, sales, and development together, up to 40 people.",
    includes: [
      "Two days onsite plus one prep day at your office",
      "Audit of your current process, tool stack, and CRM before we arrive",
      "All five steps taught, plus a developer track on our build rules and agent briefs",
      "Runbook library rewritten to your tools, your approval chain, and your named medical reviewer",
    ],
  },
];

const faqs = [
  { q: "Why publish pricing when nobody else does?", a: "Because our buyer is a founder who hates wasted discovery calls as much as we do, and because the page you are reading ranks for the question everyone types and nobody answers." },
  { q: "What is in ad spend versus fees?", a: "Fees pay the team. Spend goes to the platforms in your own accounts, which you own." },
  { q: "Are there setup costs?", a: "No. Landing pages and campaign builds inside the ramp are included in tier pricing. The website build is priced in the term table: included on a 12 month term, included on a 6 month term at Catalyst and above, or $15,000 up front on a month to month engagement. Unusual scope is quoted before signature, never after." },
  { q: "Can we start smaller?", a: "Baseline at $2,500 is the smallest engagement. If you would rather run the system with your own team, buy the Protocol, one or two days at your office." },
];

export default function Pricing() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} />
      <PageHero
        eyebrow="Pricing"
        h1={<>The <span className="text-signal">price</span>, before the pitch.</>}
        lead="Nobody in this category publishes pricing, which tells you something about how they sell. Here is ours. Four tiers, the add ons, the multi brand discount, and the term table are all below. You will not leave this page wondering whether we fit your budget."
      />
      <Section label="Tiers">
        <div className="grid auto-rows-fr gap-px bg-rule lg:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 80} className={`flex h-full flex-col p-8 ${t.featured ? "bg-slate text-ink" : "bg-background"}`}>
              <p className={`eyebrow ${t.featured ? "!text-signal" : ""}`}>{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{t.price}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{t.per}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/90">{t.for}</p>
              <ul className={`mt-6 grow space-y-3 border-t pt-6 text-[14px] leading-relaxed text-ink-soft ${t.featured ? "border-ink/15" : "border-rule"}`}>
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href={t.href} className={`btn mt-9 ${t.featured ? "btn-solid" : "btn-ghost"}`}>{t.cta}</Link>
            </RevealBlock>
          ))}
        </div>
      </Section>

      <Section label="Which steps" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Which steps each tier runs</h2>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-4 pr-4 font-display text-[15px] font-medium">Step</th>
                {tierCols.map((c) => (
                  <th key={c.name} className="px-3 py-4 font-medium">
                    <span className="block">{c.name}</span>
                    <span className="mt-1 block text-[12px] font-normal text-ink-soft">{c.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tierRows.map((r) => (
                <tr key={r.step} className="border-b border-rule align-top">
                  <th className="py-4 pr-4 font-medium text-ink">{r.step}</th>
                  {r.cells.map((cell, i) => (
                    <td key={i} className="px-3 py-4 text-ink-soft">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Term" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Pick your term. The website comes with it.</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">
            Every tier starts with a 90 day ramp and runs month to month after it. Nobody is locked in. Commit to a term and we build the site.
          </p>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-4 pr-4 font-display text-[15px] font-medium"> </th>
                {termCols.map((c) => (
                  <th key={c} className="px-3 py-4 font-medium">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {termRows.map((r) => (
                <tr key={r.label} className="border-b border-rule align-top">
                  <th className="py-4 pr-4 font-medium text-ink">{r.label}</th>
                  {r.cells.map((cell, i) => (
                    <td key={i} className="px-3 py-4 text-ink-soft">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RevealBlock className="mt-8 max-w-[72ch]">
          <p className="leading-relaxed text-ink/90">
            The build is a full move onto our stack: Next.js, server rendered, schema on every page, built to convert and to be cited by AI search. You own the code and the domain. If a term ends early, the unbilled balance of the build is due on the final invoice, prorated to the months served. That is the only clause in the agreement that reads like a lock in, and it exists so the free build stays free.
          </p>
        </RevealBlock>
      </Section>

      <Section label="More than one brand" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Run them all from one team.</h2>
          <p className="mt-5 max-w-[62ch] leading-relaxed text-ink/90">
            We run multiple brands at once. The first brand pays the tier price. Every additional brand on the same tier is 15 percent off, and every brand gets its own report, its own accounts, and its own number.
          </p>
        </RevealBlock>
      </Section>

      <Section label="Add ons" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Bolt on what your market needs.</h2>
        </RevealBlock>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-rule">
                <th className="py-4 pr-4 font-display text-[15px] font-medium">Add on</th>
                <th className="px-3 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((a) => (
                <tr key={a.name} className="border-b border-rule align-top">
                  <td className="py-4 pr-4 text-ink">{a.name}</td>
                  <td className="px-3 py-4 text-ink-soft">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="Protocol" className="border-t border-rule">
        <RevealBlock>
          <p className="eyebrow">For teams that run it themselves</p>
          <h2 className="mt-4 font-display text-h2 font-medium">Protocol. The system, taught at your office.</h2>
        </RevealBlock>
        <div className="mt-12 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2">
          {protocolTiers.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 100} className="flex h-full flex-col bg-background p-8">
              <p className="eyebrow">{t.name}</p>
              <p className="mt-5 font-display text-[clamp(28px,3vw,40px)] font-semibold leading-none">{t.price}</p>
              <p className="mt-2 text-[13px] text-ink-soft">{t.per}</p>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/90">{t.for}</p>
              <ul className="mt-6 grow space-y-3 border-t border-rule pt-6 text-[14px] leading-relaxed text-ink-soft">
                {t.includes.map((x) => (
                  <li key={x} className="flex gap-3"><span aria-hidden="true">·</span>{x}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-ghost mt-9">Book a Protocol call</Link>
            </RevealBlock>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/protocol" className="cta-link">Full detail and the runbook list on the Protocol page <Arrow /></Link>
        </div>
      </Section>

      <Section label="Context" className="border-t border-rule">
        <RevealBlock className="max-w-[72ch]">
          <h2 className="font-display text-h3 font-medium">The commitment</h2>
          <p className="mt-4 leading-relaxed text-ink/90">Every tier carries a defined 90 day ramp with deliverables and, for Kinetic and above, a meeting volume number in writing. No long term contract is required. Terms exist for clients who want the website included, and we still re earn the engagement quarterly.</p>
          <h2 className="mt-10 font-display text-h3 font-medium">Context for comparison</h2>
          <p className="mt-4 leading-relaxed text-ink/90">An in house equivalent runs $160K to $190K per year for one marketing lead plus one agency, before a single SDR is hired. Standalone appointment setting firms charge $5K to $15K monthly for outbound alone, into whatever website and brand you already have. We price the whole system below the sum of its parts because the parts share a team. Baseline exists for the company that is not ready for any of that yet and still needs to publish every week.</p>
        </RevealBlock>
      </Section>

      <Section label="Questions" className="border-t border-rule">
        <h2 className="font-display text-h2 font-medium">Money questions, answered on the page</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <CTABand />
    </>
  );
}
