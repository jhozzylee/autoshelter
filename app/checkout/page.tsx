// app/checkout/page.tsx
import Footer from "@/components/layout/Footer";
import CheckoutSection from "@/components/sections/CheckoutSection";

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