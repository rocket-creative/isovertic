"use client";

import { useMemo, useState } from "react";
import { builderCopy as c, builderGroups, type BuilderItem } from "@/content/price-builder";
import { site } from "@/lib/site";

// Lets a buyer switch services on and off and see the one time and monthly totals as they go.
// It only adds up published prices. Nothing is sent anywhere until the buyer emails the list.

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const items = builderGroups.flatMap((g) => g.items);
const pagePrice = items.find((i) => i.id === "pages")?.once ?? 0;

export function PriceBuilder() {
  const [qty, setQty] = useState<Record<string, number>>(() =>
    Object.fromEntries(items.filter((i) => i.on).map((i) => [i.id, 1])),
  );

  const toggle = (item: BuilderItem) =>
    setQty((q) => {
      const next = { ...q };
      if (next[item.id]) {
        delete next[item.id];
        return next;
      }
      // Choosing one plan in a set switches off the others in that set.
      if (item.choice) for (const other of items) if (other.choice === item.choice) delete next[other.id];
      next[item.id] = 1;
      return next;
    });

  const step = (item: BuilderItem, by: number) =>
    setQty((q) => {
      const n = Math.max(0, Math.min(item.quantity?.max ?? 1, (q[item.id] ?? 0) + by));
      const next = { ...q };
      if (n === 0) delete next[item.id];
      else next[item.id] = n;
      return next;
    });

  const t = useMemo(() => {
    const picked = items.filter((i) => qty[i.id]);
    const once = picked.reduce((s, i) => s + (i.once ?? 0) * qty[i.id], 0);
    const monthly = picked.reduce((s, i) => s + (i.monthly ?? 0) * qty[i.id], 0);
    const site = picked.find((i) => i.choice === "site");
    const credit = qty.audit && site ? c.auditCredit : 0;
    // The website is paid half to start and half at launch. The audit credit comes off the launch half.
    const siteCost = (site?.once ?? 0) + (qty.pages ?? 0) * pagePrice;
    // An odd dollar goes on the first half, so both halves are whole dollars.
    const atLaunch = Math.max(0, siteCost - Math.ceil(siteCost / 2) - credit);
    return {
      picked,
      once: once - credit,
      monthly,
      credit,
      atLaunch,
      dueNow: once - credit - atLaunch,
      from: picked.some((i) => i.from),
    };
  }, [qty]);

  const mail = `mailto:${site.email}?subject=${encodeURIComponent(c.sendSubject)}&body=${encodeURIComponent(
    [
      c.sendIntro,
      "",
      ...t.picked.map((i) => `- ${i.name}${qty[i.id] > 1 ? ` x ${qty[i.id]}` : ""}`),
      "",
      `${c.once}: ${t.from ? `${c.from} ` : ""}${usd(t.once)}`,
      `${c.monthly}: ${usd(t.monthly)}`,
    ].join("\n"),
  )}`;

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <div>
        {builderGroups.map((g) => (
          <fieldset key={g.title} className="mb-10 border-t border-ink pt-4">
            <legend className="eyebrow float-left mb-4 w-full">{g.title}</legend>
            <ul className="clear-both">
              {g.items.map((item) => {
                const on = Boolean(qty[item.id]);
                return (
                  <li key={item.id} className="border-b border-rule py-4">
                    <div className="flex items-start gap-4">
                      {item.quantity ? (
                        <div className="flex shrink-0 items-center border border-rule">
                          <button type="button" onClick={() => step(item, -1)} disabled={!on} aria-label={`${c.remove}: ${item.name}`} className="h-9 w-9 text-lg disabled:opacity-30">−</button>
                          <output aria-live="polite" className="w-8 text-center text-[15px] tabular-nums">{qty[item.id] ?? 0}</output>
                          <button type="button" onClick={() => step(item, 1)} aria-label={`${c.add}: ${item.name}`} className="h-9 w-9 text-lg">+</button>
                        </div>
                      ) : (
                        <input id={`pb-${item.id}`} type="checkbox" checked={on} onChange={() => toggle(item)} className="mt-1 h-5 w-5 shrink-0 accent-navy" />
                      )}
                      <label htmlFor={item.quantity ? undefined : `pb-${item.id}`} className="min-w-0 flex-1 cursor-pointer">
                        <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <span className="font-medium text-ink">{item.name}</span>
                          <span className="text-[15px] tabular-nums text-ink">
                            {item.once !== undefined && `${item.from ? `${c.from} ` : ""}${usd(item.once)}${item.quantity ? ` ${c.each}` : ""}`}
                            {item.once !== undefined && item.monthly !== undefined && " + "}
                            {item.monthly !== undefined && `${usd(item.monthly)} ${c.perMonth}`}
                          </span>
                        </span>
                        <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{item.detail}</span>
                        {on && item.note && <span className="mt-2 block text-[13px] leading-relaxed text-ink">{item.note}</span>}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
        <p className="eyebrow">{c.quoted}</p>
        <ul className="mt-3 text-[14px] leading-relaxed text-ink-soft">
          {c.quotedItems.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>

      <aside className="surface-card h-fit border border-rule p-6 sm:p-8 lg:sticky lg:top-28" aria-live="polite">
        <p className="eyebrow">{c.selected}</p>
        {t.picked.length === 0 ? (
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{c.empty}</p>
        ) : (
          <ul className="mt-4 text-[14px]">
            {t.picked.map((i) => (
              <li key={i.id} className="flex justify-between gap-4 border-b border-rule py-2">
                <span>{i.name}{qty[i.id] > 1 ? ` × ${qty[i.id]}` : ""}</span>
                <span className="shrink-0 text-right tabular-nums text-ink-soft">
                  {i.once !== undefined && `${i.from ? `${c.from} ` : ""}${usd(i.once * qty[i.id])}`}
                  {i.once !== undefined && i.monthly !== undefined && " + "}
                  {i.monthly !== undefined && `${usd(i.monthly)}${c.perMonthShort}`}
                </span>
              </li>
            ))}
            {t.credit > 0 && (
              <li className="flex justify-between gap-4 border-b border-rule py-2">
                <span>{c.credit}</span>
                <span className="shrink-0 tabular-nums text-ink-soft">−{usd(t.credit)}</span>
              </li>
            )}
          </ul>
        )}
        <dl className="mt-6 space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[13px] uppercase tracking-[0.1em] text-ink-soft">{c.once}</dt>
            <dd className="font-display text-h3 font-medium tabular-nums">{t.from ? `${c.from} ` : ""}{usd(t.once)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[13px] uppercase tracking-[0.1em] text-ink-soft">{c.monthly}</dt>
            <dd className="font-display text-h3 font-medium tabular-nums">{usd(t.monthly)}</dd>
          </div>
        </dl>
        {t.atLaunch > 0 && (
          <dl className="mt-6 space-y-2 border-t border-rule pt-4 text-[14px]">
            <div className="flex justify-between gap-4"><dt>{c.dueNow}</dt><dd className="tabular-nums">{usd(t.dueNow)}</dd></div>
            <div className="flex justify-between gap-4"><dt>{c.atLaunch}</dt><dd className="tabular-nums">{usd(t.atLaunch)}</dd></div>
            {t.monthly > 0 && <div className="flex justify-between gap-4"><dt>{c.firstMonth}</dt><dd className="tabular-nums">{usd(t.monthly)}</dd></div>}
          </dl>
        )}
        {t.credit > 0 && <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">{c.creditNote}</p>}
        <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">{c.tax}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{c.terms}</p>
        {t.picked.length > 0 && (
          <a href={mail} className="btn btn-solid mt-6 w-full justify-center">{c.send}</a>
        )}
        <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">{c.checkoutSoon}</p>
      </aside>
    </div>
  );
}
