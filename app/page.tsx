import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Fencing, Roofing & Landscaping Services Worcester | PRP Services",
  description:
    "Professional fencing, roofing, landscaping, patios & driveway services in Worcester. Reliable, affordable & local experts.",
  alternates: { canonical: "https://prp-services.uk" },
};

export default function HomePage() {
  return <HomeContent />;
}
