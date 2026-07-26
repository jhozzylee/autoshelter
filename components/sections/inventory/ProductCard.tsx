import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-950/5">
      <Link
        href={`/inventory/${product.slug}`}
        className="flex h-full flex-col"
      >
        {/* Product Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Ambient Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

          {/* Category Pill */}
          <div className="absolute left-3.5 top-3.5 z-10 sm:left-4 sm:top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white/90 px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              {product.category}
            </span>
          </div>
        </div>

        {/* Product Info & Meta Details */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            {/* Brand / Subtitle */}
            <p className="text-xs uppercase tracking-widest font-semibold text-neutral-400">
              {product.brand}
            </p>

            {/* Product Title */}
            <h2 className="text-lg sm:text-xl font-medium tracking-tight text-neutral-950 mt-1.5 transition-colors duration-300 group-hover:text-[var(--color-primary)] leading-snug">
              {product.name}
            </h2>
          </div>

          {/* Footer: Price & Arrow Indicator */}
          <div className="mt-6 flex items-end justify-between border-t border-neutral-100 pt-4">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Price
              </p>

              <p className="text-lg font-semibold text-neutral-950 mt-0.5">
                {product.price}
              </p>
            </div>

            {/* Interactive Action Arrow */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-950 transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}