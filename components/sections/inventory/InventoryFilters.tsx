"use client";

import Container from "@/components/ui/Container";

const categories = [
 "All Parts",
  "Filters",
  "Brakes",
  "Suspension",
  "Engine Parts",
  "Cooling System",
  "Wheels",
  "Electrical",
  "Exterior",
  "Accessories",
];

interface InventoryFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function InventoryFilters({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: InventoryFiltersProps) {
  return (
    <section className="sticky top-0 z-30 border-y border-neutral-200/80 bg-white/80 backdrop-blur-md py-5 sm:py-6 transition-all">
      <Container>
        <div className="flex flex-col-reverse gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Categories Pill Navigation (Left) */}
          <div className="flex min-w-0 items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none [mask-image:linear-gradient(to_right,black_92%,transparent_100%)]">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "border-[var(--color-primary)] bg-neutral-950 text-white shadow-sm"
                      : "border-neutral-200/80 bg-neutral-50/60 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    )}
                    {category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Container (Right) */}
          <div className="relative w-full lg:max-w-md">
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by part name or specification..."
              className="w-full rounded-full border border-neutral-200 bg-neutral-50/80 px-5 py-3 pr-12 text-sm text-neutral-900 outline-none transition-all duration-300 placeholder:text-neutral-400 placeholder:font-light focus:border-[var(--color-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary)]/10"
            />

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-4-4" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}