"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { motion, AnimatePresence, Easing } from "framer-motion";
import { X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

export default function CartDrawer() {
  const router = useRouter();
  const {
    cart,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isLoaded,
  } = useCart();

  // Lock body scroll when cart drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  const totalPrice = isLoaded ? getTotalPrice() : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop Overlay with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Slide-over Dark Glass Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: PREMIUM_EASE }}
            className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-neutral-950/75 backdrop-blur-2xl text-white shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-60 h-60 bg-white/5 blur-[100px] pointer-events-none" />

            {/* Header with Frosted Border */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.02] backdrop-blur-md px-6 py-5">
              <div className="flex items-center gap-2.5">
                {/* Custom Luxury Tote Icon */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-white/90"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6.5H15.5L14.2 16.5H3.8L2.5 6.5Z" />
                    <path d="M6 6.5V4.5C6 3.11929 7.11929 2 8.5 2V2C9.88071 2 11 3.11929 11 4.5V6.5" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium tracking-tight text-white">Your Cart</h2>
                <span className="text-xs font-mono text-white/50">({cart.length})</span>
              </div>
              
              <button
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all duration-200 hover:bg-white/15 hover:border-white/20 hover:text-white"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items List */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {!isLoaded || cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/30 mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {/* Custom Luxury Tote Icon for Empty State */}
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 6.5H15.5L14.2 16.5H3.8L2.5 6.5Z" />
                      <path d="M6 6.5V4.5C6 3.11929 7.11929 2 8.5 2V2C9.88071 2 11 3.11929 11 4.5V6.5" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-white/90">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-xs text-white/50 max-w-xs font-light">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                  >
                    {/* Item Image */}
                    {item.image ? (
                      <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-xs text-white/40 font-light">
                        No image
                      </div>
                    )}

                    {/* Info & Actions */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-medium text-white line-clamp-1">
                          {item.title}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/40 hover:text-red-400 transition-colors p-1 -mr-1"
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="text-sm font-semibold text-white/90">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* Glass Quantity Controls */}
                      <div className="flex items-center gap-3 pt-1">
                        <div className="flex items-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-white/70 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-7 text-center text-xs font-mono font-medium text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-white/70 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout (Sticky Glass Card) */}
            {isLoaded && cart.length > 0 && (
              <div className="relative z-10 border-t border-white/10 bg-neutral-900/40 backdrop-blur-xl p-6 space-y-4 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
                <div className="space-y-2.5">
                  <div className="flex justify-between text-xs text-white/60 font-light">
                    <span>Subtotal</span>
                    <span className="font-mono text-white/90">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/60 font-light">
                    <span>Taxes & Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-white pt-3 border-t border-white/10">
                    <span>Total</span>
                    <span className="font-mono text-[var(--color-primary,#ffffff)]">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-2">
                  <Button
                    onClick={handleCheckout}
                    className="w-full justify-center py-3.5 text-base gap-2 group shadow-lg"
                  >
                    Proceed to Checkout
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>

                  <button
                    onClick={clearCart}
                    className="w-full text-center text-xs text-white/40 hover:text-white/80 transition-colors py-1 font-light"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}