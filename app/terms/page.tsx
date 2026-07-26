import { Metadata } from "next";
import TermsAndConditions from "@/components/sections/TermsAndConditions";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Auto Shelter",
  description: "Terms of service and legal agreement for using Auto Shelter.",
};

export default function TermsPage() {
  return (
    <main>
      <TermsAndConditions />
      <Footer />
    </main>
  );
}