import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "PRP Services | Complete Property Care in Worcestershire",
  description:
    "PRP Services — complete property care in Worcestershire. Fencing, roofing, patios, driveways, landscaping & tree surgery. Over 10 years experience. Call 07593 728 481.",
  alternates: { canonical: "https://prp-services.uk" },
};

export default function HomePage() {
  return <HomeContent />;
}
