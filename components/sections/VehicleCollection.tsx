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

const vehicles = [
  {
    name: "2023 Audi A5",
    details: "4 Doors, 5 Seats",
    type: "Gasoline",
    image: "/vehicles/audi-a5.png",
    href: "/vehicles/2023-audi-A5",
  },
  {
    name: "2024 Tesla Model Y",
    details: "4 Doors, 5 Seats",
    type: "Electric",
    image: "/vehicles/tesla-model-y.png",
    href: "/vehicles/tesla-model-y",
  },
  {
    name: "2024 Toyota RAV4",
    details: "4 Doors, 5 Seats",
    type: "Hybrid",
    image: "/vehicles/rav4.jpg",
    href: "/vehicles/toyota-rav4",
  },
  {
    name: "2023 Mercedes GLC",
    details: "4 Doors, 5 Seats",
    type: "Gasoline",
    image: "/vehicles/glc.png",
    href: "/vehicles/mercedes-glc",
  },
  {
    name: "2024 BMW i4",
    details: "4 Doors, 5 Seats",
    type: "Electric",
    image: "/vehicles/bmw-i4.png",
    href: "/vehicles/bmw-i4",
  },
  {
    name: "2023 Lexus RX",
    details: "4 Doors, 5 Seats",
    type: "Hybrid",
    image: "/vehicles/lexus-rx.png",
    href: "/vehicles/lexus-rx",
  },
];

export default function VehicleCollection() {
  return (
    <section className="bg-[var(--color-neutral)] py-12 sm:py-20 lg:py-32 text-[var(--color-surface)] overflow-hidden">
      <Container>
        {/* Header matched to Hero editorial system */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center flex flex-col items-center"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-[var(--color-surface)]/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-4 sm:mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Our Vehicles
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight text-[var(--color-surface)]"
          >
            Find Your Next{" "}
            <span className="italic text-[var(--color-primary)]">Drive.</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-md mt-4 sm:mt-6 text-[var(--color-surface-dark)] max-w-xl px-2 sm:px-0"
          >
            Explore a selection of quality vehicles chosen to match
            different lifestyles, needs, and journeys.
          </motion.p>
        </motion.div>

        {/* 
          Horizontal Carousel on Mobile / Grid on Desktop
          `no-scrollbar` hides the scrollbar while allowing smooth swipe 
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex overflow-x-auto pb-4 pt-2 gap-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:overflow-visible sm:pb-0 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 no-scrollbar"
        >
          {vehicles.map((vehicle, index) => (
            <motion.article
              key={vehicle.name}
              custom={index + 3}
              variants={elementVariants}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-900 border border-[var(--color-surface)]/10 flex-none w-[85vw] max-w-[320px] snap-center sm:w-auto sm:max-w-none transition-all duration-500 hover:shadow-2xl hover:border-[var(--color-surface)]/20"
            >
              <Link href={vehicle.href} className="block h-full flex flex-col">
                {/* Image Container with Cinematic Zoom & Gradient Overlay */}
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient shadow for seamless text transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />

                  {/* Fuel Type Badge Overlay */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-neutral)]/60 backdrop-blur-md border border-[var(--color-surface)]/15 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[var(--color-surface)] shadow-md">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-primary)] mr-1.5 animate-pulse" />
                      {vehicle.type}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-neutral-900">
                  <div>
                    <h3 className="h4 text-[var(--color-surface)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {vehicle.name}
                    </h3>
                  </div>

                  <div className="mt-4 sm:mt-6 flex items-center justify-between pt-3 sm:pt-4 border-t border-[var(--color-surface)]/10">
                    <p className="body-sm text-[var(--color-surface-dark)]">
                      {vehicle.details}
                    </p>

                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-[var(--color-surface)]/20 bg-[var(--color-surface)]/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)]">
                      <Image
                        src="/icons/arrow.svg"
                        alt="Arrow"
                        width={14}
                        height={14}
                        className="brightness-0 invert transition-transform duration-300 group-hover:translate-x-0.5 sm:w-4 sm:h-4"
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <Link href="/vehicles" className="w-full sm:w-auto px-4 sm:px-0">
            <Button className="w-full justify-center sm:w-auto">
              Explore Our Collection
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}