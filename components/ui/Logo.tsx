export function LogoMark({
  className = "",
  color = "#14181B",
  barColor = "#8A8A8A",
}: {
  className?: string;
  color?: string;
  barColor?: string;
}) {
  return (
    <svg viewBox="0 0 72 52" className={className} aria-hidden="true">
      <circle cx="16" cy="40" r="10" fill={color} />
      <rect x="14" y="24" width="50" height="8" fill={barColor} transform="rotate(-30 14 28)" />
    </svg>
  );
}
