import Container from "@/components/ui/Container";

export default function InventoryHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white py-24 sm:py-32 lg:py-40">
      {/* Ambient Radial Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[var(--color-primary)]/10 blur-[150px] pointer-events-none" />

      {/* Subtle Micro-Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          {/* Glassmorphism Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Genuine Parts & Components
          </div>

          {/* Heading */}
          <h1 className="h1 tracking-tight text-white leading-tight">
            The Right Parts{" "}
            <br className="hidden sm:inline" />
            Keep You <span className="italic text-[var(--color-primary)]">Moving.</span>
          </h1>

          {/* Subtext */}
          <p className="body-lg mx-auto mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed">
            From essential maintenance components to specialized replacement parts,
            explore quality automotive inventory curated to keep your vehicle performing
            at factory standards.
          </p>
        </div>
      </Container>
    </section>
  );
}