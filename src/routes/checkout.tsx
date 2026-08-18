import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SiteFooter, TickItem, TopBar, WhatsAppFloat } from "@/components/site";
import { trackInitiateCheckout, trackLead, trackPurchase } from "@/lib/tracking";
import { Building2, ShieldCheck, Smartphone, Upload } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Checkout — PCOS Consultation PKR 700 | Dr. Zaib-un-Nisa" },
      {
        name: "description",
        content:
          "Complete your PKR 700 PCOS consultation booking with Dr. Zaib-un-Nisa. Pay via bank transfer, Easypaisa or JazzCash and upload your payment screenshot.",
      },
      { property: "og:title", content: "Complete Your PCOS Consultation Booking" },
      {
        property: "og:description",
        content: "Secure your PKR 700 consultation with Dr. Zaib-un-Nisa, Consultant Gynaecologist & Obstetrician.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const concerns = [
  "Irregular periods",
  "Weight gain",
  "Excess hair growth",
  "Fertility concerns",
  "Other",
];

const paymentMethods = [
  { id: "bank", icon: Building2, label: "Bank Transfer" },
  { id: "easypaisa", icon: Smartphone, label: "Easypaisa" },
  { id: "jazzcash", icon: Smartphone, label: "JazzCash" },
] as const;

type PaymentMethodId = (typeof paymentMethods)[number]["id"];

const paymentDetails: Record<PaymentMethodId, { title: string; lines: string[] }> = {
  bank: {
    title: "Bank Details",
    lines: [
      "Meezan Bank",
      "Account Number: PK04MEZN0098400115140340",
      "Account Name: Muhammad Sohail Iqbal Qamar",
    ],
  },
  easypaisa: {
    title: "Easypaisa Details",
    lines: [
      "Easypaisa Account",
      "Account Number: 0327 5991415",
      "Account Name: Muhammad Sohail Iqbal Qamar",
    ],
  },
  jazzcash: {
    title: "JazzCash Details",
    lines: [
      "JazzCash Account",
      "Account Number: 0327 5991415",
      "Account Name: Muhammad Sohail Iqbal Qamar",
    ],
  },
};


function CheckoutPage() {
  const navigate = useNavigate();
  const [concern, setConcern] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [method, setMethod] = useState<PaymentMethodId>("bank");
  const activeDetails = paymentDetails[method];
  const initiated = useRef(false);

  // Fires once when the visitor actually reaches the checkout/payment step.
  useEffect(() => {
    if (initiated.current) return;
    initiated.current = true;
    trackInitiateCheckout();
  }, []);


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    trackLead();
    trackPurchase();
    navigate({ to: "/thank-you" });
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="bg-hero-soft">
        <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
          <div className="mb-8 space-y-2 text-center">
            <h1 className="text-balance text-2xl font-semibold text-primary sm:text-3xl">
              Complete Your PCOS Consultation Booking
            </h1>
            <p className="mx-auto max-w-md text-left text-sm leading-relaxed text-muted-foreground">
              Fill in your details and share your payment confirmation. Our team will confirm your slot
              on WhatsApp.
            </p>
          </div>

          <Card className="mb-6 border-border shadow-card">
            <CardContent className="space-y-1 p-6 text-center">
              <p className="text-sm font-semibold text-primary">
                PCOS Consultation With Dr. Zaib-un-Nisa
              </p>
              <p className="text-xs text-muted-foreground">
                MBBS, FCPS &middot; Consultant Gynaecologist &amp; Obstetrician
              </p>
              <p className="font-display text-3xl font-semibold text-primary">PKR 700</p>
              <p className="text-xs text-muted-foreground">15 minutes &middot; Daily, 9:00 AM – 1:00 PM</p>
            </CardContent>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-border shadow-card">
              <CardContent className="space-y-5 p-6 sm:p-7">
                <h2 className="text-center text-base font-semibold text-primary">Your Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" name="fullName" required autoComplete="name" className="h-12 text-base" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" name="age" type="number" min={12} max={80} required className="h-12 text-base" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      inputMode="tel"
                      placeholder="03XX XXXXXXX"
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required autoComplete="address-level2" className="h-12 text-base" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="concern">Main PCOS Concern</Label>
                  <Select value={concern} onValueChange={setConcern} required>
                    <SelectTrigger id="concern" className="h-12 w-full text-base">
                      <SelectValue placeholder="Select your main concern" />
                    </SelectTrigger>
                    <SelectContent>
                      {concerns.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardContent className="space-y-5 p-6 sm:p-7">
                <h2 className="text-center text-base font-semibold text-primary">Payment Method</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {paymentMethods.map(({ id, icon: Icon, label }) => {
                    const active = method === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setMethod(id)}
                        aria-pressed={active}
                        className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                          active
                            ? "border-primary bg-accent text-primary ring-2 ring-ring/40"
                            : "border-border bg-secondary/60 text-primary hover:bg-secondary"
                        }`}
                      >
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-1 rounded-xl bg-accent/50 p-5 text-left text-sm">
                  <p className="font-semibold text-primary">{activeDetails.title}</p>
                  {activeDetails.lines.map((line) => (
                    <p key={line} className="break-all text-foreground/85">
                      {line}
                    </p>
                  ))}
                </div>


                <div className="space-y-1.5">
                  <Label htmlFor="screenshot">Payment Screenshot Upload</Label>
                  <label
                    htmlFor="screenshot"
                    className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-background px-4 py-6 text-center text-sm text-muted-foreground transition-colors hover:bg-secondary/60"
                  >
                    <Upload className="size-5 shrink-0" aria-hidden="true" />
                    <span>{fileName || "Tap to upload your payment screenshot (JPG or PNG)"}</span>
                  </label>
                  <Input
                    id="screenshot"
                    name="screenshot"
                    type="file"
                    accept="image/*"
                    className="sr-only hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="h-auto w-full rounded-full px-6 py-4 text-base font-semibold shadow-soft"
            >
              Confirm My Consultation Booking
            </Button>

            <ul className="mx-auto grid max-w-md gap-2.5 sm:grid-cols-2">
              <TickItem>Your details are used only to confirm your appointment</TickItem>
              <TickItem>Confirmation shared on WhatsApp by our team</TickItem>
            </ul>
            <p className="flex items-start justify-start gap-2 text-left text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 shrink-0" aria-hidden="true" />
              Booking request only &mdash; no medical advice is given before consultation.
            </p>
          </form>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

