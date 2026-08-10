import type { Metadata } from "next";
import CarsHero from "@/components/sections/cars/CarsHero";
import CarsGrid from "@/components/sections/cars/CarsGrid";
import CarCTA from "@/components/sections/cars/CarsCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Pre-Owned & Imported Vehicle Sales",
  description: "Browse our exclusive inventory of certified pre-owned vehicles, luxury imports, and custom pre-order options at Auto Shelter.",
};

export default function CarsPage() {
  return (
    <main>
      <CarsHero />
      <CarsGrid />
      <CarCTA />
      <Footer />
    </main>
  );
}