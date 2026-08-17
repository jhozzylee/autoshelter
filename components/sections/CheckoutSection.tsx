"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft,
  ShoppingBag,
  Lock,
  Loader2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePaystackPayment } from "react-paystack";

export default function CheckoutSection() {
  const { cart, getTotalPrice, clearCart, isLoaded } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [formError, setFormError] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    notes: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = isLoaded ? getTotalPrice() : 0;
  const shippingFee = subtotal > 150000 || subtotal === 0 ? 0 : 5000;
  const grandTotal = subtotal + shippingFee;

  // Paystack Configuration
  const paystackPublicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const config = {
    reference: `PAY-${new Date().getTime().toString()}`,
    email: formData.email || "customer@example.com",
    amount: grandTotal * 100, // Paystack requires amount in kobo
    publicKey: paystackPublicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${formData.firstName} ${formData.lastName}`,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: formData.phone,
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  // Success Callback: Logs order to Google Sheet & sends email notification
  const onSuccess = async (reference: any) => {
    setIsSubmitting(true);

    const orderPayload = {
      formType: "Orders", // Matches your Google Sheet tab name
      reference: reference.reference || reference.trxref,
      customerName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: `${formData.address}, ${formData.city}, ${formData.state}`,
      items: cart.map(item => `${item.quantity}x ${item.title}`).join(", "),
      totalAmount: formatCurrency(grandTotal),
      notes: formData.notes || "None",
      timestamp: new Date().toISOString(),
    };

    try {

      await fetch("https://script.google.com/macros/s/AKfycbwtjVd5mq5-73Vv8oljNJIC8TxwZVbtHj4GkCoxUDI8S0ldVfi82taJqdmXzpSUlRSDBA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayload),
      });
    } catch (err) {
      console.error("Failed to sync order to Google Sheet:", err);
    } finally {
      setIsSubmitting(false);
      setIsOrderComplete(true);
      clearCart();
    }
  };

  const onClose = () => {
    setIsSubmitting(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handlePayment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state
    ) {
      setFormError("Please fill out all required shipping details.");
      return;
    }

    if (!paystackPublicKey) {
      setFormError("Paystack Public Key missing. Please set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in .env.local");
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    // Triggers the Paystack Portal Popup
    initializePayment({ onSuccess, onClose });
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString("en-NG")}`;
  };

  if (!mounted || !isLoaded) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center bg-white">
        <Loader2 className="h-8 w-8 animate-spin text-neutral-400" />
      </div>
    );
  }

  // Success View
  if (isOrderComplete) {
    return (
      <div className="py-20 min-h-[70vh] flex items-center justify-center bg-white">
        <Container className="max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
            Order Confirmed!
          </h1>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Thank you for your order, <span className="text-neutral-950 font-semibold">{formData.firstName}</span>. 
            We&apos;ve sent a confirmation email to <span className="text-neutral-950 font-semibold">{formData.email}</span> with your order details.
          </p>
          <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/70 text-left mb-8 space-y-3 shadow-sm">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Delivery Address</span>
              <span className="text-neutral-900 font-medium text-right">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Payment Gateway</span>
              <span className="text-neutral-900 font-medium">Paystack</span>
            </div>
            <div className="flex justify-between text-sm pt-3 border-t border-neutral-200 font-medium">
              <span className="text-neutral-700">Total Paid</span>
              <span className="text-neutral-950 font-semibold">{formatCurrency(grandTotal)}</span>
            </div>
          </div>
          <Link href="/inventory">
            <Button className="w-full justify-center py-3.5">
              Continue Shopping
            </Button>
          </Link>
        </Container>
      </div>
    );
  }

  // Empty Cart View
  if (cart.length === 0) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center bg-white">
        <Container className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 border border-neutral-200">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-2xl font-medium text-neutral-900 mb-2">Your cart is empty</h2>
          <p className="text-neutral-600 mb-8">
            Add items to your cart before proceeding to checkout.
          </p>
          <Link href="/inventory">
            <Button className="w-full justify-center">
              Explore Products
            </Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-white text-neutral-900">
      <Container>
        <div className="mb-8">
          <Link 
            href="/inventory" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors mb-3"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950">Checkout</h1>
        </div>

        {formError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
            {formError}
          </div>
        )}

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Shipping Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-200/80">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                  1
                </div>
                <h2 className="text-lg font-medium text-neutral-950">Shipping Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Admiralty Way, Lekki Phase 1"
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Lagos"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Lagos State"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs uppercase tracking-wider font-semibold text-neutral-600 mb-2">
                  Order Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Notes about your delivery, e.g. special gate code."
                  className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 transition-all resize-none shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/70 space-y-6 shadow-sm">
              <h2 className="text-lg font-medium text-neutral-950 pb-4 border-b border-neutral-200/80">
                Order Summary
              </h2>

              <div className="max-h-64 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-neutral-900 truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Qty: {item.quantity} × {formatCurrency(item.price)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-neutral-950">
                      {formatCurrency(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-neutral-200/80 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="text-neutral-900 font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="text-neutral-900 font-medium">
                    {shippingFee === 0 ? "Free" : formatCurrency(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-neutral-200/80 text-base font-semibold text-neutral-950">
                  <span>Total</span>
                  <span className="text-lg font-bold">{formatCurrency(grandTotal)}</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={() => handlePayment()}
                disabled={isSubmitting}
                className="w-full justify-center py-4 text-base font-medium shadow-sm flex items-center gap-2"
              >
                <Lock size={18} />
                {isSubmitting ? "Opening Portal..." : `Pay ${formatCurrency(grandTotal)} via Paystack`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-2">
                <ShieldCheck size={16} />
                <span>Secured by Paystack</span>
              </div>
            </div>
          </div>

        </form>
      </Container>
    </section>
  );
}