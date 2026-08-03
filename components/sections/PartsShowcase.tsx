"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
      delay: index * 0.1,
    },
  }),
};

const parts = [
  {
    name: "Brake Pads",
    compatibility: "For various vehicle models",
    price: "₦15,000",
    image: "/parts/brake-pads.jpeg",
    href: "/parts/brake-pads",
  },
  {
    name: "Oil Filters",
    compatibility: "For various vehicle models",
    price: "₦18,000",
    image: "/parts/oil-filters.jpeg",
    href: "/parts/oil-filters",
  },
  {
    name: "Air Filters",
    compatibility: "For various vehicle models",
    price: "₦25,000",
    image: "/parts/air-filters.jpeg",
    href: "/parts/air-filters",
  },
  {
    name: "Car Batteries",
    compatibility: "For various vehicle models",
    price: "₦100,000",
    image: "/parts/car-batteries.jpg",
    href: "/parts/car-batteries",
  },
  {
    name: "Spark Plugs",
    compatibility: "For various vehicle models",
    price: "₦35,000",
    image: "/parts/spark-plugs.jpeg",
    href: "/parts/spark-plugs",
  },
  {
    name: "Wiper Blades",
    compatibility: "For various vehicle models",
    price: "₦15,000",
    image: "/parts/wiper-blades.jpg",
    href: "/parts/wiper-blades",
  },
  {
    name: "Car Batteries",
    compatibility: "For various vehicle models",
    price: "₦100,000",
    image: "/parts/car-batteries.jpg",
    href: "/parts/car-batteries",
  },
    {
    name: "Brake Pads",
    compatibility: "For various vehicle models",
    price: "₦15,000",
    image: "/parts/brake-pads.jpeg",
    href: "/parts/brake-pads",
  },
];

export default function PartsShowcase() {
  return (
    <section className="bg-white py-8 text-neutral-900 overflow-hidden sm:py-14 lg:py-16">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center flex flex-col items-center"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Genuine Parts
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight"
          >
            The Right Parts for the{" "}
            <span className="italic text-[var(--color-primary)]">
              Road Ahead.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-lg mt-4 sm:mt-6 text-neutral-500 max-w-xl px-2 sm:px-0"
          >
            Find quality replacement parts and essential components to keep
            your vehicle performing at its best.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
        >
          {parts.map((part, index) => (
            <motion.article
              key={part.name}
              custom={index + 3}
              variants={elementVariants}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-50/60 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-black/5"
            >
              <Link
                href={part.href}
                className="block h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
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
                      {part.compatibility}
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
            </motion.article>
                      ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: PREMIUM_EASE,
          }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <Link
            href="/inventory"
            className="w-full px-4 sm:w-auto sm:px-0"
          >
            <Button className="w-full justify-center sm:w-auto">
              Explore All Parts
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}