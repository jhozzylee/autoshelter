"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Container from "@/components/ui/Container";

// Smoother, ultra-luxurious custom cubic bezier curve
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

const services = [
  {
    title: "Oil Change",
    image: "/services/oil-change.png",
    href: "/services/oil-change",
  },
  {
    title: "General Maintenance",
    image: "/services/general-maintenance.png",
    href: "/services/general-maintenance",
  },
  {
    title: "Diagnostics",
    image: "/services/diagnostics.png",
    href: "/services/diagnostics",
  },
  {
    title: "Tyres & Wheels",
    image: "/services/tyres-wheels.png",
    href: "/services/tyres-wheels",
  },
  {
    title: "AC Maintenance",
    image: "/services/ac-maintenance.png",
    href: "/services/ac-maintenance",
  },
  {
    title: "Radiator Repairs",
    image: "/services/radiator-repairs.png",
    href: "/services/radiator-repairs",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-12 text-neutral-900 overflow-hidden sm:py-20 lg:py-32">
      <Container>
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-3xl text-center flex flex-col items-center sm:mb-16"
        >
          <motion.div
            custom={0}
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4 sm:mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            More Than Just Cars
          </motion.div>

          <motion.h2
            custom={1}
            variants={elementVariants}
            className="h2 tracking-tight"
          >
            Everything Your Vehicle Needs,{" "}
            <span className="italic text-[var(--color-primary)]">
              Under One Roof.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={elementVariants}
            className="body-md mt-4 sm:mt-6 text-neutral-500 max-w-2xl px-2 sm:px-0"
          >
            From routine maintenance to complex repairs and genuine
            replacement parts, our team provides the expertise and support
            to keep you and your vehicle moving.
          </motion.p>
        </motion.div>

        {/* Services Grid with Smooth Section-Triggered Stagger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={elementVariants}
              className="relative w-full max-w-[500px] h-[260px] sm:h-[300px] md:h-[360px]"
            >
              <Link
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm block w-full h-full transition-all duration-500 ease-out hover:shadow-xl"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Bottom Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Bottom Bar Content */}
                <div className="absolute bg-black/50 backdrop-blur-md inset-x-0 bottom-0 flex items-center justify-between py-3.5 px-5 sm:px-6 z-10 transition-colors duration-500 group-hover:bg-black/65">
                  <h3 className="body-lg text-[var(--color-surface)] font-medium">
                    {service.title}
                  </h3>

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
      </Container>
    </section>
  );
}