"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyETRPbuX2W8RWq_YwfA90rgcFe9WBQpocbCyPkuCtu_orPSfQJiING-LZxoyf5Yglm/exec";

const interestsList = [
  "Vehicle Maintenance",
  "Genuine Parts",
  "Diagnostics",
  "Repairs",
  "Vehicle Purchase",
  "Other",
];

export default function MembershipForm() {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white pt-24 sm:pt-28 py-32 lg:py-40">
      {/* Subtle Glow Backdrop */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[140px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 relative z-10">
          {/* Left Column: Direct Info & Membership Value */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-300 mb-4 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Private Access
              </div>

              <h1 className="h1 tracking-tight text-white">
                Elevate Your <span className="italic font-light text-[var(--color-primary)]">Driving Experience.</span>
              </h1>

              <p className="body-md mt-4 text-neutral-400 font-light leading-relaxed">
                Join the Auto Shelter ecosystem to unlock priority diagnostic scheduling, OEM parts sourcing, dedicated vehicle maintenance, and direct specialist support.
              </p>

              {/* Membership Service Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/5 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                  ⚡ Priority Scheduling
                </span>
                <span className="rounded-full border border-white/5 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                  🛡️ Genuine OEM Parts
                </span>
                <span className="rounded-full border border-white/5 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                  🚗 Concierge Sourcing
                </span>
              </div>

              {/* Direct Communication Channels */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500 font-mono">Membership Desk</p>
                    <a href="mailto:members@autoshelter.com" className="text-sm font-medium text-white hover:text-[var(--color-primary)] transition-colors">
                      members@autoshelter.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500 font-mono">Concierge Hotline</p>
                    <p className="text-sm font-medium text-white">+234-803-313-5630</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500 font-mono">Desk Operating Hours</p>
                    <p className="text-sm font-medium text-white">Mon – Sat: 8:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Indicator */}
            <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-900/50 p-4 text-xs font-mono uppercase tracking-widest text-neutral-400 backdrop-blur-md">
              ⚡ Profile Review: Within 2 Hours During Business Hours
            </div>
          </div>

          {/* Right Column: Dark Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Application Received!</h3>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your membership request has been queued. A client advisor will review your vehicle information and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        vehicleMake: "",
                        vehicleModel: "",
                        vehicleYear: "",
                        registrationNumber: "",
                        notes: "",
                      });
                      setSelectedInterests([]);
                    }}
                    className="mt-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] hover:underline"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 01: Personal Details */}
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        01. Personal Details
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
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
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
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
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
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
                        className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Section 02: Vehicle Profile */}
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                        02. Vehicle Profile (Optional)
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="vehicleMake" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Vehicle Make
                        </label>
                        <input
                          type="text"
                          id="vehicleMake"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          placeholder="e.g., Porsche, Toyota"
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="vehicleModel" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Vehicle Model
                        </label>
                        <input
                          type="text"
                          id="vehicleModel"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="e.g., 911 GT3, Camry"
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="vehicleYear" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Year
                        </label>
                        <input
                          type="number"
                          id="vehicleYear"
                          name="vehicleYear"
                          min="1900"
                          max="2099"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="2024"
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="registrationNumber" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                          Registration No.
                        </label>
                        <input
                          type="text"
                          id="registrationNumber"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          placeholder="ABC 123 XY"
                          className="w-full h-[48px] rounded-xl border border-white/10 bg-neutral-900/90 px-4 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 03: Service Interests */}
                  <div className="space-y-3">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                      03. Priority Services Requested
                    </label>
                    <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3">
                      {interestsList.map((interest) => {
                        const isChecked = selectedInterests.includes(interest);
                        return (
                          <button
                            type="button"
                            key={interest}
                            onClick={() => handleInterestToggle(interest)}
                            className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs font-medium transition-all select-none ${
                              isChecked
                                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-white"
                                : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            <span className="truncate">{interest}</span>
                            <span
                              className={`h-3.5 w-3.5 shrink-0 rounded-full border transition-all flex items-center justify-center ${
                                isChecked
                                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                                  : "border-white/30"
                              }`}
                            >
                              {isChecked && (
                                <svg className="h-2 w-2 text-black stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 04: Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Additional Details or Requests
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Include details about your vehicle condition, specific OEM parts needed, or custom maintenance timelines..."
                      className="w-full rounded-xl border border-white/10 bg-neutral-900/90 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center py-4"
                  >
                    {isSubmitting ? "Submitting Application..." : "Apply for Membership"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}