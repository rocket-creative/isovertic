import { resolveMx } from "node:dns/promises";

// Work email checks for the PaperBrief gate. Server only.
// The emailed code proves the inbox. These prove the inbox belongs to a company:
// no free mail providers, a domain that really receives mail, and a note of whether
// that domain looks like the company the person goes on to search for.

const FREE = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "ymail.com", "rocketmail.com", "outlook.com", "hotmail.com", "live.com", "msn.com",
  "aol.com", "icloud.com", "me.com", "mac.com", "proton.me", "protonmail.com", "pm.me", "gmx.com", "gmx.net", "gmx.de", "mail.com",
  "zoho.com", "yandex.com", "yandex.ru", "fastmail.com", "hey.com", "tutanota.com", "tuta.io", "duck.com", "comcast.net", "verizon.net",
  "att.net", "sbcglobal.net", "bellsouth.net", "cox.net", "charter.net", "optonline.net", "earthlink.net", "qq.com", "163.com", "126.com",
  "sina.com", "naver.com", "web.de", "mail.ru", "libero.it", "orange.fr", "wanadoo.fr", "btinternet.com", "sky.com", "shaw.ca", "rogers.com",
  // Throwaway inboxes
  "mailinator.com", "guerrillamail.com", "10minutemail.com", "tempmail.com", "temp-mail.org", "yopmail.com", "sharklasers.com",
  "trashmail.com", "getnada.com", "dispostable.com", "maildrop.cc", "moakt.com", "throwawaymail.com",
]);
// Regional variants such as yahoo.co.uk and hotmail.fr.
const FREE_BRAND = /^(yahoo|hotmail|outlook|live|gmx|yandex|aol|msn)\.[a-z.]{2,6}$/;

export function emailDomain(email: string): string {
  return email.slice(email.lastIndexOf("@") + 1).toLowerCase().replace(/\.$/, "");
}

export function isFreeProvider(domain: string): boolean {
  return FREE.has(domain) || FREE_BRAND.test(domain);
}

export const looksLikeDomain = (domain: string) => /^(?=.{4,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/.test(domain);

/** True when the domain publishes a mail server. A typo or an invented domain fails here. */
export async function receivesMail(domain: string): Promise<boolean> {
  try {
    const records = await Promise.race([
      resolveMx(domain),
      new Promise<never>((_, reject) => setTimeout(() => reject(new Error("dns timeout")), 4000)),
    ]);
    // A single "." exchange is the published way to say "this domain takes no mail".
    return records.some((r) => r.exchange && r.exchange !== ".");
  } catch {
    return false;
  }
}

/** True when a website answers at the domain. Recorded on the lead, never used to block. */
export async function hasWebsite(domain: string): Promise<boolean> {
  for (const host of [domain, `www.${domain}`]) {
    try {
      // Redirects are not followed and the body is never read: any answer at all means a site is there.
      const res = await fetch(`https://${host}/`, { method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(4000), cache: "no-store" });
      if (res.status > 0) return true;
    } catch {
      // try the next host
    }
  }
  return false;
}

const squash = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const FILLER = new Set(["inc", "llc", "ltd", "corp", "corporation", "company", "co", "gmbh", "sa", "ag", "bv", "plc", "the", "and", "of", "laboratory", "laboratories", "labs", "lab", "group"]);

/** Does the verified email domain look like one of the company names being searched? */
export function domainMatchesCompany(domain: string, names: string[]): boolean {
  // "mail.acmebio.co.uk" -> "acmebio": the label before the public suffix.
  const labels = domain.split(".");
  const core = labels.length > 2 && labels[labels.length - 2].length <= 3 ? labels[labels.length - 3] : labels[labels.length - 2];
  const d = squash(core ?? "");
  if (d.length < 2) return false;
  return names.some((name) => {
    const words = name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    const full = squash(name);
    const lean = words.filter((w) => !FILLER.has(w)).join("");
    const initials = words.map((w) => w[0]).join("");
    const leanInitials = words.filter((w) => !FILLER.has(w)).map((w) => w[0]).join("");
    if (d === full || d === lean) return true;
    if (d.length >= 4 && (full.includes(d) || d.includes(lean) && lean.length >= 4)) return true;
    // Three letters or more of initials, such as "itl" for a three word name.
    return d.length >= 3 && (d === initials || d === leanInitials);
  });
}
