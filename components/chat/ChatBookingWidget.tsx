"use client";

import { useEffect } from "react";

export default function ChatBookingWidget() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "ari-booking-resize") {
        const iframe = document.getElementById("ari-chat-booking") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${e.data.height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="mt-3 w-full max-w-lg rounded-2xl border border-neutral-200 bg-white p-3 shadow-md backdrop-blur-md">
      <iframe
        id="ari-chat-booking"
        src="https://portal.ari.app/booking?FBProject=ARI&shopID=5e8614be6498950015ed765a&version=v.16.1.40&embed=true"
        style={{ width: "100%", border: "none", borderRadius: "10px", minHeight: "450px" }}
        allow="microphone"
        loading="lazy"
        title="Book an Appointment"
      />
    </div>
  );
}