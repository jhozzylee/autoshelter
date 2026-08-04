"use client";

import { useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import InventoryFilters from "./InventoryFilters";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  initialProducts: any[];
}

export default function ProductGrid({ initialProducts }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("All Parts");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [viewMode, setViewMode] = useState<"grid" | "dense">("grid");

  // Filter products by active category and search term
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All Parts" ||
        product.category?.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, activeCategory, searchQuery]);

  // Reset pagination when category or search changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(8);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(8);
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      {/* Sticky Filter & Search Bar */}
      <InventoryFilters
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <Container>
          {/* Section Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-200 rounded-full bg-neutral-50 text-neutral-700 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Catalog Overview
              </div>

              <h2 className="h2 tracking-tight text-neutral-950">
                Find the Right{" "}
                <span className="italic text-[var(--color-primary)]">
                  Part.
                </span>
              </h2>
            </div>

            {/* Controls: Counter & Layout Toggle */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                SHOWING {displayedProducts.length} OF {filteredProducts.length}
              </span>

              <div className="hidden md:flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50/80 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-400 hover:text-neutral-900"
                  }`}
                  aria-label="Grid view"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("dense")}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === "dense"
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-400 hover:text-neutral-900"
                  }`}
                  aria-label="Dense view"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid Layout */}
          {displayedProducts.length > 0 ? (
            <div
              className={`grid gap-5 xl:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {displayedProducts.map((product) => (
                <ProductCard key={product._id || product.slug} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/50 px-6 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-neutral-950">
                No inventory matches found
              </h3>
              <p className="mt-1 max-w-sm text-sm text-neutral-500 font-light leading-relaxed">
                We couldn't find anything matching "{searchQuery}". Try searching for another part name or clearing active filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Parts");
                  setSearchQuery("");
                }}
                className="mt-6 text-xs uppercase tracking-widest font-semibold text-[var(--color-primary)] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Load More Trigger */}
          {visibleCount < filteredProducts.length && (
            <div className="mt-14 flex justify-center">
              <Button
                variant="ghost"
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="border border-neutral-300 bg-neutral-50 text-neutral-900 hover:bg-neutral-950 hover:text-white hover:border-neutral-950"
              >
                Load More Parts ({filteredProducts.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}