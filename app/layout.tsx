import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://constructiiromania.haionline.ro"),
  title: "Construcții România – Cabane A-Frame, Case din Lemn, Terase & Foișoare",
  description:
    "Construcții România proiectează și execută cabane A-Frame, case din lemn, terase și foișoare la nivel național. Structuri corect executate și garanție.",
  openGraph: {
    title: "Construcții România – Cabane A-Frame, Case din Lemn, Terase & Foișoare",
    description:
      "Proiectare + execuție pentru cabane A-Frame, case din lemn, terase și foișoare. Durabilitate, detalii curate și garanție.",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/images/aframe-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cabana A-Frame Construcții România",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
