"use client";

import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtjVd5mq5-73Vv8oljNJIC8TxwZVbtHj4GkCoxUDI8S0ldVfi82taJqdmXzpSUlRSDBA/exec";

export default function ChatImportWidget() {
  const [step, setStep] = useState(1);
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      formType: "RequestForm",
      ...formData,
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.result === "success") {
        setIsSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting import request:", error);
      alert("An error occurred while submitting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-3 w-full rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-md">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-2">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xs font-semibold text-neutral-900">Import Request Received!</p>
        <p className="mt-1 text-[11px] text-neutral-500">
          Our sourcing agent will inspect the listing, calculate total landed costs, and reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-md space-y-3">
      {/* Header & Step Indicator */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
          Vehicle Importation Request
        </p>
        <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
          Step {step} of 3
        </span>
      </div>

      {/* STEP 1: Vehicle Specifications */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">1. Vehicle Details</p>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="vehicleMake"
              required
              placeholder="Make (e.g. Porsche) *"
              value={formData.vehicleMake}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <input
              type="text"
              name="vehicleModel"
              required
              placeholder="Model (e.g. 911) *"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>

          <input
            type="text"
            name="vehicleYear"
            required
            placeholder="Year Range (e.g. 2021 - 2024) *"
            value={formData.vehicleYear}
            onChange={handleChange}
            className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
          />

          <input
            type="url"
            name="vehicleUrl"
            placeholder="Listing Link or VIN (Optional)"
            value={formData.vehicleUrl}
            onChange={handleChange}
            className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
          />

          <button
            type="submit"
            className="w-full h-9 rounded-lg bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            Next: Budget & Logistics →
          </button>
        </form>
      )}

      {/* STEP 2: Budget & Destination */}
      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">2. Budget & Delivery Preferences</p>

          <input
            type="text"
            name="maxBudget"
            required
            placeholder="Est. Budget (e.g. $45,000 Landed) *"
            value={formData.maxBudget}
            onChange={handleChange}
            className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="destinationCountry"
              required
              placeholder="Destination Port/City *"
              value={formData.destinationCountry}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <select
              name="importTimeline"
              value={formData.importTimeline}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-2 text-xs text-neutral-900 outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="Ready Now">Ready Immediately</option>
              <option value="1-3 Months">1 - 3 Months</option>
              <option value="3-6 Months">3 - 6 Months</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleBack}
              className="w-1/3 h-9 rounded-lg border border-neutral-200 text-neutral-700 text-xs font-medium hover:bg-neutral-50 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="w-2/3 h-9 rounded-lg bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
            >
              Next: Contact Info →
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Contact Details & Submit */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">3. Contact Details</p>

          <input
            type="text"
            name="fullName"
            required
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone / WhatsApp *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>

          <textarea
            name="notes"
            rows={2}
            placeholder="Additional requirements or trim preferences (Optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-200 bg-neutral-50 p-2.5 text-xs text-neutral-900 outline-none focus:border-neutral-900 resize-none"
          />

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="w-1/3 h-9 rounded-lg border border-neutral-200 text-neutral-700 text-xs font-medium hover:bg-neutral-50 disabled:opacity-50 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-2/3 h-9 rounded-lg bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}