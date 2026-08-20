import { NextResponse } from "next/server";
import OpenAI from "openai";
import { fetchPartsFromSanity } from "../../../lib/sanity";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = {
  role: "system" as const,
  content: `You are Auto Shelter Assistant, the official concierge for Auto Shelter.

CONVERSATIONAL & DISCOVERY FIRST:
- DO NOT jump straight to displaying widgets or pulling parts inventory if the user provides vague, brief, or single-word inputs (e.g., "coolant", "oil", "service", "import", "brakes").
- When faced with short or ambiguous user queries:
  1. Acknowledge what they typed warmly.
  2. Ask 1 or 2 targeted clarifying questions to understand their exact vehicle make, model, year, or goal (e.g., "Are you looking to buy coolant for a specific vehicle, or booking a fluid flush service with us?").
  3. ONLY invoke tools (widgets/inventory fetch) when the user explicitly expresses intent to view parts, book a service, request an import, or join membership.

BEHAVIOR & BOUNDARIES:
- Maintain a luxury, professional, and welcoming concierge tone. Keep responses scannable and brief.
- Trigger "show_parts_widget" ONLY when the user explicitly asks to see, search, or buy parts/accessories, or after clarifying their specific part need.
- Trigger "show_booking_widget" when users want to schedule service appointments.
- Trigger "show_import_widget" when users inquire about importing a car or getting landed cost estimates.
- Trigger "show_membership_widget" when users ask about private membership access.
- Trigger "connect_live_agent" when users ask to speak with a human or WhatsApp concierge.
- STRICT SCOPE: Answer ONLY questions related to Auto Shelter, vehicle purchasing, servicing, importation, and auto parts.`,
};

const tools: OpenAI.ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "show_booking_widget",
      description: "Displays the inline service booking widget.",
      parameters: { type: "object", properties: {}, required: [] },
    },
  },
  {
    type: "function",
    function: {
      name: "show_import_widget",
      description: "Displays the inline vehicle importation request form.",
      parameters: { type: "object", properties: {}, required: [] },
    },
  },
  {
    type: "function",
    function: {
      name: "show_membership_widget",
      description: "Displays the inline private membership application widget.",
      parameters: { type: "object", properties: {}, required: [] },
    },
  },
  {
    type: "function",
    function: {
      name: "connect_live_agent",
      description: "Directs the user to connect with a human advisor via WhatsApp.",
      parameters: { type: "object", properties: {}, required: [] },
    },
  },
  {
    type: "function",
    function: {
      name: "show_parts_widget",
      description: "Fetches and displays genuine auto parts from Sanity inventory when explicit part intent is confirmed.",
      parameters: {
        type: "object",
        properties: {
          search_term: {
            type: "string",
            description: "The name, model, or type of auto part requested.",
          },
        },
        required: [],
      },
    },
  },
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid or empty messages array." },
        { status: 400 }
      );
    }

    const recentMessages = messages.slice(-10);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [SYSTEM_PROMPT, ...recentMessages],
      tools: tools,
      tool_choice: "auto",
      temperature: 0.4, // Lower temperature keeps replies focused and logical
    });

    const choice = response.choices[0].message;

    // Handle Tool Calls
    if (choice.tool_calls && choice.tool_calls.length > 0) {
      const toolCall = choice.tool_calls[0];

      if (toolCall.type === "function") {
        if (toolCall.function.name === "show_booking_widget") {
          return NextResponse.json({
            reply: "I've pulled up our online scheduling portal for you below. Select your...",
            showBookingWidget: true,
          });
        }

        if (toolCall.function.name === "show_import_widget") {
          return NextResponse.json({
            reply: "I can help with your vehicle importation request. Fill in the brief specification details below and our sourcing team will calculate your landed costs:",
            showImportWidget: true,
          });
        }

        if (toolCall.function.name === "show_membership_widget") {
          return NextResponse.json({
            reply: "I can help you apply for private Auto Shelter membership. Fill out your details below to submit your profile for priority review:",
            showMembershipWidget: true,
          });
        }

        if (toolCall.function.name === "connect_live_agent") {
          return NextResponse.json({
            reply: "Connecting you with a human representative...",
            whatsappRedirect: "https://wa.me/2349039067415?text=Hello%20Auto%20Shelter%20Team%2C%20I%20would%20like%20to%20speak%20with%20a%20live%20agent.",
          });
        }

        if (toolCall.function.name === "show_parts_widget") {
          const args = toolCall.function.arguments ? JSON.parse(toolCall.function.arguments) : {};
          const searchTerm = args.search_term || "";

          let parts = [];
          try {
            parts = await fetchPartsFromSanity(searchTerm);
          } catch (err) {
            console.error("Sanity fetch error:", err);
          }

          if (parts && parts.length > 0) {
            return NextResponse.json({
              reply: `Here are the matching parts available in our catalog. Click any item to inspect details:`,
              parts: parts,
            });
          }

          return NextResponse.json({
            reply: `We carry OEM and genuine parts for luxury vehicles. I couldn't find an exact match for "${searchTerm}" right here in chat, but you can browse our full catalog under **Inventory** in the header, or let me know your car's year and model so I can assist further.`,
          });
        }
      }
    }

    return NextResponse.json({
      reply: choice.content || "I'm here to help. Could you share a few more details about your vehicle or what you're looking for today?",
    });

  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}