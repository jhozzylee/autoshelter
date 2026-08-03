"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Container from "@/components/ui/Container";

// Same luxury ease curve matching the Services & Hero components
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

const categories = [
  {
    title: "EV",
    image: "/ev.png",
    href: "/vehicles",
  },
  {
    title: "Sedan",
    image: "/sedan.png",
    href: "/vehicles",
  },
  {
    title: "SUV",
    image: "/suv.png",
    href: "/vehicles",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-white py-8 text-neutral-900 overflow-hidden sm:py-14 lg:py-16">
      <Container>
        {/* Constrained Grid centered on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={elementVariants}
              className="relative h-[260px] w-full max-w-[360px]"
            >
              <Link
                href={category.href}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition-all duration-500 ease-out hover:shadow-xl"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Bottom Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Bottom Bar Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between bg-black/50 px-5 py-3.5 backdrop-blur-md transition-colors duration-500 group-hover:bg-black/65 sm:px-6">
                  <h3 className="body-lg font-medium text-[var(--color-surface)]">
                    {category.title}
                  </h3>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:translate-x-1.5">
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

        {/* Bottom Editorial Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={3}
          variants={elementVariants}
          className="mx-auto mt-10 max-w-2xl border-t border-[var(--color-surface-dark)] pt-8 text-center sm:mt-12"
        >
          <p className="body-sm leading-relaxed text-neutral-600">
            Your journey doesn't end when you drive away. We provide the
            vehicles, expertise, and genuine parts you need to keep moving
            with confidence today and for every mile ahead.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}