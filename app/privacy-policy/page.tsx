import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PRP Services",
  description: "Privacy policy for PRP Services — Complete Property Care in Worcestershire.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1825 0%, #1e3560 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Privacy Policy</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose text-gray-700 text-sm leading-relaxed space-y-6">
          <p>
            This privacy policy sets out how PRP Services uses and protects any information that
            you give us when you use this website.
          </p>
          <h2 className="text-lg font-bold" style={{ color: "#1e3560" }}>
            What we collect
          </h2>
          <p>
            We may collect the following information: name, contact information including email
            address, and demographic information such as postcode.
          </p>
          <h2 className="text-lg font-bold" style={{ color: "#1e3560" }}>
            What we do with the information
          </h2>
          <p>
            We require this information to understand your needs and provide a better service. We
            use this information to respond to enquiries, improve our services, and occasionally
            send promotional communications (with your consent).
          </p>
          <h2 className="text-lg font-bold" style={{ color: "#1e3560" }}>
            Security
          </h2>
          <p>
            We are committed to ensuring that your information is secure. We have put in place
            suitable physical, electronic and managerial procedures to safeguard and secure the
            information we collect online.
          </p>
          <h2 className="text-lg font-bold" style={{ color: "#1e3560" }}>
            Contact
          </h2>
          <p>
            If you have any questions about this privacy policy or how we handle your information,
            please{" "}
            <Link href="/contact" className="underline" style={{ color: "#2d5486" }}>
              contact us.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
