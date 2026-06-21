import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ChapterNav } from "@/components/ChapterNav";
import { Footer } from "@/components/Footer";
import { GuideAvatar } from "@/components/GuideAvatar";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nassima Mesbah — Ingénieure Full Stack",
  description:
    "Portfolio de Nassima Mesbah — Ingénieure d'État en Génie Logiciel. GoBeldi, HUIR/GAD-H, TechCenter UIR, ISWY Consulting.",
  authors: [{ name: "Nassima Mesbah" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <ChapterNav />
        {children}
        <GuideAvatar />
        <Footer />
      </body>
    </html>
  );
}
