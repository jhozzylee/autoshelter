"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
  Explore: [
    { label: "Vehicles", href: "/vehicles" },
    { label: "Services", href: "/services" },
    { label: "Parts", href: "/parts" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Us", href: "/about" },
    { label: "How It Works", href: "/about" },
  ],
  Contact: [
    { label: "Contact Us", href: "/contact" },
    { label: "Book a Service", href: "/book-service" },
    { label: "Become a Member", href: "/membership" },
  ],
  Social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white pt-12 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-white/10">
      {/* Background Architectural Watermark */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none select-none text-[22vw] sm:text-[18vw] font-bold text-white/[0.02] tracking-tighter uppercase whitespace-nowrap z-0">
        AUTO SHELTER
      </div>

      <Container className="relative z-10">
        {/* Main Footer Content */}
        <div className="grid gap-10 sm:gap-12 pb-12 sm:pb-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/Logo.svg"
                  alt="Auto Shelter"
                  width={180}
                  height={60}
                  className="h-auto w-auto max-w-[140px] sm:max-w-[170px] brightness-0 invert"
                />
              </Link>

              <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed max-w-sm mt-4 sm:mt-6">
                Redefining modern automotive ownership through premium luxury curation, expert maintenance, and verified OEM components.
              </p>
            </div>

            {/* Location & Status Indicator */}
            <div className="mt-8 sm:mt-10 flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs tracking-wider uppercase text-neutral-400">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]" />
              </span>
              <span className="font-medium text-neutral-300">Lagos, Nigeria</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">Concierge Active</span>
            </div>
          </div>

          {/* Navigation Grid (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 pl-0 lg:pl-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col">
                <h3 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 mb-4 sm:mb-6">
                  {category}
                </h3>

                <ul className="space-y-3 sm:space-y-4">
                  {links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center text-xs sm:text-sm font-light text-neutral-300 transition-colors duration-300 hover:text-[var(--color-primary)]"
                          >
                            <span>{link.label}</span>
                            <span className="ml-1 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 text-xs">
                              ↗
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group inline-flex items-center text-xs sm:text-sm font-light text-neutral-300 transition-colors duration-300 hover:text-[var(--color-primary)]"
                          >
                            <span>{link.label}</span>
                            <span className="ml-1 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 text-xs">
                              →
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Legal Bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8 text-[11px] sm:text-xs font-light text-neutral-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Auto Shelter. Engineered with precision.
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}