import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = "https://www.prp-services.uk";

// Re-generate the sitemap at most once an hour so new blog posts appear
// without rebuilding, while keeping DB load low.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/services/fencing-services`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/services/roofing-services`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/services/driveways-patios-worcester`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/services/landscaping-services`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, priority: 0.5 },
  ];

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blogPost.findMany({
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });
    postRoutes = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      priority: 0.7,
    }));
  } catch {
    // DB unreachable at generation time — still serve the static routes.
    postRoutes = [];
  }

  return [...staticRoutes, ...postRoutes];
}
