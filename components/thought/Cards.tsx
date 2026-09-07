import Link from "next/link";
import type { Article } from "@/lib/articles";
import { Arrow } from "@/components/ui/Arrow";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { getPerson } from "@/content/people";
import { categories, hub } from "@/content/thought";

export function categoryLabel(key: Article["category"]) {
  return categories.find((c) => c.key === key)?.label ?? "";
}

// The pinned argument. Full width, one per hub, visually unlike everything below it.
export function FlagshipCard({ a }: { a: Article }) {
  const author = getPerson(a.author);
  return (
    <section className="bg-navy text-paper">
      <div className="mx-auto max-w-[1440px] gutter py-20 lg:py-28">
        <p className="eyebrow !text-signal">{hub.flagshipEyebrow}</p>
        <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(30px,4.6vw,68px)] font-semibold leading-[1.02] tracking-[-0.015em]">{a.title}</h2>
        <p className="mt-7 max-w-[62ch] text-[17px] leading-relaxed text-paper/80">{a.description}</p>
        <p className="mt-6 text-[13px] uppercase tracking-[0.14em] text-paper/60">
          {author?.name} · {a.readingMinutes} min read · {a.datePublished}
        </p>
        <div className="mt-10">
          <TrackedLink href={`/field-notes/${a.slug}`} section="flagship" label={hub.flagshipCta} className="btn btn-ghost btn-ghost--paper">
            {hub.flagshipCta} <Arrow />
          </TrackedLink>
        </div>
        <div className="iso-mark iso-mark--paper mt-14 max-w-[560px]" aria-hidden="true" />
      </div>
    </section>
  );
}

export function DiagnosticCard() {
  const d = hub.diagnostic;
  return (
    <div className="surface-card flex h-full flex-col p-8 md:p-10">
      <p className="eyebrow">{d.eyebrow} · {d.time}</p>
      <h3 className="mt-4 font-display text-h3 font-semibold">{d.title}</h3>
      <p className="mt-4 grow text-[15px] leading-relaxed text-ink/90">{d.dek}</p>
      <div className="mt-8">
        <TrackedLink href={d.href} section="diagnostic" label={d.cta} event="diagnostic_clicked" className="btn btn-solid">
          {d.cta} <Arrow />
        </TrackedLink>
      </div>
    </div>
  );
}

export function EssayCard({ a, showCategory = true }: { a: Article; showCategory?: boolean }) {
  const author = getPerson(a.author);
  return (
    <Link href={`/field-notes/${a.slug}`} className="group flex h-full flex-col py-6">
      {showCategory && <span className="eyebrow">{categoryLabel(a.category)}</span>}
      {a.formerFlagship && <span className="eyebrow !text-signal">{hub.formerFlagshipTag}</span>}
      <span className="mt-3 font-display text-[clamp(18px,2.2vw,24px)] font-medium leading-snug group-hover:text-signal">{a.title}</span>
      <span className="mt-3 block max-w-[62ch] grow text-[14px] leading-relaxed text-ink-soft">{a.description}</span>
      <span className="mt-4 block text-[12px] uppercase tracking-[0.1em] text-ink-soft">
        {author?.name} · {a.readingMinutes} min · {a.datePublished}
      </span>
    </Link>
  );
}

export function EssayArchive({ articles }: { articles: Article[] }) {
  return (
    <div className="space-y-20">
      {categories.map((c) => {
        const items = articles.filter((a) => a.category === c.key && !a.flagship);
        if (items.length === 0) return null;
        return (
          <div key={c.key}>
            <h3 className="font-display text-h3 font-semibold">{c.label}</h3>
            <p className="mt-2 max-w-[62ch] text-[14px] text-ink-soft">{c.blurb}</p>
            <ol className="mt-6 grid divide-y divide-rule border-y border-rule md:grid-cols-2 md:gap-x-12 md:divide-y-0 lg:grid-cols-3">
              {items.map((a) => (
                <li key={a.slug} className="md:border-b md:border-rule">
                  <EssayCard a={a} showCategory={false} />
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export function RelatedEssays({ items, heading }: { items: Article[]; heading: string }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="font-display text-h2 font-medium">{heading}</h2>
      <ol className="mt-6 grid divide-y divide-rule border-y border-rule md:grid-cols-3 md:gap-x-12 md:divide-y-0">
        {items.map((a) => (
          <li key={a.slug} className="md:border-b md:border-rule"><EssayCard a={a} /></li>
        ))}
      </ol>
    </div>
  );
}

export function AuthorGrid({ articles }: { articles: Article[] }) {
  const authors = Array.from(new Set(articles.map((a) => a.author)))
    .map((slug) => ({ p: getPerson(slug), count: articles.filter((a) => a.author === slug).length }))
    .filter((x) => x.p);
  return (
    <div className="grid gap-px bg-rule md:grid-cols-2">
      {authors.map(({ p, count }) => (
        <div key={p!.slug} className="surface-card flex gap-6 p-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[2px] bg-navy font-display text-lg font-semibold text-paper" aria-hidden="true">{p!.initials}</div>
          <div>
            <p className="font-display text-[17px] font-medium"><Link href={`/people/${p!.slug}`} className="hover:text-signal">{p!.name}</Link>, {p!.title}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{p!.short}</p>
            <p className="mt-3 text-[12px] uppercase tracking-[0.1em] text-ink-soft">{count} {count === 1 ? "essay" : "essays"}</p>
            <div className="mt-4 flex flex-wrap gap-x-6">
              <Link href={`/people/${p!.slug}`} className="cta-link">All by {p!.name.split(" ")[0]} <Arrow /></Link>
              {p!.sameAs?.[0] && <a href={p!.sameAs[0]} rel="noopener noreferrer" className="cta-link">LinkedIn</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AuthorBio({ slug, eyebrow }: { slug: string; eyebrow: string }) {
  const p = getPerson(slug);
  if (!p) return null;
  return (
    <div className="grid gap-6 border-t border-rule pt-10 sm:grid-cols-[56px_1fr]">
      <div className="flex h-14 w-14 items-center justify-center rounded-[2px] bg-navy font-display text-lg font-semibold text-paper" aria-hidden="true">{p.initials}</div>
      <div className="max-w-[68ch]">
        <p className="eyebrow">{eyebrow}</p>
        <p className="mt-2 font-display text-[18px] font-medium">{p.name}, {p.title}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">{p.bio[0]}</p>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          <Link href={`/people/${p.slug}`} className="cta-link">Full bio and every essay <Arrow /></Link>
          {p.sameAs?.[0] && <a href={p.sameAs[0]} rel="noopener noreferrer" className="cta-link">LinkedIn</a>}
        </div>
      </div>
    </div>
  );
}
