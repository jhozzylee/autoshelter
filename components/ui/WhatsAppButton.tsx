"use client";

export default function WhatsAppButton() {
  const phoneNumber = "2349039067415";

  const message = encodeURIComponent(
    "Hello Auto Shelter, I would like to make an enquiry."
  );

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Auto Shelter on WhatsApp"
        className="group relative flex h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/20 transition-all duration-500 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000" />

        {/* Floating Content Wrapper */}
        <div className="flex items-center gap-3 px-4 sm:px-4">
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:rotate-12"
          >
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.6 5.96L.02 24l6.27-1.64a11.88 11.88 0 0 0 5.74 1.47h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.44ZM12.04 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.88 9.88 0 0 1-1.52-5.27C2.15 6.45 6.58 2.02 12.04 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>

          {/* Expandable Desktop Text Label */}
          <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide uppercase opacity-0 transition-all duration-500 ease-out group-hover:max-w-xs group-hover:opacity-100 sm:inline-block">
            Chat with us
          </span>
        </div>
      </a>
    </div>
  );
}