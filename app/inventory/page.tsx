import InventoryHero from "@/components/sections/inventory/InventoryHero";
import InventoryCatalogue from "@/components/sections/inventory/InventoryCatalogue";
import Footer from "@/components/layout/Footer";

export default function InventoryPage() {
  return (
    <main>
      <InventoryHero />
      <InventoryCatalogue />
      <Footer />
    </main>
  );
}