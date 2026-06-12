import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  PoundSterling,
  Clock,
  MapPin,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Quote,
} from "lucide-react";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
  Stagger,
  StaggerItem,
} from "@/components/animations/Motion";

export const metadata: Metadata = {
  title: "About Us | PRP Services Worcestershire",
  description:
    "Get to know PRP Services — a local, family-run property maintenance team in Worcester with over 10 years' experience in fencing, roofing, driveways, patios and landscaping.",
  alternates: { canonical: "https://prp-services.uk/about" },
};

const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "5★", label: "Average Customer Rating" },
  { value: "100%", label: "Local to Worcestershire" },
  { value: "Free", label: "No-Obligation Quotes" },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    text: "Every job is completed to a high standard with skilled hands and the right materials — built to last.",
  },
  {
    icon: PoundSterling,
    title: "Honest, Upfront Pricing",
    text: "Clear, fair quotes with no hidden costs. You'll always know exactly what you're paying for.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    text: "We turn up when we say we will and finish on time, keeping you informed every step of the way.",
  },
  {
    icon: MapPin,
    title: "Proudly Local",
    text: "Based in Worcester and working right across Worcestershire — your neighbourhood specialists.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    text: "From the first cut to the final clean-up, we take pride in getting the little things right.",
  },
  {
    icon: PhoneCall,
    title: "Friendly Service",
    text: "No job is too big or small. We welcome every enquiry with the same care and respect.",
  },
];

const STEPS = [
  {
    no: "01",
    title: "Get in touch",
    text: "Call, message or email us with a few details about the work you need doing.",
  },
  {
    no: "02",
    title: "Free quote & advice",
    text: "We visit, assess the job and give you honest, no-obligation pricing and guidance.",
  },
  {
    no: "03",
    title: "The job done right",
    text: "Our team completes the work to a high standard — and we always tidy up after ourselves.",
  },
];

const PROMISES = [
  "Domestic & commercial work",
  "Fully insured team",
  "Free, no-obligation quotes",
  "Tidy, respectful workmanship",
  "Honest, friendly advice",
  "Local & trusted in Worcester",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero banner ──────────────────────────────────────── */}
      <section
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,24,37,0.66) 0%, rgba(30,53,96,0.6) 100%), url('/bg-image-2.jpg') center/cover no-repeat",
          backgroundColor: "#0d1825",
        }}>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="section-label">WHO WE ARE</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About PRP Services</h1>
          <p className="text-sm md:text-base mb-6 leading-relaxed" style={{ color: "#b0c4d8" }}>
            Your trusted local team for complete property care across Worcestershire — delivering
            quality workmanship with a personal touch.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* ── Intro / Story ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image collage */}
          <FadeInLeft>
            <div className="relative">
              <div className="relative h-[300px] sm:h-[420px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/home-hero-1.jpg"
                  alt="PRP Services completed patio project in Worcestershire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-2 sm:right-6 rounded-lg px-6 py-4 shadow-2xl text-center"
                style={{ background: "linear-gradient(135deg, #1e3560 0%, #2d5486 100%)" }}>
                <p className="text-3xl font-extrabold text-white leading-none">10+</p>
                <p className="text-[11px] font-semibold tracking-wide mt-1" style={{ color: "#f4b942" }}>
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* Copy */}
          <FadeInRight>
            <span className="section-label">OUR STORY</span>
            <h2 className="section-heading mb-5">
              Complete property care, done properly
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p>
                At <strong style={{ color: "#1e3560" }}>PRP Services</strong>, we&apos;re proud to
                deliver high-quality property maintenance with a personal touch. Based in Worcester
                and working across Worcestershire, we&apos;ve built a strong reputation for reliable
                service, excellent workmanship, and honest pricing.
              </p>
              <p>
                Backed by over <strong style={{ color: "#1e3560" }}>10 years of hands-on
                experience</strong>, our skilled team handles everything from fencing and roofing to
                driveways, patios and landscaping — for both domestic and commercial properties.
              </p>
              <p>
                Whether you&apos;re transforming your garden, upgrading your driveway, or in need of
                urgent roofing repairs, we work with care, attention to detail, and a commitment to
                getting the job done right — the first time, every time.
              </p>
            </div>

            <Stagger className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-7">
              {PROMISES.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#2d5486" }} />
                    <span className="text-sm font-medium" style={{ color: "#1e3560" }}>{p}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-navy">Get a Free Quote</Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-[13px] font-bold uppercase tracking-wide border-2 transition-all hover:bg-[#1e3560] hover:text-white hover:-translate-y-0.5"
                style={{ borderColor: "#1e3560", color: "#1e3560" }}>
                Our Services
              </Link>
            </div>
          </FadeInRight>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="max-w-6xl mx-auto">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "#f4b942" }}>
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm font-medium" style={{ color: "#b0c4d8" }}>
                    {s.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeInUp>
              <span className="section-label">WHY CHOOSE PRP</span>
              <h2 className="section-heading">A team you can rely on</h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                We treat every property like our own. Here&apos;s what sets us apart and keeps our
                customers coming back.
              </p>
            </FadeInUp>
          </div>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <div className="service-card h-full border border-gray-100 rounded-lg p-7 shadow-sm">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "linear-gradient(135deg, #1e3560 0%, #2d5486 100%)" }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "#1e3560" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── How we work ──────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeInUp>
              <span className="section-label">SIMPLE & STRESS-FREE</span>
              <h2 className="section-heading">How we work</h2>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                Getting your project started couldn&apos;t be easier — just three simple steps.
              </p>
            </FadeInUp>
          </div>

          <Stagger className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {STEPS.map((step) => (
              <StaggerItem key={step.no}>
                <div className="relative bg-white rounded-lg p-8 shadow-sm h-full border border-gray-100">
                  <span
                    className="absolute -top-5 left-8 text-5xl font-extrabold opacity-15"
                    style={{ color: "#1e3560" }}>
                    {step.no}
                  </span>
                  <div className="relative pt-4">
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3560" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Quote / mission strip ────────────────────────────── */}
      <section
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(8,18,38,0.72), rgba(8,18,38,0.72)), url('/bg-image-2.jpg') center/cover no-repeat",
          backgroundColor: "#0d1e38",
          backgroundAttachment: "fixed",
        }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScaleIn>
            <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: "#f4b942" }} />
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-5">
              &ldquo;We work with care, attention to detail, and a commitment to getting the job
              done right — the first time, every time.&rdquo;
            </p>
            <p className="text-sm font-bold tracking-wide" style={{ color: "#7ab2d8" }}>
              — THE PRP SERVICES TEAM
            </p>
          </ScaleIn>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <span className="section-label">GET IN TOUCH TODAY</span>
            <h2 className="section-heading mb-4">Ready to start your project?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Please don&apos;t hesitate to get in touch for any property maintenance work. No job is
              too big or small and we welcome all enquiries.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-navy">Get a Free Quote</Link>
              <a
                href="tel:+447360270797"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-[13px] font-bold uppercase tracking-wide border-2 transition-all hover:bg-[#1e3560] hover:text-white hover:-translate-y-0.5"
                style={{ borderColor: "#1e3560", color: "#1e3560" }}>
                <PhoneCall className="w-4 h-4" /> +44 7360 270797
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
