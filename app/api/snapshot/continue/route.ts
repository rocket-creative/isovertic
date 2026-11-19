import { NextResponse, type NextRequest } from "next/server";
import { after } from "next/server";
import { unseal } from "@/lib/paperbrief";
import { db } from "@/lib/paperbrief-db";
import { advance } from "@/lib/visibility";
import { announce, continueLater } from "@/lib/visibility-notify";

// Keeps a snapshot running when nobody has the page open. A run that is out of time calls this
// with a short lived signed token; it answers at once and carries on with the work afterwards.
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const claim = unseal<{ j: string }>(token);
  const client = db();
  if (!claim?.j || !client) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  after(() => advance(client, claim.j, announce, continueLater));
  return NextResponse.json({ accepted: true }, { status: 202 });
}
