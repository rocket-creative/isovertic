// Title tags stay inside 60 characters. Descriptions stay inside 155, under the 165 cutoff.

const BRAND = " | ISOVERTIC";

export function metaTitle(base: string): string {
  const raw = base.replace(/\s+/g, " ").trim();
  if (raw.length <= 60) return raw;
  const t = raw.replace(/\s*\|\s*ISOVERTIC\s*$/i, "").trim();
  if (t.length + BRAND.length <= 60) return t + BRAND;
  const room = 60 - BRAND.length;
  let cut = t.slice(0, room);
  const space = cut.lastIndexOf(" ");
  if (space >= 24) cut = cut.slice(0, space);
  cut = cut.replace(/[\s,;:.]+$/g, "");
  return cut + BRAND;
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
  if (out.length >= 60 && out.length <= max) return out;
  const cut = clean.slice(0, max);
  const last = cut.lastIndexOf(" ");
  return (last > 40 ? cut.slice(0, last) : cut).replace(/[,;:]$/, "") + ".";
}
