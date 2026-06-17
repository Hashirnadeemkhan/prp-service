import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/"],
    },
    sitemap: "https://www.prp-services.uk/sitemap.xml",
    host: "https://www.prp-services.uk",
  };
}
