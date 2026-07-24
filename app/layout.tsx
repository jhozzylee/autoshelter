// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Chatbot from "@/components/ui/Chatbot";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "Auto Shelter",
    template: "%s | Auto Shelter",
  },
  description:
    "Professional automobile care and maintenance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="relative min-h-screen flex flex-col bg-neutral-900 overflow-x-hidden">
        {/* Header floats on top without occupying flex height */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        
        <main className="flex-1 w-full">
          {children}
           <WhatsAppButton />
           <Chatbot />
        </main>
      </body>
    </html>
  );
}