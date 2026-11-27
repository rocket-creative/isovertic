// Labels for the diagrams placed in content/site-copy with a "Diagram: name" line.
// Every figure here repeats a figure stated in the page copy beside it.
export const snapshotDiagram = {
  label: "How the free snapshot is run",
  steps: [
    { figure: "10", label: "buyer questions" },
    { figure: "4", label: "AI assistants", detail: ["ChatGPT", "Gemini", "Perplexity", "Claude"] },
    { figure: "3", label: "runs of every question" },
    { figure: "1", label: "report, within 24 hours" },
  ],
} as const;

export const priceDiagram = {
  label: "Published website prices compared",
  max: 40000,
  rows: [
    { name: "Life science specialist agencies", from: 15000, to: 40000, value: "$15,000 to $40,000" },
    { name: "Isovertic", from: 0, to: 4995, value: "$4,995", ours: true },
  ],
} as const;

// Empty photograph frames. The brief under the label tells the photographer what to shoot.
// "show: false" keeps every empty frame off the page. The briefs stay in content/site-copy for whoever makes the pictures.
export const imageSlot = { label: "Image placeholder", show: false } as const;
export const detailBrief =
  "Photorealistic documentary photograph, natural window light, 50mm lens. Close on hands and the work on the table: a printed page, a laptop edge, a pen. No faces, no logos, no readable text.";

// The moving line under the home hero. Each name matches a page in the footer.
export const industryReel = [
  "CROs",
  "Research models",
  "Reagents and antibodies",
  "Lab equipment",
  "Diagnostics",
  "Medical devices",
  "Biotech",
  "CDMOs",
  "Consulting firms",
] as const;
