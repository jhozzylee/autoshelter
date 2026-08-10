// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Chatbot from "@/components/ui/Chatbot";

import Header from "@/components/layout/Header";
import CartDrawer from "@/components/ui/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://auto-shelter.com"), // Replace with your production domain
  title: {
    default: "Auto Shelter | Premium Vehicle Sales, Parts & Expert Maintenance",
    template: "%s | Auto Shelter",
  },
  description:
    "Your trusted destination for certified pre-owned vehicle sales, OEM auto parts sourcing, and expert automotive maintenance services.",
  keywords: ["Auto Repair", "Car Sales", "OEM Auto Parts", "Vehicle Diagnostics", "Auto Shelter", "Mechanic"],
  authors: [{ name: "Auto Shelter" }],
  creator: "Zi Creates",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auto-shelter.com",
    title: "Auto Shelter | Premium Automotive Services & Inventory",
    description: "Certified vehicle sales, top-tier OEM parts, and expert maintenance services.",
    siteName: "Auto Shelter",
    images: [
      {
        url: "/og-image.jpg", // Uses your shared brand image universally
        width: 1200,
        height: 630,
        alt: "Auto Shelter Automotive Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Shelter",
    description: "Premium vehicle sales, parts, and expert service.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="relative min-h-screen flex flex-col bg-neutral-900 overflow-x-hidden">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Floating Widgets */}
        <WhatsAppButton />
        <Chatbot />

        {/* Cart Drawer Overlay - Rendered last to sit on top of everything */}
        <CartDrawer />
      </body>
    </html>
  );
}