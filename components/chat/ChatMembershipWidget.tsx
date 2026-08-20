"use client";

import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtjVd5mq5-73Vv8oljNJIC8TxwZVbtHj4GkCoxUDI8S0ldVfi82taJqdmXzpSUlRSDBA/exec";

const interestsList = [
  "Vehicle Maintenance",
  "Genuine Parts",
  "Diagnostics",
  "Repairs",
  "Vehicle Purchase",
  "Other",
];

export default function ChatMembershipWidget() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    registrationNumber: "",
    notes: "",
  });

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      formType: "MembershipForm",
      ...formData,
      interests: selectedInterests.join(", "),
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
      console.error("Error submitting membership form:", error);
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
        <p className="text-xs font-semibold text-neutral-900">Application Received!</p>
        <p className="mt-1 text-[11px] text-neutral-500">
          Thank you, {formData.fullName}. A client advisor will review your membership profile and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-md space-y-3">
      {/* Header & Step Counter */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
          Private Membership Application
        </p>
        <span className="text-[10px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
          Step {step} of 3
        </span>
      </div>

      {/* STEP 1: Personal Details */}
      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">1. Personal Details</p>

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
              type="tel"
              name="phone"
              required
              placeholder="Phone / WhatsApp *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>

          <button
            type="submit"
            className="w-full h-9 rounded-lg bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
          >
            Next: Vehicle Profile →
          </button>
        </form>
      )}

      {/* STEP 2: Vehicle Information & Services */}
      {step === 2 && (
        <form onSubmit={handleNext} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">2. Vehicle Profile & Priority Services</p>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="vehicleMake"
              placeholder="Make (e.g. Porsche)"
              value={formData.vehicleMake}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <input
              type="text"
              name="vehicleModel"
              placeholder="Model (e.g. 911)"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              name="vehicleYear"
              placeholder="Year (e.g. 2024)"
              min="1900"
              max="2099"
              value={formData.vehicleYear}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
            <input
              type="text"
              name="registrationNumber"
              placeholder="Reg No. (Optional)"
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full h-9 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs text-neutral-900 outline-none focus:border-neutral-900"
            />
          </div>

          <div className="space-y-1.5 pt-1">
            <p className="text-[11px] text-neutral-500 font-medium">Select Services Needed:</p>
            <div className="grid grid-cols-2 gap-1.5">
              {interestsList.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                return (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`h-8 rounded-lg border text-[11px] px-2 text-left font-medium transition-colors truncate ${
                      isSelected
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2 pt-1">
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
              Next: Review & Submit →
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: Notes & Final Submission */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <p className="text-xs font-medium text-neutral-800">3. Additional Details</p>

          <textarea
            name="notes"
            rows={3}
            placeholder="Provide any specific details about vehicle condition, special requests, or OEM parts needs..."
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
              {isSubmitting ? "Submitting..." : "Apply for Membership"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}