import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import PartsShowcaseGrid from "./PartsShowcaseGrid";

interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  price: string;
  image: string;
}

export default async function PartsShowcase() {
  const query = `*[_type == "inventory"] | order(_createdAt desc)[0...8]{
    _id,
    name,
    "slug": slug.current,
    brand,
    price,
    "image": image.asset->url
  }`;

  const parts: SanityProduct[] = await client.fetch(query);

  if (!parts || parts.length === 0) return null;

  return (
    <section className="bg-white py-8 text-neutral-900 overflow-hidden sm:py-14 lg:py-16">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Genuine Parts
          </div>

          <h2 className="h2 tracking-tight">
            The Right Parts for the{" "}
            <span className="italic text-[var(--color-primary)]">
              Road Ahead.
            </span>
          </h2>

          <p className="body-lg mt-4 sm:mt-6 text-neutral-500 max-w-xl px-2 sm:px-0">
            Find quality replacement parts and essential components to keep
            your vehicle performing at its best.
          </p>
        </div>

        {/* Animated Grid */}
        <PartsShowcaseGrid parts={parts} />

        {/* CTA */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <Link
            href="/inventory"
            className="w-full px-4 sm:w-auto sm:px-0"
          >
            <Button className="w-full justify-center sm:w-auto">
              Explore All Parts
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}