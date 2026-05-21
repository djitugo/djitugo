import { ImageResponse } from "next/og";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/seo";

export const alt = `${BRAND_NAME} — ${BRAND_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 60%, #161616 100%)",
          color: "#f6f5f1",
          fontFamily: "serif",
        }}
      >
        {/* Top row — logo mark + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" rx="15" fill="#f6f5f1" />
            <g
              stroke="#0a0a0a"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            >
              <path d="M 25 27 L 58 27 A 23 23 0 0 1 58 73 L 25 73" />
              <path d="M 25 50 L 48 50" />
            </g>
          </svg>

          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(246,245,241,0.6)",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            BALI · EST. 2018
          </div>
        </div>

        {/* Center stack — headline + KPI strip */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <div
            style={{
              fontSize: 128,
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              fontWeight: 400,
              color: "#f6f5f1",
              fontFamily: "serif",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Where creativity</span>
            <span style={{ fontStyle: "italic", opacity: 0.85 }}>
              meets technology.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              gap: 48,
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(246,245,241,0.7)",
              fontFamily: "monospace",
            }}
          >
            <div style={{ display: "flex" }}>700+ clients</div>
            <div style={{ display: "flex", color: "rgba(246,245,241,0.3)" }}>
              /
            </div>
            <div style={{ display: "flex" }}>37K followers</div>
            <div style={{ display: "flex", color: "rgba(246,245,241,0.3)" }}>
              /
            </div>
            <div style={{ display: "flex" }}>06 services</div>
          </div>
        </div>

        {/* Bottom row — domain + tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(246,245,241,0.55)",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>djitugo.com</div>
          <div style={{ display: "flex" }}>Bali · digital studio</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
