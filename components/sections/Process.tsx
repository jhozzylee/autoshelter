"use client";

import { motion, Variants, Easing } from "framer-motion";
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
      delay: index * 0.12,
    },
  }),
};

const steps = [
  {
    number: "01",
    tag: "Step 01",
    title: "Tell Us What You Need",
    description:
      "Whether you're looking for a vehicle, need a service, or require a genuine replacement part, start by telling us what you need.",
  },
  {
    number: "02",
    tag: "Step 02",
    title: "Get Expert Support",
    description:
      "Our team helps you find the right solution, offering trusted guidance, quality options, and expert automotive support.",
  },
  {
    number: "03",
    tag: "Step 03",
    title: "Move Forward With Confidence",
    description:
      "With the right vehicle, service, or part in place, you can get back on the road knowing you're supported every mile ahead.",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className=" scroll-mt-20 bg-white py-8 text-neutral-900 overflow-hidden sm:py-14 lg:py-16">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 sm:mb-20 max-w-3xl text-center flex flex-col items-center"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            How It Works
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight"
          >
            Getting Started Is{" "}
            <span className="italic text-[var(--color-primary)]">
              Simple.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-md mt-4 sm:mt-6 text-neutral-500 max-w-2xl leading-relaxed px-2 sm:px-0"
          >
            Whether you're looking to buy a vehicle, book a repair, or find
            the right part, our process is designed to make your next step
            simple.
          </motion.p>
        </motion.div>

        {/* Timeline Process Flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-4 sm:mt-8"
        >
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-neutral-200 z-0" />

          {/* Vertical Connecting Line for Mobile */}
          <div className="block lg:hidden absolute top-6 bottom-12 left-7 sm:left-1/2 -translate-x-1/2 w-[2px] bg-neutral-200 z-0" />

          <div className="grid gap-8 sm:gap-12 lg:gap-8 lg:grid-cols-3 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index + 3}
                variants={elementVariants}
                className="group flex flex-col items-start text-left sm:items-center sm:text-center lg:items-start lg:text-left pl-14 sm:pl-0"
              >
                {/* Timeline Step Node */}
                <div className="absolute left-0 sm:relative sm:left-auto mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-neutral-300 bg-white font-heading text-base sm:text-lg font-semibold text-neutral-900 shadow-sm transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                  {step.number}
                </div>

                {/* Content Block */}
                <div className="w-full rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-5 sm:p-6 transition-all duration-300 group-hover:border-neutral-300 group-hover:bg-neutral-50 group-hover:shadow-lg group-hover:shadow-black/5">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    {step.tag}
                  </span>

                  <h3 className="h4 font-medium text-neutral-900 mt-2">
                    {step.title}
                  </h3>

                  <p className="body-sm mt-2.5 sm:mt-3 text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}