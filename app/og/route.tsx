// app/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  const logoUrl = `${origin}/Logo.svg`;

  // Fetch the SVG file and convert it into a Base64 Data URI
  let logoDataUri = "";
  try {
    const res = await fetch(logoUrl);
    if (res.ok) {
      const svgText = await res.text();
      const base64Svg = Buffer.from(svgText).toString("base64");
      logoDataUri = `data:image/svg+xml;base64,${base64Svg}`;
    }
  } catch (err) {
    console.error("Failed to load OG logo SVG:", err);
  }

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

        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Top: Logo */}
          {logoDataUri ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={logoDataUri}
              alt="Auto Shelter Logo"
              style={{
                width: "200px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          ) : null}

          {/* Middle Divider */}
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />

          {/* Bottom Text */}
          <span
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#737373",
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