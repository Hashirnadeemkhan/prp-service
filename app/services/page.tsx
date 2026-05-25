import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | PRP Services Worcestershire",
  description:
    "Explore all property maintenance services by PRP Services in Worcestershire — fencing, roofing, patios, driveways, landscaping and tree surgery.",
};

const SERVICES = [
  {
    name: "Fencing",
    slug: "fencing",
    image: "/001.jpg",
    gradient: "linear-gradient(160deg, #2a3d1e 0%, #3d5e2d 100%)",
    description:
      "We supply and fit all types of fencing including closeboard, panel, post and rail, and ornamental fencing for domestic and commercial properties across Worcestershire.",
  },
  {
    name: "Roofing & Repairs",
    slug: "roofing-repairs",
    image: "/005.jpg",
    gradient: "linear-gradient(160deg, #1e1e3d 0%, #2d2d5e 100%)",
    description:
      "From emergency roof repairs to complete reroofing, our experienced team handles all types of roofing including tile, slate, and flat roofs.",
  },
  {
    name: "Patios & Driveways",
    slug: "patios-driveways",
    image: "/004.jpg",
    gradient: "linear-gradient(160deg, #3d2a1a 0%, #5e4a2d 100%)",
    description:
      "Transform your outdoor space with a beautiful new patio or driveway. We work with block paving, natural stone, concrete, and tarmac.",
  },
  {
    name: "Landscaping & Tree Surgery",
    slug: "landscaping-tree-surgery",
    image: "/007.jpg",
    gradient: "linear-gradient(160deg, #1a3d1a 0%, #2a5e2a 100%)",
    description:
      "Complete garden makeovers, lawn care, planting, and professional tree surgery including felling, pruning, and stump removal.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1825 0%, #1e3560 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">WHAT WE OFFER</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#b0c4d8" }}>
            Full-range exterior property maintenance for domestic and commercial properties across
            Worcestershire.
          </p>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="service-card border border-gray-100 overflow-hidden">
                <div
                  className="h-56 flex items-end p-5"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.68) 100%), url('${service.image}') center/cover no-repeat, ${service.gradient}`,
                  }}>
                  <h2 className="text-white font-bold text-xl">{service.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`} className="btn-navy">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1e3560" }}>
            Not sure what you need?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Give us a call or send us a message — we&apos;ll help you find the best solution for
            your property.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/contact" className="btn-navy">
              Get a Quote
            </Link>
            <a
              href="tel:07593728481"
              className="btn-navy"
              style={{ backgroundColor: "transparent", color: "#1e3560", borderColor: "#1e3560" }}>
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
