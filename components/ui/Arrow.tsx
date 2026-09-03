export function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <svg width="30" height="12" viewBox="0 0 32 12" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      {direction === "right" ? (
        <>
          <line x1="0" y1="6" x2="30" y2="6" />
          <polyline points="24,1 30,6 24,11" />
        </>
      ) : (
        <>
          <line x1="16" y1="0" x2="16" y2="10" />
          <polyline points="11,5 16,11 21,5" />
        </>
      )}
    </svg>
  );
}
