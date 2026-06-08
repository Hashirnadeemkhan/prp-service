"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Category = {
  key: string;
  label: string;
  slug: string;
  dir: string;
  count: number;
};

const CATEGORIES: Category[] = [
  { key: "fencing",          label: "Fencing",             slug: "fencing-services",            dir: "fencing",          count: 20 },
  { key: "driveways-patios", label: "Driveways & Patios",  slug: "driveways-patios-worcester",  dir: "driveways-patios", count: 9  },
  { key: "roofing",          label: "Roofing",             slug: "roofing-services",            dir: "roofing",          count: 9  },
];

type Item = {
  id: string;
  thumb: string;
  full: string;
  label: string;
  categoryKey: string;
  categoryLabel: string;
  slug: string;
};

const ITEMS: Item[] = CATEGORIES.flatMap((cat) =>
  Array.from({ length: cat.count }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      id: `${cat.key}-${n}`,
      thumb: `/gallery/${cat.dir}/thumbs/${n}.jpg`,
      full: `/gallery/${cat.dir}/${n}.jpg`,
      label: `${cat.label} — Project ${String(i + 1).padStart(2, "0")}`,
      categoryKey: cat.key,
      categoryLabel: cat.label,
      slug: cat.slug,
    };
  })
);

export default function GalleryClient() {
  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = useMemo(
    () => (active === "all" ? ITEMS : ITEMS.filter((it) => it.categoryKey === active)),
    [active]
  );

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  // Keyboard controls + scroll lock while lightbox is open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  const current = lightbox === null ? null : visible[lightbox];

  return (
    <>
      {/* Filter bar */}
      <section className="pt-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActive("all")}
              className={`gallery-filter ${active === "all" ? "active" : ""}`}>
              All Work <span className="count">{ITEMS.length}</span>
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`gallery-filter ${active === cat.key ? "active" : ""}`}>
                {cat.label} <span className="count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {visible.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightbox(i)}
                aria-label={`View ${item.label}`}
                className="gallery-tile gallery-card group relative block w-full overflow-hidden rounded-lg shadow-sm"
                style={{ aspectRatio: "4/3", animationDelay: `${Math.min(i, 12) * 45}ms` }}>
                <Image
                  src={item.thumb}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="gallery-card-image object-cover"
                />
                {/* Gradient + overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Zoom icon */}
                <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 backdrop-blur-sm transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
                  </svg>
                </span>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-bold leading-tight">{item.label}</p>
                  <span className="text-[11px] font-semibold" style={{ color: "#9cc0e8" }}>
                    {item.categoryLabel}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={current.label}>
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="lightbox-btn"
            style={{ top: 20, right: 20 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="lightbox-btn left-3 sm:left-6"
            style={{ top: "50%", transform: "translateY(-50%)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="lightbox-btn right-3 sm:right-6"
            style={{ top: "50%", transform: "translateY(-50%)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={current.full} src={current.full} alt={current.label} className="lightbox-img" />
            <figcaption className="mt-4 text-center">
              <p className="text-white text-sm font-bold">{current.label}</p>
              <Link
                href={`/services/${current.slug}`}
                className="text-xs font-semibold hover:underline"
                style={{ color: "#9cc0e8" }}>
                View {current.categoryLabel} services &rarr;
              </Link>
              <p className="mt-1 text-[11px]" style={{ color: "#7a9abd" }}>
                {lightbox! + 1} / {visible.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
