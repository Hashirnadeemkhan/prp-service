/**
 * Centralised Schema.org (JSON-LD) structured data for PRP Services.
 *
 * A single source of truth for the business's NAP (name, address, phone)
 * so the Home and Contact schemas never drift apart. The physical/postal
 * address is Woodhall Farm Barns, Worcester (WR6 6YE); the service area is
 * the whole of Worcestershire.
 */

const SITE_URL = "https://www.prp-services.uk";

const BUSINESS = {
  name: "PRP Services",
  url: SITE_URL,
  telephone: "+447360270797",
  email: "info@prp-services.uk",
  logo: `${SITE_URL}/logo.png`,
  sameAs: ["https://www.facebook.com/prpservices"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Woodhall Farm Barns",
    addressLocality: "Worcester",
    addressRegion: "Worcestershire",
    postalCode: "WR6 6YE",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.225591",
    longitude: "-2.325044",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Worcestershire",
  },
} as const;

const SERVICES = [
  { name: "Fencing Services", slug: "fencing-services" },
  { name: "Roofing & Repairs", slug: "roofing-services" },
  { name: "Patios & Driveways", slug: "driveways-patios-worcester" },
  { name: "Landscaping & Tree Surgery", slug: "landscaping-services" },
] as const;

export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  image: BUSINESS.logo,
  url: BUSINESS.url,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  description:
    "Professional fencing, roofing, landscaping, patios and driveway services in Worcester. Reliable, affordable and local experts with over 10 years of experience.",
  address: BUSINESS.address,
  geo: BUSINESS.geo,
  areaServed: BUSINESS.areaServed,
  sameAs: BUSINESS.sameAs,
  priceRange: "$$",
  makesOffer: SERVICES.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  })),
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact PRP Services",
  description:
    "Get in touch with PRP Services for property maintenance, fencing, roofing, patios, driveways and landscaping across Worcestershire.",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    url: BUSINESS.url,
    address: BUSINESS.address,
    areaServed: BUSINESS.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  },
};
