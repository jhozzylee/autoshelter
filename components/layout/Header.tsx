"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "@/components/ui/Button";
import { UserRound, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import Link from "next/link";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "calc(100dvh - 80px)",
    transition: {
      duration: 0.4,
      ease: PREMIUM_EASE,
    },
  },
};

const contentVariants: Variants = {
  closed: { opacity: 0, y: 10 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.1,
      ease: PREMIUM_EASE,
    },
  },
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile drawer is active
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
          {/* Mobile Left: Icon Morph Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] lg:hidden overflow-hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: PREMIUM_EASE }}
                  className="absolute"
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: PREMIUM_EASE }}
                  className="absolute"
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Logo: Stays static in the header bar */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://portal.ari.app/auth/login"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              aria-label="Login"
            >
              <UserRound size={18} />
            </a>

            <div className="hidden lg:block">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Nav Drawer panel below fixed header */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-0 top-[80px] z-40 overflow-y-auto bg-[var(--color-neutral)] border-t border-white/10 lg:hidden"
          >
            <Container className="flex flex-col py-6">
              <motion.div
                variants={contentVariants}
                className="pt-2 pb-2"
              >
                <Navigation onItemClick={() => setIsMenuOpen(false)} />
              </motion.div>

              {/* Positioned slightly lower using mt-8 and pt-6 */}
              <motion.div
                variants={contentVariants}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center py-3.5 text-base">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}