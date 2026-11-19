import type { MetadataRoute } from "next";
import { paperbrief } from "@/content/paperbrief";
import { visibility } from "@/content/visibility";
import { site } from "@/lib/site";
import { copyPages } from "@/lib/sitecopy";

// The rewrite's sitemap: every page drafted in content/site-copy, plus the two free tools.
// Older routes are held back by middleware on this branch, so they are not listed. When a legacy
// section is brought back at launch, add its collection here again (git history has the old list).
// lastmod is the date the copy last changed, not the build time. Google ignores a lastmod that moves on
// every deploy, and ignores priority and changefreq entirely, so neither is emitted.
const COPY_UPDATED = "2026-11-19";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(COPY_UPDATED);
  return [
    ...copyPages().map((p) => ({ url: `${site.url}${p.path === "/" ? "" : p.path}`, lastModified })),
    { url: `${site.url}${visibility.path}`, lastModified },
    { url: `${site.url}${paperbrief.path}`, lastModified },
  ];
}
