import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { PaperBriefGate } from "@/components/sections/PaperBriefGate";
import { Arrow } from "@/components/ui/Arrow";
import { ParticleField } from "@/components/ui/ParticleField";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { visibility as c } from "@/content/visibility";
import { db } from "@/lib/paperbrief-db";
import { emailDomain } from "@/lib/paperbrief-domain";
import { getSession } from "@/lib/session";
import { activeProviders } from "@/lib/visibility-providers";
import { createSnapshot } from "./actions";

export const metadata: Metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: c.path },
};
export const dynamic = "force-dynamic";
// Writing the questions reads the site and waits on the model.
export const maxDuration = 120;

export default async function SnapshotStart({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = await getSession();
  const client = db();
  const sp = await searchParams;
  const errorKey = typeof sp.error === "string" ? sp.error : "";
  const error = errorKey in c.start.errors ? c.start.errors[errorKey as keyof typeof c.start.errors] : "";
  // Booleans only, never values: which assistants this build can ask.
  console.info("Snapshot config", { database: client !== null, assistants: activeProviders() });

  const signedIn = Boolean(session?.a && client);
  const { data: jobs } = signedIn
    ? await client!.from("visibility_jobs").select("id, company, status, created_at").eq("account_id", session!.a!).order("created_at", { ascending: false }).limit(5)
    : { data: null };
  const s = c.start;

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        backdrop={<ParticleField fade />}
        cta={
          <>
            <Link href="#start" className="btn btn-solid">{c.hero.button} <Arrow /></Link>
            <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">{c.hero.trust}</p>
          </>
        }
      />
      <Section label={c.steps.label} deferred={false}>
        <RevealBlock>
          <h2 className="max-w-[26ch] font-display text-h2 font-medium">{c.steps.h2}</h2>
        </RevealBlock>
        <RevealBlock>
          <ol className="flow mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map((step, i) => (
              <li key={step.title} className="flow-step" style={{ transitionDelay: `${i * 140}ms` }}>
                <span className="flow-figure">{step.figure}</span>
                <span className="flow-rule" aria-hidden="true" />
                <span className="mt-4 block font-display text-h3 font-medium">{step.title}</span>
                <span className="mt-2 block max-w-[30ch] leading-relaxed text-ink-soft">{step.text}</span>
              </li>
            ))}
          </ol>
        </RevealBlock>
      </Section>
      <Section label={s.label} tone="bright" deferred={false}>
        <div id="start" className="grid scroll-mt-32 gap-14 lg:grid-cols-2">
          {signedIn ? (
            <div className="gate-panel max-w-[560px]">
              <h2 className="font-display text-h3 font-medium">{s.h2}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.signedIn(session!.e)} {s.site(emailDomain(session!.e))}</p>
              {error && <p role="alert" className="mt-5 border-l-2 border-signal pl-4 text-[15px] leading-relaxed">{error}</p>}
              <form action={createSnapshot} className="mt-6 grid gap-6">
                <div>
                  <label htmlFor="vs-company" className="field-label">{s.company}</label>
                  <input id="vs-company" name="company" className="field" required minLength={2} maxLength={100} autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="vs-sells" className="field-label">{s.sells}</label>
                  <textarea id="vs-sells" name="sells" className="field" required minLength={10} maxLength={600} />
                  <p className="mt-2 text-[13px] text-ink-soft">{s.sellsHint}</p>
                </div>
                <div>
                  <label htmlFor="vs-buyers" className="field-label">{s.buyers}</label>
                  <input id="vs-buyers" name="buyers" className="field" maxLength={300} />
                </div>
                <div>
                  <label htmlFor="vs-competitors" className="field-label">{s.competitors}</label>
                  <input id="vs-competitors" name="competitors" className="field" maxLength={260} />
                  <p className="mt-2 text-[13px] text-ink-soft">{s.competitorsHint}</p>
                </div>
                <button type="submit" className="btn btn-solid btn-block">{s.submit} <Arrow /></button>
                <p className="text-[13px] text-ink-soft">{s.wait}</p>
              </form>
              {jobs && jobs.length > 0 && (
                <div className="mt-8 border-t border-rule pt-6">
                  <p className="eyebrow">{s.previous}</p>
                  <ul className="mt-2">
                    {jobs.map((j) => (
                      <li key={j.id}>
                        <Link href={`${c.path}/${j.id}`} className="cta-link">{j.company} · {String(j.created_at).slice(0, 10)} <Arrow /></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <PaperBriefGate labels={c.gate} from="snapshot" />
          )}
          <div>
            <p className="eyebrow">{c.honest.label}</p>
            <h2 className="mt-4 max-w-[24ch] font-display text-h3 font-medium">{c.honest.h2}</h2>
            <ul className="mt-6 space-y-5">
              {c.honest.points.map(([lead, text]) => (
                <li key={lead} className="border-t border-rule pt-4 leading-relaxed text-ink/90">
                  <strong className="font-medium text-ink">{lead}</strong> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
