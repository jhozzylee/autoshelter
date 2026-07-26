"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Car } from "@/data/cars";

interface ImportModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImportModal({ car, isOpen, onClose }: ImportModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destinationCity: "",
    timeline: "1-3 Months",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      carSlug: car.slug,
      vehicleTitle: `${car.year} ${car.brand} ${car.model}`,
      estimatedPrice: car.price,
    };

    console.log("Submitting import request:", payload);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative z-[9999] w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl text-white">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[var(--color-primary)]/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-400 hover:bg-white/10 hover:text-white transition-all z-30"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-left my-auto">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white text-left">Import Brief Created</h3>
            <p className="mt-3 text-sm text-neutral-400 max-w-md text-left leading-relaxed">
              We have queued your sourcing parameters for {car.year} {car.brand} {car.model}. Our logistics managers will send you a full landed cost breakdown shortly.
            </p>
            <div className="mt-8 flex justify-start">
              <Button onClick={onClose} className="px-8 py-3">
                Done
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 min-h-[580px] max-h-[92vh]">
            
            {/* Left Sidebar: Vehicle Specs & Summary */}
            <div className="lg:col-span-5 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-y-auto text-left">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-semibold mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  Vehicle Import Brief
                </span>

                <h3 className="text-2xl font-bold text-white leading-tight text-left">
                  {car.year} {car.brand}
                </h3>
                <p className="text-xl font-light italic text-[var(--color-primary)] mb-6 text-left">
                  {car.model}
                </p>

                {/* Main Hero Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 mb-6">
                  <Image
                    src={car.image}
                    alt={`${car.year} ${car.brand} ${car.model}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Spec Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono border-t border-white/10 pt-4 text-left">
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-neutral-400 uppercase text-left">Engine</span>
                    <span className="font-semibold text-neutral-200 mt-1 block truncate text-left">
                      {car.specifications.engine}
                    </span>
                  </div>
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <span className="block text-[10px] text-neutral-400 uppercase text-left">Transmission</span>
                    <span className="font-semibold text-neutral-200 mt-1 block truncate text-left">
                      {car.specifications.transmission}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Banner */}
              {car.price && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Est. Import Value
                  </span>
                  <span className="text-xl font-mono font-bold text-white">
                    {car.price}
                  </span>
                </div>
              )}
            </div>

            {/* Right Panel: Form Fields */}
            <div className="lg:col-span-7 p-6 sm:p-8 overflow-y-auto max-h-[85vh] lg:max-h-[92vh] text-left">
              <div className="mb-6 text-left">
                <h4 className="text-lg font-semibold text-white text-left">Delivery & Contact Parameters</h4>
                <p className="text-xs text-neutral-400 mt-1 text-left">
                  Fill in your details below to receive listing availability & clearing quotes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Row 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-left"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                      Destination City / Port *
                    </label>
                    <input
                      type="text"
                      name="destinationCity"
                      required
                      value={formData.destinationCity}
                      onChange={handleChange}
                      placeholder="e.g. Lagos, Abuja"
                      className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-left"
                    />
                  </div>
                </div>

                {/* Row 3 - Single field */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                      Target Timeline
                    </label>
                    <div className="relative">
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full h-[48px] appearance-none rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all pr-10 cursor-pointer text-left"
                      >
                        <option value="Ready Now" className="bg-neutral-900 text-white">Ready Immediately</option>
                        <option value="1-3 Months" className="bg-neutral-900 text-white">1 - 3 Months</option>
                        <option value="3-6 Months" className="bg-neutral-900 text-white">3 - 6 Months</option>
                        <option value="Just Exploring" className="bg-neutral-900 text-white">Just Exploring Options</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Textarea */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 text-left">
                    Special Requests & Specs (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={5}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Provide details on preferred trim level, exterior/interior colors, mileage limits, or specific auction grade requirements..."
                    className="w-full rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none leading-relaxed text-left"
                  />
                </div>

                {/* Submit Action - Left Aligned */}
                <div className="pt-2 flex justify-start">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-auto px-6 py-3"
                  >
                    {isSubmitting ? "Generating Import Brief..." : "Submit Sourcing Request"}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}