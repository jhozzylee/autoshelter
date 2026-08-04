import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { client } from "@/sanity/lib/client";
import VehicleCollectionGrid from "./VehicleCollectionGrid";

const LUXURY_EASE: Easing = [0.22, 1, 0.36, 1];

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
      delay: index * 0.14,
    },
  }),
};

export default async function VehicleCollection() {
  // Fetch the 6 most recent vehicles from Sanity
  const query = `*[_type == "vehicle"] | order(_createdAt desc)[0...6]{
    _id,
    name,
    "slug": slug.current,
    details,
    type,
    "image": image.asset->url
  }`;

  const vehicles = await client.fetch(query);

  if (!vehicles || vehicles.length === 0) return null;

  return (
    <section className="bg-[var(--color-neutral)] py-8 sm:py-14 lg:py-16 text-[var(--color-surface)] overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="mx-auto mb-10 max-w-3xl text-center flex flex-col items-center sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-[var(--color-surface)]/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-4 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Our Vehicles
          </div>

          <h2 className="h2 tracking-tight text-[var(--color-surface)]">
            Find Your Next{" "}
            <span className="italic text-[var(--color-primary)]">Drive.</span>
          </h2>

          <p className="body-md mt-4 sm:mt-6 text-[var(--color-surface-dark)] max-w-xl px-2 sm:px-0">
            Explore a selection of quality vehicles chosen to match
            different lifestyles, needs, and journeys.
          </p>
        </div>

        {/* Animated Client Component Grid */}
        <VehicleCollectionGrid vehicles={vehicles} />

        {/* CTA */}
        <div className="mt-10 sm:mt-16 flex justify-center">
          <Link href="/vehicles" className="w-full sm:w-auto px-4 sm:px-0">
            <Button className="w-full justify-center sm:w-auto">
              Explore Our Collection
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}