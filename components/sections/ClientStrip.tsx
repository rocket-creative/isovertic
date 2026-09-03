const clients = [
  "ingenious targeting laboratory",
  "ISS Health",
  "Kronos Revenue",
  "COGAI Health",
  "Sydra",
  "Kavera",
  "Riviera Waterfront Mansion",
  "Pathways Within",
];

export function ClientStrip() {
  const row = [...clients, ...clients];
  return (
    <div className="marquee overflow-hidden border-y border-rule py-6" aria-label="Client roster">
      <div className="marquee-track flex w-max items-center gap-14 pr-14">
        {row.map((c, i) => (
          <span key={i} className="whitespace-nowrap text-[13px] uppercase tracking-[0.18em] text-ink-soft" aria-hidden={i >= clients.length}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
