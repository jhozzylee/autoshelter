import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export async function GET() {
  // Read Logo.svg directly from the /public directory
  const logoPath = join(process.cwd(), "public", "Logo.svg");
  const logoSvg = await readFile(logoPath, "utf-8");

  // Convert SVG to base64 Data URL for clean image embedding in @vercel/og
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(
    logoSvg
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, rgba(10, 10, 10, 0) 70%)",
          }}
        />

        {/* Main Center Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Top: Logo (Fixed width: 200px) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            alt="Auto Shelter Logo"
            style={{
              width: "200px",
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* Middle Divider: Subtle Vertical Line with Generous Gaps */}
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />

          {/* Bottom: Refined Uppercase Monospace Micro-Text */}
          <span
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#737373", // text-neutral-500
              textAlign: "center",
            }}
          >
            AUTO SHELTER — PRIVATE AUTOMOTIVE DESK
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}