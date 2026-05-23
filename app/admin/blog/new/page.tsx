"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UploadButton } from "@/lib/uploadthing";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function NewBlogPost() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    coverImage: "",
    content: "",
  });

  const set = (field: string, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title") next.slug = slugify(value);
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      router.push("/admin/blog");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-extrabold" style={{ color: "#1B2A41" }}>New Blog Post</h1>
          <p className="text-sm text-gray-500">Fill in the details below to create a new post.</p>
        </div>
      </div>

      {error && (
        <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-sm mb-4" style={{ color: "#1B2A41" }}>Post Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Enter blog post title"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Slug (URL) *</label>
              <div className="flex">
                <span className="px-3 py-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-xs text-gray-500">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => set("slug", e.target.value)}
                  required
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-r-lg text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Short Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="Brief description shown on the blog listing page"
                rows={2}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Cover Image Upload */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-sm mb-4" style={{ color: "#1B2A41" }}>Cover Image</h2>

          {form.coverImage ? (
            <div className="space-y-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={form.coverImage} alt="Cover" className="w-full h-48 object-cover rounded-lg border border-gray-200" />
              <button
                type="button"
                onClick={() => set("coverImage", "")}
                className="text-xs text-red-500 hover:text-red-700 font-semibold"
              >
                × Remove image
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
              <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-400 mb-4">Apni computer se image upload karein</p>
              <UploadButton
                endpoint="blogImage"
                onUploadBegin={() => setUploading(true)}
                onClientUploadComplete={(res) => {
                  setUploading(false);
                  const file = res?.[0];
                  const url = file?.ufsUrl || file?.url;
                  if (url) set("coverImage", url);
                }}
                onUploadError={() => {
                  setUploading(false);
                  setError("Image upload fail hua. Dobara koshish karein.");
                }}
                appearance={{
                  button: {
                    backgroundColor: "#FF5A1A",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "13px",
                    borderRadius: "8px",
                    padding: "10px 20px",
                  },
                  allowedContent: { display: "none" },
                }}
                content={{ button: uploading ? "Uploading…" : "Image Choose Karein" }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-bold text-sm mb-4" style={{ color: "#1B2A41" }}>Blog Content *</h2>
          <textarea
            value={form.content}
            onChange={(e) => set("content", e.target.value)}
            placeholder="Yahan apna blog content likhein..."
            rows={16}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-400 resize-y"
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link href="/admin/blog" className="px-6 py-3 rounded-lg text-sm font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving || uploading}
            className="px-8 py-3 rounded-lg text-sm font-bold text-white disabled:opacity-60"
            style={{ backgroundColor: "#FF5A1A" }}
          >
            {saving ? "Publishing…" : "Publish Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
