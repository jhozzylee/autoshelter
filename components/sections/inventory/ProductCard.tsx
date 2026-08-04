import Image from "next/image";
import Link from "next/link";

interface SanityProduct {
  _id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
  description?: string;
  inStock?: boolean;
}

interface ProductCardProps {
  product: SanityProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-3xl border border-neutral-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-950/5">
      <Link
        href={`/inventory/${product.slug}`}
        className="flex h-full flex-col"
      >
        {/* Product Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Ambient Image Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

          {/* Category Pill */}
          {product.category && (
            <div className="absolute left-2 top-2 z-10 sm:left-4 sm:top-4">
              <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-neutral-200/80 bg-white/90 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-medium uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-md">
                <span className="h-1 sm:h-1.5 w-1 sm:w-1.5 rounded-full bg-[var(--color-primary)]" />
                <span className="truncate max-w-[80px] sm:max-w-none">{product.category}</span>
              </span>
            </div>
          )}
        </div>

        {/* Product Info & Meta Details */}
        <div className="flex flex-1 flex-col justify-between p-3 sm:p-6">
          <div>
            {/* Brand / Subtitle */}
            {product.brand && (
              <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-neutral-400 truncate">
                {product.brand}
              </p>
            )}

            {/* Product Title */}
            <h2 className="text-sm sm:text-xl font-medium tracking-tight text-neutral-950 mt-1 transition-colors duration-300 group-hover:text-[var(--color-primary)] leading-snug line-clamp-2">
              {product.name}
            </h2>
          </div>

          {/* Footer: Price & Arrow Indicator */}
          <div className="mt-3 sm:mt-6 flex items-end justify-between border-t border-neutral-100 pt-2.5 sm:pt-4">
            <div>
              <p className="text-[9px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Price
              </p>

              {product.price && (
                <p className="text-sm sm:text-lg font-semibold text-neutral-950 mt-0.5">
                  {product.price}
                </p>
              )}
            </div>

            {/* Interactive Action Arrow */}
            <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-950 transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white shadow-sm shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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