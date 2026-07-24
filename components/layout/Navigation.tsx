"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Easing } from "framer-motion";
import MegaMenu from "./MegaMenu";
import { navigation } from "@/components/data/navigation";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  onItemClick?: () => void;
}

const LUXURY_EASE: Easing = [0.16, 1, 0.3, 1];

export default function Navigation({ onItemClick }: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  // Close menus and trigger optional parent callbacks
  const handleLinkClick = () => {
    setActiveMenu(null);
    setMobileExpanded(null);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className="w-full">
      <ul className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-10">
        {navigation.map((item) => {
          const hasSections = "sections" in item;
          const isHovered = activeMenu === item.label;
          const isMobileOpen = mobileExpanded === item.label;
          const href = "href" in item ? (item.href as string) : "#";

          return (
            <li
              key={item.label}
              className="relative w-full py-2 lg:w-auto lg:py-0"
              onMouseEnter={() => hasSections && setActiveMenu(item.label)}
              onMouseLeave={() => hasSections && setActiveMenu(null)}
            >
              {hasSections ? (
                <div>
                  {/* Link / Toggle Trigger */}
                  <div className="flex w-full items-center justify-between py-1 lg:w-auto lg:justify-start lg:gap-1.5">
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className="body-md font-medium tracking-wide text-[var(--color-surface)]/75 transition-colors duration-200 hover:text-[var(--color-surface)]"
                    >
                      {item.label}
                    </Link>

                    {/* Mobile Toggle Button */}
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="p-1 text-neutral-400 hover:text-white lg:hidden"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <motion.span
                        animate={{ rotate: isMobileOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: LUXURY_EASE }}
                        className="block"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    {/* Desktop Hover Arrow */}
                    <motion.span
                      animate={{ rotate: isHovered ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: LUXURY_EASE }}
                      className="pointer-events-none hidden text-neutral-400 lg:block"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </div>

                  {/* Desktop Mega Menu Dropdown Container */}
                  <div className="hidden lg:block">
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2, ease: LUXURY_EASE }}
                          className="fixed inset-x-0 top-full z-50 w-full"
                        >
                          <MegaMenu menu={item} onItemClick={handleLinkClick} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Submenu Accordion Slide */}
                  <div className="block lg:hidden">
                    <AnimatePresence>
                      {isMobileOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: LUXURY_EASE }}
                          className="overflow-hidden pl-4 pt-2"
                        >
                          <MegaMenu menu={item} onItemClick={handleLinkClick} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="body-md block w-full font-medium tracking-wide text-[var(--color-surface)]/75 transition-colors duration-200 hover:text-[var(--color-surface)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}