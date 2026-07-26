import { Metadata } from "next";
import RequestForm from "@/components/sections/RequestForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Request Vehicle Importation | Auto Shelter",
  description: "Custom vehicle procurement, international shipping, and customs clearance services.",
};

export default function ImportPage() {
  return (
    <main>
      <RequestForm />
      <Footer />
    </main>
  );
}