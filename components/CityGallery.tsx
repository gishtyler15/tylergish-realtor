"use client";

import { useState } from "react";
import Image from "next/image";

export default function CityGallery({
  images,
  cityName,
}: {
  images: string[];
  cityName: string;
}) {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const hasUsableImages = images.some((_, i) => !imgErrors[i]);

  if (!hasUsableImages) return null;

  return (
    <div>
      <h2 className="font-display text-2xl text-navy mb-4">
        {cityName} in Photos
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, i) =>
          imgErrors[i] ? null : (
            <div
              key={src}
              className="relative aspect-square rounded-xl overflow-hidden bg-navy-50"
            >
              <Image
                src={src}
                alt={`${cityName}, Ohio`}
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
    </div>
  );
}
