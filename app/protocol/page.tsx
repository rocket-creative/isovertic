import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Protocol Team Training | ISOVERTIC" },
  description: "One or two days at your office. Your team leaves with the same runbooks our account teams work from, rewritten in your name. From $5,000.",
  alternates: { canonical: "/protocol" },
};

const versions = [
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
      "Travel billed at cost beyond 50 miles of Long Island",
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
      "Recorded sessions, two calls a month for 90 days, one revision round",
      "Travel included in the US",
    ],
  },
];

const runbooks = [
  "01 Content production: blog, newsletter, and social on a weekly cadence",
  "02 Search and AI citation page build",
  "03 Google Ads build and the weekly review",
  "04 Outbound sequence, call script, and CRM hygiene",
  "05 Lead handoff, so the 70 percent of leads that never get a call get one",
  "06 Reporting cadence and the one number each role owns",
  "07 MLR review workflow for clinical, safety, and efficacy claims",
  "08 HIPAA rules for patient facing pages and forms",
];

const faqs = [
  { q: "Can we buy the Protocol and a monthly tier?", a: "Yes. Companies on any monthly tier can add the one day Protocol for $3,500, since our team already knows your stack. Most use it to train the sales side while we run marketing." },
  { q: "Do we need a medical reviewer?", a: "Only if your content makes clinical, safety, or efficacy claims. If it does, we write the MLR step around a reviewer you name with an MD or PhD credential. We do not supply one." },
  { q: "Can this run remotely?", a: "The one day Protocol can run as two remote half days. The full team Protocol is onsite. You cannot audit a CRM and a sales floor over video." },
  { q: "Who teaches it?", a: "The founder, on every Protocol. Thirty years building software, brands, and demand, and every runbook in the library was written from an account we run." },
];

export default function Protocol() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Protocol", path: "/protocol" }])]} />
      <PageHero
        eyebrow="Step 06 · Protocol · For teams that run it themselves"
        h1="We hand over the protocol. Your team runs it."
        lead="One or two days at your office. Your team leaves with the same runbooks our account teams work from, rewritten in your name, with the compliance steps a biotech or healthcare marketer cannot skip."
      />
      <section className="border-b border-rule">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-4 px-5 py-8 sm:px-8 xl:px-16">
          <Link href="/contact" className="btn btn-solid">Book a Protocol call</Link>
          <Link href="/pricing" className="cta-link">See the monthly tiers <Arrow /></Link>
        </div>
      </section>
      <Section label="Who this is for">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">You have the people. You do not have the process.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Protocol is step six of the system: educate. You already have a marketing hire, a sales hire, maybe a developer. What you do not have is a written process they share, so every quarter someone rebuilds the outbound sequence from memory and the ads account drifts. Protocol is for companies that want to keep the work in house and stop paying for that drift. If you would rather hand the whole pipeline to us, that is the tier page.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="cta-link">See the monthly tiers <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>
      <Section label="Two versions" tone="bright">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">Priced on the page, like everything else here.</h2>
        </RevealBlock>
        <div className="mt-12 grid auto-rows-fr gap-px bg-rule lg:grid-cols-2">
          {versions.map((t, i) => (
            <RevealBlock key={t.name} delay={i * 100} className="flex h-full flex-col surface-card p-8">
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
      </Section>
      <Section label="The runbook library">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Eight runbooks. Your logo on every page.</h2>
          <ol className="mt-8 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {runbooks.map((r) => (
              <li key={r} className="flex gap-3"><span aria-hidden="true">·</span>{r}</li>
            ))}
          </ol>
          <p className="mt-8 leading-relaxed text-ink/90">
            Runbooks 7 and 8 are the ones a general sales trainer cannot sell you. They are written for a named medical reviewer and a BAA covered form stack, because that is how our own biotech and healthcare accounts run.
          </p>
        </RevealBlock>
      </Section>
      <Section label="License" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Yours to run. Not yours to resell.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            The runbooks are licensed to your company for internal use. One company, no resale, no redistribution to an agency or to your own clients. Agencies who want to run our system for their clients should ask about the agency license, which is priced separately.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Questions">
        <h2 className="font-display text-h2 font-medium">What operators ask first</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
