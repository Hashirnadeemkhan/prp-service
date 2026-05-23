import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d1825" }}>
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 items-center">

        {/* Logo */}
        <div>
          <Link href="/" className="inline-block bg-white p-2 rounded">
            <Image
              src="/logo.png"
              alt="PRP Services — Complete Property Care"
              width={210}
              height={50}
              className="h-10 md:h-11 w-auto"
            />
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <a
            href="tel:07593728481"
            className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4 shrink-0" style={{ color: "#7a9abd" }} />
            07593 728 481
          </a>
          <a
            href="mailto:info@prp-services.uk"
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: "#7a9abd" }}>
            <Mail className="w-4 h-4 shrink-0" />
            info@prp-services.uk
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3 md:justify-end">
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

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div
          className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3 text-xs"
          style={{ color: "#5a7a9a" }}>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <span>© 2025 2026 PRP Services</span>
          <span>Website by New World Digital Media Ltd.</span>
        </div>
      </div>
    </footer>
  );
}
