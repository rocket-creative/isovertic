import Link from "next/link";
import { problems, problemAudiences } from "@/content/problems";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { FounderStrip } from "@/components/sections/FounderStrip";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Problems We Solve: Pipeline, Leads, and Sales for Growing Companies | ISOVERTIC" },
  description: "Forty problems owners, scientists, practices, and founders bring to a first call, each with the cause, the mechanism, and the fix. In house marketer not producing, agency with no leads, referrals slowing, and more.",
  alternates: { canonical: "/problems" },
};

export default function Problems() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Problems", path: "/problems" }])} />
      <PageHero
        eyebrow="Problems we solve"
        h1="Start with the problem. We will name the cause."
        lead="Every page here is a sentence someone said on a first call or typed into a search bar. The page names the cause, gives the mechanism, and says which step of the system fixes it and what that costs. One problem per page."
      />
      {problemAudiences.map((g, gi) => {
        const items = problems.filter((p) => p.audience === g.key);
        if (!items.length) return null;
        return (
          <Section key={g.key} label={g.label} tone={gi % 2 ? "bright" : "paper"}>
            <RevealBlock>
              <h2 className="font-display text-h2 font-medium">{g.label}</h2>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-soft">{g.intro}</p>
              <ul className="mt-8 divide-y divide-rule border-y border-rule">
                {items.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/problems/${p.slug}`} className="group block py-5">
                      <span className="font-display text-[17px] font-medium leading-snug group-hover:text-signal">{p.h1}</span>
                      <span className="mt-2 block max-w-[72ch] text-[14px] leading-relaxed text-ink-soft">{p.metaDescription}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealBlock>
          </Section>
        );
      })}
      <FounderStrip />
      <CTABand />
    </>
  );
}
