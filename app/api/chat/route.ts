import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // System prompt tailored for Auto Shelter
    const systemPrompt = {
  role: "system",
  content: `You are Auto Shelter Assistant, an exclusive concierge support bot for Auto Shelter. 

YOUR ONLY PURPOSE:
- Assist customers with booking vehicle services.
- Help customers look for vehicles.
- Assist with finding genuine auto parts and accessories.
- Provide information regarding Auto Shelter's operating hours, location, and contact details.

STRICT RULES:
1. You must ONLY answer questions directly related to Auto Shelter, vehicles, auto servicing, and genuine parts.
2. If a user asks about anything unrelated (e.g., coding, politics, general knowledge, sports, recipes, weather, or other businesses), politely decline to answer and redirect them back to Auto Shelter services.
3. Keep responses polite, concise, and professional. Never break character.

Example refusal: "I'm sorry, but I can only assist with inquiries related to Auto Shelter services, vehicles, and genuine parts. How can I help you with your automotive needs today?"`,
};

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Or "gpt-4o"
      messages: [systemPrompt, ...messages],
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}