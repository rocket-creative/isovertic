// Title and description rules for generated pages (answers, glossary).
// Title: question first, brand suffix only when it fits inside 60 characters. Description: whole sentences, about 155 characters.

const BRAND = " | ISOVERTIC";

export function metaTitle(base: string): string {
  const t = base.replace(/\?$/, "?").trim();
  if (t.length + BRAND.length <= 60) return t + BRAND;
  return t;
}

export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sentences = clean.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [clean];
  let out = "";
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= 60) return out;
  const cut = clean.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + ".";
}
