import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

/* Hero background image per service */
const HERO_IMAGE: Record<string, string> = {
  "fencing-services": "/001.jpg",
  "roofing-services": "/005.jpg",
  "driveways-patios-worcester": "/004.jpg",
  "landscaping-services": "/007.jpg",
};

/* Featured image shown at the top of the content */
const FEATURED_IMAGE: Record<string, string> = {
  "fencing-services": "/gallery/fencing/002.jpg",
  "roofing-services": "/gallery/roofing/001.jpg",
  "driveways-patios-worcester": "/gallery/driveways-patios/001.jpg",
  "landscaping-services": "/007.jpg",
};

/* Real project photos per service (content-appropriate). Landscaping has no set. */
const SERVICE_GALLERY: Record<string, { dir: string; images: number[] }> = {
  "fencing-services": { dir: "fencing", images: [1, 3, 4, 5, 6, 7] },
  "roofing-services": { dir: "roofing", images: [2, 3, 4, 5, 6, 7] },
  "driveways-patios-worcester": { dir: "driveways-patios", images: [2, 3, 4, 6, 7, 8] },
};

const pad = (n: number) => String(n).padStart(3, "0");

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
            <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden shadow-lg mb-7">
              <Image
                src={FEATURED_IMAGE[params.slug] ?? "/home-hero-1.jpg"}
                alt={`${service.name} project by PRP Services in Worcestershire`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                priority
              />
            </div>
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

      {/* Recent projects gallery (content-appropriate photos) */}
      {SERVICE_GALLERY[params.slug] && (
        <section className="py-16 px-4" style={{ backgroundColor: "#f4f6f9" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <span className="section-label">OUR WORK</span>
                <h2 className="section-heading">Recent {service.name} projects</h2>
              </div>
              <Link
                href="/gallery"
                className="text-sm font-bold hover:underline whitespace-nowrap"
                style={{ color: "#2d5486" }}>
                View full gallery →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {SERVICE_GALLERY[params.slug].images.map((n) => {
                const dir = SERVICE_GALLERY[params.slug].dir;
                return (
                  <Link
                    key={n}
                    href="/gallery"
                    className="gallery-card group relative block overflow-hidden rounded-lg shadow-sm"
                    style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={`/gallery/${dir}/thumbs/${pad(n)}.jpg`}
                      alt={`${service.name} project ${n} in Worcestershire`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="gallery-card-image object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      View in gallery →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
