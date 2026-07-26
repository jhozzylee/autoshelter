import CarsHero from "@/components/sections/cars/CarsHero";
import CarsGrid from "@/components/sections/cars/CarsGrid";
import CarCTA from "@/components/sections/cars/CarsCTA";
import Footer from "@/components/layout/Footer";

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