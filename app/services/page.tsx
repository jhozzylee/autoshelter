import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesCTA from "@/components/sections/services/ServicesCTA";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Professional Auto Services & Diagnostics",
  description: "Explore our expert vehicle maintenance, precision diagnostics, engine repair, and specialized automotive services at Auto Shelter.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <ServicesFAQ />
      <ServicesCTA />
      <Footer />
    </main>
  );
}