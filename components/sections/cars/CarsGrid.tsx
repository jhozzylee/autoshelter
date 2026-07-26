import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { cars } from "@/data/cars";

export default function CarsGrid() {
  return (
    <section className="bg-slate-50 py-12 sm:py-20 lg:py-32 text-neutral-900 overflow-hidden">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.slug}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 flex flex-col transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-neutral-300"
            >
              <Link href={`/vehicles/${car.slug}`} className="block h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100">
                  <Image
                    src={car.image}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay for soft image transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md border border-neutral-200/60 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-neutral-800 shadow-xs">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-primary)] mr-1.5 animate-pulse" />
                      {car.type}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h2 className="h4 text-neutral-900 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {car.year} {car.brand} {car.model}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100">
                    <div>
                      <p className="body-sm text-neutral-500 font-mono text-xs">
                        {car.specifications.doors} · {car.specifications.seats}
                      </p>
                      {car.price && (
                        <p className="body-md font-semibold text-[var(--color-primary)] mt-1">
                          {car.price}
                        </p>
                      )}
                    </div>

                    {/* SVG Arrow Button */}
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)]">
                      <Image
                        src="/icons/arrow.svg"
                        alt="Arrow"
                        width={14}
                        height={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:brightness-0 group-hover:invert sm:w-4 sm:h-4"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}