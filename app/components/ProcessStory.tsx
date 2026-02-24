"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Am asociat fiecărei etape câte o imagine din folderul tău de imagini
const STEPS = [
  {
    title: "Consultanță teren + nevoi",
    detail:
      "Analizăm terenul, accesul, orientarea solară și utilizarea reală a construcției. Stabilim de la început ce contează: structură, confort termic, cost total și timp realist de execuție.",
    image: "/images/model-family.jpg",
  },
  {
    title: "Concept + ofertare",
    detail:
      "Propunem volumetrie, compartimentare, materiale și pachete de execuție. Primești o ofertă clară, cu etape, livrabile și opțiuni de ajustare fără compromisuri tehnice.",
    image: "/images/model-panorama.webp",
  },
  {
    title: "Proiectare detalii & materiale",
    detail:
      "Definim nodurile critice: îmbinări, straturi de izolație, etanșare, ventilație și protecții la apă. Alegem materiale potrivite pentru durabilitate, nu doar aspect.",
    image: "/images/model-compact.webp",
  },
  {
    title: "Prefabricare / pregătire structură",
    detail:
      "Pregătim elementele structurale controlat, pentru montaj eficient și precis. Verificăm cote, poziții de prindere și compatibilitatea cu toate straturile ulterioare.",
    image: "/images/aframe-hero.webp",
  },
  {
    title: "Montaj + închideri",
    detail:
      "Ridicăm structura pe șantier cu secvență clară de montaj. Închiderile sunt executate curat, cu atenție la punți termice, planeitate și stabilitate în timp.",
    image: "/images/foisor-1.jpg",
  },
  {
    title: "Izolație + finisaje",
    detail:
      "Aplicăm corect stratificația: izolație, barieră de vapori, etanșare și finisaje. Obținem confort real iarna/vara și un rezultat premium, coerent arhitectural.",
    image: "/images/terasa-1.webp",
  },
  {
    title: "Predare + garanție",
    detail:
      "Facem recepția finală, verificări și predare cu recomandări clare de exploatare. Primești construcția pregătită pentru utilizare și suport post-predare.",
    image: "/images/terasa-2.jpg",
  },
];

export function AFrameProcessStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards fade in individual cand ajung in view
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animate images scale/fade in
      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.from(img, {
          opacity: 0,
          scale: 0.95,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proces" ref={sectionRef} className="relative mx-auto min-h-screen max-w-7xl px-4 py-16 md:px-10 md:py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      
      <div className="relative z-10 mb-16 text-center md:text-left">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase font-bold">
          Procesul nostru
        </p>
        <h2 className="font-display max-w-3xl text-3xl leading-tight md:text-5xl mx-auto md:mx-0">
          Linie de execuție clară, cu vârf în etapa de structură
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative mx-auto max-w-6xl mt-12 md:mt-24">
        {/* Linia verticală centrală (Desktop: centru, Mobil: stânga) */}
        <div className="pointer-events-none absolute left-[21px] md:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgb(142_163_181/0.55),transparent)] z-0" />

        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={step.title} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
                
                {/* Timeline Dot (Bulina de pe linie) */}
                <div className="absolute left-[21px] md:left-1/2 top-8 md:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--pine-700)] shadow-[0_0_0_4px_var(--mist-100),0_0_0_1px_var(--pine-700)] z-20" />

                {/* COLOANA STÂNGĂ */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-end order-1' : 'md:justify-start order-2 md:order-1'}`}>
                  {isEven ? (
                    // Pe par: Cardul text
                    <div
                      ref={(el) => { cardsRef.current[index] = el; }}
                      className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[rgb(142_163_181/0.35)] bg-white/95 p-6 md:p-8 shadow-[0_18px_60px_rgb(11_18_32/0.12)] backdrop-blur-md hover:shadow-[0_24px_80px_rgb(11_18_32/0.15)] transition-shadow text-left"
                    >
                      <span className="mb-3 inline-block rounded-full border border-[rgb(142_163_181/0.4)] px-3 py-1 text-xs font-bold text-[var(--pine-700)] bg-[var(--pine-700)]/5">
                        Pasul {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl mb-4 text-[var(--ink-950)]">{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--ink-950)]/80">
                        {step.detail}
                      </p>
                    </div>
                  ) : (
                    // Pe impar: Imaginea
                    <div
                      ref={(el) => { imagesRef.current[index] = el; }}
                      className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[rgb(142_163_181/0.3)]"
                    >
                      <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>

                {/* COLOANA DREAPTĂ */}
                <div className={`w-full pl-14 md:pl-0 md:w-1/2 flex ${isEven ? 'md:justify-start order-2' : 'md:justify-end order-1 md:order-2'}`}>
                  {isEven ? (
                    // Pe par: Imaginea
                    <div
                      ref={(el) => { imagesRef.current[index] = el; }}
                      className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[rgb(142_163_181/0.3)]"
                    >
                      <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ) : (
                    // Pe impar: Cardul text
                    <div
                      ref={(el) => { cardsRef.current[index] = el; }}
                      className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[rgb(142_163_181/0.35)] bg-white/95 p-6 md:p-8 shadow-[0_18px_60px_rgb(11_18_32/0.12)] backdrop-blur-md hover:shadow-[0_24px_80px_rgb(11_18_32/0.15)] transition-shadow text-left"
                    >
                      <span className="mb-3 inline-block rounded-full border border-[rgb(142_163_181/0.4)] px-3 py-1 text-xs font-bold text-[var(--pine-700)] bg-[var(--pine-700)]/5">
                        Pasul {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl mb-4 text-[var(--ink-950)]">{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--ink-950)]/80">
                        {step.detail}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
