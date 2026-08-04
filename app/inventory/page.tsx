import InventoryHero from "@/components/sections/inventory/InventoryHero";
import InventoryCatalogue from "@/components/sections/inventory/InventoryCatalogue";
import Footer from "@/components/layout/Footer";
import { client } from "@/sanity/lib/client";
import { INVENTORY_QUERY } from "@/sanity/lib/queries";

export default async function InventoryPage() {
  // Fetch live inventory items directly from Sanity
  const products = await client.fetch(INVENTORY_QUERY);

  return (
    <main>
      <InventoryHero />
      {/* Pass the Sanity products down to your catalogue/grid section */}
      <InventoryCatalogue initialProducts={products} />
      <Footer />
    </main>
  );
}