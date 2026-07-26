"use client";

import { motion, Variants, Easing } from "framer-motion";
import Container from "@/components/ui/Container";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
    },
  },
};

const STATS = [
  { label: "Verified Inventory", value: "100%" },
  { label: "Point Inspection", value: "150+" },
  { label: "Concierge Delivery", value: "Available" },
];

export default function CarsHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-32 lg:py-40 text-white">
      {/* Background Lighting & Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-[var(--color-primary)]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-widest text-neutral-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Our Vehicles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="h1 mt-8 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]"
          >
            Find Your Next Drive.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="body-lg mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-neutral-400"
          >
            Explore a selection of quality vehicles chosen to match different
            lifestyles, needs, and journeys.
          </motion.p>

          {/* Bottom Highlights Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 backdrop-blur-sm"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="py-3 sm:py-0 sm:px-6">
                <p className="text-2xl font-bold tracking-tight text-white font-mono">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}