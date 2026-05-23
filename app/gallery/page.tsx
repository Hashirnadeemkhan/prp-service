import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | PRP Services Worcestershire",
  description:
    "View our gallery of completed fencing, roofing, patio, driveway, and landscaping projects across Worcestershire.",
};

const GALLERY_ITEMS = [
  { label: "Fence Installation", category: "Fencing", slug: "fencing", bg: "linear-gradient(135deg, #2a4a2a, #4a6e4a)" },
  { label: "Garden Fencing", category: "Fencing", slug: "fencing", bg: "linear-gradient(135deg, #3a5a2a, #5e7d3d)" },
  { label: "Block Paving Driveway", category: "Patios & Driveways", slug: "patios-driveways", bg: "linear-gradient(135deg, #3a2a1a, #5e4a2a)" },
  { label: "Natural Stone Patio", category: "Patios & Driveways", slug: "patios-driveways", bg: "linear-gradient(135deg, #4a3a2a, #6e5a3d)" },
  { label: "Roof Repair", category: "Roofing & Repairs", slug: "roofing-repairs", bg: "linear-gradient(135deg, #2a2a3a, #3d3d5e)" },
  { label: "Tile Replacement", category: "Roofing & Repairs", slug: "roofing-repairs", bg: "linear-gradient(135deg, #3a3a4a, #5e5e6e)" },
  { label: "Garden Makeover", category: "Landscaping", slug: "landscaping-tree-surgery", bg: "linear-gradient(135deg, #1a3a1a, #2d5e2d)" },
  { label: "Tree Surgery", category: "Landscaping", slug: "landscaping-tree-surgery", bg: "linear-gradient(135deg, #2a4a1a, #3d6b2d)" },
  { label: "Closeboard Fencing", category: "Fencing", slug: "fencing", bg: "linear-gradient(135deg, #2a3a2a, #4a5e4a)" },
  { label: "Tarmac Driveway", category: "Patios & Driveways", slug: "patios-driveways", bg: "linear-gradient(135deg, #2a2a2a, #3d3d3d)" },
  { label: "Flat Roof", category: "Roofing & Repairs", slug: "roofing-repairs", bg: "linear-gradient(135deg, #1a2a3a, #2d4a5e)" },
  { label: "Garden Clearance", category: "Landscaping", slug: "landscaping-tree-surgery", bg: "linear-gradient(135deg, #1a3a2a, #2d5e4a)" },
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
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "4/3" }}>
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `url('${i % 2 === 0 ? "/home-hero-1.jpg" : "/bg-image-2.jpg"}') center/cover no-repeat, ${item.bg}`,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-bold">{item.label}</p>
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
          <Link href="/contact" className="btn-navy">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
