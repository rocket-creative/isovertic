import { NextResponse, type NextRequest } from "next/server";
import { footerCols, primaryNav } from "@/content/site-nav";

// Only the rewritten pages are reachable. Older pages send the visitor to the home page, and checkout stays off.
// The contact form and the two tools (PaperBrief and the AI visibility snapshot) have to post, so their paths accept form submissions.
const livePaths = new Set<string>([
  "/",
  // Printed on the conference cards as a QR code, so it is open without a nav link.
  "/what-is-isovertic",
  ...primaryNav.map((l) => l.href),
  ...footerCols.flatMap((c) => c.items.map(([, href]) => href)),
]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const open = path === "/contact" || ["/paperbrief", "/ai-visibility-snapshot"].some((p) => path === p || path.startsWith(`${p}/`));
  if (open || path === "/api/cron/paperbrief" || path === "/api/cron/paperbrief-digest" || path === "/api/snapshot/continue") return NextResponse.next();
  if (path.startsWith("/api/") || (request.method !== "GET" && request.method !== "HEAD"))
    return new NextResponse("This address does not accept submissions.", { status: 503 });
  if (!livePaths.has(path)) return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/|.*\\.[^/]+$).*)"] };
