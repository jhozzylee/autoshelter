"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";
import Container from "@/components/ui/Container";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I book a service?",
    answer:
      "You can book a service directly through our online booking tool. Simply select your required service, choose a convenient date, and our concierge team will confirm your appointment.",
  },
  {
    question: "Do I need to know exactly what is wrong with my vehicle?",
    answer:
      "No. If you're unsure, you can schedule a comprehensive diagnostic assessment. Describe any symptoms during booking, and our technicians will pinpoint the exact issue.",
  },
  {
    question: "How long does a service take?",
    answer:
      "Duration varies depending on the specific service and diagnostics required. Upon arrival or confirmation, we provide a precise time estimate so you can plan your day accordingly.",
  },
  {
    question: "Do you use genuine replacement parts?",
    answer:
      "Yes. We exclusively utilize genuine OEM and high-performance replacement parts engineered to preserve your vehicle's factory standards, performance, and warranty.",
  },
  {
    question: "Can I get a quote before work begins?",
    answer:
      "Absolutely. We maintain total transparency, our team conducts an initial evaluation and provides a detailed cost breakdown before executing any service.",
  },
  {
    question: "What if my vehicle needs more work than expected?",
    answer:
      "Should our inspection reveal additional requirements, we will contact you with full photo/video evidence and transparent pricing prior to performing further repairs.",
  },
];

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-neutral-100">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-neutral-300 rounded-full bg-neutral-100 text-neutral-700 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Frequently Asked Questions
            </div>

            <h2 className="h2 tracking-tight text-neutral-900 leading-tight">
              Questions? <br />
              <span className="italic text-[var(--color-primary)]">
                We Have Answers.
              </span>
            </h2>

            <p className="body-lg mt-6 max-w-md text-neutral-500 font-light leading-relaxed">
              Everything you need to know about our automotive servicing, booking
              process, and quality assurance.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 border-t border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={faq.question}
                  className="border-b border-neutral-200 transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-xs font-mono text-neutral-400 group-hover:text-[var(--color-primary)] transition-colors">
                        {formattedNumber}
                      </span>
                      <span className="h4 font-medium text-neutral-900 tracking-tight transition-colors group-hover:text-[var(--color-primary)]">
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon Ring */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-neutral-900 border-neutral-900 text-white rotate-45"
                          : "border-neutral-300 text-neutral-600 bg-transparent group-hover:border-neutral-900 group-hover:text-neutral-900"
                      }`}
                    >
                      <span className="text-lg leading-none font-light">+</span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.4, ease: PREMIUM_EASE },
                            opacity: { duration: 0.3, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: PREMIUM_EASE },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-8 sm:pl-12 pr-4">
                          <p className="body-md max-w-2xl text-neutral-600 font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}