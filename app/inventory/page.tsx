import InventoryHero from "@/components/sections/inventory/InventoryHero";
import InventoryCatalogue from "@/components/sections/inventory/InventoryCatalogue";
import Footer from "@/components/layout/Footer";
import { client } from "@/sanity/lib/client";
import { INVENTORY_QUERY } from "@/sanity/lib/queries";

interface InventoryPageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function InventoryPage({ searchParams }: InventoryPageProps) {
  // 1. Await searchParams (Next.js 15+ requirement for dynamic routes)
  const resolvedParams = await searchParams;
  const initialCategory = resolvedParams.category || "All Parts";

  // 2. Fetch live inventory items directly from Sanity
  const products = await client.fetch(
    INVENTORY_QUERY, 
    {}, 
    { next: { tags: ["inventory"] } }
  );

  return (
    <main>
      <InventoryHero />
      {/* 3. Pass the category from the URL down to your client-side catalogue */}
      <InventoryCatalogue 
        initialProducts={products} 
        initialCategory={initialCategory} 
      />
      <Footer />
    </main>
  );
}