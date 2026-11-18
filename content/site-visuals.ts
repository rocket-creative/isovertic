// Labels for the diagrams placed in content/site-copy with a "Diagram: name" line.
// Every figure here repeats a figure stated in the page copy beside it.
export const snapshotDiagram = {
  label: "How the free snapshot is run",
  steps: [
    { figure: "10", label: "buyer questions" },
    { figure: "4", label: "AI assistants", detail: ["ChatGPT", "Gemini", "Perplexity", "Google AI answers"] },
    { figure: "3", label: "runs of every question" },
    { figure: "1", label: "page of answers, read by a person" },
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
