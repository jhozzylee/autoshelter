"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import Container from "@/components/ui/Container";

const LUXURY_EASE: Easing = [0.22, 1, 0.36, 1];

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: LUXURY_EASE,
      delay: index * 0.1,
    },
  }),
};

const testimonials = [
  {
    quote:
      "The entire process was smooth from start to finish. The team was professional, helpful, and made finding the right vehicle easy.",
    name: "Michael Johnson",
    role: "Vehicle Owner",
    initials: "MJ",
  },
  {
    quote:
      "I appreciate the quality of service and the attention to detail. I know I can count on Auto Shelter to take care of my vehicle.",
    name: "Sarah Williams",
    role: "Vehicle Owner",
    initials: "SW",
  },
  {
    quote:
      "From the service team to the parts department, the experience has always been reliable and professional.",
    name: "David Thompson",
    role: "Vehicle Owner",
    initials: "DT",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Autoplay Logic
  useEffect(() => {
    if (isAutoplayPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoplayPaused]);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="bg-white py-8 text-neutral-900 overflow-hidden sm:py-14 lg:py-16">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center flex flex-col items-center"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Customer Stories
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight"
          >
            Good Experiences Speak for{" "}
            <span className="italic text-[var(--color-primary)]">
              Themselves.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-md mt-3 sm:mt-4 text-neutral-500 max-w-xl leading-relaxed px-2 sm:px-0"
          >
            From finding the right vehicle to getting expert care when it's
            needed, our customers trust Auto Shelter to keep them moving.
          </motion.p>
        </motion.div>

        {/* Compact Light Testimonial Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            custom={3}
            variants={elementVariants}
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 sm:p-10 lg:p-12 shadow-sm"
          >
            {/* Subtle Watermark Quote */}
            <div className="absolute right-4 sm:right-8 top-1 sm:top-2 pointer-events-none select-none text-neutral-200/50 font-serif text-[80px] sm:text-[120px] leading-none z-0">
              “
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Statement */}
              <div className="min-h-[100px] sm:min-h-[80px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    className="body-lg max-w-xl font-normal leading-relaxed text-neutral-800 italic text-sm sm:text-base lg:text-lg"
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 sm:mt-6 flex flex-col items-center"
                >
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-neutral-900 text-white font-medium flex items-center justify-center text-xs mb-2 shadow-sm">
                    {testimonial.initials}
                  </div>

                  <p className="body-md font-medium text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="body-xs text-neutral-500 mt-0.5">
                    {testimonial.role}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3.5 sm:gap-5">
                <button
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 active:scale-95"
                >
                  <Image
                    src="/icons/arrow.svg"
                    alt="Previous"
                    width={14}
                    height={14}
                    className="rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert sm:w-4 sm:h-4"
                  />
                </button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "w-5 sm:w-6 bg-[var(--color-primary)]"
                          : "w-1.5 sm:w-2 bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 active:scale-95"
                >
                  <Image
                    src="/icons/arrow.svg"
                    alt="Next"
                    width={14}
                    height={14}
                    className="transition-all duration-300 group-hover:brightness-0 group-hover:invert sm:w-4 sm:h-4"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}