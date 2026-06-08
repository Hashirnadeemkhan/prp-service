import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* Hero background image per service */
const HERO_IMAGE: Record<string, string> = {
  "fencing-services": "/001.jpg",
  "roofing-services": "/005.jpg",
  "driveways-patios-worcester": "/004.jpg",
  "landscaping-services": "/007.jpg",
};

/* Curated real project photos per service. Shown uncropped (natural aspect)
   so the brand watermark on each photo stays fully visible. */
const SERVICE_SHOWCASE: Record<string, string[]> = {
  "fencing-services": [
    "/gallery/fencing/002.jpg",
    "/gallery/fencing/005.jpg",
    "/gallery/fencing/008.jpg",
    "/gallery/fencing/012.jpg",
  ],
  "roofing-services": [
    "/gallery/roofing/001.jpg",
    "/gallery/roofing/003.jpg",
    "/gallery/roofing/005.jpg",
    "/gallery/roofing/007.jpg",
  ],
  "driveways-patios-worcester": [
    "/gallery/driveways-patios/001.jpg",
    "/gallery/driveways-patios/003.jpg",
    "/gallery/driveways-patios/006.jpg",
    "/gallery/driveways-patios/008.jpg",
  ],
  "landscaping-services": ["/007.jpg"],
};

const SERVICES: Record<
  string,
  {
    name: string;
    metaTitle: string;
    metaDescription: string;
    description: string;
    gradient: string;
    features: string[];
    callout: string;
  }
> = {
  "fencing-services": {
    name: "Fencing",
    metaTitle:
      "Fencing Services Worcester | Fence Installation & Repair Experts | PRP Services",
    metaDescription:
      "Looking for fencing services in Worcester? We offer fence installation, repair, and replacement at affordable prices. Trusted local fencing contractors.",
    gradient: "linear-gradient(160deg, #1e3d1e 0%, #2d5e2d 100%)",
    description:
      "We supply and fit all types of fencing for domestic and commercial properties across Worcestershire. Whether you need a new garden fence, security fencing, or agricultural fencing, our experienced team will deliver a high-quality result that lasts.",
    callout:
      "All our fencing is installed to the highest standard using quality materials, ensuring your fence looks great and lasts for years.",
    features: [
      "Closeboard and panel fencing",
      "Post and rail fencing",
      "Ornamental and decorative fencing",
      "Security fencing",
      "Agricultural and farm fencing",
      "Gate installation and repair",
    ],
  },
  "roofing-services": {
    name: "Roofing & Repairs",
    metaTitle:
      "Roofing Services Worcester | Roof Repairs & Installation Experts | PRP Services",
    metaDescription:
      "Expert roofing services in Worcester including roof repairs, cleaning & installation. Fast, reliable & affordable solutions for your home or business.",
    gradient: "linear-gradient(160deg, #1e1e3d 0%, #2d2d5e 100%)",
    description:
      "From emergency roof repairs to complete reroofing projects, PRP Services handles all types of residential and commercial roofing work across Worcestershire. We work quickly to protect your property and minimise disruption.",
    callout:
      "We pride ourselves on honest assessments and quality repairs — we'll only recommend work that's genuinely needed.",
    features: [
      "Tile and slate roof repairs",
      "Complete reroofing",
      "Flat roof installation and repair",
      "Chimney pointing and repairs",
      "Guttering replacement",
      "Emergency roof repairs",
    ],
  },
  "driveways-patios-worcester": {
    name: "Patios & Driveways",
    metaTitle:
      "Driveways & Patio Installation Worcester | Block Paving Experts | PRP Services",
    metaDescription:
      "High-quality driveway and patio installation in Worcester. Block paving, resin driveways & custom patios at competitive prices.",
    gradient: "linear-gradient(160deg, #3d2a1a 0%, #5e4a2d 100%)",
    description:
      "Transform your outdoor space with a beautiful new patio or driveway. We work with a wide range of materials including block paving, natural stone, concrete, and tarmac to create stunning, durable results that add real value to your property.",
    callout:
      "Every driveway and patio is installed with proper foundations and drainage to ensure it stands the test of time.",
    features: [
      "Block paving driveways and patios",
      "Natural stone installation",
      "Concrete driveways",
      "Tarmac surfacing",
      "Edging and border work",
      "Drainage solutions",
    ],
  },
  "landscaping-services": {
    name: "Landscaping & Tree Surgery",
    metaTitle:
      "Landscaping Services Worcester | Garden Design & Makeovers | PRP Services",
    metaDescription:
      "Transform your outdoor space with professional landscaping services in Worcester. Garden design, maintenance & complete makeovers available.",
    gradient: "linear-gradient(160deg, #1a3d1a 0%, #2a5e2a 100%)",
    description:
      "From complete garden makeovers to professional tree surgery, our team has the skills and equipment to transform any outdoor space. We take pride in delivering beautiful, practical gardens that our customers love.",
    callout:
      "All tree surgery work is carried out by trained professionals with the proper equipment and insurance.",
    features: [
      "Garden design and landscaping",
      "Tree felling and pruning",
      "Stump removal and grinding",
      "Lawn turfing and seeding",
      "Planting and borders",
      "Garden clearance",
    ],
  },
};

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES[params.slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES[params.slug];
  if (!service) notFound();

  const otherServices = Object.entries(SERVICES).filter(([slug]) => slug !== params.slug);

  return (
    <>
      {/* Banner */}
      <section
        className="py-24 px-4 text-center"
        style={{
          background: `linear-gradient(rgba(8,18,38,0.45) 0%, rgba(8,18,38,0.68) 100%), url('${
            HERO_IMAGE[params.slug] ?? "/home-hero-1.jpg"
          }') center/cover no-repeat, ${service.gradient}`,
        }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{service.name}</h1>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>›</span>
            <span className="text-white">{service.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e3560" }}>
              {service.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

            <div
              className="rounded-sm p-5 mb-6"
              style={{ backgroundColor: "#f0f5fb", borderLeft: "4px solid #2d5486" }}>
              <p className="text-sm text-gray-700 leading-relaxed">{service.callout}</p>
            </div>

            <h3 className="font-bold mb-4 text-base" style={{ color: "#1e3560" }}>
              What&apos;s included:
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "#2d5486" }}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn-navy">
              Get a Free Quote
            </Link>
          </div>

          {/* Sidebar */}
          <div>
            <div className="rounded-sm p-6 mb-5" style={{ backgroundColor: "#1e3560" }}>
              <h3 className="text-white font-bold mb-3">Get in touch</h3>
              <p className="text-sm mb-5" style={{ color: "#b0c4d8" }}>
                Ready to get started? Call us or send a message and we&apos;ll get back to you
                quickly.
              </p>
              <a
                href="tel:07593728481"
                className="block text-center text-white font-bold py-3 rounded-sm mb-3 hover:opacity-90 transition-opacity text-sm tracking-wide"
                style={{ backgroundColor: "#2d5486" }}>
                07593 728 481
              </a>
              <Link
                href="/contact"
                className="block text-center text-white font-bold py-3 rounded-sm hover:opacity-90 transition-opacity text-sm tracking-wide"
                style={{ backgroundColor: "#1a3a6e" }}>
                Send a Message
              </Link>
            </div>

            <div className="border border-gray-100 rounded-sm p-5">
              <h4 className="font-bold mb-3 text-sm" style={{ color: "#1e3560" }}>
                Other Services
              </h4>
              <ul className="space-y-2">
                {otherServices.map(([slug, s]) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="text-sm font-medium hover:underline"
                      style={{ color: "#2d5486" }}>
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase — curated photos on one side, content on the other */}
      {SERVICE_SHOWCASE[params.slug] && (
        <section className="py-20 px-4 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side — natural aspect ratios, never cropped */}
            <div className="relative">
              {/* soft layered backdrop for depth */}
              <div
                className="absolute -inset-3 sm:-inset-5 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, rgba(30,53,96,0.07), rgba(45,84,134,0.04))" }}
              />
              {SERVICE_SHOWCASE[params.slug].length === 1 ? (
                /* Single feature image */
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SERVICE_SHOWCASE[params.slug][0]}
                    alt={`${service.name} project in Worcestershire`}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              ) : (
                /* Masonry collage — keeps each photo's full, uncropped shape */
                <div className="columns-2 gap-3 sm:gap-4">
                  {SERVICE_SHOWCASE[params.slug].map((src) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={src}
                      src={src}
                      alt={`${service.name} project in Worcestershire`}
                      loading="lazy"
                      className="w-full h-auto block rounded-xl shadow-md mb-3 sm:mb-4 break-inside-avoid"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <span className="section-label">OUR RECENT WORK</span>
              <h2 className="section-heading mb-5">Craftsmanship that speaks for itself</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Take a look at a few of our recent {service.name.toLowerCase()} projects from across
                Worcestershire. Every job is completed with the same care, quality materials, and
                attention to detail &mdash; whatever the size.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-7">
                We&apos;d love to do the same for your property. Browse the full gallery or get in
                touch for a free, no-obligation quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-navy">View Full Gallery</Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-sm text-[13px] font-bold uppercase tracking-wide border-2 transition-all hover:bg-[#1e3560] hover:text-white hover:-translate-y-0.5"
                  style={{ borderColor: "#1e3560", color: "#1e3560" }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
