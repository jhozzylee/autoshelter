"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";

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

interface Vehicle {
  _id: string;
  name: string;
  slug: string;
  details: string;
  type: string;
  image: string;
}

interface VehicleCollectionGridProps {
  vehicles: Vehicle[];
}

export default function VehicleCollectionGrid({ vehicles }: VehicleCollectionGridProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle._id || vehicle.slug}
          custom={index + 3}
          variants={elementVariants}
          className="relative w-full max-w-[500px] h-[260px] sm:h-[300px] md:h-[360px]"
        >
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-sm block w-full h-full transition-all duration-500 ease-out hover:shadow-xl"
          >
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden bg-black">
              {vehicle.image && (
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              )}

              {/* Gradient shadow for seamless text transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Fuel Type Badge Overlay */}
              {vehicle.type && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-neutral-950/60 backdrop-blur-md border border-[var(--color-surface)]/15 px-3 py-1 text-[11px] font-medium tracking-wide uppercase text-[var(--color-surface)] shadow-md">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-primary)] mr-1.5 animate-pulse" />
                    {vehicle.type}
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Bar Content */}
            <div className="absolute bg-black/50 backdrop-blur-md inset-x-0 bottom-0 flex items-center justify-between py-3.5 px-5 sm:px-6 z-10 transition-colors duration-500 group-hover:bg-black/65">
              <div>
                <h3 className="body-lg text-[var(--color-surface)] font-medium">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {vehicle.details}
                </p>
              </div>

              <div className="h-9 w-9 rounded-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                <Image
                  src="/icons/arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="brightness-0 invert"
                />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}