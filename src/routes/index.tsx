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
import heroConsultation from "@/assets/hero-consultation.png.asset.json";
import pcosSymptoms from "@/assets/pcos-symptoms.png.asset.json";
import pcosGuidance from "@/assets/pcos-guidance.png.asset.json";
import threeStepProcess from "@/assets/three-step-process.png.asset.json";
import careProgram from "@/assets/care-program.png.asset.json";
import patientTestimonials from "@/assets/patient-testimonials.png.asset.json";
import { trackCtaClick } from "@/lib/lead-store";
import { BadgeCheck, CalendarClock, Clock, Video } from "lucide-react";

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
          telephone: "+923275991415",
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
        onClick={() => trackCtaClick(label)}
      >
        <Link to="/checkout">{label}</Link>
      </Button>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main>
        <section className="bg-hero-soft">
          <div className="mx-auto max-w-3xl px-5 py-12 text-center sm:py-16">
            <div className="flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-card">
                <BadgeCheck className="size-3.5 text-gold-foreground" aria-hidden="true" />
                PCOS Care Consultation
              </span>
              <h1 className="text-balance text-[1.75rem] font-semibold leading-tight text-primary sm:text-4xl">
                PCOS Ko Samjhein, Manage Karein Aur Apni Health Ke Liye Sahi Treatment Plan Shuru Karein
              </h1>
              <p className="mx-auto max-w-xl text-pretty text-left text-[0.95rem] leading-relaxed text-foreground/80">
                A personalized PCOS consultation with <strong className="font-semibold text-primary">Dr. Zaib-un-Nisa (MBBS, FCPS)</strong>, Consultant Gynaecologist &amp; Obstetrician — understand your symptoms and get a personalized treatment approach.
              </p>
              <BookButton />
              <div className="relative w-full">
                <img src={heroConsultation.url} alt="Dr. Zaib-un-Nisa consulting a patient about PCOS at Al-Qamar Hospital" width={1664} height={936} className="w-full rounded-3xl shadow-soft" />
              </div>
              <div className="w-full rounded-2xl border border-gold-100 bg-background px-5 py-4 text-left shadow-card">
                <p className="text-base font-semibold text-primary">Dr. Zaib-un-Nisa</p>
                <p className="text-sm text-foreground/80">Consultant Gynaecologist &amp; Obstetrician</p>
              </div>
              <ul className="mx-auto grid w-full max-w-md gap-2.5 sm:grid-cols-2">
                {badges.map((b) => <TickItem key={b}>{b}</TickItem>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle eyebrow="Symptoms" title="Are You Experiencing These PCOS Symptoms?" subtitle="Many women experience these symptoms without understanding the right medical guidance." />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img src={pcosSymptoms.url} alt="Common PCOS symptoms: weight gain, excess hair growth, irregular periods and pregnancy planning concerns" width={1536} height={1024} loading="lazy" className="w-full rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle eyebrow="Why Many Women Struggle" title="Random Advice Doesn't Replace Proper Medical Guidance" subtitle="Every woman's PCOS journey is different. Proper evaluation helps create a personalized care approach based on symptoms, health goals and medical history." />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3">
              <img src={pcosGuidance.url} alt="Comparison between confusion from random online advice and clarity from personalized medical care" width={1536} height={1024} loading="lazy" className="w-full rounded-2xl" />
            </div>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-2.5 sm:grid-cols-3">
              {["Proper Assessment", "Personalized Care Plan", "Evidence-Based Guidance"].map((i) => <TickItem key={i}>{i}</TickItem>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="The Offer" title="PCOS Consultation — Only PKR 700" />
          <Card className="overflow-hidden border-border shadow-soft">
            <div className="bg-gold-gradient px-6 py-5 text-center">
              <p className="font-display text-3xl font-semibold text-gold-foreground">PKR 700</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-foreground/80">One-to-one consultation</p>
            </div>
            <CardContent className="space-y-6 p-6 sm:p-8">
              <div>
                <p className="mb-3 text-left text-sm font-semibold text-primary">Your consultation includes:</p>
                <ul className="grid gap-2.5 sm:grid-cols-2">{offerIncludes.map((i) => <TickItem key={i}>{i}</TickItem>)}</ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-secondary p-4 text-center"><Clock className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" /><p className="text-xs text-muted-foreground">Duration</p><p className="text-sm font-semibold text-primary">15 Minutes</p></div>
                <div className="rounded-xl bg-secondary p-4 text-center"><CalendarClock className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" /><p className="text-xs text-muted-foreground">Available</p><p className="text-sm font-semibold text-primary">Daily</p></div>
                <div className="rounded-xl bg-secondary p-4 text-center"><Video className="mx-auto mb-1 size-4 text-primary" aria-hidden="true" /><p className="text-xs text-muted-foreground">Timings</p><p className="text-sm font-semibold text-primary">9:00 AM – 1:00 PM</p></div>
              </div>
              <BookButton />
            </CardContent>
          </Card>
        </section>

        <section className="bg-secondary/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-5">
            <SectionTitle eyebrow="Process" title="How Your PCOS Consultation Works" subtitle="A simple process to get professional guidance for your PCOS concerns." />
            <div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3"><img src={threeStepProcess.url} alt="Simple 3-step process: book your consultation, consult with Dr. Zaib-un-Nisa, receive your PCOS care plan" width={1536} height={1024} loading="lazy" className="w-full rounded-2xl" /></div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
          <SectionTitle eyebrow="Your Doctor" title="Meet Your Specialist" />
          <Card className="border-border shadow-card"><CardContent className="space-y-5 p-6 sm:p-8"><div className="text-left"><p className="font-display text-xl font-semibold text-primary">Dr. Zaib-un-Nisa</p><p className="text-sm text-muted-foreground">Consultant Gynaecologist &amp; Obstetrician</p></div><ul className="grid gap-2.5 sm:grid-cols-2">{["M.B.B.S., F.C.P.S.","Former Consultant, Evercare Hospital, Lahore","Former Registrar, Fatima Memorial Hospital (FMH), Shadman, Lahore","Al-Qamar Hospital, Railway Road, Shakargarh (Near Bank of Punjab)"].map((i) => <TickItem key={i}>{i}</TickItem>)}</ul><p className="text-left text-sm font-medium text-primary">Services &amp; areas of care:</p><ul className="grid gap-2.5 sm:grid-cols-2">{["Antenatal Care & Pregnancy Monitoring","Normal Delivery","Caesarean Section (C-Section)","Infertility Management","Hormonal Imbalance & Women's Health Issues","High-Risk Pregnancy Care","Ultrasound & Medical Consultation","Family Planning"].map((i) => <TickItem key={i}>{i}</TickItem>)}</ul></CardContent></Card>
        </section>

        <section className="bg-secondary/50 py-12 sm:py-16"><div className="mx-auto max-w-3xl px-5"><SectionTitle eyebrow="Suitability" title="Who Is This For?" /><Card className="border-border bg-background shadow-card"><CardContent className="space-y-5 p-6 sm:p-8"><p className="text-left text-sm text-muted-foreground">This consultation is suitable for women:</p><ul className="grid gap-2.5 sm:grid-cols-2">{suitableFor.map((i) => <TickItem key={i}>{i}</TickItem>)}</ul><p className="rounded-xl bg-accent/60 p-4 text-sm font-medium text-accent-foreground">Unmarried women can also benefit from PCOS consultation.</p><BookButton /></CardContent></Card></div></section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16"><SectionTitle eyebrow="What You'll Get" title="A Practical Approach to PCOS Management" /><Card className="border-border shadow-card"><CardContent className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">{benefits.map((i) => <TickItem key={i}>{i}</TickItem>)}</CardContent></Card><div className="mt-8"><BookButton /></div></section>

        <section className="bg-secondary/50 py-12 sm:py-16"><div className="mx-auto max-w-5xl px-5"><SectionTitle eyebrow="Care Program" title="Ongoing Support When You Need It" /><div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3"><img src={careProgram.url} alt="PCOS ongoing care program visual" width={1536} height={1024} loading="lazy" className="w-full rounded-2xl" /></div><ul className="mx-auto mt-8 grid max-w-3xl gap-2.5 sm:grid-cols-2">{programIncludes.map((i) => <TickItem key={i}>{i}</TickItem>)}</ul><div className="mt-8"><BookButton /></div></div></section>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16"><SectionTitle eyebrow="Patient Stories" title="Why Patients Choose Personalised Care" /><div className="overflow-hidden rounded-3xl border border-border bg-background p-2 shadow-soft sm:p-3"><img src={patientTestimonials.url} alt="Patient testimonials about personalised PCOS care" width={1536} height={1024} loading="lazy" className="w-full rounded-2xl" /></div><div className="mt-8"><BookButton /></div></section>

        <section className="bg-secondary/50 py-12 sm:py-16"><div className="mx-auto max-w-3xl px-5"><SectionTitle eyebrow="FAQs" title="Common Questions" /><Accordion type="single" collapsible className="w-full">{faqs.map(({ q, a }) => <AccordionItem value={q} key={q}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent className="text-left text-sm leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-8"><BookButton /></div></div></section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
