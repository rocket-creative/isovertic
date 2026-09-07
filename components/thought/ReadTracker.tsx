"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

// Fires essay_scroll_depth at 25, 50, 75, and 100 percent of the article, and essay_completed once at 100.
// Renders nothing. Static HTML is unaffected.

export function ReadTracker({ slug, category }: { slug: string; category: string }) {
  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const fired = new Set<number>();
    const start = Date.now();
    const onScroll = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const seen = total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));
      for (const mark of [25, 50, 75, 100]) {
        if (seen * 100 >= mark && !fired.has(mark)) {
          fired.add(mark);
          track("essay_scroll_depth", { slug, category, depth_pct: mark });
          if (mark === 100) track("essay_completed", { slug, category, time_on_page: Math.round((Date.now() - start) / 1000) });
        }
      }
      if (fired.size === 4) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug, category]);
  return null;
}
