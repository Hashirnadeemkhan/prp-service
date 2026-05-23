import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | PRP Services Worcestershire",
  description:
    "Get in touch with PRP Services for a free property maintenance quote in Worcestershire. Call 07593 728 481 or email info@prp-services.uk.",
};

export default function ContactPage() {
  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1825 0%, #1e3560 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-sm mb-6" style={{ color: "#b0c4d8" }}>
            No job is too big or small — get in touch for a free, no-obligation quote.
          </p>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* Info */}
          <div>
            <span className="section-label">CONTACT INFORMATION</span>
            <h2 className="text-3xl font-bold mb-5" style={{ color: "#1e3560" }}>
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Whether you have a question, want to request a quote, or need some advice on your
              project, our team is here to help. Reach out using any of the methods below.
            </p>

            <div className="space-y-5">
              {[
                {
                  label: "Phone",
                  value: "07593 728 481",
                  href: "tel:07593728481",
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "info@prp-services.uk",
                  href: "mailto:info@prp-services.uk",
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Based in",
                  value: "Worcester, Worcestershire",
                  href: null,
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  label: "Hours",
                  value: "Monday – Saturday, 8am – 6pm",
                  href: null,
                  icon: (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#1e3560" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold hover:opacity-70 transition-opacity"
                        style={{ color: "#1e3560" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold" style={{ color: "#1e3560" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-sm p-8 shadow-sm border border-gray-100"
            style={{ backgroundColor: "#f4f6f9" }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: "#1e3560" }}>
              Send Us a Message
            </h3>
            <form className="space-y-5" action="mailto:info@prp-services.uk" method="post" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="07xxx xxxxxx"
                  className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                  Service Needed
                </label>
                <select
                  className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white text-gray-600"
                  name="service">
                  <option value="">Select a service</option>
                  <option>Fencing</option>
                  <option>Roofing &amp; Repairs</option>
                  <option>Patios &amp; Driveways</option>
                  <option>Landscaping &amp; Tree Surgery</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "#1e3560" }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-sm border border-gray-200 text-sm focus:outline-none focus:border-prp-blue bg-white resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-sm font-bold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1e3560" }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
