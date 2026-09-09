import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import { protocolRunbooksParagraph } from "@/content/voice-audit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Protocol Team Training | ISOVERTIC" },
  description: "Protocol is step 06 of the Isovertic system. We hand over the eight runbooks and your team runs the system. One or two days at your office. $5,000 for one department, $20,000 for a full team.",
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
  "01 Content production for blog, newsletter, and social publishing on a weekly cadence",
  "02 Search and answer-engine citation page build",
  "03 Google Ads build and the weekly review",
  "04 Outbound sequence, call script, and customer relationship management hygiene",
  "05 Lead handoff, so leads receive a call rather than disappearing between teams",
  "06 Reporting cadence and the one number each role owns",
  "07 Medical, legal, and regulatory review workflow for clinical, safety, and efficacy claims",
  "08 HIPAA rules for patient-facing pages and forms",
];

const faqs = [
  { q: "Can we buy the Protocol and a monthly tier?", a: "Yes. Companies on any monthly tier can add the one day Protocol for $3,500, since our team already knows your stack. Most use it to train the sales side while we run marketing." },
  { q: "Do we need a medical reviewer?", a: "Only if your content makes clinical, safety, or efficacy claims. If it does, we write the review step around a reviewer you name with the appropriate credential. Protocol does not supply one. That responsibility should sit with the organization making the claim." },
  { q: "Can this run remotely?", a: "The one-day format can run as two remote half days. The full-team format is on site because the work includes examining the customer relationship management system and the handoffs between real people. Video can explain a process. It cannot show every operational seam." },
  { q: "Who teaches it?", a: "The founder, on every Protocol. Thirty years building software, brands, and demand, and every runbook in the library was written from an account we run." },
];

export default function Protocol() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Protocol", path: "/protocol" }])]} />
      <PageHero
        eyebrow="Step 06 · Protocol · For teams that run it themselves"
        h1="Protocol: the system your team can run."
        lead={[
          "Protocol is step 06 of the Isovertic system: Educate. We hand over the runbooks. Your team runs the system. The work takes one or two days at your office, then continues with a follow-up once the process meets your real calendar and approval chain.",
          "This is not generic training. The Google Ads runbook is written by the specialists who operate paid search. The compliance runbook is written by the compliance officer. The review workflow is written by the molecular biologist. The content runbook is written by the people who produce it.",
        ]}
      />
      <section className="border-b border-rule">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-4 gutter py-8">
          <Link href="/contact" className="btn btn-solid">Book a Protocol call</Link>
          <Link href="/pricing" className="cta-link">See the monthly tiers <Arrow /></Link>
        </div>
      </section>
      <Section label="Who this is for">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">For teams with people but no shared process.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Protocol fits a company that already has a marketing hire, a sales hire, or a developer. The missing piece is a written process they share. Without one, the outbound sequence is rebuilt from memory, the ads account drifts, and no one can show why a lead did or did not receive a follow-up.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            If you want us to operate the work month to month, choose a monthly tier. If you want your people to operate it, Protocol gives them the documented method in your brand.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className="cta-link">See the monthly tiers <Arrow /></Link>
          </div>
        </RevealBlock>
      </Section>
      <Section label="Two versions" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <p className="leading-relaxed text-ink/90">{protocolRunbooksParagraph}</p>
        </RevealBlock>
        <RevealBlock className="mt-10">
          <h2 className="font-display text-h2 font-medium">Two ways to buy Protocol.</h2>
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
        <RevealBlock className="mt-10 max-w-[68ch]">
          <p className="leading-relaxed text-ink/90">
            Choose Build, Rank, Run, Buy, or Book for the deep session. The goal is not to cover every subject quickly. It is to leave one team able to run one part of the system without rebuilding it from guesswork.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            The full-team version also rewrites the library to your tools, approval chain, and named medical reviewer. It includes recorded sessions, two calls a month for 90 days, one revision round, and travel in the United States.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            Current monthly clients can add the one-day Protocol for a $3,500 one-time fee. We already know the stack, so the session can focus on the internal handoff.
          </p>
        </RevealBlock>
      </Section>
      <Section label="The runbook library">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">The eight runbooks.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">Every Protocol engagement is built around eight runbooks:</p>
          <ol className="mt-8 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {runbooks.map((r) => (
              <li key={r} className="flex gap-3"><span aria-hidden="true">·</span>{r}</li>
            ))}
          </ol>
          <p className="mt-8 leading-relaxed text-ink/90">
            The final two are why a generic sales trainer is not an equivalent substitute for a healthcare or biotech team. Clinical claims need a named medical reviewer. Patient-facing forms need the appropriate handling path. Protocol maps that work to the people who have to approve it.
          </p>
        </RevealBlock>
      </Section>
      <Section label="What the team learns" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">What the team learns.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            The team learns the operating sequence, not merely a set of templates. That includes where the website build affects paid search, where content creates the next page opportunity, and where a booked meeting becomes a data point for the next campaign decision.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            The developer track explains the build rules that protect the site as the catalog grows: server rendering, structured content, page hierarchy, and tracking. The marketing and sales tracks explain the handoff, the weekly review, and the reporting rhythm.
          </p>
        </RevealBlock>
      </Section>
      <Section label="The honest limit">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">The honest limit.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Protocol is only useful when the team can dedicate a focused day and then run the work. A runbook library does not improve a program from a shared drive. It improves the program when the people named in it use it.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            Protocol also does not supply a medical reviewer. If your content makes clinical, safety, or efficacy claims, we write the review step around a reviewer you name with the appropriate credential. That responsibility should sit with the organization making the claim.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            The one-day format can run as two remote half days. The full-team format is on site because the work includes examining the customer relationship management system and the handoffs between real people. Video can explain a process. It cannot show every operational seam.
          </p>
        </RevealBlock>
      </Section>
      <Section label="License" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Yours to run. Not yours to resell.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            The license is for your company to use internally. It is not for resale or distribution to an agency or your own clients. Agencies that want to use the system with client accounts should ask about the separately priced agency license.
          </p>
        </RevealBlock>
      </Section>
      <Section label="Questions">
        <h2 className="font-display text-h2 font-medium">What operators ask first</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <Section label="Start here" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">Start with your existing process.</h2>
          <p className="mt-6 leading-relaxed text-ink/90">
            Send us your current process document, approval chain, or campaign brief. If your team is rebuilding the same work from memory, <Link href="/contact" className="underline underline-offset-4 hover:text-navy">book a pipeline call</Link> and paste us the artifact. In about ten minutes we'll tell you which runbook is missing, whether Protocol or a monthly tier fits, and what the work would cost. Sometimes the honest answer is you're already fine, and we're happy to say so and hand you back your afternoon.
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">
            For the monthly options and current-client add-on, see <Link href="/pricing" className="underline underline-offset-4 hover:text-navy">published pricing</Link>.
          </p>
        </RevealBlock>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
