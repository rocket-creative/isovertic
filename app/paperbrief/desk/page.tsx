import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PageHero, Section } from "@/components/sections/Shell";
import { Arrow } from "@/components/ui/Arrow";
import { paperbrief as c } from "@/content/paperbrief";
import { ACCESS_COOKIE, WINDOWS, discoverPapers, parseNames, unseal, type Paper } from "@/lib/paperbrief";
import { db, getWorkspace, listPapers, type SavedPaper, type Status, type Workspace } from "@/lib/paperbrief-db";
import { CopyButton } from "@/components/ui/CopyButton";
import { checkNow, draftPost, saveSettings, setStatus, signOut } from "./actions";

export const metadata: Metadata = {
  title: { absolute: c.desk.title },
  alternates: { canonical: c.deskPath },
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
// Drafting waits on the model, which can take most of a minute on a long abstract.
export const maxDuration = 120;

const d = c.desk;
type Params = Record<string, string | string[] | undefined>;

function SettingsForm({ w }: { w?: Workspace | null }) {
  return (
    <form action={saveSettings} className="grid max-w-[640px] gap-6">
      <div>
        <label htmlFor="pb-company" className="field-label">{d.company}</label>
        <input id="pb-company" name="company" className="field" required minLength={3} maxLength={100} defaultValue={w?.company} autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="pb-aliases" className="field-label">{d.aliases}</label>
        <input id="pb-aliases" name="aliases" className="field" maxLength={500} defaultValue={w?.aliases.join(", ")} />
        <p className="mt-2 text-[13px] text-ink-soft">{d.aliasHint}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pb-days" className="field-label">{d.window}</label>
          <select id="pb-days" name="days" className="field field-select" defaultValue={String(w?.days ?? 90)}>
            {WINDOWS.map((n) => (
              <option key={n} value={n}>{n} {d.days}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pb-cadence" className="field-label">{d.cadence.label}</label>
          <select id="pb-cadence" name="cadence" className="field field-select" defaultValue={w?.cadence ?? "monthly"}>
            <option value="monthly">{d.cadence.monthly}</option>
            <option value="weekly">{d.cadence.weekly}</option>
            <option value="off">{d.cadence.off}</option>
          </select>
        </div>
      </div>
      <label className="flex min-h-[44px] items-start gap-3 leading-relaxed">
        <input type="checkbox" name="alerts" defaultChecked={w?.alerts ?? false} className="mt-1.5" />
        <span>
          {d.alerts}
          <span className="block text-[13px] text-ink-soft">{d.alertsHint}</span>
        </span>
      </label>
      <div>
        <button type="submit" className="btn btn-solid btn-block">{w ? d.save : d.submit} <Arrow /></button>
      </div>
    </form>
  );
}

function DraftView({ p }: { p: SavedPaper }) {
  const a = d.ai;
  const draft = p.draft!;
  const link = `https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`;
  const blocks: [string, string, string?][] = [
    [a.summary, draft.summary],
    [a.linkedin, draft.linkedin, `${a.firstComment} ${link}`],
    [a.x, `${draft.x}\n${link}`],
  ];
  return (
    <details className="draft" open>
      <summary className="paper-action">{a.toggle}</summary>
      <div className="draft-body">
        <p className={`draft-verdict draft-verdict--${draft.verdict}`}>
          <strong>{a.verdict[draft.verdict]}</strong> {draft.reason}
        </p>
        {draft.evidence && (
          <blockquote className="mt-4 border-l border-ink pl-4 text-[14px] leading-relaxed text-ink-soft">
            <span className="eyebrow block">{a.evidence}</span>
            {draft.evidence}
          </blockquote>
        )}
        {blocks.map(([label, body, note]) => (
          <div key={label} className="mt-6">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow">{label}</p>
              <CopyButton text={body} label={a.copy} done={a.copied} />
            </div>
            <p className="mt-1 whitespace-pre-line leading-relaxed">{body}</p>
            {note && <p className="mt-2 text-[13px] text-ink-soft">{note}</p>}
          </div>
        ))}
        <p className="draft-warning">{a.warning}</p>
        <p className="mt-3 text-[12px] text-ink-soft">{draft.source === "full_text" ? a.fromFullText : a.fromAbstract}</p>
      </div>
    </details>
  );
}

function PaperRow({ p, show }: { p: SavedPaper; show: string }) {
  const options: [Status, string][] = [["ours", d.status.ours], ["not_ours", d.status.not_ours], ["review", d.status.review]];
  return (
    <li id={`paper-${p.id}`} className={`paper-row scroll-mt-32 ${p.status === "not_ours" ? "opacity-60" : ""}`}>
      <p className="eyebrow">
        {p.pub_date} · {p.journal}
        <span className={`paper-tag paper-tag--${p.status}`}>{d.tag[p.status]}</span>
      </p>
      <h3 className="mt-3 font-display text-[clamp(18px,1.8vw,22px)] font-medium leading-snug">{p.title}</h3>
      {p.authors && <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{p.authors}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1">
        <a href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`} target="_blank" rel="noopener noreferrer" className="cta-link">{d.open} <Arrow /></a>
        {options.filter(([s]) => s !== p.status).map(([s, label]) => (
          <form key={s} action={setStatus}>
            <input type="hidden" name="id" value={p.id} />
            <input type="hidden" name="status" value={s} />
            <input type="hidden" name="show" value={show} />
            <button type="submit" className="paper-action">{label}</button>
          </form>
        ))}
        {p.status !== "not_ours" && (
          <form action={draftPost}>
            <input type="hidden" name="id" value={p.id} />
            <button type="submit" className="paper-action paper-action--signal">{p.draft ? d.ai.again : d.ai.draft}</button>
          </form>
        )}
      </div>
      {p.draft && <DraftView p={p} />}
    </li>
  );
}

// No database on this build: the search still works, nothing is saved.
async function SearchOnly({ sp }: { sp: Params }) {
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
      } catch {
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
       
        cta={
          <form method="get" className="grid max-w-[640px] gap-6">
            <div>
              <label htmlFor="pb-company" className="field-label">{d.company}</label>
              <input id="pb-company" name="company" className="field" required minLength={3} maxLength={100} defaultValue={company} />
            </div>
            <div>
              <label htmlFor="pb-aliases" className="field-label">{d.aliases}</label>
              <input id="pb-aliases" name="aliases" className="field" maxLength={500} defaultValue={aliases} />
            </div>
            <div className="max-w-[240px]">
              <label htmlFor="pb-days" className="field-label">{d.window}</label>
              <select id="pb-days" name="days" className="field field-select" defaultValue={String(days)}>
                {WINDOWS.map((n) => (
                  <option key={n} value={n}>{n} {d.days}</option>
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
          {error && <p role="alert" className="max-w-[68ch] border-l-2 border-signal pl-4 leading-relaxed">{error}</p>}
          {papers && papers.length === 0 && <p className="max-w-[68ch] leading-relaxed">{d.none}</p>}
          {papers && papers.length > 0 && (
            <>
              <h2 className="max-w-[30ch] font-display text-h2 font-medium">{d.found(papers.length, company)}</h2>
              <p className="mt-4 text-[14px] text-ink-soft">{d.source}</p>
              <ol className="mt-10 max-w-[960px]">
                {papers.map((p) => (
                  <li key={p.pmid} className="paper-row">
                    <p className="eyebrow">{p.date} · {p.journal}</p>
                    <h3 className="mt-3 font-display text-[clamp(18px,1.8vw,22px)] font-medium leading-snug">{p.title}</h3>
                    {p.authors && <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{p.authors}</p>}
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="cta-link mt-2">{d.open} <Arrow /></a>
                  </li>
                ))}
              </ol>
            </>
          )}
        </Section>
      )}
    </>
  );
}

export default async function PaperBriefDesk({ searchParams }: { searchParams: Promise<Params> }) {
  const session = unseal<{ n: string; e: string; a?: string }>((await cookies()).get(ACCESS_COOKIE)?.value);
  if (!session) redirect(`${c.path}#access`);
  const sp = await searchParams;
  const client = db();
  const closing = (
    <Section tone="navy" deferred={false}>
      <h2 className="font-display text-h2 font-medium">{d.next.h2}</h2>
      <p className="mt-6 max-w-[68ch] leading-relaxed">{d.next.text}</p>
      <div className="mt-8">
        <Link href="/contact" className="btn btn-solid">{d.next.button} <Arrow /></Link>
      </div>
    </Section>
  );
  if (!client || !session.a) {
    return (
      <>
        <SearchOnly sp={sp} />
        {closing}
      </>
    );
  }

  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : "");
  const workspace = await getWorkspace(client, session.a);
  const errorKey = one("error") as keyof typeof d.errors;
  const error = errorKey in d.errors ? d.errors[errorKey] : "";

  if (!workspace) {
    return (
      <>
        <PageHero eyebrow={d.eyebrow} h1={d.h1} lead={d.lead} cta={
          <>
            {error && <p role="alert" className="mb-6 max-w-[62ch] border-l-2 border-signal pl-4 leading-relaxed">{error}</p>}
            <SettingsForm />
          </>
        } />
        {closing}
      </>
    );
  }

  const papers = await listPapers(client, workspace.id);
  const count = (s: Status) => papers.filter((p) => p.status === s).length;
  const show = (["review", "ours", "not_ours"] as const).find((s) => s === one("show")) ?? "all";
  const visible = show === "all" ? papers : papers.filter((p) => p.status === show);
  const added = one("added");
  const notice = one("requested") ? d.requestedNotice : added !== "" ? (Number(added) > 0 ? d.addedSome(Number(added)) : d.addedNone) : "";
  const filters: [string, string, number][] = [
    ["all", d.filter.all, papers.length],
    ["review", d.filter.review, count("review")],
    ["ours", d.filter.ours, count("ours")],
    ["not_ours", d.filter.not_ours, count("not_ours")],
  ];
  const fmt = (iso: string | null) => (iso ? iso.slice(0, 10) : d.never);

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        h1={workspace.company}
        lead={d.deskLead(session.n.split(" ")[0])}
       
        cta={
          <>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <form action={checkNow}>
                <button type="submit" className="btn btn-solid">{d.check} <Arrow /></button>
              </form>
              <form action={signOut}>
                <button type="submit" className="cta-link">{d.signOut}</button>
              </form>
            </div>
            <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">
              {d.lastChecked} {fmt(workspace.last_checked_at)} · {workspace.cadence === "off" ? d.cadence.off : `${d.nextCheck} ${fmt(workspace.next_check_at)}`} · {workspace.alerts ? d.alertsOn : d.alertsOff}
            </p>
          </>
        }
      />
      <Section label={d.queueLabel} deferred={false}>
        {(notice || error) && <p role="status" className="mb-10 max-w-[68ch] border-l-2 border-signal pl-4 leading-relaxed">{error || notice}</p>}
        <ul className="grid gap-10 sm:grid-cols-3">
          {([[papers.length, d.stats.total], [count("review"), d.stats.review], [count("ours"), d.stats.ours]] as const).map(([n, label]) => (
            <li key={label} className="border-t border-ink pt-5">
              <span className="stat-figure">{n}</span>
              <span className="mt-3 block leading-relaxed text-ink-soft">{label}</span>
            </li>
          ))}
        </ul>
        <nav aria-label={d.filter.label} className="mt-14 flex flex-wrap gap-x-8 gap-y-2 border-b border-rule">
          {filters.map(([key, label, n]) => (
            <Link key={key} href={key === "all" ? c.deskPath : `${c.deskPath}?show=${key}`} aria-current={show === key ? "page" : undefined} className={`paper-filter ${show === key ? "paper-filter--on" : ""}`}>
              {label} <span className="text-ink-soft">{n}</span>
            </Link>
          ))}
        </nav>
        {visible.length === 0 ? (
          <p className="mt-10 max-w-[68ch] leading-relaxed">{papers.length === 0 ? d.none : d.emptyFilter}</p>
        ) : (
          <ol className="max-w-[960px]">
            {visible.map((p) => (
              <PaperRow key={p.id} p={p} show={show === "all" ? "" : show} />
            ))}
          </ol>
        )}
        <p className="mt-8 text-[13px] text-ink-soft">{d.source}</p>
      </Section>
      <Section label={d.settingsLabel} tone="bright" deferred={false}>
        <h2 className="max-w-[26ch] font-display text-h2 font-medium">{d.settingsH2}</h2>
        <p className="mt-4 max-w-[68ch] leading-relaxed text-ink/90">{d.settingsText}</p>
        <div className="mt-10">
          <SettingsForm w={workspace} />
        </div>
      </Section>
      {closing}
    </>
  );
}
