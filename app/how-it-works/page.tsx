import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd, breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "How the ISOVERTIC System Works | Six Steps, One Number" },
  description: "Every engagement uses the same six step system. The tier sets which steps we operate. Build, Rank, Run, Buy, Book, Close. Pricing is published.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  { n: "01", title: "Build", body: "The site is the asset every other step points at. We build on Next.js, server rendered, with schema on every page so Google and AI search can cite it. Catalyst and Kinetic get landing pages inside the ramp. The full website build comes with a 6 or 12 month term, or $15,000 up front." },
  { n: "02", title: "Rank", body: "Content that answers the questions your buyers type and the questions AI search answers for them. A newsletter, a blog post, and social every month on Baseline, doubled on Catalyst, and a full content system with a YouTube channel on Kinetic. For biotech and healthcare clients, the MLR add on puts a named medical reviewer between draft and publish." },
  { n: "03", title: "Run", body: "Google Ads managed to a cost per meeting, not a cost per click. One campaign on Catalyst, multiple campaigns with A/B testing on Kinetic, and the search term report read weekly by a person, not a dashboard." },
  { n: "04", title: "Buy", body: "Streaming and broadcast TV bought in your own accounts, with an exposed versus control measurement plan so you can see whether it moved the number. Critical Mass only, with a $25,000 monthly media minimum." },
  { n: "05", title: "Book", body: "Outbound sequences, cold calls, and a qualified meeting on your calendar with the objection intelligence fed back into the site and the ads. One seat on Kinetic with a meeting number in writing. Two seats on Critical Mass. Catalyst can add a seat for $4,500 a month." },
  { n: "06", title: "Close", body: "Yours. We book it, brief you, and step out. The runbook has a handoff step so the meeting lands with the context that produced it." },
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
  { step: "06 Close", cells: ["You", "You", "You", "You"] },
];

const ramp = [
  { phase: "Weeks 1 to 2", body: "Onboarding, accounts, the MLR or HIPAA gate if your content needs one, and the first content calendar." },
  { phase: "Weeks 3 to 6", body: "First publishing cadence live, landing pages and campaigns built, outbound lists and sequences approved." },
  { phase: "Weeks 7 to 12", body: "Campaigns optimized weekly, the first meetings booked on Kinetic and above, and a written review at day 90 against the deliverables in your agreement. After the ramp, the engagement runs month to month unless you took a term for the website." },
];

const faqs = [
  { q: "Can we change tiers?", a: "Up at any time. Down at the end of the ramp or at any month end after it." },
  { q: "Who is on the account?", a: "The founder and the same senior team on every tier. There is no junior tier of staff behind the lower price. The lower price buys fewer steps, not a different team." },
  { q: "What do we have to provide?", a: "Access to your domain, ad accounts, and CRM, a point of contact who can approve in 48 hours, and, if your content makes clinical claims, a named reviewer with an MD or PhD." },
];

export default function HowItWorks() {
  return (
    <>
      <JsonLd data={[faqLd(faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "How it works", path: "/how-it-works" }])]} />
      <PageHero
        eyebrow="How it works"
        h1={<>Six steps. You pick how many we <span className="text-signal">run.</span></>}
        lead="Every ISOVERTIC engagement uses the same system. The tier sets which steps we operate and how deep. Nothing is custom scoped in a proposal you cannot compare, so a Baseline client and a Critical Mass client can read the same page and know what they bought."
      />
      <Section label="The system">
        <PipelineDiagram />
        <RevealBlock className="mt-8">
          <p className="max-w-[62ch] leading-relaxed text-ink/90">
            Pick a tier and we run the steps in it. Baseline runs step two. Catalyst runs one through three. Kinetic runs everything but TV. Critical Mass runs all of it, per brand. The pricing page shows the grid.
          </p>
        </RevealBlock>
      </Section>
      <Section label="The six steps" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">What happens in each step</h2>
        </RevealBlock>
        <ol className="mt-12 max-w-[72ch] space-y-12">
          {steps.map((s, i) => (
            <RevealBlock key={s.n} as="li" delay={i * 60}>
              <p className="eyebrow">{s.n} {s.title}</p>
              <p className="mt-3 leading-relaxed text-ink/90">{s.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <Section label="The tier grid" className="border-t border-rule">
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
        <div className="mt-8">
          <Link href="/pricing" className="cta-link">Pricing is published <Arrow /></Link>
        </div>
      </Section>
      <Section label="The ramp" className="border-t border-rule">
        <RevealBlock>
          <h2 className="font-display text-h2 font-medium">The 90 day ramp</h2>
        </RevealBlock>
        <ol className="mt-12 grid gap-px bg-rule lg:grid-cols-3">
          {ramp.map((r, i) => (
            <RevealBlock key={i} as="li" delay={i * 100} className="bg-background p-8">
              <p className="eyebrow">{r.phase}</p>
              <p className="mt-4 leading-relaxed text-ink/90">{r.body}</p>
            </RevealBlock>
          ))}
        </ol>
      </Section>
      <Section label="Questions" className="border-t border-rule">
        <h2 className="font-display text-h2 font-medium">Questions on the process</h2>
        <div className="mt-10 max-w-[72ch]"><FAQ faqs={faqs} /></div>
      </Section>
      <FounderStrip />
      <CTABand />
    </>
  );
}
