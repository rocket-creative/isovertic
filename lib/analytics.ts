// One event helper for every new CTA, form, and tool on the site.
// Pushes to window.dataLayer (Google Tag Manager), and to plausible or gtag when either is present.
// No provider is bundled here: wire GTM or Plausible in app/layout.tsx and every event below starts flowing.

export type EventName =
  | "cta_click"
  | "audit_started"
  | "audit_step"
  | "audit_completed"
  | "standard_downloaded"
  | "subscribed"
  | "diagnostic_clicked"
  | "research_notify_signup"
  | "baa_requested"
  | "compliance_page_viewed"
  | "essay_scroll_depth"
  | "essay_completed"
  | "calculator_used";

type Props = Record<string, string | number | boolean | undefined>;

type Tracker = Window & {
  dataLayer?: unknown[];
  plausible?: (event: string, opts?: { props?: Props }) => void;
  gtag?: (cmd: "event", name: string, props?: Props) => void;
};

export function track(event: EventName, props: Props = {}) {
  if (typeof window === "undefined") return;
  const w = window as Tracker;
  const payload = { ...props, page: props.page ?? window.location.pathname };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
  w.plausible?.(event, { props: payload });
  w.gtag?.("event", event, payload);
}
