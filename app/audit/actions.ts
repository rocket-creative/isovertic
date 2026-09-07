"use server";

import { capture, text, EMAIL_RE, type CaptureState } from "@/lib/capture";
import { questions, scoreAnswers, tierResults } from "@/content/audit";

// Records a completed audit against the email that unlocked the written diagnosis.
// Answers arrive as a JSON string of {questionId: optionIndex}.

export async function submitAudit(_prev: CaptureState, formData: FormData): Promise<CaptureState> {
  if (text(formData, "hp_url")) return { ok: true };
  const email = text(formData, "email");
  const company = text(formData, "company");
  if (!EMAIL_RE.test(email)) return { ok: false, error: "A work email is required to unlock the diagnosis." };

  let answers: Record<string, number> = {};
  try {
    answers = JSON.parse(text(formData, "answers") || "{}");
  } catch {
    answers = {};
  }
  const { score, max, tier } = scoreAnswers(answers);
  const lines = questions.map((q) => {
    const idx = answers[q.id];
    const opt = idx === undefined ? undefined : q.options[idx];
    return `${q.text}\n  ${opt ? opt.label : "(skipped)"}`;
  });

  return capture({
    name: email,
    email,
    company,
    message: [
      `Pipeline Ownership Audit completed.`,
      `Score: ${score} of ${max}`,
      `Recommendation: ${tierResults[tier].name}`,
      "",
      ...lines,
    ].join("\n"),
    sourcePath: "/audit",
    subject: `Audit completed: ${email} scored ${score}, ${tierResults[tier].name}`,
  });
}
