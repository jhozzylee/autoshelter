"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "@/components/ui/Button";
import { UserRound, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: PREMIUM_EASE,
    },
  },
};

const contentVariants: Variants = {
  closed: { opacity: 0, y: 15 },
  open: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASE,
      delay: 0.1 + index * 0.08,
    },
  }),
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--color-neutral)] text-[var(--color-surface)] backdrop-blur-md">
      <Container>
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile Left: Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo: Centered on Mobile, Left-aligned on Desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Right & Desktop Actions */}
          <div className="flex items-center gap-4">
            {/* User Login Icon (Primary entry on mobile & desktop) */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              aria-label="Login"
            >
              <UserRound size={18} />
            </button>

            {/* CTA Button (Desktop only) */}
            <div className="hidden lg:block">
              <Button>Get Quote</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-0 top-[80px] z-50 h-[calc(100dvh-80px)] overflow-y-auto border-t border-white/10 bg-[var(--color-neutral)] lg:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between py-8">
              {/* Mobile Navigation Links */}
              <motion.div
                custom={0}
                variants={contentVariants}
                className="flex flex-col gap-6"
              >
                <Navigation onItemClick={() => setIsMenuOpen(false)} />
              </motion.div>

              {/* Mobile Bottom CTA */}
              <motion.div
                custom={1}
                variants={contentVariants}
                className="my-6 border-t border-white/10 pt-6"
              >
                <Button className="w-full justify-center py-3.5 text-base">
                  Get Quote
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}