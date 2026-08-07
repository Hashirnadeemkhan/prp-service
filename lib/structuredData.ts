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

/* Standard trading hours, shared across the Service and About schemas. */
const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opens: "08:00",
  closes: "18:00",
} as const;

/* Reused as the `provider` on every per-service schema. */
const SERVICE_PROVIDER = {
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  address: BUSINESS.address,
  openingHoursSpecification: OPENING_HOURS,
} as const;

/* Source data for the four Service pages (the /services/[slug] route). */
const SERVICE_SCHEMA_DATA = [
  {
    slug: "driveways-patios-worcester",
    serviceType: "Patios & Driveways Installation",
    name: "Patios & Driveways Worcester",
    description:
      "Professional patio and driveway installation services in Worcester and Worcestershire. Quality materials, expert craftsmanship, and reliable service for domestic and commercial properties.",
    catalogName: "Patios & Driveways Services",
    offers: [
      "Patio Installation",
      "Driveway Installation",
      "Patio & Driveway Repairs",
    ],
  },
  {
    slug: "fencing-services",
    serviceType: "Fencing Installation & Repair",
    name: "Fencing Services Worcester",
    description:
      "Professional fencing installation and repair services in Worcester and Worcestershire. Durable materials, expert craftsmanship, and reliable service for domestic and commercial properties.",
    catalogName: "Fencing Services",
    offers: [
      "Fence Installation",
      "Fence Repairs",
      "Garden & Boundary Fencing",
    ],
  },
  {
    slug: "roofing-services",
    serviceType: "Roofing Installation & Repairs",
    name: "Roofing & Repairs Worcestershire",
    description:
      "From emergency roof repairs to complete reroofing projects, PRP Services handles all types of residential and commercial roofing work across Worcestershire, working quickly to protect properties and minimise disruption.",
    catalogName: "Roofing & Repairs Services",
    offers: [
      "Tile and Slate Roof Repairs",
      "Complete Reroofing",
      "Flat Roof Installation and Repair",
      "Chimney Pointing and Repairs",
      "Guttering Replacement",
      "Emergency Roof Repairs",
    ],
  },
  {
    slug: "landscaping-services",
    serviceType: "Landscaping & Tree Surgery",
    name: "Landscaping & Tree Surgery Worcestershire",
    description:
      "From complete garden makeovers to professional tree surgery, PRP Services delivers beautiful, practical gardens across Worcestershire. All tree surgery work is carried out by trained, insured professionals.",
    catalogName: "Landscaping & Tree Surgery Services",
    offers: [
      "Garden Design and Landscaping",
      "Tree Felling and Pruning",
      "Stump Removal and Grinding",
      "Lawn Turfing and Seeding",
      "Planting and Borders",
      "Garden Clearance",
    ],
  },
] as const;

/* Per-service Schema.org objects, keyed by route slug. */
export const serviceSchemas: Record<string, Record<string, unknown>> =
  Object.fromEntries(
    SERVICE_SCHEMA_DATA.map((s) => [
      s.slug,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: s.serviceType,
        name: s.name,
        url: `${SITE_URL}/services/${s.slug}`,
        description: s.description,
        provider: SERVICE_PROVIDER,
        areaServed: BUSINESS.areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: s.catalogName,
          itemListElement: s.offers.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ]),
  );

export const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "About PRP Services",
  description:
    "PRP Services is a local, family-run property maintenance team in Worcester with over 10 years' experience in fencing, roofing, driveways, patios and landscaping.",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    url: BUSINESS.url,
    description:
      "PRP Services delivers high-quality property maintenance with a personal touch across Worcestershire, handling fencing, roofing, driveways, patios and landscaping for domestic and commercial properties.",
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    foundingDate: "2016",
    slogan: "Complete property care you can rely on",
    address: BUSINESS.address,
    areaServed: BUSINESS.areaServed,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "1",
    },
    openingHoursSpecification: OPENING_HOURS,
    knowsAbout: [
      "Fencing",
      "Roofing",
      "Driveways",
      "Patios",
      "Landscaping",
      "Tree Surgery",
    ],
  },
};

export const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  url: `${SITE_URL}/gallery`,
  name: "Project Gallery | PRP Services Worcestershire",
  description:
    "Real fencing, roofing, patio and landscaping projects completed by PRP Services across Worcestershire.",
  about: {
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: BUSINESS.address,
  },
  image: [
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/gallery/fencing/thumbs/001.jpg`,
      name: "Fencing Project 01",
      caption: "Fencing project completed by PRP Services in Worcestershire",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/gallery/driveways-patios/thumbs/001.jpg`,
      name: "Driveways & Patios Project 01",
      caption:
        "Driveway and patio project completed by PRP Services in Worcestershire",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/gallery/roofing/thumbs/001.jpg`,
      name: "Roofing Project 01",
      caption: "Roofing project completed by PRP Services in Worcestershire",
    },
  ],
};

export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: BUSINESS.name,
  url: BUSINESS.url,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  address: BUSINESS.address,
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lisa" },
      reviewBody:
        "Praised the team for fitting a new fence and gate quickly, plus removing two large trees, all to a high standard.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Brandon" },
      reviewBody:
        "Complimented the team's punctuality and quick finish, noting the fence looked great and the site was cleaned up afterward.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah" },
      reviewBody:
        "Happy with a new patio, describing the team as professional and tidy, finishing ahead of schedule.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James" },
      reviewBody:
        "Praised a full garden makeover for excellent service from quote to completion, calling it great value.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Karen" },
      reviewBody:
        "Described the driveway team as friendly and hardworking, leaving the site spotless with a fantastic-looking result.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mike" },
      reviewBody:
        "Called about an emergency roof repair after a storm, praised the same-day response, quick fix and fair pricing.",
    },
  ],
};

export const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: `${SITE_URL}/privacy-policy`,
  name: "Privacy Policy | PRP Services",
  description:
    "Privacy Policy for PRP Services, outlining how customer data is collected, used and protected.",
  isPartOf: {
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  publisher: {
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: BUSINESS.address,
  },
};

/**
 * Blog listing schema, built from the live posts so the structured data
 * never drifts from what's actually published.
 */
export function buildBlogSchema(
  posts: { title: string; slug: string; excerpt: string | null; createdAt: Date }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    url: `${SITE_URL}/blog`,
    name: "Worcestershire Home & Garden Blog",
    description:
      "Real advice on fencing, roofing, driveways and garden care from Worcestershire's PRP Services team.",
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.createdAt.toISOString().split("T")[0],
      ...(p.excerpt ? { description: p.excerpt } : {}),
    })),
  };
}
