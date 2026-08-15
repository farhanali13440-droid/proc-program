import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SectionTitle,
  SiteFooter,
  TickItem,
  TopBar,
  WhatsAppFloat,
} from "@/components/site";
import { trackInitiateCheckout } from "@/lib/tracking";
import heroConsultation from "@/assets/hero-consultation.png.asset.json";
import pcosSymptoms from "@/assets/pcos-symptoms.png.asset.json";
import pcosGuidance from "@/assets/pcos-guidance.png.asset.json";
import threeStepProcess from "@/assets/three-step-process.png.asset.json";
import careProgram from "@/assets/care-program.png.asset.json";
import patientTestimonials from "@/assets/patient-testimonials.png.asset.json";
import {
  BadgeCheck,
  CalendarClock,
  Clock,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PCOS Consultation PKR 700 | Dr. Zaib-un-Nisa, Consultant Gynaecologist" },
      {
        name: "description",
        content:
          "Book a PKR 700 PCOS consultation with Dr. Zaib-un-Nisa (MBBS, FCPS), Consultant Gynaecologist & Obstetrician at Al-Qamar Hospital, Shakargarh. Personalised assessment and care plan.",
      },
      { property: "og:title", content: "PCOS Consultation PKR 700 | Dr. Zaib-un-Nisa, Consultant Gynaecologist" },
      {
        property: "og:description",
        content:
          "Book a PKR 700 PCOS consultation with Dr. Zaib-un-Nisa (MBBS, FCPS), Consultant Gynaecologist & Obstetrician at Al-Qamar Hospital, Shakargarh. Personalised assessment and care plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Zaib-un-Nisa",
          medicalSpecialty: "Obstetrics and Gynecology",
          description:
            "Consultant Gynaecologist & Obstetrician offering PCOS consultation and personalised care planning.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al-Qamar Hospital, Railway Road, Near Bank of Punjab",
            addressLocality: "Shakargarh",
            addressCountry: "PK",
          },
          telephone: "+923007181071",
        }),
      },
    ],
  }),
});

const badges = [
  "MBBS, FCPS Specialist",
  "Al-Qamar Hospital",
  "Online Consultation Available",
  "Private & Confidential Consultation",
];

const offerIncludes = [
  "PCOS symptom assessment",
  "Review of previous reports and investigations",
  "Medical guidance and treatment discussion",
  "Dietary counselling",
  "Weight management guidance",
  "Personalized PCOS care recommendations",
  "Next-step treatment roadmap",
];

const suitableFor = [
  "Age 18–40 years",
  "Experiencing irregular periods",
  "Facing weight gain related concerns",
  "Having excessive hair growth",
  "Planning pregnancy",
  "Wanting better understanding of PCOS",
];


const programIncludes = [
  "Doctor consultations",
  "Scheduled follow-up sessions",
  "Personalized dietary guidance",
  "Lifestyle and exercise advice",
  "Medication review when required",
  "Laboratory test recommendations",
  "WhatsApp support for routine queries",
  "Progress monitoring",
  "Menstrual and symptom tracking",
];

const benefits = [
  "Improve menstrual cycle regulation",
  "Manage hormonal symptoms",
  "Support healthy weight management",
  "Improve acne and excessive hair growth where possible",
  "Support fertility planning when appropriate",
  "Improve overall reproductive and metabolic health",
];

const faqs = [
  {
    q: "Can PCOS be completely cured?",
    a: "PCOS is a manageable medical condition. With proper diagnosis, treatment and lifestyle changes, many women can improve their symptoms and overall health.",
  },
  {
    q: "Will PCOS affect my chances of becoming pregnant?",
    a: "PCOS may affect fertility in some women, but proper evaluation and management can help support reproductive goals.",
  },
  {
    q: "Do I need lifelong medication for PCOS?",
    a: "Treatment depends on your symptoms and medical condition. Your doctor will guide you based on your individual needs.",
  },
  {
    q: "Can weight loss improve PCOS symptoms?",
    a: "Healthy lifestyle changes and weight management may help improve symptoms in many women.",
  },
  {
    q: "Which tests are necessary to diagnose PCOS?",
    a: "Your doctor will recommend investigations based on your symptoms and medical history.",
  },
];

function BookButton({ label = "Book PCOS Consultation — PKR 700" }: { label?: string }) {
  return (
    <div className="flex w-full justify-center">
      <Button
        asChild
        size="lg"
        className="h-auto w-full max-w-md rounded-full px-6 py-4 text-center text-base font-semibold leading-snug shadow-soft"
      >
        <Link to="/checkout" onClick={() => trackInitiateCheckout()}>
          {label}
        </Link>
      </Button>
    </div>
  );
}


function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main>
        {/* HERO */}
        <section className="bg-hero-soft">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-16">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-card">
                <BadgeCheck className="size-3.5 text-gold-foreground" aria-hidden="true" />
                PCOS Care Consultation
              </span>
              <h1 className="text-balance text-[1.75rem] font-semibold leading-tight text-primary sm:text-4xl">
                PCOS Ko Samjhein, Manage Karein Aur Apni Health Ke Liye Sahi Treatment Plan Shuru
                Karein
              </h1>
              <p className="mx-auto max-w-xl text-pretty text-left text-[0.95rem] leading-relaxed text-foreground/80">
                A personalized PCOS consultation with{" "}
                <strong className="font-semibold text-primary">Dr. Zaib-un-Nisa (MBBS, FCPS)</strong>,
                Consultant Gynaecologist &amp; Obstetrician — understand your symptoms and get a
                personalized treatment approach.
              </p>
              <BookButton />
              <div className="relative w-full">
                <img
                  src={heroConsultation.url}
                  alt="Dr. Zaib-un-Nisa consulting a patient about PCOS at Al-Qamar Hospital"
                  width={1664}
                  height={936}
                  className="w-full rounded-3xl shadow-soft"
                />
                <div className="relative mx-4 -mt-8 rounded-2xl border border-border bg-background/95 p-4 text-center shadow-card backdrop-blur">
                  <p className="font-display text-lg font-semibold text-primary">Dr. Zaib-un-Nisa</p>
                  <p className="text-xs text-muted-foreground">Consultant Gynaecologist &amp; Obstetrician</p>
                  <div className="my-2 h-px w-full bg-border" />
                  <p className="font-display text-sm font-semibold text-primary">Al-Qamar Hospital</p>
                  <p className="text-xs text-muted-foreground">Railway Road, Shakargarh &middot; Near Bank of Punjab</p>
                  <p className="text-xs text-muted-foreground">Daily, 9:00 AM – 1:00 PM</p>
                </div>
              </div>
              <ul className="mx-auto grid w-full max-w-md gap-2.5 sm:grid-cols-2">
                {badges.map((b) => (
                  <TickItem key={b}>{b}</TickItem>
                ))}
              </ul>

            </div>
          </div>
        </section>


        {/* SYMPTOMS VISUAL */}
        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle
              eyebrow="Symptoms"
              title="Are You Experiencing These PCOS Symptoms?"
              subtitle="Many women experience these symptoms without understanding the right medical guidance."
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img
                src={pcosSymptoms.url}
                alt="Common PCOS symptoms: weight gain, excess hair growth, irregular periods and pregnancy planning concerns"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* GUIDANCE */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle
              eyebrow="Why Many Women Struggle"
              title="Random Advice Doesn't Replace Proper Medical Guidance"
              subtitle="Every woman's PCOS journey is different. Proper evaluation helps create a personalized care approach based on symptoms, health goals and medical history."
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img
                src={pcosGuidance.url}
                alt="Comparison between confusion from random online advice and clarity from personalized medical care"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-2.5 sm:grid-cols-3">
              {["Proper Assessment", "Personalized Care Plan", "Evidence-Based Guidance"].map((i) => (
                <TickItem key={i}>{i}</TickItem>
              ))}
            </ul>
          </div>
        </section>

        {/* OFFER */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="The Offer" title="PCOS Consultation — Only PKR 700" />
          <Card className="overflow-hidden border-border shadow-soft">
            <div className="bg-gold-gradient px-6 py-5 text-center">
              <p className="font-display text-3xl font-semibold text-gold-foreground">PKR 700</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-foreground/80">
                One-to-one consultation
              </p>
            </div>
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="mb-3 text-left text-sm font-semibold text-primary">Your consultation includes:</p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {offerIncludes.map((i) => (
                    <TickItem key={i}>{i}</TickItem>
                  ))}
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-secondary p-4 text-center">
                  <Clock className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-primary">15 Minutes</p>
                </div>
                <div className="rounded-xl bg-secondary p-4 text-center">
                  <CalendarClock className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground">Available</p>
                  <p className="text-sm font-semibold text-primary">Daily</p>
                </div>
                <div className="rounded-xl bg-secondary p-4 text-center">
                  <Video className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground">Timings</p>
                  <p className="text-sm font-semibold text-primary">9:00 AM – 1:00 PM</p>
                </div>
              </div>
              <BookButton />
            </CardContent>
          </Card>
        </section>

        {/* 3-STEP PROCESS VISUAL */}
        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle
              eyebrow="Process"
              title="How Your PCOS Consultation Works"
              subtitle="A simple process to get professional guidance for your PCOS concerns."
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img
                src={threeStepProcess.url}
                alt="Simple 3-step process: book your consultation, consult with Dr. Zaib-un-Nisa, receive your PCOS care plan"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* DOCTOR */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="Your Doctor" title="Meet Your Specialist" />
          <Card className="border-border shadow-card">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <div className="text-left">
                <p className="font-display text-xl font-semibold text-primary">
                  Dr. Zaib-un-Nisa
                </p>
                <p className="text-sm text-muted-foreground">Consultant Gynaecologist &amp; Obstetrician</p>
              </div>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {[
                  "M.B.B.S., F.C.P.S.",
                  "Former Consultant, Evercare Hospital, Lahore",
                  "Former Registrar, Fatima Memorial Hospital (FMH), Shadman, Lahore",
                  "Al-Qamar Hospital, Railway Road, Shakargarh (Near Bank of Punjab)",
                ].map((i) => (
                  <TickItem key={i}>{i}</TickItem>
                ))}
              </ul>

              <p className="text-left text-sm font-medium text-primary">Services &amp; areas of care:</p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {[
                  "Antenatal Care & Pregnancy Monitoring",
                  "Normal Delivery",
                  "Caesarean Section (C-Section)",
                  "Infertility Management",
                  "Hormonal Imbalance & Women's Health Issues",
                  "High-Risk Pregnancy Care",
                  "Ultrasound & Medical Consultation",
                  "Family Planning",
                ].map((i) => (
                  <TickItem key={i}>{i}</TickItem>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>



        {/* WHO IS THIS FOR */}
        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle eyebrow="Suitability" title="Who Is This For?" />
            <Card className="border-border bg-background shadow-card">
              <CardContent className="space-y-5 p-6 sm:p-8">
                <p className="text-left text-sm text-muted-foreground">
                  This consultation is suitable for women:
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {suitableFor.map((i) => (
                    <TickItem key={i}>{i}</TickItem>
                  ))}
                </ul>
                <p className="rounded-xl bg-accent/60 p-4 text-sm font-medium text-accent-foreground">
                  Unmarried women can also benefit from PCOS consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* PROGRAM */}
        <section className="bg-primary py-12 sm:py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-5">
            <div className="mb-8 space-y-3 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                Continued Care
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Need More Support Managing PCOS?</h2>
              <p className="text-left text-sm text-primary-foreground/80">
                After consultation, suitable patients may be offered the 3-Month PCOS Care Program.
              </p>
            </div>
            <Card className="border-none bg-background text-foreground shadow-soft">
              <CardContent className="space-y-5 p-6 sm:p-8">
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold text-primary">
                    3-Month PCOS Care Program
                  </h3>
                  <p className="mt-1 font-display text-3xl font-semibold text-primary">PKR 14,500</p>
                  <p className="mt-2 rounded-xl bg-accent/60 p-3 text-left text-xs font-medium text-accent-foreground">
                    Your PKR 700 consultation fee will be adjusted if you enroll within 7 days.
                  </p>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {programIncludes.map((i) => (
                    <TickItem key={i}>{i}</TickItem>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="Expected Outcomes" title="The Program Focuses On Helping Women:" />
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {benefits.map((i) => (
              <TickItem key={i}>{i}</TickItem>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-border bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
            Individual results may vary. PCOS management depends on each patient&apos;s condition and
            response to treatment.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-5">
            <SectionTitle eyebrow="Why Dr. Zaib-un-Nisa" title="Evidence-Based Personalized Care" />
            <Card className="border-border bg-background shadow-card">
              <CardContent className="space-y-4 p-6 sm:p-8">
                <p className="text-left text-sm leading-relaxed text-foreground/85">
                  Every woman experiences PCOS differently. Dr. Zaib-un-Nisa focuses on creating
                  personalized care plans based on:
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {["Symptoms", "Medical history", "Goals", "Required investigations", "Lifestyle factors"].map(
                    (i) => (
                      <TickItem key={i}>{i}</TickItem>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CARE PROGRAM VISUAL */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle
              eyebrow="Next Step"
              title="Continue Your PCOS Journey With Personalized Support"
              subtitle="Patients who need additional support may be guided through our structured PCOS Care Program."
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img
                src={careProgram.url}
                alt="PCOS Care Program materials: care guide, health tracker, consultation notes, WhatsApp support and lifestyle planner"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="FAQ" title="Common Questions About PCOS" />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-left text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* TESTIMONIALS VISUAL */}
        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle
              eyebrow="Patient Experience"
              title="What Women Say About Their Experience"
              subtitle="Real feedback about consultation experience and personalized guidance."
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img
                src={patientTestimonials.url}
                alt="Patient testimonials about PCOS consultations with Dr. Zaib-un-Nisa"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-hero-soft py-12 sm:py-16">
          <div className="mx-auto max-w-2xl space-y-5 px-5 text-center">
            <h2 className="text-balance text-2xl font-semibold text-primary sm:text-3xl">
              Start Your PCOS Care Journey Today
            </h2>
            <p className="text-left text-sm leading-relaxed text-muted-foreground">
              Reserve your 15-minute consultation with Dr. Zaib-un-Nisa for PKR 700 and get clarity on
              your next steps.
            </p>
            <div className="flex justify-center">
              <BookButton />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
