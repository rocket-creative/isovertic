import { NextResponse, type NextRequest } from "next/server";
import { footerCols, primaryNav } from "@/content/site-nav";

// Local review guard. Only the rewritten pages are reachable; submissions and checkout are off. Do not deploy.
const reviewPaths = new Set<string>([
  "/",
  "/review-status",
  ...primaryNav.map((l) => l.href),
  ...footerCols.flatMap((c) => c.items.map(([, href]) => href)),
]);

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  if (path.startsWith("/api/") || (request.method !== "GET" && request.method !== "HEAD"))
    return new NextResponse("Local review only. Submissions and checkout are disabled.", { status: 503 });
  if (!reviewPaths.has(path)) return NextResponse.redirect(new URL("/review-status", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/|.*\\.[^/]+$).*)"] };
