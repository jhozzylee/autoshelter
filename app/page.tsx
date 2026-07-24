import Hero from "@/components/sections/Hero";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Services from "@/components/sections/Services";
import VehicleCollection from "@/components/sections/VehicleCollection";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import PartsShowcase from "@/components/sections/PartsShowcase";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <Services />
       <VehicleCollection />
       <WhyUs />
       <Process />
       <PartsShowcase />
       <Testimonials />
       <FinalCTA />
       <Footer />
    </main>
  );
}