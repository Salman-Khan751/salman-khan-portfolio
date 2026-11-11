import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { IDENTITY, PERSON } from "@/data/profile";

export const alt = `${PERSON.name} — ${IDENTITY.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card, generated once at build time from the real logo. */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "radial-gradient(circle at 85% 20%, #1c1740 0%, #08090f 60%)",
          color: "#f1f2f7",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>Salman Khan</div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#a79dfa", fontWeight: 600 }}>{IDENTITY.title}</div>
          <div style={{ marginTop: 22, fontSize: 28, color: "#a9aec4", lineHeight: 1.4 }}>
            LLMs, RAG, NLP, computer vision, FastAPI and React.
          </div>
        </div>
        <img src={logoSrc} width={300} height={360} alt="" />
      </div>
    ),
    size,
  );
}
