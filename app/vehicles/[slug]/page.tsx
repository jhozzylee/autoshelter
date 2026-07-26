import { notFound } from "next/navigation";
import Image from "next/image";

import Container from "@/components/ui/Container";
import { cars, Car } from "@/data/cars";
import Footer from "@/components/layout/Footer";
import VehicleGallery from "@/components/sections/cars/CarsGallery";
import CarImportCTA from "@/components/sections/cars/CarImportCTA";

interface CarPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export default async function CarPage({ params }: CarPageProps) {
  const { slug } = await params;

  const car: Car | undefined = cars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  const galleryImages =
    car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];

  return (
    <main className="bg-white text-neutral-900 overflow-hidden">
      {/* Editorial Dark Hero */}
      <section className="relative bg-neutral-950 text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-[var(--color-primary)]/10 blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

        <Container className="relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left: Text Details */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                {car.type} Concierge
              </div>

              <h1 className="h1 tracking-tight text-white leading-tight">
                {car.year} {car.brand}{" "}
                <span className="italic text-[var(--color-primary)]">
                  {car.model}
                </span>
              </h1>

              <p className="body-lg mt-6 text-neutral-300 leading-relaxed font-light">
                {car.description}
              </p>

              {car.price && (
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Est. Import Cost:
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    {car.price}
                  </span>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <CarImportCTA car={car} className="w-full sm:w-auto justify-center" />
              </div>
            </div>

            {/* Right: Wider Image Container */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] lg:aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl group">
                <Image
                  src={car.image}
                  alt={`${car.year} ${car.brand} ${car.model}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                        Verified Build
                      </p>
                      <p className="text-xs font-light text-neutral-300 mt-0.5">
                        {car.specifications.engine} • {car.specifications.transmission}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      {car.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Structured Technical Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Vehicle Overview
              </div>

              <h2 className="h2 tracking-tight text-neutral-900 leading-tight">
                Everything You Need to{" "}
                <span className="italic text-[var(--color-primary)]">
                  Know.
                </span>
              </h2>

              <p className="body-lg mt-6 text-neutral-500 font-light leading-relaxed">
                Handpicked for global import, this vehicle undergoes a rigorous multi-point inspection to ensure powertrain integrity, cosmetic perfection, and complete documentation before transit.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-8">
                  <h3 className="h4 font-semibold text-neutral-900 tracking-tight">
                    Key Specifications
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    FACTORY SPEC
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 border border-neutral-200/60 shadow-xs">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Engine
                    </p>
                    <p className="body-md font-semibold text-neutral-900 mt-1">
                      {car.specifications.engine}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-neutral-200/60 shadow-xs">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Transmission
                    </p>
                    <p className="body-md font-semibold text-neutral-900 mt-1">
                      {car.specifications.transmission}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-neutral-200/60 shadow-xs">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Mileage
                    </p>
                    <p className="body-md font-semibold text-neutral-900 mt-1">
                      {car.specifications.mileage}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 border border-neutral-200/60 shadow-xs">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      Capacity
                    </p>
                    <p className="body-md font-semibold text-neutral-900 mt-1">
                      {car.specifications.doors} • {car.specifications.seats}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full Interactive Vehicle Image Gallery */}
      <section className="pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Visual Inspection
              </div>
              <h2 className="h2 tracking-tight text-neutral-900">
                Vehicle Gallery
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              {galleryImages.length} HIGH-RES SHOTS
            </span>
          </div>

          <VehicleGallery
            images={galleryImages}
            title={`${car.year} ${car.brand} ${car.model}`}
            brand={car.brand}
          />
        </Container>
      </section>

      {/* Dark Action Banner */}
      <section className="pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 text-white px-6 py-20 text-center sm:px-12 lg:px-20 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/15 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Interested in this vehicle?
              </div>

              <h2 className="h2 tracking-tight text-white">
                Want to Import This{" "}
                <span className="italic text-[var(--color-primary)]">
                  Car?
                </span>
              </h2>

              <p className="body-lg mx-auto mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed">
                Let our team guide you through sourcing, compliance, and shipping logistics to bring this vehicle directly to your doorstep.
              </p>

              <div className="mt-10 flex justify-center">
                <CarImportCTA car={car} className="w-full sm:w-auto justify-center" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}