import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiteFooter,
  TopBar,
  WhatsAppFloat,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from "@/components/site";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Booking Received — PCOS Consultation | Dr. Zaib-un-Nisa" },
      {
        name: "description",
        content:
          "Your PCOS consultation request with Dr. Zaib-un-Nisa has been received. Our team will confirm your appointment on WhatsApp.",
      },
      { property: "og:title", content: "Your PCOS Consultation Request Has Been Received" },
      {
        property: "og:description",
        content: "Thank you for booking with Dr. Zaib-un-Nisa. We will confirm your slot on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <main className="flex-1 bg-hero-soft">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:py-20">
          <Card className="border-border text-center shadow-soft">
            <CardContent className="space-y-6 p-7 sm:p-10">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent">
                <CheckCircle2 className="size-7 text-accent-foreground" aria-hidden="true" />
              </span>
              <h1 className="text-balance text-2xl font-semibold text-primary sm:text-3xl">
                Your PCOS Consultation Request Has Been Received
              </h1>
              <p className="text-left text-sm leading-relaxed text-muted-foreground">
                Thank you for booking your consultation with Dr. Zaib-un-Nisa. Our team will contact you
                on WhatsApp to confirm your appointment.
              </p>
              <div className="space-y-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-auto w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Chat On WhatsApp
                </a>
                <p className="text-center text-xs text-muted-foreground">WhatsApp: {WHATSAPP_NUMBER}</p>
              </div>
              <div className="rounded-xl bg-secondary p-4 text-left text-sm text-foreground/85">
                <p className="mb-1 font-semibold text-primary">What happens next</p>
                <p className="leading-relaxed">
                  Keep your previous reports and investigations ready. Consultations run daily,
                  9:00 AM – 1:00 PM at Al-Qamar Hospital, Railway Road, Shakargarh (Near Bank of Punjab), or online.
                </p>
              </div>
              <Link to="/" className="inline-block text-xs font-medium text-primary underline">
                Back to home
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
