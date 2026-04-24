import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content/site";

// Route segment config
export const runtime = "edge";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Open Graph image — 1200×630. Paper cream background with a faint 56px
 * grid (engineering-notebook cue), wordmark composed inline, tagline in
 * sans, mono ISO-stamp dateline at the bottom, copper hairline rule.
 */
export default function OpengraphImage() {
  const stamp = "2026-04-24";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "#F5F2EB",
          fontFamily: "sans-serif",
          position: "relative",
          backgroundImage:
            "linear-gradient(to right, rgba(26, 35, 50, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 35, 50, 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        {/* Top strip — spec code + revision */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6B7A8A",
          }}
        >
          <span style={{ display: "flex" }}>{SITE.specCode}</span>
          <span style={{ display: "flex" }}>{SITE.specVolume} · {SITE.specRevision}</span>
        </div>

        {/* Center block — wordmark + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
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
                fontSize: 152,
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: "#1A2332",
              }}
            >
              Larder
            </span>
            <span
              style={{
                fontSize: 152,
                fontWeight: 500,
                color: "#B87333",
                fontFamily: "monospace",
                letterSpacing: "-0.05em",
              }}
            >
              lab
            </span>
            <span
              style={{
                fontSize: 64,
                fontWeight: 500,
                color: "#B87333",
                fontFamily: "monospace",
                marginLeft: 16,
                alignSelf: "center",
                display: "flex",
              }}
            >
              [·]
            </span>
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "#1A2332",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: 940,
              display: "flex",
            }}
          >
            {SITE.tagline}
          </div>
        </div>

        {/* Copper hairline rule */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              height: 2,
              width: "100%",
              background: "#B87333",
              display: "flex",
            }}
          />

          {/* Bottom ISO-stamp dateline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              fontFamily: "monospace",
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#6B7A8A",
            }}
          >
            <span style={{ display: "flex" }}>{SITE.specVolume}</span>
            <span style={{ display: "flex", color: "#B87333" }}>·</span>
            <span style={{ display: "flex" }}>{SITE.specRevision}</span>
            <span style={{ display: "flex", color: "#B87333" }}>·</span>
            <span style={{ display: "flex" }}>{stamp}</span>
            <span style={{ display: "flex", color: "#B87333" }}>·</span>
            <span style={{ display: "flex" }}>larderlab.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
