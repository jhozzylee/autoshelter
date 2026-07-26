"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface VehicleGalleryProps {
  images: string[];
  title: string;
  brand: string;
}

export default function CarGallery({
  images,
  title,
  brand,
}: VehicleGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  }, [selectedIndex, images.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );
  }, [selectedIndex, images.length]);

  // Handle Keyboard Shortcuts
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((imgSrc, index) => (
          <button
            key={`${imgSrc}-${index}`}
            type="button"
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-neutral-300 text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            aria-label={`View full screen image ${index + 1}`}
          >
            <Image
              src={imgSrc}
              alt={`${title} view ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            {/* Hover Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[10px] font-mono uppercase tracking-widest">
                Angle 0{index + 1}
              </span>
              <span className="text-[10px] font-mono text-neutral-300 flex items-center gap-1">
                Expand ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300">
          {/* Top Bar / Controls */}
          <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-10 text-white border-b border-white/10">
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
              {brand} • {selectedIndex + 1} of {images.length}
            </span>

            <button
              onClick={closeLightbox}
              className="p-2 text-neutral-400 hover:text-white transition-colors text-sm font-mono tracking-wider uppercase border border-white/10 rounded-full bg-white/5 hover:bg-white/10 px-4"
              aria-label="Close modal"
            >
              Close [Esc]
            </button>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={showPrev}
                className="absolute left-4 sm:left-8 z-10 p-4 text-white/70 hover:text-white transition-colors text-2xl font-light rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 sm:right-8 z-10 p-4 text-white/70 hover:text-white transition-colors text-2xl font-light rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          {/* Main Expanded Image Frame */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] p-6 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()} // Prevent clicking on image from closing
            >
              <Image
                src={images[selectedIndex]}
                alt={`${title} enlarged view ${selectedIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}