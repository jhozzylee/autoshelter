import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RelatedProducts from "@/components/sections/inventory/RelatedProducts";
import { products } from "@/data/products";
import Footer from "@/components/layout/Footer";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Product Detail Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          {/* Editorial Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-400">
            <Link href="/inventory" className="hover:text-neutral-900 transition-colors">
              Inventory
            </Link>
            <span>/</span>
            <span className="text-neutral-600">{product.category}</span>
            <span>/</span>
            <span className="text-neutral-950 font-semibold truncate">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Product Gallery Container */}
            <div className="lg:col-span-7">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 bg-neutral-50 shadow-xl shadow-black/5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />

                {/* Glassmorphism Category Badge */}
                <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/90 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-800 shadow-sm backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Meta & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Brand Identifier */}
                <p className="text-xs uppercase tracking-widest font-semibold text-neutral-400">
                  {product.brand}
                </p>

                {/* Product Name */}
                <h1 className="h2 tracking-tight text-neutral-950 mt-2 leading-tight">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-3 border-y border-neutral-100 py-4">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                    {product.price}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-semibold">
                    In Stock
                  </span>
                </div>

                {/* Product Description */}
                <p className="body-md mt-6 text-neutral-600 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Quick Spec Highlights */}
                <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-4 text-xs">
                  <div>
                    <span className="block text-neutral-400 uppercase tracking-wider">Manufacturer</span>
                    <span className="font-semibold text-neutral-900 mt-0.5 block">{product.brand}</span>
                  </div>
                  <div>
                    <span className="block text-neutral-400 uppercase tracking-wider">Guarantee</span>
                    <span className="font-semibold text-neutral-900 mt-0.5 block">Genuine OEM Standard</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10">
                <Button className="w-full justify-center py-4">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products Carousel / Grid */}
      <RelatedProducts currentProduct={product} />
      <Footer />
    </main>
  );
}