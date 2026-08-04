"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";

const LUXURY_EASE: Easing = [0.22, 1, 0.36, 1];

const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
    },
  },
};

interface SanityProduct {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  price: string;
  image: string;
}

interface PartsShowcaseGridProps {
  parts: SanityProduct[];
}

export default function PartsShowcaseGrid({
  parts,
}: PartsShowcaseGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      variants={gridVariants}
      className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
    >
      {parts.map((part) => (
        <article
          key={part._id || part.slug}
          className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-50/60 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-black/5"
        >
          <Link
            href={`/inventory/${part.slug}`}
            className="block h-full flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              {part.image && (
                <Image
                  src={part.image}
                  alt={part.name}
                  fill
                  sizes="(max-width:640px) 50vw,
                         (max-width:768px) 50vw,
                         (max-width:1024px) 33vw,
                         25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              )}

              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10">
                <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-medium uppercase tracking-widest text-white shadow-sm">
                  Authentic OEM
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-3 sm:p-5">
              <div>
                <h3 className="text-sm sm:text-lg font-medium text-neutral-900 transition-colors duration-300 group-hover:text-[var(--color-primary)] leading-snug">
                  {part.name}
                </h3>

                <p className="mt-1 text-[11px] sm:body-sm text-neutral-500 line-clamp-1 sm:line-clamp-none">
                  {part.brand || "For various vehicle models"}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 flex items-center justify-between border-t border-neutral-200/80 pt-3 sm:pt-4">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                    Price
                  </span>

                  <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-tight text-neutral-900">
                    {part.price}
                  </span>
                </div>

                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-300 bg-white transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:shadow-md">
                  <Image
                    src="/icons/arrow.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="transition-all duration-300 group-hover:translate-x-0.5 group-hover:brightness-0 group-hover:invert sm:h-4 sm:w-4"
                  />
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </motion.div>
  );
}