import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";

export const useCart = () => {
  const [hasHydrated, setHasHydrated] = useState(false);
  const store = useCartStore();

  useEffect(() => {
    // Manually trigger rehydration on mount (client-side only)
    useCartStore.persist.rehydrate();
    setHasHydrated(true);
  }, []);

  return {
    ...store,
    isLoaded: hasHydrated,
  };
  
};