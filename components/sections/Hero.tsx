"use client";

import { motion, Variants, Easing } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const heroImages = [
  {
    desktop: "/hero/car-1.png",
    mobile: "/hero/mobile/car-1.png",
  },
  {
    desktop: "/hero/car-2.png",
    mobile: "/hero/mobile/car-2.png",
  },
  {
    desktop: "/hero/car-3.png",
    mobile: "/hero/mobile/car-3.png",
  },
  {
    desktop: "/hero/car-4.png",
    mobile: "/hero/mobile/car-4.png",
  },
  {
    desktop: "/hero/car-5.png",
    mobile: "/hero/mobile/car-5.png",
  },
];

const carBrands = [
  { logo: "/brands/toyota.svg" },
  { logo: "/brands/bmw.svg" },
  { logo: "/brands/mercedes.svg" },
  { logo: "/brands/honda.svg" },
  { logo: "/brands/lexus.svg" },
  { logo: "/brands/porsche.svg" },
  { logo: "/brands/ferrari.svg" },
  { logo: "/brands/lamborghini.svg" },
  { logo: "/brands/hyundai.svg" },
  { logo: "/brands/mclaren.svg" },
  { logo: "/brands/nissan.svg" },
  { logo: "/brands/ford.svg" },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-neutral-900 flex flex-col justify-between pt-24 pb-4 sm:pt-28">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={isMobile ? image.mobile : image.desktop}
              alt="Auto Shelter vehicle"
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                activeImage === index ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-30 flex-1 flex items-center justify-center my-auto py-8">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium border border-[var(--color-surface)]/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Elite Automotive Care & Sales
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            className="h1 font-medium tracking-tight text-[var(--color-surface)]"
          >
            Everything Your Car Needs,{" "}
            <span className="italic text-[var(--color-primary)]">All in</span>{" "}
            One{" "}
            <span className="italic text-[var(--color-primary)]">Place.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            className="text-slate-300 body-md max-w-xl leading-relaxed px-2 sm:px-0"
          >
            Whether you're buying your next vehicle, servicing your current
            one, or searching for genuine replacement parts.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto justify-center pt-2 px-4 sm:px-0"
          >
            <Link href="/services" className="w-full sm:w-auto">
              <Button className="w-full justify-center">
                Become a Member
              </Button>
            </Link>

            <Link href="/cars" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full justify-center"
              >
                Book a Service
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Brand Marquee */}
      <div className="relative z-30 w-full border-t border-[var(--color-surface)]/10 bg-black/20 backdrop-blur-md py-2.5 sm:py-4 overflow-hidden shrink-0 mt-auto">
        <motion.div
          className="flex items-center gap-6 sm:gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {[...carBrands, ...carBrands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-6 sm:gap-16 flex-shrink-0"
            >
              <div className="relative h-6 sm:h-10 w-14 sm:w-28 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt="Brand logo"
                  width={100}
                  height={32}
                  className="h-5 sm:h-8 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}