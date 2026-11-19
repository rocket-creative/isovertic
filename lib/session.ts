import { cookies } from "next/headers";
import { ACCESS_COOKIE, unseal } from "@/lib/paperbrief";

// The verified visitor behind a request, shared by PaperBrief and the AI visibility snapshot.
// n = name, e = verified email, a = account id (present once the database is connected).
export type Session = { n: string; e: string; a?: string };

export async function getSession(): Promise<Session | null> {
  return unseal<Session>((await cookies()).get(ACCESS_COOKIE)?.value);
}
