import { Link } from "@tanstack/react-router";
import { Check, MessageCircle, Phone, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export const WHATSAPP_NUMBER = "03275991415";
export const WHATSAPP_LINK = "https://wa.me/923275991415";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 flex-col leading-tight">

          <span className="font-display text-lg font-semibold text-primary">
            Dr. Syed Hammad Wajid Talha
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            MBBS, FCPS &middot; Gastroenterologist
          </span>
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-secondary"
        >
          <MessageCircle className="size-3.5" aria-hidden="true" />
          WhatsApp
        </a>

      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-5xl space-y-4 px-5 py-10 text-center text-sm text-muted-foreground sm:text-left">
        <div>
          <p className="font-display text-xl text-primary">Dr. Syed Hammad Wajid Talha</p>
          <p>MBBS, FCPS &mdash; Gastroenterologist &amp; Hepatologist</p>
        </div>
        <p className="flex items-start justify-center gap-2 sm:justify-start">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Al-Qamar Hospital, Railway Road, Shakargarh
        </p>
        <p className="flex items-center justify-center gap-2 sm:justify-start">
          <Phone className="size-4 shrink-0" aria-hidden="true" />
          <span>
            WhatsApp:{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {WHATSAPP_NUMBER}
            </a>
          </span>
        </p>
        <p className="text-xs leading-relaxed">
          This website provides general health information and appointment booking only. It is not a
          substitute for in-person medical advice, diagnosis or treatment. Individual results may vary
          and depend on each patient&apos;s condition and response to treatment.
        </p>
        <p className="text-xs">&copy; {new Date().getFullYear()} Dr. Syed Hammad Wajid Talha. All rights reserved.</p>
      </div>
    </footer>
  );
}


export function TickItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center justify-center gap-2.5 text-center text-sm leading-relaxed text-foreground/90 sm:justify-start sm:text-left">
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent">
        <Check className="size-3 text-accent-foreground" aria-hidden="true" />
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}



export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 space-y-3 text-center">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold text-primary sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
    </a>
  );
}
