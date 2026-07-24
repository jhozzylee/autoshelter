"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";

import Container from "@/components/ui/Container";
import { services } from "@/data/services";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASE,
      delay: index * 0.06,
    },
  }),
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              variants={cardVariants}
              // This container handles the entrance animation
              className="relative"
            >
              {/* Entire Card is now a clickable Link */}
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-50/50 transition-all duration-500 hover:border-neutral-300 hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
              >
                <div>
                  {/* Image Container with Editorial Zoom & Gradient */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    {/* Top Floating Number Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 text-[11px] font-mono font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/15">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    {/* Title color now changes when the whole card is hovered */}
                    <h2 className="h4 text-neutral-900 font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                      {service.title}
                    </h2>

                    <p className="body-md mt-4 text-neutral-500 font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Action Link Footer (Visually consistent, but now part of the card link) */}
                <div className="px-8 pb-8 pt-2">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    <span>Explore Service</span>
                    {/* Arrow shifts right when the whole card is hovered */}
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}