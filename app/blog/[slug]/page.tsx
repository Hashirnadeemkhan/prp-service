import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  try {
    const decoded = decodeURIComponent(slug);
    return await prisma.blogPost.findUnique({ where: { slug: decoded } });
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Banner */}
      <section
        className="relative py-24 px-6"
        style={{
          background: post.coverImage
            ? `linear-gradient(135deg,rgba(13,25,43,0.88),rgba(27,42,65,0.82)), url('${post.coverImage}') center/cover no-repeat`
            : "linear-gradient(135deg,#0d1825,#1e3560)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm" style={{ color: "#7a9abd" }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link><span>›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link><span>›</span>
            <span className="text-white">{post.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          {post.excerpt && <p className="text-gray-300 text-lg max-w-2xl mx-auto">{post.excerpt}</p>}
          <p className="text-gray-500 text-sm mt-4">
            {new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Cover image */}
          {post.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.coverImage} alt={post.title}
              className="w-full rounded-xl object-cover mb-10 shadow-md" style={{ maxHeight: "420px" }} />
          )}

          {/* Blog content (rich HTML from the editor) */}
          <div
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <Link href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#2d5486]"
              style={{ color: "#1e3560" }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <Link href="/admin/blog"
              className="text-xs text-gray-400 hover:text-[#2d5486] transition-colors">
              Edit this post (Admin)
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 text-center" style={{ backgroundColor: "#f4f6f9" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#1e3560" }}>Need Professional Help?</h2>
          <p className="text-gray-500 mb-6 text-sm">Contact PRP Services for a free, no-obligation quote anywhere across Worcestershire.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+447360270797" className="btn-navy justify-center">📞 +44 7360 270797</a>
            <Link href="/contact" className="btn-navy justify-center" style={{ background: "transparent", color: "#1e3560" }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
