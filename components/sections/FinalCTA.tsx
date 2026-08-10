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
      delay: index * 0.1,
    },
  }),
};

export default function FinalCTA() {
  return (
    <section className="bg-white py-8 text-white overflow-hidden sm:py-14 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200 bg-neutral-950 px-5 py-14 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24 shadow-2xl"
        >
          {/* Subtle Ambient Radial Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/15 blur-[120px] pointer-events-none" />

          {/* Micro Grid Lines Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Pill Badge */}
            <motion.div
              custom={0}
              variants={elementVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-4 sm:mb-6 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Get Started Today
            </motion.div>

            {/* Title */}
            <motion.h2
              custom={1}
              variants={elementVariants}
              className="h2 tracking-tight text-white max-w-3xl leading-tight"
            >
              Ready for the{" "}
              <span className="italic text-[var(--color-primary)]">
                Road Ahead?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              custom={2}
              variants={elementVariants}
              className="body-lg mx-auto mt-4 sm:mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed px-2 sm:px-0"
            >
              From finding your next vehicle to keeping the one you own
              running at its best, Auto Shelter is here to help you move
              forward with confidence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              custom={3}
              variants={elementVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
            >
              <Link href="/membership" className="w-full sm:w-auto">
                <Button className="w-full justify-center sm:w-auto">
                  Become a Member
                </Button>
              </Link>

              <Link href="/booking" className="w-full sm:w-auto">
                <Button
                  variant="secondary">
                  Book a Service
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}