"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const LUXURY_EASE: Easing = [0.22, 1, 0.36, 1];

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: LUXURY_EASE,
      delay: index * 0.12,
    },
  }),
};

const highlights = [
  {
    number: "01",
    title: "Quality Vehicles",
    description:
      "Carefully selected vehicles that deliver reliability, comfort, and lasting value.",
  },
  {
    number: "02",
    title: "Expert Automotive Care",
    description:
      "Experienced technicians providing professional servicing and repairs you can trust.",
  },
  {
    number: "03",
    title: "Genuine Parts",
    description:
      "Authentic replacement parts that keep your vehicle performing at its best.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white text-neutral-900 overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-20 max-w-3xl text-center flex flex-col items-center"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Why Us
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight"
          >
            More Than a Place to{" "}
            <span className="italic text-[var(--color-primary)]">
              Buy a Car.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-md mt-6 text-neutral-500 max-w-2xl leading-relaxed"
          >
            We believe the right automotive experience should continue
            long after the sale. From the vehicle you drive to the parts
            that keep it running, Auto Shelter is built around quality, trust,
            and long-term support.
          </motion.p>
        </motion.div>

        {/* Two-Column Grid Content */}
        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Side: Editorial Content & Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            <motion.h3
              custom={0}
              variants={elementVariants}
              className="h3 tracking-tight text-neutral-900"
            >
              The Right Partner for Every Mile.
            </motion.h3>

            <motion.p
              custom={1}
              variants={elementVariants}
              className="body mt-4 text-neutral-500 leading-relaxed max-w-xl"
            >
              From finding your next vehicle to keeping the one you own
              performing at its best, Auto Shelter brings quality
              vehicles, expert automotive care, and genuine parts
              together under one roof.
            </motion.p>

            {/* Highlights Cards */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  custom={index + 2}
                  variants={elementVariants}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-100/80 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="body-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] pt-1">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="h4 font-medium text-neutral-900 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="body-sm mt-2 text-neutral-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image with Prominent Pitch Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              custom={3}
              variants={elementVariants}
              style={{ height: "460px" }}
              className="relative w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-black/10 group"
            >
              <Image
                src="/membership.png"
                alt="Auto Shelter Membership Care"
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Rich Gradient Overlay for strong readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* High-Impact Value Proposition Overlay */}
              <div className="absolute bottom-0 inset-x-0 z-10 flex flex-col justify-end">
                <div className="bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80 backdrop-blur-xl border border-white/20 p-6 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">

                  <h3 className="h3 font-semibold text-white tracking-tight leading-snug">
                    All-Year-Round Maintenance{" "}
                    <span className="italic text-[var(--color-primary)]">
                      for Members.
                    </span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              custom={4}
              variants={elementVariants}
              className="flex justify-center lg:justify-start"
            >
              <Link href="/membership" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Become a Member
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}