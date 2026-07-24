"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Easing } from "framer-motion";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const DEFAULT_SUGGESTIONS = [
  "I want to book a service",
  "I'm looking for a vehicle",
  "I need genuine parts",
];

const PREMIUM_EASE: Easing = [0.16, 1, 0.3, 1];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! Welcome to Auto Shelter. How can we assist with your vehicle today?",
    },
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");

    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Thank you for reaching out. Our team has received your message and will guide you through the next steps shortly.",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.35, ease: PREMIUM_EASE },
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.95,
              transition: { duration: 0.25, ease: PREMIUM_EASE },
            }}
            className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl shadow-black/15"
          >
            {/* Header */}
            <div className="relative bg-neutral-950 px-6 py-5 text-white">
              <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[var(--color-primary)]/20 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-tight text-white">
                      Auto Shelter Assistant
                    </p>
                    <p className="text-[11px] font-light text-neutral-400">
                      Concierge Support • Active Now
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chatbot"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              ref={chatContainerRef}
              className="flex-1 space-y-4 overflow-y-auto bg-neutral-50/60 p-5 scroll-smooth"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-neutral-950 text-white rounded-br-sm font-light"
                        : "bg-white border border-neutral-200/80 text-neutral-800 rounded-tl-sm shadow-sm font-normal"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 px-1">
                    Quick Inquiries
                  </p>
                  {DEFAULT_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => handleSendMessage(suggestion)}
                      className="w-full text-left text-xs font-medium text-neutral-700 bg-white border border-neutral-200 rounded-xl px-4 py-3 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-100/80 hover:shadow-sm active:scale-[0.99]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="border-t border-neutral-200 bg-white p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="min-w-0 flex-1 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-900 focus:bg-white"
                />

                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-200 hover:bg-[var(--color-primary)] active:scale-95 disabled:opacity-50"
                  disabled={!inputValue.trim()}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Auto Shelter assistant"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
      >
        <span className="relative flex items-center justify-center">
          {isOpen ? (
            <span className="text-xl font-light leading-none">✕</span>
          ) : (
            /* Sparkles / AI Concierge Icon */
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}