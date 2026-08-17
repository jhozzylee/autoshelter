import dynamic from "next/dynamic";
import Footer from "@/components/layout/Footer";

// Dynamically import CheckoutSection with SSR disabled to prevent browser-only libraries (like Paystack) from running on the server
const CheckoutSection = dynamic(
  () => import("@/components/sections/CheckoutSection"),
  { ssr: false }
);

export const metadata = {
  title: "Checkout | Store",
  description: "Complete your order securely.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-neutral)]">
      <CheckoutSection />
      <Footer />
    </main>
  );
}