import type { Metadata } from "next";
import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | PRP Services Worcestershire",
  description:
    "Browse our gallery of completed fencing, driveways & patios, and roofing projects across Worcestershire. Quality property maintenance you can see.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,24,37,0.7) 0%, rgba(30,53,96,0.62) 100%), url('/gallery/driveways-patios/001.jpg') center/cover no-repeat",
          backgroundColor: "#0d1825",
        }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">OUR WORK</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Gallery</h1>
          <p className="text-sm mb-6" style={{ color: "#b0c4d8" }}>
            Whether you want some inspiration or would just like to see the quality of our work,
            have a look at some of our recent projects from around Worcestershire.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Interactive gallery (filters + lightbox) */}
      <GalleryClient />

      {/* CTA */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1e3560" }}>
            Like what you see?
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Please don&apos;t hesitate to get in touch for any property maintenance work. No job is
            too big or small &mdash; we welcome all enquiries.
          </p>
          <Link href="/contact" className="btn-navy">Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
