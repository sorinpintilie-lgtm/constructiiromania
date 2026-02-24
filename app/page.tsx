import { FAQAccordion } from "./components/FAQAccordion";
import { PromoBar } from "./components/PromoBar";
import { StickyHeader } from "./components/StickyHeader";
import { TriangleRevealHero } from "./components/TriangleRevealHero";
import {
  AFrameProcessTimeline,
  AngledGallery,
  ContactCTA,
  Footer,
  ProofChips,
  StaggeredModels,
} from "./components/LandingSections";

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Construcții România",
    description:
      "Cabane A-Frame, case din lemn, terase și foișoare. Proiectare și execuție în România.",
    areaServed: "România",
    telephone: "+40 700 000 000",
    url: "https://example.com",
    image: "/images/aframe-hero.webp",
    serviceType: [
      "Cabane A-Frame",
      "Case din lemn",
      "Terase",
      "Foișoare",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PromoBar />
      <StickyHeader />
      <main>
        <TriangleRevealHero />
        <StaggeredModels />
        <ProofChips />
        <AFrameProcessTimeline />
        <AngledGallery />
        <FAQAccordion />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
