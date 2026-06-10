import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRP Services | Complete Property Care in Worcestershire",
  description:
    "PRP Services — complete property care in Worcestershire. Fencing, roofing, patios, driveways, landscaping & tree surgery. Over 10 years experience. Call 07593 728 481.",
  verification: {
    google: "3vyg7FYEbMKcnJLcAAe1UF-pIraSgKj2iUJaJ-tNh58",
  },
  keywords: [
    "property care Worcestershire",
    "fencing Worcester",
    "roofing repairs Worcester",
    "patios driveways Worcestershire",
    "landscaping tree surgery Worcester",
    "PRP Services",
    "property maintenance Worcestershire",
  ],
  openGraph: {
    title: "PRP Services | Complete Property Care in Worcestershire",
    description:
      "Expert property maintenance services across Worcestershire. Fencing, roofing, patios, landscaping and more.",
    url: "https://prp-services.uk",
    siteName: "PRP Services",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DJ8BJHT7E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DJ8BJHT7E');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
