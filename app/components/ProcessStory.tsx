"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: "Consultanță teren + nevoi",
    detail:
      "Analizăm terenul, accesul, orientarea solară și utilizarea reală a construcției. Stabilim de la început ce contează: structură, confort termic, cost total și timp realist de execuție.",
  },
  {
    title: "Concept + ofertare",
    detail:
      "Propunem volumetrie, compartimentare, materiale și pachete de execuție. Primești o ofertă clară, cu etape, livrabile și opțiuni de ajustare fără compromisuri tehnice.",
  },
  {
    title: "Proiectare detalii & materiale",
    detail:
      "Definim nodurile critice: îmbinări, straturi de izolație, etanșare, ventilație și protecții la apă. Alegem materiale potrivite pentru durabilitate, nu doar aspect.",
  },
  {
    title: "Prefabricare / pregătire structură",
    detail:
      "Pregătim elementele structurale controlat, pentru montaj eficient și precis. Verificăm cote, poziții de prindere și compatibilitatea cu toate straturile ulterioare.",
  },
  {
    title: "Montaj + închideri",
    detail:
      "Ridicăm structura pe șantier cu secvență clară de montaj. Închiderile sunt executate curat, cu atenție la punți termice, planeitate și stabilitate în timp.",
  },
  {
    title: "Izolație + finisaje",
    detail:
      "Aplicăm corect stratificația: izolație, barieră de vapori, etanșare și finisaje. Obținem confort real iarna/vara și un rezultat premium, coerent arhitectural.",
  },
  {
    title: "Predare + garanție",
    detail:
      "Facem recepția finală, verificări și predare cu recomandări clare de exploatare. Primești construcția pregătită pentru utilizare și suport post-predare.",
  },
];

export function AFrameProcessStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      // Show all cards without animation
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { opacity: 1, y: 0, x: 0, scale: 1, width: "min(760px, 90vw)", minHeight: 280 });
        }
      });
      detailsRef.current.forEach((detail) => {
        if (detail) gsap.set(detail, { opacity: 1, y: 0, height: "auto" });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Initial state - all hidden
      gsap.set(titleRef.current, { opacity: 0, y: 30 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, { 
          opacity: 0, 
          y: 80, 
          scale: 0.85, 
          x: i % 2 === 0 ? -60 : 60, 
          width: "min(760px, 90vw)", 
          minHeight: 280,
          borderRadius: 24
        });
      });
      
      detailsRef.current.forEach((detail) => {
        if (!detail) return;
        gsap.set(detail, { opacity: 0, y: 15, height: 0 });
      });
      
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        gsap.set(img, { opacity: 0, y: 40, scale: 0.8, x: i % 2 === 0 ? 60 : -60 });
      });

      // Title animation on scroll into view
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${STEPS.length * 100}%`,
          pin: stickyRef.current,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const at = i * 1;
        
        // Card enters with scale and position
        tl.to(
          card, 
          { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            scale: 1, 
            duration: 0.35, 
            ease: "power2.out" 
          },
          at,
        )
        // Card expands
        .to(
          card, 
          { 
            width: "min(760px, 90vw)", 
            minHeight: 320, 
            borderRadius: 28, 
            duration: 0.25, 
            ease: "power2.inOut" 
          },
          at + 0.25,
        )
        // Details reveal
        .to(
          detailsRef.current[i],
          { opacity: 1, y: 0, height: "auto", duration: 0.25, ease: "power2.out" },
          at + 0.4,
        )
        // Images appear
        .to(
          imagesRef.current[i],
          { opacity: 1, y: 0, scale: 1, x: 0, duration: 0.25, ease: "power2.out" },
          at + 0.4,
        )
        // Card and image fade out and move up
        .to(
          card,
          { opacity: 0, y: -150, duration: 0.4, ease: "power2.in" },
          at + 0.7,
        )
        .to(
          imagesRef.current[i],
          { opacity: 0, y: -150, duration: 0.4, ease: "power2.in" },
          at + 0.7,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proces" ref={sectionRef} className="relative mx-auto min-h-[750vh] max-w-7xl px-4 md:min-h-[780vh] md:px-10">
      <div ref={stickyRef} className="relative h-[100svh] overflow-hidden py-16 md:py-24">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
        <p 
          ref={subtitleRef}
          className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase"
        >
          Procesul nostru
        </p>
        <h2 
          ref={titleRef}
          className="font-display mb-8 max-w-3xl text-2xl md:mb-10 md:text-5xl"
        >
          Linie de execuție clară, cu vârf în etapa de structură
        </h2>

        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgb(142_163_181/0.55),transparent)] md:block" />

        <div className="relative mt-4 h-[72vh] md:mt-6 md:h-[70vh]">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute top-1/2 left-1/2 z-20 w-[92vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-[rgb(142_163_181/0.35)] bg-white/95 p-5 shadow-[0_18px_60px_rgb(11_18_32/0.12)] backdrop-blur-md md:w-[min(58vw,760px)] md:p-6 ${
                index % 2 === 0 ? "md:left-[3%]" : "md:right-[3%] md:translate-x-0"
              }`}
            >
              <span className="mb-3 inline-block rounded-full border border-[rgb(142_163_181/0.4)] px-3 py-1 text-xs text-[var(--steel-400)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl">{step.title}</h3>
              <div
                ref={(el) => {
                  detailsRef.current[index] = el;
                }}
                data-detail
                className="mt-4 overflow-hidden"
              >
                <div className="grid gap-4">
                <p className="text-sm leading-relaxed text-[var(--ink-950)]/78 md:text-base">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}

          {STEPS.map((step, index) => (
            <div
              key={`${step.title}-img`}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              className={`absolute top-1/2 z-10 hidden w-[240px] -translate-y-1/2 overflow-hidden rounded-3xl border border-[rgb(142_163_181/0.35)] bg-white/82 p-2 shadow-[0_18px_60px_rgb(11_18_32/0.12)] backdrop-blur-md xl:block xl:w-[min(22vw,320px)] ${
                index % 2 === 0 ? "right-[3%] md:right-[3%]" : "left-[3%] md:left-[3%]"
              }`}
            >
              <div className="relative h-44 overflow-hidden rounded-2xl [clip-path:polygon(50%_2%,6%_98%,94%_98%)] md:h-52">
                <Image
                  src="/images/foisor-1.jpg"
                  alt="Imagine proiect construcție din lemn"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

