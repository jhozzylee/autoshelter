import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import { INVENTORY_QUERY } from "@/sanity/lib/queries";

interface SanityProduct {
  _id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  image: string;
}

interface RelatedProductsProps {
  currentProduct: SanityProduct;
}

export default async function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Fetch all inventory items from Sanity
  const allProducts: SanityProduct[] = await client.fetch(INVENTORY_QUERY);

  // Filter related products by matching category, excluding the current product
  const relatedProducts = allProducts
    .filter(
      (product) =>
        product.slug !== currentProduct.slug &&
        product.category === currentProduct.category
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="border-t border-neutral-200/80 bg-neutral-50/50 py-12 lg:py-16">
      <Container>
        {/* Subtle Section Header */}
        <div className="mb-6 flex items-center justify-between border-b border-neutral-200/60 pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Complementary Parts & Accessories
          </p>
          <span className="text-[11px] font-mono text-neutral-400">
            {relatedProducts.length} SUGGESTIONS
          </span>
        </div>

        {/* 4-Column Mini Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <Link
              key={product._id || product.slug}
              href={`/inventory/${product.slug}`}
              className="group flex flex-col rounded-xl border border-neutral-200/70 bg-white p-3 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm"
            >
              {/* Aspect Ratio Thumb */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Minimal Text Details */}
              <div className="mt-3 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                    {product.brand}
                  </p>
                  <h4 className="mt-1 text-xs font-medium text-neutral-900 line-clamp-1 transition-colors group-hover:text-[var(--color-primary)]">
                    {product.name}
                  </h4>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-2 text-xs">
                  <span className="font-semibold text-neutral-950">{product.price}</span>
                  <span className="text-[10px] font-medium text-neutral-400 group-hover:text-neutral-900 group-hover:underline">
                    View Part →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}