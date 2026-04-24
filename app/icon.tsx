import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/**
 * Favicon — 32×32. Geometric-sans "L" with a copper "[·]" specimen mark on
 * a paper background. Engineering-notebook mono-flavored.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F2EB",
          color: "#1A2332",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#1A2332",
            }}
          >
            L
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "#B87333",
              marginLeft: 1,
              fontFamily: "monospace",
              letterSpacing: "-0.05em",
            }}
          >
            [·]
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
