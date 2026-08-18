// Meta Pixel conversion tracking helpers.
// The pixel base code is installed once globally in src/routes/__root.tsx.

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = "1583560866736462";

export function trackEvent(name: string, payload?: TrackPayload) {
  if (typeof window === "undefined") return;
  if (payload) {
    window.fbq?.("track", name, payload);
    window.gtag?.("event", name, payload);
  } else {
    window.fbq?.("track", name);
    window.gtag?.("event", name);
  }
}

export const trackPageView = () => trackEvent("PageView");

export const trackInitiateCheckout = () => trackEvent("InitiateCheckout");

export const trackLead = () => trackEvent("Lead");

export const trackPurchase = () => trackEvent("Purchase", { value: 700, currency: "PKR" });

export const trackContact = () => trackEvent("Contact");
