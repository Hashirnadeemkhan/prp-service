import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Fencing, Roofing & Landscaping Services Worcester | PRP Services",
  description:
    "Professional fencing, roofing, landscaping, patios & driveway services in Worcester. Reliable, affordable & local experts.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
