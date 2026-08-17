import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, amount, firstName, lastName, phone } = body;

    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!paystackSecretKey) {
      return NextResponse.json(
        { error: "Paystack Secret Key is missing." },
        { status: 500 }
      );
    }

    // Get origin URL to construct full callback URL
    const origin = req.headers.get("origin") || "http://localhost:3000";

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        callback_url: `${origin}/checkout/success`,
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: `${firstName} ${lastName}`,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone_number",
              value: phone,
            },
          ],
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      return NextResponse.json(
        { error: data.message || "Failed to initialize transaction." },
        { status: 400 }
      );
    }

    return NextResponse.json({ authorization_url: data.data.authorization_url });
  } catch (error) {
    console.error("Paystack Initialization Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}