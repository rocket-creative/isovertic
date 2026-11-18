import React from "react";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/schema";
import { copyPage, type CopyBlock, type CopyLink } from "@/lib/sitecopy";
import { formNotice } from "@/content/site-nav";

// Renders one page from content/site-copy. All copy comes from the markdown; nothing is written here.

function inline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      out.push(
        m[2].startsWith("/") ? (
          <Link key={m.index} href={m[2]} className="underline underline-offset-4 hover:text-navy">{m[1]}</Link>
        ) : (
          <a key={m.index} href={m[2]} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{m[1]}</a>
        ),
      );
    } else if (m[3]) out.push(<strong key={m.index} className="font-medium text-ink">{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Buttons({ links }: { links: readonly CopyLink[] }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
      {links.map((l, i) =>
        i === 0 ? (
          <Link key={l.label} href={l.href} className="btn btn-solid">{l.label} <Arrow /></Link>
        ) : (
          <Link key={l.label} href={l.href} className="cta-link">{l.label} <Arrow /></Link>
        ),
      )}
    </div>
  );
}

const fieldId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);

function Block({ b }: { b: CopyBlock }) {
  switch (b.type) {
    case "p":
      return <p className="mt-6 max-w-[68ch] leading-relaxed text-ink/90">{inline(b.text)}</p>;
    case "h3":
      return <h3 className="mt-10 max-w-[40ch] font-display text-h3 font-medium">{b.text}</h3>;
    case "kicker":
      return <p className="eyebrow mt-12 border-t border-rule pt-6">{b.text}</p>;
    case "quote":
      return (
        <blockquote className="mt-8 max-w-[62ch] border-l border-ink pl-6 font-display text-[clamp(18px,2vw,24px)] leading-snug">
          <p>{b.text}</p>
        </blockquote>
      );
    case "small":
      return (
        <p className="mt-6 max-w-[68ch] text-[14px] leading-relaxed text-ink-soft">
          {b.href ? <Link href={b.href} className="underline underline-offset-4 hover:text-navy">{b.text}</Link> : inline(b.text)}
        </p>
      );
    case "closing":
      return <p className="mt-10 max-w-[32ch] font-display text-h3 font-medium">{b.text}</p>;
    case "ul":
    case "ol": {
      const List = b.type;
      return (
        <List className={`mt-6 max-w-[68ch] space-y-3 pl-5 leading-relaxed text-ink/90 ${b.type === "ol" ? "list-decimal" : "list-disc"}`}>
          {b.items.map((item) => (
            <li key={item.text}>
              {inline(item.text)}
              {item.link && (
                <>
                  {" "}
                  <Link href={item.link.href} className="whitespace-nowrap underline underline-offset-4 hover:text-navy">{item.link.label}</Link>
                </>
              )}
            </li>
          ))}
        </List>
      );
    }
    case "stats":
      return (
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {b.items.map((s) => (
            <li key={s} className="border-t border-rule pt-5 leading-relaxed">{s}</li>
          ))}
        </ul>
      );
    case "table": {
      const hasHead = b.head.some(Boolean);
      return (
        <div className="t-wrap mt-8 max-w-[960px]">
          <table className="t">
            {hasHead && (
              <thead>
                <tr>{b.head.map((h, i) => <th key={i} className="border-b border-ink py-3 pr-6 align-bottom">{inline(h)}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci} data-label={b.head[ci] || undefined} className={`border-b border-rule py-3 pr-6 align-top text-[15px] leading-relaxed ${ci === 0 ? "font-medium" : ""}`}>
                      {inline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "buttons":
      return <Buttons links={b.links} />;
    case "link":
      return (
        <p className="mt-5">
          <Link href={b.link.href} className="cta-link">{b.link.label} <Arrow /></Link>
        </p>
      );
    case "choice":
      return (
        <fieldset className="mt-8 max-w-[640px]">
          <legend className="sr-only">What you want back</legend>
          {b.items.map((c, i) => (
            <label key={c} className="flex min-h-[44px] items-center gap-3 border-b border-rule py-2 leading-relaxed">
              <input type="radio" name="request" value={c} defaultChecked={i === 0} required />
              {c}
            </label>
          ))}
        </fieldset>
      );
    case "fields":
      return (
        <div className="mt-8 grid max-w-[640px] gap-6">
          {b.items.map((f) => {
            const id = fieldId(f);
            const optional = /\(optional/i.test(f);
            const long = /\?|anything else/i.test(f);
            return (
              <div key={f}>
                <label htmlFor={id} className="field-label">{f}</label>
                {long ? (
                  <textarea id={id} name={id} className="field" required={!optional} />
                ) : (
                  <input id={id} name={id} className="field" required={!optional} type={/email/i.test(f) ? "email" : "text"} />
                )}
              </div>
            );
          })}
        </div>
      );
  }
}

// A price in the headline gets its own line at display size. The sentence stays intact for readers and crawlers.
function heroTitle(h1: string): React.ReactNode {
  const m = h1.match(/^(.*?)(\$[\d,]+)(\.?)\s*(.*)$/);
  if (!m) return h1;
  return (
    <>
      {m[1]}
      <span className="hero-price">
        {m[2]}
        {m[3] && <span className="sr-only">{m[3]}</span>}
      </span>{" "}
      {m[4]}
    </>
  );
}

export function CopyPageView({ path }: { path: string }) {
  const page = copyPage(path);
  const faqs = page.sections.flatMap((s) => s.faqs ?? []);
  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqLd(faqs)} />}
      <PageHero
        eyebrow={page.eyebrow}
        h1={heroTitle(page.h1)}
        lead={page.lead}
        cta={
          page.buttons.length || page.trust ? (
            <>
              {page.buttons.length > 0 && <Buttons links={page.buttons} />}
              {page.trust && <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">{page.trust}</p>}
            </>
          ) : undefined
        }
      />
      {page.sections.map((s, i) => {
        const isForm = s.blocks.some((b) => b.type === "fields");
        const body = s.blocks.map((b, bi) =>
          isForm && b.type === "buttons" ? (
            <div key={bi} className="mt-8">
              <button type="submit" className="btn btn-solid" disabled>{b.links[0].label} <Arrow /></button>
              <p className="mt-3 text-[13px] text-ink-soft">{formNotice}</p>
            </div>
          ) : (
            <Block key={bi} b={b} />
          ),
        );
        return (
          <Section key={s.id + i} label={s.title.length <= 28 ? s.title : undefined} tone={i % 2 ? "bright" : "paper"} deferred={false}>
            <div id={s.id} className="scroll-mt-32 [&>*:first-child]:mt-0">
              {s.h2 && <h2 className="max-w-[26ch] font-display text-h2 font-medium">{s.h2}</h2>}
              {isForm ? <form>{body}</form> : body}
              {s.faqs && (
                <div className="mt-10 max-w-[72ch]">
                  <FAQ faqs={s.faqs} />
                </div>
              )}
            </div>
          </Section>
        );
      })}
    </>
  );
}
