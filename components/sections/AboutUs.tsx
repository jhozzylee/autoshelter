"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

const elementVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: PREMIUM_EASE,
      delay: index * 0.08,
    },
  }),
};

const services = [
  {
    num: "01",
    title: "Vehicles",
    description:
      "We help customers find quality vehicles suited to their needs, lifestyles, and journeys.",
  },
  {
    num: "02",
    title: "Genuine Parts",
    description:
      "We import and supply replacement parts and essential automotive components to maintain performance and reliability.",
  },
  {
    num: "03",
    title: "Diagnostics",
    description:
      "Our diagnostic services help identify vehicle issues and provide the insight needed for informed decisions.",
  },
  {
    num: "04",
    title: "Maintenance & Repairs",
    description:
      "From routine servicing to complex repairs, our team provides technical support and expertise.",
  },
  {
    num: "05",
    title: "Engineering",
    description:
      "Our engineering capabilities allow us to approach automotive challenges with deep technical knowledge.",
  },
  {
    num: "06",
    title: "Consultations",
    description:
      "Professional guidance for vehicle owners when understanding options and planning their next step.",
  },
];

const commitments = [
  {
    title: "Quality",
    description:
      "From the vehicles we offer to the parts and services we provide, we believe customers deserve solutions they can depend on.",
  },
  {
    title: "Expertise",
    description:
      "Automotive problems require more than quick fixes. We combine technical knowledge, experience, and practical understanding.",
  },
  {
    title: "Trust",
    description:
      "Every interaction is an opportunity to build a lasting relationship. We aim to make our customers feel informed and confident.",
  },
  {
    title: "Long-Term Support",
    description:
      "We are here for more than the initial purchase. Our goal is to support vehicle owners throughout the life of their vehicles.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900 overflow-hidden">
      {/* Hero Section (Centered Typographic Layout) */}
<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-neutral-950 text-white py-28 lg:py-36">
  {/* Ambient Radial Glow & Grid pattern */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[var(--color-primary)]/10 blur-[140px] pointer-events-none" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-50" />

  <Container className="relative z-10">
    <motion.div
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-3xl text-center flex flex-col items-center"
    >
      <motion.div
        custom={0}
        variants={elementVariants}
        className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
        About Auto Shelter
      </motion.div>

      <motion.h1
        custom={1}
        variants={elementVariants}
        className="h1 tracking-tight text-white leading-tight"
      >
        More Than a Place <br />
        to Buy a{" "}
        <span className="italic text-[var(--color-primary)]">Car.</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={elementVariants}
        className="body-lg mt-8 max-w-2xl text-neutral-300 leading-relaxed font-light"
      >
        The right automotive experience should not end when you drive away.
        Auto Shelter is built to support you throughout the complete journey
        of vehicle ownership.
      </motion.p>
    </motion.div>
  </Container>
</section>
      {/* Our Story Section */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-center gap-16 lg:grid-cols-2"
          >
            <div>
              <motion.div
                custom={0}
                variants={elementVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Our Story
              </motion.div>

              <motion.h2
                custom={1}
                variants={elementVariants}
                className="h2 tracking-tight text-neutral-900"
              >
                Built Around the Complete{" "}
                <span className="italic text-[var(--color-primary)]">
                  Automotive Journey.
                </span>
              </motion.h2>

              <div className="mt-8 space-y-6 text-neutral-600 body-lg leading-relaxed font-light">
                <motion.p custom={2} variants={elementVariants}>
                  Auto Shelter Limited originally started out as a car dealership
                  but has now diversified into other areas of the automobile
                  industry, including the importation and sale of parts,
                  engineering, diagnostics, consultations, maintenance, and
                  repairs.
                </motion.p>

                <motion.p custom={3} variants={elementVariants}>
                  Over time, we have grown beyond vehicle sales to become a
                  broader automotive company serving the many needs that come
                  with owning and maintaining a vehicle.
                </motion.p>

                <motion.p custom={4} variants={elementVariants}>
                  From helping you find the right vehicle to providing the parts,
                  expertise, and technical support needed to keep it performing
                  at its best, we bring essential automotive services together
                  under one roof.
                </motion.p>
              </div>
            </div>

            {/* Story Image Showcase */}
            <motion.div
  custom={3}
  variants={elementVariants}
  className="relative"
>
  {/* Main Image Frame */}
  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
    <Image
      src="/about-story.jpg"
      alt="Auto Shelter automotive services"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
    />
    
    {/* Subtle Vignette Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

    {/* Top Right Floating Badge */}
    <div className="absolute top-6 right-6">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium border border-white/20 rounded-full bg-black/40 backdrop-blur-md text-white">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
        Ecosystem
      </span>
    </div>

    {/* Integrated Bottom Editorial Caption Bar */}
    <div className="absolute inset-x-0 bottom-0 p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="flex items-center justify-between text-white">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Full Service Ecosystem
          </p>
          <p className="text-sm font-light text-neutral-300 mt-1">
            Engineered for vehicle owners who value long-term reliability.
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400">01 / 03</span>
      </div>
    </div>
  </div>

  {/* Subtle Layered Outline Accent behind the card */}
  <div className="absolute -inset-2 border border-neutral-200/60 rounded-3xl -z-10 pointer-events-none hidden sm:block" />
</motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Automotive Journey / Approach */}
      <section className="bg-neutral-50 border-y border-neutral-200 py-24 lg:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              custom={0}
              variants={elementVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-white text-neutral-700 mb-6 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Our Approach
            </motion.div>

            <motion.h2
              custom={1}
              variants={elementVariants}
              className="h2 tracking-tight text-neutral-900"
            >
              Your Journey Does Not End When You{" "}
              <span className="italic text-[var(--color-primary)]">Drive Away.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={elementVariants}
              className="body-lg mt-6 text-neutral-500 leading-relaxed font-light"
            >
              Buying a vehicle is only the beginning. Every vehicle owner
              eventually needs maintenance, parts, diagnostics, repairs, or expert
              advice. Auto Shelter exists to support customers through all of
              these stages.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {[
              {
                step: "01",
                title: "Find Your Vehicle",
                desc: "Find quality vehicles suited to your needs, lifestyle, and journey.",
              },
              {
                step: "02",
                title: "Keep It Performing",
                desc: "Access professional maintenance, diagnostics, engineering, and repair services.",
              },
              {
                step: "03",
                title: "Get the Right Support",
                desc: "Find genuine parts and receive expert guidance whenever you need it.",
              },
            ].map((item, idx) => (
              <motion.article
                key={item.step}
                custom={idx}
                variants={elementVariants}
                className="group relative rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span className="text-4xl font-light text-[var(--color-primary)] tracking-tight">
                  {item.step}
                </span>

                <h3 className="h4 mt-6 text-neutral-900 font-semibold">
                  {item.title}
                </h3>

                <p className="body-md mt-4 text-neutral-500 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="bg-neutral-950 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[var(--color-primary)]/10 blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              custom={0}
              variants={elementVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/15 rounded-full bg-black/40 backdrop-blur-md text-neutral-300 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Our Vision
            </motion.div>

            <motion.h2
              custom={1}
              variants={elementVariants}
              className="h2 tracking-tight text-white"
            >
              Creating a Complete Automotive{" "}
              <span className="italic text-[var(--color-primary)]">
                One-Stop Shop.
              </span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={elementVariants}
              className="body-lg mt-8 text-neutral-300 leading-relaxed max-w-3xl mx-auto font-light"
            >
              To create an automobile one-stop shop and an enabling environment
              for vehicle owners to share experiences anchored on utmost
              customer satisfaction from the time of purchase of vehicles
              through to maintenance and sale.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* What We Do Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              custom={0}
              variants={elementVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              What We Do
            </motion.div>

            <motion.h2
              custom={1}
              variants={elementVariants}
              className="h2 tracking-tight text-neutral-900"
            >
              Everything Your Vehicle{" "}
              <span className="italic text-[var(--color-primary)]">Needs.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={elementVariants}
              className="body-lg mt-6 text-neutral-500 leading-relaxed font-light"
            >
              From the vehicle you drive to the parts that keep it running, our
              services are designed to support every stage of vehicle ownership.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                custom={index}
                variants={elementVariants}
                className="group relative rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8 transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-neutral-400">
                    {service.num}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-[var(--color-primary)] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <h3 className="h4 text-neutral-900 font-semibold">
                  {service.title}
                </h3>

                <p className="body-md mt-4 text-neutral-500 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Commitment Section */}
      <section className="bg-neutral-50 border-t border-neutral-200 py-24 lg:py-32">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              custom={0}
              variants={elementVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-white text-neutral-700 mb-6 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Our Commitment
            </motion.div>

            <motion.h2
              custom={1}
              variants={elementVariants}
              className="h2 tracking-tight text-neutral-900"
            >
              Built on What{" "}
              <span className="italic text-[var(--color-primary)]">Matters.</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={elementVariants}
              className="body-lg mt-6 text-neutral-500 leading-relaxed font-light"
            >
              Every part of the Auto Shelter experience is built around helping
              vehicle owners make confident decisions and receive dependable
              support.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {commitments.map((commitment, index) => (
              <motion.article
                key={commitment.title}
                custom={index}
                variants={elementVariants}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <h3 className="h4 text-neutral-900 font-semibold">
                  {commitment.title}
                </h3>

                <p className="body-md mt-4 text-neutral-500 leading-relaxed font-light">
                  {commitment.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50/80 px-6 py-20 text-center sm:px-12 lg:px-20 shadow-xl shadow-black/5"
          >
            {/* Soft Ambient Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-[var(--color-primary)]/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                custom={0}
                variants={elementVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-white text-neutral-700 mb-6 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                The Road Ahead
              </motion.div>

              <motion.h2
                custom={1}
                variants={elementVariants}
                className="h2 tracking-tight text-neutral-900 max-w-3xl"
              >
                Ready for the{" "}
                <span className="italic text-[var(--color-primary)]">
                  Road Ahead?
                </span>
              </motion.h2>

              <motion.p
                custom={2}
                variants={elementVariants}
                className="body-lg mx-auto mt-6 max-w-2xl text-neutral-500 leading-relaxed font-light"
              >
                Whether you are buying a vehicle, maintaining the one you own,
                searching for genuine parts, or looking for expert automotive
                guidance, Auto Shelter is here to help you move forward with
                confidence.
              </motion.p>

              <motion.div
                custom={3}
                variants={elementVariants}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
              >
                <Link href="/membership" className="w-full sm:w-auto">
                  <Button>
                    Become a Member
                  </Button>
                </Link>

                <Link href="/book-service" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                  >
                    Book a Service
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}