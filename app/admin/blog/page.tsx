"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Post = { id: number; title: string; slug: string; excerpt: string | null; createdAt: string };

export default function AdminBlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((d) => { setPosts(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const deletePost = async (id: number) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(id);
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setDeleting(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold" style={{ color: "#1B2A41" }}>Blog Posts</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all blog posts from here.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded text-white font-bold text-sm transition-colors"
          style={{ backgroundColor: "#FF5A1A" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add New Post
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-gray-400 text-sm">Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400 mb-4">No blog posts yet.</p>
            <Link href="/admin/blog/new" className="text-sm font-bold" style={{ color: "#FF5A1A" }}>
              Create your first post →
            </Link>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#F5F7FA" }}>
                <th className="text-left px-6 py-3 font-bold text-gray-600 text-xs uppercase tracking-wider">#</th>
                <th className="text-left px-6 py-3 font-bold text-gray-600 text-xs uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-3 font-bold text-gray-600 text-xs uppercase tracking-wider hidden md:table-cell">Slug</th>
                <th className="text-left px-6 py-3 font-bold text-gray-600 text-xs uppercase tracking-wider hidden lg:table-cell">Date</th>
                <th className="text-right px-6 py-3 font-bold text-gray-600 text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post, i) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold" style={{ color: "#1B2A41" }}>{post.title}</p>
                      {post.excerpt && (
                        <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{post.excerpt}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs hidden md:table-cell">/blog/{post.slug}</td>
                  <td className="px-6 py-4 text-gray-400 hidden lg:table-cell">
                    {new Date(post.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="px-3 py-1.5 rounded text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        View
                      </a>
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="px-3 py-1.5 rounded text-xs font-semibold text-white transition-colors"
                        style={{ backgroundColor: "#1B2A41" }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        disabled={deleting === post.id}
                        className="px-3 py-1.5 rounded text-xs font-semibold text-white transition-colors disabled:opacity-50"
                        style={{ backgroundColor: "#dc2626" }}
                      >
                        {deleting === post.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
