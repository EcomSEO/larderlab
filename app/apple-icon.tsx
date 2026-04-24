import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

/**
 * Apple touch icon — 180×180. Larderlab mark: "L[·]" composition,
 * ink-on-paper with copper accent. Engineering-notebook feel: faint grid
 * rule behind, copper hairline at the bottom.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F5F2EB",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Corner spec label */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 16,
            fontSize: 10,
            fontFamily: "monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6B7A8A",
          }}
        >
          LL
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            fontSize: 10,
            fontFamily: "monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#6B7A8A",
          }}
        >
          01
        </div>

        {/* Main mark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#1A2332",
            }}
          >
            L
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#B87333",
              marginLeft: 4,
              fontFamily: "monospace",
              letterSpacing: "-0.05em",
            }}
          >
            [·]
          </span>
        </div>

        {/* Copper hairline */}
        <div
          style={{
            position: "absolute",
            left: 24,
            right: 24,
            bottom: 28,
            height: 2,
            background: "#B87333",
            display: "flex",
          }}
        />

        {/* Imprint strip */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 10,
            display: "flex",
            justifyContent: "center",
            fontSize: 10,
            fontFamily: "monospace",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6B7A8A",
          }}
        >
          Larderlab
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
