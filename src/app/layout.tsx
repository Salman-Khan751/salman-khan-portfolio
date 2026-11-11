import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { IDENTITY, PERSON, SITE_URL } from "@/data/profile";
import { Navbar } from "@/components/layout/Navbar";
import { PageLoader } from "@/components/layout/PageLoader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

// Self-hosted variable fonts (Latin subset): no third-party requests, no layout shift.
const spaceGrotesk = localFont({
  src: "../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jetbrainsMono = localFont({
  src: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
});

const TITLE = `${PERSON.name} | ${IDENTITY.title}`;
const DESCRIPTION =
  "Portfolio of Salman Khan, an AI Engineer and Full-Stack Developer building LLM, RAG, NLP and computer-vision systems, plus the APIs and interfaces around them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${PERSON.name}` },
  description: DESCRIPTION,
  keywords: [
    "Salman Khan",
    "AI Engineer",
    "Full-Stack Developer",
    "Generative AI",
    "LLM",
    "RAG",
    "LangGraph",
    "NLP",
    "Computer Vision",
    "FastAPI",
    "React",
    "Next.js",
    "Pakistan",
  ],
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: PERSON.name, title: TITLE, description: DESCRIPTION, locale: "en_US" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090f",
};

// Runs before first paint so the saved (or system) theme is applied with no flash.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#08090f":"#fbfaf8")}catch(e){document.documentElement.dataset.theme="dark"}})();`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  url: SITE_URL,
  jobTitle: IDENTITY.title,
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Rawalpindi", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Develo IT Solution" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "PMAS Arid Agriculture University, Rawalpindi" },
  knowsAbout: ["Generative AI", "Large Language Models", "Retrieval-Augmented Generation", "Natural Language Processing", "Computer Vision", "Speech AI", "FastAPI", "React", "Next.js"],
  sameAs: [PERSON.linkedin, PERSON.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {/* Without JavaScript, show content that would otherwise wait for an entrance animation. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <PageLoader />
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </body>
    </html>
  );
}
