import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import AboutPage from "@/components/sections/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Auto Shelter, our mission, our commitment to top-tier automotive maintenance, and our expert team.",
};

export default function About() {
  return (
    <main>
      <AboutPage />
      <Footer />
    </main>
  );
}