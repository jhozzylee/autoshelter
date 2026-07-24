"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import { MegaMenuData } from "@/components/data/navigation";
import { ChevronDown } from "lucide-react";

interface MegaMenuProps {
  menu: MegaMenuData;
  onItemClick?: () => void;
}

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const accordionVariants: Variants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: PREMIUM_EASE },
  },
};

export default function MegaMenu({ menu, onItemClick }: MegaMenuProps) {
  const [openSectionMobile, setOpenSectionMobile] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSectionMobile((prev) => (prev === title ? null : title));
  };

  return (
    <div className="w-full">
      {/* Mobile Nested Accordion Container */}
      <div className="flex flex-col lg:hidden">
        <div className="ml-2 flex flex-col gap-2 border-l border-white/10 pl-4 py-2">
          {menu.sections.map((section) => {
            const isSectionOpen = openSectionMobile === section.title;

            return (
              <div key={section.title} className="flex flex-col">
                {/* Nested Category Toggle Button */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between py-2 text-left"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-surface)]/80">
                    {section.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isSectionOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: PREMIUM_EASE }}
                  >
                    <ChevronDown
                      size={14}
                      className="text-[var(--color-surface)]/80"
                    />
                  </motion.span>
                </button>

                {/* Nested Items List Animated */}
                <AnimatePresence initial={false}>
                  {isSectionOpen && (
                    <motion.div
                      key={section.title}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2.5 pb-3 pl-2 pt-1">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={onItemClick}
                              className="body-sm block text-[var(--color-surface-dark)]/80 transition-colors duration-200 hover:text-[var(--color-surface)]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Content Grid */}
      <div className="hidden lg:block w-full border-b border-t border-white/10 bg-[var(--color-neutral)] backdrop-blur-xl shadow-2xl shadow-black/50 px-16 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-12">
          {menu.sections.map((section) => (
            <div key={section.title} className="space-y-5">
              <h4 className="body-sm font-bold uppercase tracking-wider text-[var(--color-primary)]">
                {section.title}
              </h4>

              <ul className="space-y-3.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className="body-sm block text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[var(--color-surface)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}