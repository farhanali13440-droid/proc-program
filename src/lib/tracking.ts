// Meta Pixel conversion tracking helpers.
// The pixel base code is installed once globally in src/routes/__root.tsx.

type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const META_PIXEL_ID = "1772538933755285";

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

// Generates a unique event id so the same conversion can later be sent
// server-side via the Conversions API and deduplicated by Meta.
export function createLeadEventId() {
  const uuid =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  return `lead_${uuid}`;
}

// Fires the standard Lead event exactly once, with an eventID for CAPI dedup.
export function trackLead(eventId: string = createLeadEventId()) {
  if (typeof window === "undefined") return eventId;
  window.fbq?.("track", "Lead", {}, { eventID: eventId });
  return eventId;
}

export const trackPurchase = () => trackEvent("Purchase", { value: 700, currency: "PKR" });

export const trackContact = () => trackEvent("Contact");

export const trackSchedule = () => trackEvent("Schedule");
