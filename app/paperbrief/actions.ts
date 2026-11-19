"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { paperbrief } from "@/content/paperbrief";
import { capture, EMAIL_RE, text } from "@/lib/capture";
import { notifyEnvelope } from "@/lib/notify";
import {
  ACCESS_COOKIE, ACCESS_DAYS, PENDING_COOKIE, PENDING_MINUTES,
  codeHash, configured, newCode, sameHash, seal, unseal,
} from "@/lib/paperbrief";

export type GateState = { step: "form" | "code"; email?: string; error?: string };

const cookieBase = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/paperbrief" };
const E = paperbrief.gate.errors;

// Step one: take name, email, and phone, then email a one time code. Nothing is stored yet.
// The details ride in a signed, http only cookie until the code comes back.
export async function requestAccess(_prev: GateState, formData: FormData): Promise<GateState> {
  const name = text(formData, "name").slice(0, 100);
  const email = text(formData, "email").toLowerCase().slice(0, 200);
  const phone = text(formData, "phone").slice(0, 40);
  if (text(formData, "hp_url")) return { step: "code", email };
  if (name.length < 2 || !EMAIL_RE.test(email) || phone.replace(/\D/g, "").length < 7) return { step: "form", error: E.fields };
  if (!configured()) return { step: "form", error: E.config };

  const code = newCode();
  const token = seal({ n: name, e: email, p: phone, h: codeHash(code, email) }, PENDING_MINUTES);
  if (!token) return { step: "form", error: E.config };
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: notifyEnvelope().from,
      to: email,
      subject: paperbrief.email.subject,
      text: paperbrief.email.body(name, code),
    });
    if (error) throw new Error(error.message);
  } catch (e) {
    console.error("PaperBrief code email failed:", (e as Error).message);
    return { step: "form", error: E.send };
  }
  (await cookies()).set(PENDING_COOKIE, token, { ...cookieBase, maxAge: PENDING_MINUTES * 60 });
  return { step: "code", email };
}

// Step two: the code proves the inbox. Only now is the lead recorded and the desk opened.
export async function verifyCode(prev: GateState, formData: FormData): Promise<GateState> {
  const jar = await cookies();
  const pending = unseal<{ n: string; e: string; p: string; h: string }>(jar.get(PENDING_COOKIE)?.value);
  if (!pending) return { step: "code", email: prev.email, error: E.expired };
  if (!sameHash(codeHash(text(formData, "code"), pending.e), pending.h)) return { step: "code", email: prev.email ?? pending.e, error: E.wrong };

  const access = seal({ n: pending.n, e: pending.e }, ACCESS_DAYS * 24 * 60);
  if (!access) return { step: "code", email: prev.email, error: E.config };
  await capture({
    name: pending.n,
    email: pending.e,
    message: `PaperBrief access, email verified.\nPhone: ${pending.p}`,
    sourcePath: paperbrief.path,
    subject: `PaperBrief signup: ${pending.n}`,
  });
  jar.delete({ name: PENDING_COOKIE, path: cookieBase.path });
  jar.set(ACCESS_COOKIE, access, { ...cookieBase, maxAge: ACCESS_DAYS * 86_400 });
  redirect(paperbrief.deskPath);
}

export async function restart(): Promise<void> {
  (await cookies()).delete({ name: PENDING_COOKIE, path: cookieBase.path });
  redirect(`${paperbrief.path}#access`);
}
