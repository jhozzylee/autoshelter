"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleUrl: "",
    maxBudget: "",
    importTimeline: "1-3 Months",
    destinationCountry: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
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
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-700 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Sourcing & Logistics
            </div>

            <h1 className="h1 tracking-tight text-neutral-950">
              Request Vehicle <span className="italic text-[var(--color-primary)]">Importation.</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto leading-relaxed">
              Found a car abroad or have a specific spec in mind? Provide the details below and our international sourcing team will handle procurement, customs clearing, and door-to-door logistics.
            </p>
          </div>

          {/* Form Container */}
          <div className="mt-12 rounded-3xl border border-neutral-200/80 bg-neutral-50/40 p-6 sm:p-10 shadow-xl shadow-black/5">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-4">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-950">Import Request Received!</h3>
                <p className="mt-2 text-sm text-neutral-500 max-w-md mx-auto">
                  Our sourcing agent will inspect the vehicle listing, calculate total landed costs (purchase + shipping + duty), and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      vehicleMake: "",
                      vehicleModel: "",
                      vehicleYear: "",
                      vehicleUrl: "",
                      maxBudget: "",
                      importTimeline: "1-3 Months",
                      destinationCountry: "",
                      notes: "",
                    });
                  }}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] hover:underline"
                >
                  Submit Another Import Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Vehicle Specifications */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 border-b border-neutral-200/80 pb-2">
                    01. Vehicle Details
                  </h3>

                  <div className="space-y-4">
                    {/* Listing URL / VIN */}
                    <div>
                      <label htmlFor="vehicleUrl" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Link to Listing or VIN (Optional but recommended)
                      </label>
                      <input
                        type="url"
                        id="vehicleUrl"
                        name="vehicleUrl"
                        value={formData.vehicleUrl}
                        onChange={handleChange}
                        placeholder="https://www.autotrader.com/cars-for-sale/vehicledetails..."
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {/* Make */}
                      <div>
                        <label htmlFor="vehicleMake" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Make *
                        </label>
                        <input
                          type="text"
                          id="vehicleMake"
                          name="vehicleMake"
                          required
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          placeholder="e.g. Porsche"
                          className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                        />
                      </div>

                      {/* Model */}
                      <div>
                        <label htmlFor="vehicleModel" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Model *
                        </label>
                        <input
                          type="text"
                          id="vehicleModel"
                          name="vehicleModel"
                          required
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="e.g. 911 Carrera S"
                          className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                        />
                      </div>

                      {/* Year */}
                      <div>
                        <label htmlFor="vehicleYear" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                          Year Range *
                        </label>
                        <input
                          type="text"
                          id="vehicleYear"
                          name="vehicleYear"
                          required
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="e.g. 2021 - 2024"
                          className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Logistics & Budget */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 border-b border-neutral-200/80 pb-2">
                    02. Budget & Delivery Preferences
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {/* Max Budget */}
                    <div>
                      <label htmlFor="maxBudget" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Estimated Budget *
                      </label>
                      <input
                        type="text"
                        id="maxBudget"
                        name="maxBudget"
                        required
                        value={formData.maxBudget}
                        onChange={handleChange}
                        placeholder="e.g. $45,000 Total Landed"
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    {/* Import Timeline - Fixed Height & Alignment */}
                    <div>
                      <label htmlFor="importTimeline" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Desired Timeline
                      </label>
                      <div className="relative">
                        <select
                          id="importTimeline"
                          name="importTimeline"
                          value={formData.importTimeline}
                          onChange={handleChange}
                          className="w-full h-[48px] appearance-none rounded-xl border border-neutral-200 bg-white px-4 pr-10 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all cursor-pointer"
                        >
                          <option value="Ready Now">Ready Immediately</option>
                          <option value="1-3 Months">1 - 3 Months</option>
                          <option value="3-6 Months">3 - 6 Months</option>
                          <option value="Just Exploring">Just Exploring Options</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Destination */}
                    <div>
                      <label htmlFor="destinationCountry" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Destination City / Port *
                      </label>
                      <input
                        type="text"
                        id="destinationCountry"
                        name="destinationCountry"
                        required
                        value={formData.destinationCountry}
                        onChange={handleChange}
                        placeholder="e.g. Lagos, Port Harcourt"
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact & Additional Requirements */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4 border-b border-neutral-200/80 pb-2">
                    03. Your Contact Details
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-3 mb-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full h-[48px] rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Expanded Text Area */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-2">
                      Specific Requirements / Customizations
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Mention trim level, exterior color preferences, mileage caps, or inspection requirements..."
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="justify-center py-4"
                >
                  {isSubmitting ? "Processing Import Request..." : "Request Importation Quote"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}