import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#F7F4EE",
          border: "2px solid #111111",
          color: "#111111",
          fontSize: 18,
          fontFamily: "Georgia, serif",
          fontWeight: 600,
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}
