"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ServicesCTA() {
  return (
    <section className="pb-24 lg:pb-32 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 text-white px-6 py-20 text-center sm:px-12 lg:px-20 shadow-2xl">
          {/* Ambient Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Need a Hand?
            </div>

            {/* Headline */}
            <h2 className="h2 tracking-tight text-white">
              Not Sure What Your Vehicle{" "}
              <span className="italic text-[var(--color-primary)]">Needs?</span>
            </h2>

            {/* Description */}
            <p className="body-lg mx-auto mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed">
              Tell us what is going on with your vehicle during booking, and our
              expert team will assess and guide you toward the right solution.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link href="/book-service" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full px-8 py-4 shadow-lg shadow-[var(--color-primary)]/20">
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}