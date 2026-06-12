import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #0d1825 0%, #0a131f 100%)",
      }}>
      {/* Top accent line */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #2d5486 30%, #7a9abd 50%, #2d5486 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10 md:gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-block bg-white p-2.5 rounded-lg shadow-lg w-fit hover:scale-[1.02] transition-transform">
            <Image
              src="/logo.png"
              alt="PRP Services — Complete Property Care"
              width={210}
              height={50}
              className="h-10 md:h-11 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#7a9abd" }}>
            Complete property care you can rely on — delivered with care,
            precision and a finish you&apos;ll be proud of.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] mb-1" style={{ color: "#5a7a9a" }}>
            Get in touch
          </h3>
          <a
            href="tel:+447360270797"
            className="group flex items-center gap-3 text-white font-bold text-lg hover:opacity-90 transition-opacity">
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-colors group-hover:bg-[#2d5486]"
              style={{ background: "rgba(255,255,255,0.08)" }}>
              <Phone className="w-4 h-4" style={{ color: "#7a9abd" }} />
            </span>
            +44 7360 270797
          </a>
          <a
            href="mailto:info@prp-services.uk"
            className="group flex items-center gap-3 text-sm hover:text-white transition-colors"
            style={{ color: "#7a9abd" }}>
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-colors group-hover:bg-[#2d5486]"
              style={{ background: "rgba(255,255,255,0.08)" }}>
              <Mail className="w-4 h-4" />
            </span>
            info@prp-services.uk
          </a>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3 md:items-end">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] mb-1" style={{ color: "#5a7a9a" }}>
            Follow us
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Facebook">
              <FaFacebook size={16} />
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Google">
              <FaGoogle size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div
          className="max-w-6xl mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-3 text-xs"
          style={{ color: "#5a7a9a" }}>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>© {new Date().getFullYear()} PRP Services. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Website by
            <a
              href="https://brightreachsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold tracking-wide text-[#9bbce0] hover:text-white transition-colors">
              Bright Reach Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
