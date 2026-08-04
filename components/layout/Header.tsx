// components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "@/components/ui/Button";
import CartDrawer from "@/components/ui/CartDrawer";
import { useCart } from "@/hooks/useCart";
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
  const { toggleCart, getTotalItems, isLoaded } = useCart();

  const totalItems = isLoaded ? getTotalItems() : 0;

  // Lock body scroll when mobile menu is active
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
    <>
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] border border-white/10"
                aria-label="Login"
              >
                <UserRound size={18} />
              </a>

              {/* Custom Luxury Tote Cart Button */}
              <button
                onClick={toggleCart}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/90 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] border border-white/10"
                aria-label="Shopping Cart"
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 6.5H15.5L14.2 16.5H3.8L2.5 6.5Z" />
                  <path d="M6 6.5V4.5C6 3.11929 7.11929 2 8.5 2V2C9.88071 2 11 3.11929 11 4.5V6.5" />
                </svg>

                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: PREMIUM_EASE }}
                      className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[var(--color-neutral)]"
                    />
                  )}
                </AnimatePresence>
              </button>

              <div className="hidden lg:block">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>

        {/* Mobile Nav Drawer panel below header */}
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
                <motion.div variants={contentVariants} className="pt-2 pb-2">
                  <Navigation onItemClick={() => setIsMenuOpen(false)} />
                </motion.div>

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

      {/* Cart Drawer Slide-over */}
      <CartDrawer />
    </>
  );
}