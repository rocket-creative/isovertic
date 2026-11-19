import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PageHero, Section } from "@/components/sections/Shell";
import { Arrow } from "@/components/ui/Arrow";
import { ParticleField } from "@/components/ui/ParticleField";
import { paperbrief as c } from "@/content/paperbrief";
import { ACCESS_COOKIE, WINDOWS, discoverPapers, parseNames, unseal, type Paper } from "@/lib/paperbrief";

export const metadata: Metadata = {
  title: { absolute: c.desk.title },
  alternates: { canonical: c.deskPath },
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

const d = c.desk;

export default async function PaperBriefDesk({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const session = unseal<{ n: string; e: string }>((await cookies()).get(ACCESS_COOKIE)?.value);
  if (!session) redirect(`${c.path}#access`);

  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string).trim() : "");
  const company = one("company").slice(0, 100);
  const aliases = one("aliases").slice(0, 500);
  const days = WINDOWS.find((w) => String(w) === one("days")) ?? 90;

  let papers: Paper[] | null = null;
  let error = "";
  if (company) {
    const names = parseNames(company, aliases);
    if (!names) error = d.invalid;
    else {
      try {
        papers = await discoverPapers(names, days);
      } catch (e) {
        console.error("PaperBrief search failed:", (e as Error).message);
        error = d.failed;
      }
    }
  }

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        h1={d.h1}
        lead={d.lead}
        backdrop={<ParticleField fade />}
        cta={
          <form method="get" className="grid max-w-[640px] gap-6">
            <div>
              <label htmlFor="pb-company" className="field-label">{d.company}</label>
              <input id="pb-company" name="company" className="field" required minLength={3} maxLength={100} defaultValue={company} autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="pb-aliases" className="field-label">{d.aliases}</label>
              <input id="pb-aliases" name="aliases" className="field" maxLength={500} defaultValue={aliases} />
              <p className="mt-2 text-[13px] text-ink-soft">{d.aliasHint}</p>
            </div>
            <div className="max-w-[240px]">
              <label htmlFor="pb-days" className="field-label">{d.window}</label>
              <select id="pb-days" name="days" className="field field-select" defaultValue={String(days)}>
                {WINDOWS.map((w) => (
                  <option key={w} value={w}>{w} {d.days}</option>
                ))}
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-solid btn-block">{d.submit} <Arrow /></button>
            </div>
          </form>
        }
      />
      {(papers || error) && (
        <Section deferred={false}>
          <div id="results" className="scroll-mt-32">
            {error && <p role="alert" className="max-w-[68ch] border-l-2 border-signal pl-4 leading-relaxed">{error}</p>}
            {papers && papers.length === 0 && <p className="max-w-[68ch] leading-relaxed">{d.none}</p>}
            {papers && papers.length > 0 && (
              <>
                <h2 className="max-w-[30ch] font-display text-h2 font-medium">{d.found(papers.length, company)}</h2>
                <p className="mt-4 text-[14px] text-ink-soft">
                  {papers.length === 50 ? `${d.capped} ` : ""}
                  {d.source}
                </p>
                <ol className="mt-10 max-w-[960px]">
                  {papers.map((p) => (
                    <li key={p.pmid} className="paper-row">
                      <p className="eyebrow">{p.date} · {p.journal}</p>
                      <h3 className="mt-3 font-display text-[clamp(18px,1.8vw,22px)] font-medium leading-snug">{p.title}</h3>
                      {p.authors && <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{p.authors}</p>}
                      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="cta-link">{d.open} <Arrow /></a>
                        <span className="text-[12px] uppercase tracking-[0.1em] text-ink-soft">{d.held}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </Section>
      )}
      <Section tone="navy" backdrop={<ParticleField tone="paper" />} deferred={false}>
        <h2 className="font-display text-h2 font-medium">{d.next.h2}</h2>
        <p className="mt-6 max-w-[68ch] leading-relaxed">{d.next.text}</p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-solid">{d.next.button} <Arrow /></Link>
        </div>
      </Section>
    </>
  );
}
