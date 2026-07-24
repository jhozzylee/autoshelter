"use client";

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
      delay: index * 0.08,
    },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-neutral-950 text-white py-28 lg:py-36">
      {/* Ambient Radial Glow & Subtle Grid Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[var(--color-primary)]/10 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-50" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center flex flex-col items-center"
        >
          {/* Editorial Badge Pill */}
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Our Services
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={elementVariants}
            className="h1 tracking-tight text-white leading-tight"
          >
            Everything Your Vehicle{" "}
            <span className="italic text-[var(--color-primary)]">Needs.</span>
          </motion.h1>

          {/* Lead Description */}
          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-lg mt-8 max-w-2xl text-neutral-300 leading-relaxed font-light"
          >
            From routine maintenance to diagnostics, repairs, and expert
            automotive care, our services are engineered to keep you and your
            vehicle moving with confidence.
          </motion.p>

         
        </motion.div>
      </Container>
    </section>
  );
}