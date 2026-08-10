"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";

export default function AriBookingWidget() {
  // Listen for the dynamic height resize message from the ARI iframe script
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "ari-booking-resize") {
        const iframe = document.getElementById("ari-booking") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${e.data.height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-neutral-50 text-neutral-900 pt-24 sm:pt-28 py-32 lg:py-40">
      {/* Soft Ambient Glow Background */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[140px]" />

      <Container>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-600 mb-4 backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Online Dispatch Desk
          </div>

          <h1 className="h1 tracking-tight text-neutral-950">
            Schedule Your <span className="italic font-light text-[var(--color-primary)]">Service Appointment.</span>
          </h1>

          <p className="body-md mt-4 text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
            Select your required diagnostics, maintenance, or repair slot directly through our secure scheduling portal below.
          </p>
        </div>

        {/* Widget Container */}
        <div className="mt-12 mx-auto max-w-4xl relative z-10 rounded-3xl border border-neutral-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-neutral-200/50 backdrop-blur-xl">
          <div 
            id="ari-booking-container" 
            className="w-full mx-auto"
            style={{ maxWidth: "964px" }}
          >
            <iframe
              id="ari-booking"
              src="https://portal.ari.app/booking?FBProject=ARI&shopID=5e8614be6498950015ed765a&version=v.16.1.40&embed=true"
              style={{ width: "100%", border: "none", borderRadius: "12px", minHeight: "500px" }}
              allow="microphone"
              loading="lazy"
              title="Book an Appointment"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}