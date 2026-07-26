import { Metadata } from "next";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Inventory",
  description: "Learn how we handle and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}