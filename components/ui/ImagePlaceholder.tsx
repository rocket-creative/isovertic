// Photo prompts for the empty frames. Each one is a realistic photograph with people in it.
// Flip this on when the photographs are ready. The prompts stay in the tree either way.
export const showImagePlaceholders = false;

const LOOK =
  "Photorealistic documentary photograph, natural window light, 35mm lens. People mid task, eyes on the work, not on the camera. Off white walls, plain clothes, no logos, no readable text.";

const SCENES: { test: RegExp; scene: string }[] = [
  { test: /industries/, scene: "Four people around one table: a practice administrator, a scientist in a lab coat, a clinical engineer, and a founder, mid conversation." },
  { test: /medical device/, scene: "A clinical engineer and a hospital buyer stand over a device on a steel tray in a procedure room, talking." },
  { test: /life science/, scene: "Two researchers at a lab bench, one holding a pipette, the other watching, glassware soft behind them." },
  { test: /biotech/, scene: "A scientist in a lab coat and a commercial lead stand at a bench, mid conversation, notebooks closed." },
  { test: /pharma/, scene: "A medical director and a reviewer sit at a wood table. One holds a printed page. The other listens." },
  { test: /healthcare|practice|hospital|dental|\bvet\b|urgent/, scene: "A practice administrator and a clinician at a clinic front desk, looking together at a laptop, a quiet hallway behind them." },
  { test: /startup/, scene: "A founder and one salesperson at a small table in a bare office, a laptop between them, mid conversation." },
  { test: /professional service/, scene: "Two advisors in a plain conference room. One slides a thin folder across the table." },
  { test: /home service/, scene: "A trades owner in a work shirt and a dispatcher at a desk, both looking at a paper schedule." },
  { test: /hospitality|venue/, scene: "A venue manager and a host at a reservation stand, talking, an empty dining room behind them." },
  { test: /long island/, scene: "A local business owner and a colleague in a small office, late daylight, a suburban street through the window." },
  { test: /pricing|the term/, scene: "A founder and a buyer at a table, one printed page between them, both looking down at it." },
  { test: /pipeline call|contact|book a/, scene: "Two people on a video call. One sits in a small office. The other is a practice administrator in a clinic office. Both lean toward the screen." },
  { test: /audit/, scene: "A founder and a CEO sit across a table, a notepad with a single line between them, both mid sentence." },
  { test: /protocol|train/, scene: "A trainer stands beside three seated operators. All four look at one laptop in a plain room." },
  { test: /problem/, scene: "A founder and a salesperson at a desk, a phone face down, both looking at a quiet laptop." },
  { test: /result|roster/, scene: "A client and an agency lead at a table. The client points at a single number on a printed page." },
  { test: /hipaa|baa|compliance|privacy|sensitive/, scene: "A compliance officer and a practice administrator review a stapled agreement, pens down, both reading." },
  { test: /outbound|appointment/, scene: "One person wears a phone headset. A second person writes on a pad beside them in a quiet office." },
  { test: /paid search|google ads|advertis/, scene: "Two people at a laptop. One points at the screen. The other writes a note." },
  { test: /search and content|editorial|field note|argument/, scene: "A writer at a desk and a colleague reading a printed page beside them." },
  { test: /\bbuild\b|website/, scene: "A designer and an engineer at one screen. The designer points. The engineer listens." },
  { test: /\bmedia\b|television/, scene: "Two people in an office watch a television across the room. One holds a notebook." },
  { test: /brand|design/, scene: "A designer shows a printed page to a founder. Both stand at a table." },
  { test: /compare|comparison|in house/, scene: "Two operators at a table. One closes a laptop. The other opens a paper notebook." },
  { test: /glossary|answer|questions/, scene: "A founder and a scientist sit across a small table. The founder explains with open hands." },
  { test: /about|founder|team|coverage/, scene: "Two colleagues at a work table, one with a laptop, one with a notebook, mid conversation." },
  { test: /service|how it works|system/, scene: "Four people in one room. One is on a phone. One is at a screen. Two talk over a printed page." },
];

const DEFAULT_SCENE = "A senior operator and a buyer in a plain meeting room, mid conversation, papers on the table, window light from the left.";

export function describeHeroImage(eyebrow?: string, title?: string): string {
  const eyebrowBlob = (eyebrow ?? "").toLowerCase();
  const blob = `${eyebrowBlob} ${title ?? ""}`.toLowerCase();
  const scene = (SCENES.find((item) => item.test.test(eyebrowBlob)) ?? SCENES.find((item) => item.test.test(blob)))?.scene ?? DEFAULT_SCENE;
  const subject = (title || eyebrow || "this page").replace(/\.+$/, "");
  return `${LOOK} ${scene} Page: ${subject}.`;
}

export function portraitPrompt(name: string, title: string): string {
  return `Photorealistic head and shoulders photograph of ${name}, ${title}. Natural window light, off white wall, eyes just past the lens, calm, not a studio smile. Photograph the real person.`;
}

export function fieldNotePrompt(title: string): string {
  return `${LOOK} A writer at a desk and a colleague reading a printed page. The note is about: ${title}.`;
}

export function explainPrompt(topic: string): string {
  return `${LOOK} A founder and a scientist sit across a small table. The founder explains with open hands. Topic: ${topic}.`;
}

export function casePrompt(client: string, industry: string): string {
  return `${LOOK} The client lead and an agency lead at a table in a ${industry} workplace. The client points at one number on a printed page. Account: ${client}.`;
}

export function ImagePlaceholder({
  description,
  label = "Photo prompt",
  className = "",
}: {
  description: string;
  label?: string;
  className?: string;
}) {
  if (!showImagePlaceholders) return null;
  return (
    <figure className={`surface-card flex flex-col justify-end border border-rule p-5 sm:p-6 ${className}`}>
      <figcaption>
        <p className="eyebrow">{label}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink">{description}</p>
      </figcaption>
    </figure>
  );
}
