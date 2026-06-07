import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | PRP Services Worcestershire",
  description:
    "View our gallery of completed fencing, roofing, patio, driveway, and landscaping projects across Worcestershire.",
};

const GALLERY_ITEMS = [
  { src: "/001.jpg",         label: "Closeboard Fence",            category: "Fencing",            slug: "fencing-services" },
  { src: "/002.jpg",         label: "Wooden Gate Installation",    category: "Fencing",            slug: "fencing-services" },
  { src: "/003.jpg",         label: "Decorative Trellis Fence",    category: "Fencing",            slug: "fencing-services" },
  { src: "/008.jpg",         label: "Double Wooden Gates",         category: "Fencing",            slug: "fencing-services" },
  { src: "/009.jpg",         label: "Fence Panel Construction",    category: "Fencing",            slug: "fencing-services" },
  { src: "/home-hero-1.jpg", label: "Natural Stone Patio",         category: "Patios & Driveways", slug: "driveways-patios-worcester" },
  { src: "/004.jpg",         label: "Block Paving Driveway",       category: "Patios & Driveways", slug: "driveways-patios-worcester" },
  { src: "/006.jpg",         label: "Tarmac Driveway",             category: "Patios & Driveways", slug: "driveways-patios-worcester" },
  { src: "/005.jpg",         label: "New Slate Roof",              category: "Roofing & Repairs",  slug: "roofing-services" },
  { src: "/bg-image-2.jpg",  label: "Roof Repair & Maintenance",   category: "Roofing & Repairs",  slug: "roofing-services" },
  { src: "/007.jpg",         label: "Garden & Lawn Landscaping",   category: "Landscaping",        slug: "landscaping-services" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1825 0%, #1e3560 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">OUR WORK</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Gallery</h1>
          <p className="text-sm mb-6" style={{ color: "#b0c4d8" }}>
            A selection of our recently completed projects from around Worcestershire.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className="gallery-card group relative" style={{ aspectRatio: "4/3" }}>
                <div
                  className="gallery-card-image absolute inset-0"
                  style={{ backgroundImage: `url('${item.src}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                {/* Caption slides up */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-bold leading-tight">{item.label}</p>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-xs hover:underline"
                    style={{ color: "#b0c4d8" }}>
                    {item.category}
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
            Like what you see?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Get in touch today for a free, no-obligation quote on your project.
          </p>
          <Link href="/contact" className="btn-navy">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
