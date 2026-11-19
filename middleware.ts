import { NextResponse, type NextRequest } from "next/server";
import { footerCols, primaryNav } from "@/content/site-nav";

// Review guard. Only the rewritten pages are reachable; submissions and checkout are off.
// The two tools are the exception: PaperBrief and the AI visibility snapshot have to post, so their paths accept form submissions.
const reviewPaths = new Set<string>([
  "/",
  "/review-status",
  ...primaryNav.map((l) => l.href),
  ...footerCols.flatMap((c) => c.items.map(([, href]) => href)),
]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const open = ["/paperbrief", "/ai-visibility-snapshot"].some((p) => path === p || path.startsWith(`${p}/`));
  if (open || path === "/api/cron/paperbrief" || path === "/api/cron/paperbrief-digest" || path === "/api/snapshot/continue") return NextResponse.next();
  if (path.startsWith("/api/") || (request.method !== "GET" && request.method !== "HEAD"))
    return new NextResponse("Local review only. Submissions and checkout are disabled.", { status: 503 });
  if (!reviewPaths.has(path)) return NextResponse.redirect(new URL("/review-status", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/|.*\\.[^/]+$).*)"] };
