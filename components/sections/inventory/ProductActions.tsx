// components/sections/inventory/ProductActions.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Button from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    price: string | number;
    image: string;
    slug?: string;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const router = useRouter();
  const { addItem, openCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Safely extract numeric price if passed as a string like "$120.00"
  const numericPrice =
    typeof product.price === "number"
      ? product.price
      : parseFloat(product.price.replace(/[^0-9.-]+/g, "")) || 0;

  const cartPayload = {
    id: product.id,
    title: product.name,
    price: numericPrice,
    image: product.image,
  };

  const handleAddToCart = () => {
    addItem(cartPayload);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
    openCart();
  };

  const handleBuyNow = () => {
    addItem(cartPayload);
    router.push("/checkout");
  };

  return (
    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
      {/* Primary Action: Add to Cart */}
      <Button
        variant="primary"
        onClick={handleAddToCart}
        className="w-full sm:flex-1 justify-center py-3.5 px-4 text-sm sm:text-base font-medium transition-all gap-2 min-w-0 whitespace-nowrap"
      >
        {isAdded ? (
          <>
            <Check size={18} className="shrink-0" />
            <span>Added</span>
          </>
        ) : (
          <>
            {/* Custom Luxury Tote Vector matching Header & Drawer */}
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 6.5H15.5L14.2 16.5H3.8L2.5 6.5Z" />
              <path d="M6 6.5V4.5C6 3.11929 7.11929 2 8.5 2V2C9.88071 2 11 3.11929 11 4.5V6.5" />
            </svg>
            <span className="truncate">Add to Cart</span>
          </>
        )}
      </Button>

      {/* Secondary Action: Direct Buy Now */}
      <Button
        variant="secondary"
        onClick={handleBuyNow}
        className="w-full sm:flex-1 justify-center py-3.5 px-4 text-sm sm:text-base font-medium transition-all gap-2 group min-w-0 whitespace-nowrap"
      >
        <span>Buy Now</span>
        <ArrowRight
          size={16}
          className="shrink-0 transition-transform group-hover:translate-x-1"
        />
      </Button>
    </div>
  );
}