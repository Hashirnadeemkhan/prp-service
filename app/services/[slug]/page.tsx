import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SERVICES: Record<
  string,
  {
    name: string;
    description: string;
    gradient: string;
    features: string[];
    callout: string;
  }
> = {
  fencing: {
    name: "Fencing",
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
  "roofing-repairs": {
    name: "Roofing & Repairs",
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
  "patios-driveways": {
    name: "Patios & Driveways",
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
  "landscaping-tree-surgery": {
    name: "Landscaping & Tree Surgery",
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
    title: `${service.name} | PRP Services Worcestershire`,
    description: service.description,
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
          background: `linear-gradient(rgba(8,18,38,0.78), rgba(8,18,38,0.78)), url('${params.slug === "roofing-repairs" ? "/bg-image-2.jpg" : "/home-hero-1.jpg"}') center/cover no-repeat, ${service.gradient}`,
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
    </>
  );
}
