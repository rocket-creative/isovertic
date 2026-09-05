import Link from "next/link";
import { answers } from "@/content/answers";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Answers for Scientists, Founders, and Practices | ISOVERTIC" },
  description: "Short, direct answers to the questions life science companies, startups, and healthcare practices ask about marketing, outbound, pricing, HIPAA, and MLR review. One question per page.",
  alternates: { canonical: "/answers" },
};

const groups: { key: (typeof answers)[number]["audience"]; label: string }[] = [
  { key: "all", label: "Pricing and working with us" },
  { key: "life-science", label: "Life science and CRO" },
  { key: "healthcare", label: "Healthcare and HIPAA" },
  { key: "startup", label: "Startups" },
];

export default function Answers() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Answers", path: "/answers" }])} />
      <PageHero eyebrow="Answers" h1="The questions, answered in 40 words." lead="Every question here came from a buyer: a contact form, a sales call, a search someone typed before they found us. One question per page, the answer first, the reasoning after." />
      {groups.map((g, gi) => {
        const items = answers.filter((a) => a.audience === g.key);
        if (!items.length) return null;
        return (
          <Section key={g.key} label={g.label} tone={gi % 2 ? "bright" : "paper"}>
            <RevealBlock>
              <h2 className="font-display text-h2 font-medium">{g.label}</h2>
              <ul className="mt-8 divide-y divide-rule border-y border-rule">
                {items.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/answers/${a.slug}`} className="group block py-5">
                      <span className="font-display text-[17px] font-medium leading-snug group-hover:text-signal">{a.question}</span>
                      <span className="mt-2 block max-w-[72ch] text-[14px] leading-relaxed text-ink-soft">{a.answer}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </RevealBlock>
          </Section>
        );
      })}
      <CTABand />
    </>
  );
}
