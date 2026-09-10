const STORAGE_KEY = "proc_program_leads";
const CTA_KEY = "proc_program_cta_clicks";

export type LeadRecord = {
  id: string;
  fullName: string;
  age: string;
  whatsapp: string;
  city: string;
  concern: string;
  paymentMethod: string;
  paymentProofName?: string;
  paymentProofDataUrl?: string;
  createdAt: string;
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Unable to save ${key}`, error);
  }
}

export function saveLead(lead: Omit<LeadRecord, "id" | "createdAt">) {
  const records = read<LeadRecord[]>(STORAGE_KEY, []);
  const record: LeadRecord = {
    ...lead,
    id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}_${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString(),
  };
  write(STORAGE_KEY, [record, ...records]);
  return record;
}

export function getLeads() {
  return read<LeadRecord[]>(STORAGE_KEY, []);
}

export function trackCtaClick(label: string) {
  const clicks = read<Record<string, number>>(CTA_KEY, {});
  clicks[label] = (clicks[label] ?? 0) + 1;
  write(CTA_KEY, clicks);
}

export function getCtaClicks() {
  return read<Record<string, number>>(CTA_KEY, {});
}
