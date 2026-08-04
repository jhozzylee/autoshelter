"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import InventoryFilters from "./InventoryFilters";
import ProductCard from "./ProductCard";

interface InventoryCatalogueProps {
  initialProducts: any[];
}

export default function InventoryCatalogue({ initialProducts }: InventoryCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState("All Parts");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        activeCategory === "All Parts" ||
        product.category === activeCategory;

      const searchTerm = searchQuery.toLowerCase();

      const matchesSearch =
        product.name?.toLowerCase().includes(searchTerm) ||
        product.brand?.toLowerCase().includes(searchTerm) ||
        product.category?.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, activeCategory, searchQuery]);

  // Reset visible pagination count whenever filters change
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
      <InventoryFilters
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <Container>
          {/* Section Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200/80 pb-6 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-200 rounded-full bg-neutral-50 text-neutral-700 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Our Inventory
              </div>

              <h2 className="h2 tracking-tight text-neutral-950">
                Find the Right{" "}
                <span className="italic text-[var(--color-primary)]">
                  Part.
                </span>
              </h2>
            </div>
          </div>

          {/* Product Grid Layout - 2 Columns on Mobile, scaling up smoothly */}
          {displayedProducts.length > 0 ? (
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product._id || product.slug}
                  product={product}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 bg-neutral-50/60 px-6 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <h3 className="text-base font-semibold text-neutral-950">
                No parts found
              </h3>

              <p className="mt-1 max-w-sm text-sm text-neutral-500 font-light leading-relaxed">
                We couldn't find anything matching your criteria. Try searching for a different part or clearing your search filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All Parts");
                  setSearchQuery("");
                  setVisibleCount(8);
                }}
                className="mt-6 text-xs uppercase tracking-widest font-semibold text-[var(--color-primary)] hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Load More Action Button */}
          {visibleCount < filteredProducts.length && (
            <div className="mt-14 flex justify-center">
              <Button
                variant="ghost"
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                Load More Parts 
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}