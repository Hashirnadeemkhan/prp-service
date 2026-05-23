import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Blog | PRP Services Worcestershire",
  description:
    "Tips, guides, and news about property maintenance, fencing, roofing, and landscaping from the PRP Services team.",
};

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  createdAt: Date;
};

async function getPosts(): Promise<Post[]> {
  try {
    return await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, title: true, slug: true, excerpt: true, coverImage: true, createdAt: true },
    });
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d1825 0%, #1e3560 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <span className="section-label">TIPS &amp; INSIGHTS</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Blog</h1>
          <p className="text-sm mb-6" style={{ color: "#b0c4d8" }}>
            Advice on property maintenance, fencing, roofing, and landscaping from the PRP
            Services team.
          </p>
          <div
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#f4f6f9" }}>
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#1e3560" }}>
                No posts yet
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Check back soon — our team is working on some great content.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="service-card border border-gray-100 overflow-hidden">
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full object-cover"
                      style={{ height: "200px" }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center"
                      style={{
                        height: "200px",
                        background: "linear-gradient(135deg, #0d1825, #1e3560)",
                      }}>
                      <svg
                        className="w-12 h-12 opacity-20 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-2">
                      {new Date(post.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="text-base font-bold mb-2 leading-snug" style={{ color: "#1e3560" }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="text-center">
                      <Link href={`/blog/${post.slug}`} className="btn-navy inline-flex px-8">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Admin shortcut */}
      <section className="py-10 px-4 border-t border-gray-100" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-3">Are you the site admin?</p>
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 text-sm font-bold hover:underline"
            style={{ color: "#2d5486" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Manage Blog Posts →
          </Link>
        </div>
      </section>
    </>
  );
}
