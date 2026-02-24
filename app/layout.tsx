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
  metadataBase: new URL("https://constructiiromania.ro"),
  title: "Construcții România – Case Modulare, Cabane A-Frame & Garduri",
  description: "Construim case modulare pe structură metalică, cabane A-Frame, garaje și garduri în toată România. ZERO Avans, plata eșalonată, 10+ ani experiență.",
  icons: {
    icon: ["/images/logo.png"],
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Construcții România – Case Modulare, Cabane A-Frame & Garduri",
    description: "Construim case modulare pe structură metalică, cabane A-Frame, garaje și garduri în toată România. ZERO Avans, plata eșalonată.",
    locale: "ro_RO",
    type: "website",
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
