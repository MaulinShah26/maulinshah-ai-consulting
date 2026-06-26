// Single swap point for analytics. Currently wired to Google Analytics 4
// (gtag, loaded by <GoogleAnalytics> in app/layout.tsx). To switch providers
// later, change only this function body.
type Params = Record<string, string | number | boolean>;

export function track(event: string, params?: Params) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params ?? {});
  }
}
