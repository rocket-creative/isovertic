import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { Arrow } from "@/components/ui/Arrow";
import { breadcrumbLd } from "@/lib/schema";
import { about as c } from "@/content/about";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ISOVERTIC | Founder Led Growth Agency on Long Island" },
  description: "ISOVERTIC was built for companies that have to prove their results. One senior team owns the pipeline, on every account, every tier.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero h1={c.h1} lead={c.lead} />

      <Section label="The name">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.name.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.name.body}</p>
        </RevealBlock>
      </Section>

      <Section label="The method" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.buying.h2}</h2>
          {c.buying.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-relaxed text-ink/90`}>{p}</p>
          ))}
        </RevealBlock>
      </Section>

      <Section label="Founder" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.george.h2}</h2>
          {c.george.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-relaxed text-ink/90`}>{p}</p>
          ))}
          <p className="mt-5 leading-relaxed text-ink/90">
            <Link href={c.george.bioHref} className="underline underline-offset-4 hover:text-navy">
              {c.george.bioLabel}
            </Link>
            .
          </p>
        </RevealBlock>
      </Section>

      <Section label="Operations">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.kristen.h2}</h2>
          {c.kristen.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-relaxed text-ink/90`}>{p}</p>
          ))}
          <p className="mt-5 leading-relaxed text-ink/90">
            <Link href={c.kristen.bioHref} className="underline underline-offset-4 hover:text-navy">
              {c.kristen.bioLabel}
            </Link>
            .
          </p>
        </RevealBlock>
      </Section>

      <Section label="The team">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.team.h2}</h2>
          <ul className="mt-6 space-y-4 leading-relaxed text-ink/90">
            {c.team.roles.map((r) => (
              <li key={r.title}>
                <strong>{r.title}</strong> {r.body}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-ink/90">{c.team.close}</p>
        </RevealBlock>
      </Section>

      <Section label="Who we serve" tone="bright">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.serve.h2}</h2>
          <p className="mt-6 leading-relaxed text-ink/90">{c.serve.body}</p>
        </RevealBlock>
      </Section>

      <Section label="How we work">
        <RevealBlock className="max-w-[68ch]">
          <h2 className="font-display text-h2 font-medium">{c.work.h2}</h2>
          {c.work.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-5"} leading-relaxed text-ink/90`}>{p}</p>
          ))}
          <p className="mt-6">
            <Link href="/contact" className="cta-link">Send us the URL <Arrow /></Link>
          </p>
          <p className="mt-5 leading-relaxed text-ink/90">{c.work.entity}</p>
        </RevealBlock>
      </Section>
    </>
  );
}
