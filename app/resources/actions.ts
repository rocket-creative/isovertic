"use server";

import { capture, text, EMAIL_RE, type CaptureState } from "@/lib/capture";


export async function requestStandard(_prev: CaptureState, formData: FormData): Promise<CaptureState> {
  if (text(formData, "hp_url")) return { ok: true };
  const email = text(formData, "email");
  const company = text(formData, "company");
  if (!EMAIL_RE.test(email)) return { ok: false, error: "A work email is required." };
  const domain = email.split("@")[1];
  return capture({
    name: email,
    email,
    company,
    message: `Requested: ${text(formData, "resource") || "one page standard"}.\nEmail domain: ${domain}\nTier interest: ${text(formData, "tier") || "not stated"}`,
    sourcePath: text(formData, "source_path") || "/resources/engagement-and-measurement-standard",
    subject: `One pager requested: ${email}`,
  });
}

export async function subscribe(_prev: CaptureState, formData: FormData): Promise<CaptureState> {
  if (text(formData, "hp_url")) return { ok: true };
  const email = text(formData, "email");
  if (!EMAIL_RE.test(email)) return { ok: false, error: "That email does not look right." };
  const list = text(formData, "list") || "thought_leadership_subscriber";
  return capture({
    name: email,
    email,
    message: `Subscribe. Tag: ${list}`,
    sourcePath: text(formData, "source_path") || "/field-notes",
    subject: `New subscriber (${list}): ${email}`,
  });
}

export async function requestBaa(_prev: CaptureState, formData: FormData): Promise<CaptureState> {
  if (text(formData, "hp_url")) return { ok: true };
  const name = text(formData, "name");
  const email = text(formData, "email");
  const company = text(formData, "company");
  const status = text(formData, "covered_entity_status");
  const notes = text(formData, "notes");
  if (!name || !company || !EMAIL_RE.test(email)) return { ok: false, error: "Name, company, and a work email are required." };
  return capture({
    name,
    email,
    company,
    message: `BAA and compliance packet request.\nCovered entity status: ${status || "not stated"}\n\nNotes:\n${notes || "(blank)"}`,
    sourcePath: "/compliance/baa-request",
    subject: `BAA request: ${company} (${status || "status not stated"})`,
  });
}
