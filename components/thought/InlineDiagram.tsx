// Inline SVG diagrams for essays. Rendered from a ":::diagram name" fence in markdown. Ink only, one accent,
// no decoration that does not encode information. Every label is real text so it reads without CSS.

const ink = "currentColor";
const signal = "#0AB1FF";

export function InlineDiagram({ name }: { name: string }) {
  if (name === "vendor-stack") return <VendorStack />;
  if (name === "two-clock") return <TwoClock />;
  return null;
}

function VendorStack() {
  const vendors = [
    { v: "Web shop", m: "Launch, page speed" },
    { v: "Ads manager", m: "Cost per lead" },
    { v: "Content writer", m: "Pages published" },
    { v: "Appointment setter", m: "Meetings booked" },
    { v: "Social freelancer", m: "Followers" },
  ];
  const w = 720;
  const colW = w / vendors.length;
  return (
    <figure className="diagram">
      <svg viewBox={`0 0 ${w} 300`} width="100%" role="img" aria-labelledby="vs-title" className="text-ink">
        <title id="vs-title">Five vendors, five metrics, and a gap with no owner where the meeting should be</title>
        {vendors.map((x, i) => {
          const cx = colW * i + colW / 2;
          return (
            <g key={x.v}>
              <rect x={colW * i + 8} y={20} width={colW - 16} height={56} fill="none" stroke={ink} strokeWidth="1" />
              <text x={cx} y={44} textAnchor="middle" fontSize="13" fontWeight="600" fill={ink}>{x.v}</text>
              <text x={cx} y={64} textAnchor="middle" fontSize="11" fill={ink} opacity="0.7">{x.m}</text>
              <line x1={cx} y1={76} x2={cx} y2={150} stroke={ink} strokeWidth="1" strokeDasharray="4 4" />
            </g>
          );
        })}
        <rect x={8} y={150} width={w - 16} height={64} fill="none" stroke={signal} strokeWidth="1.5" />
        <text x={w / 2} y={178} textAnchor="middle" fontSize="14" fontWeight="600" fill={signal}>The gap: lead to held meeting</text>
        <text x={w / 2} y={200} textAnchor="middle" fontSize="12" fill={ink} opacity="0.7">No vendor is measured here. No vendor owns it.</text>
        <line x1={w / 2} y1={214} x2={w / 2} y2={250} stroke={ink} strokeWidth="1" />
        <text x={w / 2} y={274} textAnchor="middle" fontSize="13" fontWeight="600" fill={ink}>The number the CFO reads: qualified meetings that become opportunities</text>
      </svg>
      <figcaption>Five vendors each hit their own metric. The metric that pays for all of them sits in the gap between them.</figcaption>
    </figure>
  );
}

function TwoClock() {
  const w = 720;
  const months = 12;
  const x0 = 40;
  const x1 = w - 20;
  const step = (x1 - x0) / months;
  return (
    <figure className="diagram">
      <svg viewBox={`0 0 ${w} 220`} width="100%" role="img" aria-labelledby="tc-title" className="text-ink">
        <title id="tc-title">Two clocks over twelve months: leading indicators every 30 days, lagging indicators at months six and twelve</title>
        <text x={x0} y={30} fontSize="13" fontWeight="600" fill={ink}>Clock one · every 30 days · leading indicators</text>
        <line x1={x0} y1={60} x2={x1} y2={60} stroke={ink} strokeWidth="1" />
        {Array.from({ length: months }, (_, i) => (
          <g key={i}>
            <circle cx={x0 + step * (i + 1)} cy={60} r={4} fill={ink} />
            <text x={x0 + step * (i + 1)} y={82} textAnchor="middle" fontSize="10" fill={ink} opacity="0.7">{i + 1}</text>
          </g>
        ))}
        <text x={x0} y={130} fontSize="13" fontWeight="600" fill={signal}>Clock two · months six and twelve · lagging indicators, tied to your sales cycle</text>
        <line x1={x0} y1={160} x2={x1} y2={160} stroke={signal} strokeWidth="1.5" />
        {[6, 12].map((m) => (
          <g key={m}>
            <circle cx={x0 + step * m} cy={160} r={7} fill={signal} />
            <text x={x0 + step * m} y={190} textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>Month {m}</text>
          </g>
        ))}
        <text x={x0 + step * 3} y={205} textAnchor="middle" fontSize="10" fill={ink} opacity="0.7">Rankings, CPL, learning phase, meetings booked</text>
        <text x={x0 + step * 9} y={205} textAnchor="middle" fontSize="10" fill={ink} opacity="0.7">Pipeline, revenue, CAC payback, conversion</text>
      </svg>
      <figcaption>Twelve reads on the fast clock, two on the slow one. The slow clock's dates move with the sales cycle written into the agreement.</figcaption>
    </figure>
  );
}
