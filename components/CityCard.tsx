"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { CityData } from "@/data/cities";

export default function CityCard({ city }: { city: CityData }) {
  const [open, setOpen] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const images = city.images || [];
  const hasUsableImages = images.some((_, i) => !imgErrors[i]);

  return (
    <div className="rounded-xl border border-slate-100 bg-white overflow-hidden hover:border-brass-400 hover:shadow-lg transition-all">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left p-6"
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display text-xl text-navy mb-1.5">
              {city.name}
            </p>
            <p className="text-xs text-slate uppercase tracking-wide mb-3">
              {city.county}
            </p>
          </div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`flex-shrink-0 mt-1 text-slate-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <p className="text-sm text-slate leading-relaxed">{city.heroLine}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brass-700">
          {open ? "Hide photos" : "See photos"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6">
          {hasUsableImages ? (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {images.map((src, i) =>
                imgErrors[i] ? null : (
                  <div
                    key={src}
                    className="relative aspect-square rounded-lg overflow-hidden bg-navy-50"
                  >
                    <Image
                      src={src}
                      alt={`${city.name}, Ohio`}
                      fill
                      className="object-cover"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [i]: true }))
                      }
                    />
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-xs text-slate-400 mb-4">
              Photos of {city.name} coming soon.
            </p>
          )}
          <Link
            href={`/${city.slug}`}
            className="inline-flex items-center text-sm font-semibold text-brass-700 hover:gap-2 gap-1 transition-all"
          >
            View market guide →
          </Link>
        </div>
      )}
    </div>
  );
}
