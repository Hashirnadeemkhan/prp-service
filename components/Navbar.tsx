"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SERVICES = [
  { name: "Fencing", slug: "fencing" },
  { name: "Roofing & Repairs", slug: "roofing-repairs" },
  { name: "Patios & Driveways", slug: "patios-driveways" },
  { name: "Landscaping & Tree Surgery", slug: "landscaping-tree-surgery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="PRP Services — Complete Property Care"
            width={210}
            height={50}
            priority
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            Home
          </Link>
          <Link href="/about" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button
              className="nav-link flex items-center gap-1 text-sm font-semibold cursor-pointer"
              style={{ color: "#1e3560" }}>
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {servicesOpen && (
              <div className="nav-dropdown absolute top-full left-0 bg-white shadow-xl border border-gray-100 min-w-[230px] py-2 z-50">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors"
                    style={{ color: "#1e3560" }}
                    onClick={() => setServicesOpen(false)}>
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm font-bold hover:bg-slate-50 transition-colors"
                    style={{ color: "#5b8ac0" }}
                    onClick={() => setServicesOpen(false)}>
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/blog" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            Blog
          </Link>

          <Link href="/gallery" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            Gallery
          </Link>
          <Link href="/reviews" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            Reviews
          </Link>
          <Link href="/contact" className="nav-link text-sm font-semibold" style={{ color: "#1e3560" }}>
            Contact
          </Link>
        </nav>

        {/* Right contact icons — colored circles */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:07593728481"
            aria-label="Call us"
            className="contact-circle"
            style={{ backgroundColor: "#f4a51e" }}>
            <FaPhoneAlt size={14} color="white" />
          </a>
          <a
            href="https://wa.me/447593728481"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="contact-circle"
            style={{ backgroundColor: "#25D366" }}>
            <FaWhatsapp size={17} color="white" />
          </a>
          <a
            href="mailto:info@prp-services.uk"
            aria-label="Email"
            className="contact-circle"
            style={{ backgroundColor: "#5db464" }}>
            <FaEnvelope size={14} color="white" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1"
          style={{ color: "#1e3560" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          <Link
            href="/"
            className="block py-2.5 text-sm font-semibold border-b border-gray-50"
            style={{ color: "#1e3560" }}
            onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <div className="border-b border-gray-50">
            <button
              className="flex items-center justify-between w-full py-2.5 text-sm font-semibold"
              style={{ color: "#1e3560" }}
              onClick={() => setServicesOpen(!servicesOpen)}>
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div
                className="ml-3 space-y-0.5 border-l-2 pl-4 pb-2"
                style={{ borderColor: "#e2eaf5" }}>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block py-1.5 text-sm text-gray-600 hover:text-prp-navy"
                    onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="block py-2.5 text-sm font-semibold border-b border-gray-50"
            style={{ color: "#1e3560" }}
            onClick={() => setMobileOpen(false)}>
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="block py-2.5 text-sm font-semibold border-b border-gray-50"
            style={{ color: "#1e3560" }}
            onClick={() => setMobileOpen(false)}>
            Reviews
          </Link>
          <Link
            href="/contact"
            className="block py-2.5 text-sm font-semibold border-b border-gray-50"
            style={{ color: "#1e3560" }}
            onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          {/* Mobile contact icons row */}
          <div className="pt-4 flex gap-2 justify-center">
            <a
              href="tel:07593728481"
              aria-label="Call us"
              className="contact-circle"
              style={{ backgroundColor: "#f4a51e" }}>
              <FaPhoneAlt size={14} color="white" />
            </a>
            <a
              href="https://wa.me/447593728481"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="contact-circle"
              style={{ backgroundColor: "#25D366" }}>
              <FaWhatsapp size={17} color="white" />
            </a>
            <a
              href="mailto:info@prp-services.uk"
              aria-label="Email"
              className="contact-circle"
              style={{ backgroundColor: "#5db464" }}>
              <FaEnvelope size={14} color="white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
