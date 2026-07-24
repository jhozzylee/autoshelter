import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { services, Service } from "@/data/services";
import Footer from "@/components/layout/Footer";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes at build time for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service: Service | undefined = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white text-neutral-900 overflow-hidden">
      {/* Dark Luxury Hero Header */}
      <section className="relative bg-neutral-950 text-white py-24 lg:py-32 overflow-hidden">
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[var(--color-primary)]/10 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-50" />

        <Container className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Text Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Service {service.number}
              </div>

              <h1 className="h1 tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="body-lg mt-8 max-w-xl text-neutral-300 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="mt-10">
                <Link
                  href="https://www.aribooking.utilitymobileapps.com/index.html?shopID=5e8614be6498950015ed765a"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button>Book This Service</Button>
                </Link>
              </div>
            </div>

            {/* Image Column - Architectural Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Integrated Bottom Caption Bar */}
                <div className="absolute inset-x-0 bottom-0 p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                        Auto Shelter Care
                      </p>
                      <p className="text-xs font-light text-neutral-300 mt-0.5">
                        Engineered for ultimate precision and reliability.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      {service.number}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Details Breakdown */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            {/* Overview Left Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                What To Expect
              </div>

              <h2 className="h2 tracking-tight text-neutral-900 leading-tight">
                Professional Care for Your{" "}
                <span className="italic text-[var(--color-primary)]">
                  Vehicle.
                </span>
              </h2>

              <p className="body-lg mt-6 text-neutral-500 font-light leading-relaxed">
                Our team takes the time to understand your vehicle's specific
                requirements, using advanced diagnostics and technical expertise
                to provide solutions built for long-term performance.
              </p>
            </div>

            {/* Checklist Right Column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-8">
                  <h3 className="h4 font-semibold text-neutral-900 tracking-tight">
                    What's Included
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {service.includes.length} KEY DELIVERABLES
                  </span>
                </div>

                <ul className="space-y-4">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="group flex items-start gap-4 rounded-2xl bg-white p-5 border border-neutral-200/60 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-semibold mt-0.5">
                        ✓
                      </span>
                      <span className="body-md text-neutral-700 font-normal leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Booking CTA Banner */}
      <section className="pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 text-white px-6 py-20 text-center sm:px-12 lg:px-20 shadow-2xl">
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/15 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Schedule Your Service
              </div>

              <h2 className="h2 tracking-tight text-white">
                Ready to Take Care of Your{" "}
                <span className="italic text-[var(--color-primary)]">
                  Vehicle?
                </span>
              </h2>

              <p className="body-lg mx-auto mt-6 max-w-2xl text-neutral-300 font-light leading-relaxed">
                Book your {service.title.toLowerCase()} service today and let our
                expert team maintain your vehicle's performance and peace of
                mind.
              </p>

              <div className="mt-10 flex justify-center">
                <Link
                  href="https://www.aribooking.utilitymobileapps.com/index.html?shopID=5e8614be6498950015ed765a"
                  className="w-full sm:w-auto"
                >
                  <Button>Book This Service</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}