import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CarCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 text-white px-6 py-20 text-center sm:px-12 lg:px-20 shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/15 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Custom Sourcing & Concierge
            </div>

            <h2 className="h2 tracking-tight text-white leading-tight">
              Can't Find What You're{" "}
              <span className="italic text-[var(--color-primary)]">
                Looking For?
              </span>
            </h2>

            <p className="body-lg mx-auto mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed">
              If you don't see the vehicle you're looking for, tell us what you
              have in mind. From specific makes and models to rare factory
              specifications, our team will source and import the exact vehicle for you.
            </p>

            <div className="mt-10 flex justify-center">
              <Link href="/request" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto justify-center">
                  Request a Vehicle
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}