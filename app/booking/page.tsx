import AriBookingWidget from "@/components/sections/booking/AriBookingWidget";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Book a Service | Auto Shelter",
  description: "Schedule your vehicle maintenance, repairs, or diagnostics appointment online.",
};

export default function BookingPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <AriBookingWidget />
      <Footer />
    </main>
  );
}