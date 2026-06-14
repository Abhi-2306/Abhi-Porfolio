import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhijith Pandiri — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              color: "#ffffff",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Abhijith Pandiri
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#aaaaaa",
              letterSpacing: "0.5px",
            }}
          >
            Full-Stack &amp; AI Engineer
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#777777",
            }}
          >
            MS Computer Science @ Northeastern · 4.0 GPA
          </div>
          <div
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              border: "2px solid #444444",
              borderRadius: "999px",
              fontSize: "20px",
              color: "#aaaaaa",
            }}
          >
            abhi-porfolio-zeta.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
