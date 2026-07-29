// Conversion tracking placeholders.
// Add your Meta Pixel / Google Analytics snippets in src/routes/__root.tsx,
// then these helpers will forward events automatically.

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", name, payload);
  window.gtag?.("event", name, payload);
}

export const trackInitiateCheckout = () =>
  trackEvent("InitiateCheckout", { value: 500, currency: "PKR" });

export const trackPurchase = () => trackEvent("Purchase", { value: 500, currency: "PKR" });
