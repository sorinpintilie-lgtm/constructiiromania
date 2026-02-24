"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TriangleRevealHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroShellRef = useRef<HTMLDivElement | null>(null);
  const leftPanelRef = useRef<HTMLElement | null>(null);
  const rightPanelRef = useRef<HTMLElement | null>(null);
  const glassDistortRef = useRef<HTMLDivElement | null>(null);
  const handoffRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const bottomTitleRef = useRef<HTMLDivElement | null>(null);
  const bgGridRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !heroShellRef.current ||
      !leftPanelRef.current ||
      !rightPanelRef.current ||
      !glassDistortRef.current ||
      !handoffRef.current ||
      !overlayRef.current ||
      !bottomTitleRef.current ||
      !bgGridRef.current
    )
      return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(overlayRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(overlayRef.current, { opacity: 0, y: 40, scale: 0.985 });
      gsap.set(bottomTitleRef.current, { opacity: 0, y: 0 });
      gsap.set(leftPanelRef.current, { x: 0, opacity: 1 });
      gsap.set(rightPanelRef.current, { x: 0, opacity: 1 });

      gsap.to(glassDistortRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top+=35%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(heroShellRef.current, {
        opacity: 0,
        yPercent: -24,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=10% top",
          end: "top+=48%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 95%",
          end: "bottom 80%",
          scrub: true,
        },
      }).to(
        overlayRef.current,
        {
          opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0,
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 95%",
          end: "bottom 80%",
          scrub: true,
        },
      }).to(bottomTitleRef.current, { opacity: 1, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative isolate min-h-[210vh] overflow-clip md:min-h-[260vh]">
      <div className="story-bg absolute inset-0 -z-20" />
      <div className="absolute inset-x-0 top-0 -z-[6]">
        {/* Mobile image */}
        <Image
          src="/images/model-family.jpg"
          alt="Casă modulară din structură metalică - Construcții România"
          width={800}
          height={1600}
          priority
          sizes="100vw"
          className="block w-full h-auto md:hidden"
        />
        {/* Desktop image */}
        <Image
          src="/images/triangular-wooden-two-storey-house-in-the-north-of-2026-01-06-10-21-26-utc (1).jpg"
          alt="Casă A-Frame din lemn - Construcții România"
          width={3000}
          height={6000}
          priority
          sizes="100vw"
          className="hidden w-full h-auto md:block"
        />
      </div>
      <div ref={bgGridRef} className="blueprint-grid absolute inset-0 -z-10 opacity-30" />
      <div className="noise-overlay absolute inset-0 -z-10 opacity-50" />

      {/* Badge-ul de sus (vizibil doar pe Desktop) */}
      <div className="pointer-events-none absolute inset-x-0 top-18 z-40 hidden justify-center md:top-22 md:flex">
        <div className="relative overflow-hidden rounded-2xl border border-[rgb(207_230_243/0.7)] bg-[linear-gradient(135deg,rgb(238_246_251/0.72),rgb(224_236_246/0.38))] px-5 py-4 backdrop-blur-2xl md:px-8">
          <div className="absolute -inset-x-16 -top-12 h-16 rotate-6 bg-[linear-gradient(90deg,transparent,rgb(255_255_255/0.7),transparent)]" />
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgb(255_255_255/0.8),0_16px_60px_rgb(11_18_32/0.2)]" />
          <div className="relative flex items-center gap-4">
            <svg viewBox="0 0 120 90" aria-hidden className="h-10 w-12 text-[var(--ink-950)]/80 md:h-12 md:w-14">
              <path d="M8 78 L60 10 L112 78" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M36 78 L60 44 L84 78" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
            </svg>
            <div>
              <p className="font-display text-[11px] tracking-[0.3em] text-[var(--pine-700)] uppercase md:text-xs">Premium & Durabil</p>
              <p className="font-display text-base text-[var(--ink-950)] md:text-xl">Construcții România</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 h-[100svh] pt-14 md:pt-16">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(155deg,rgb(11_18_32/0.12),transparent_48%,rgb(11_18_32/0.15))]" />
        </div>

        <div ref={heroShellRef} className="relative z-20 mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-4 px-4 md:grid-cols-12 md:gap-6 md:px-10">
          
          {/* Panoul din Stânga */}
          <article ref={leftPanelRef} className="rounded-3xl border border-[rgb(142_163_181/0.3)] bg-white/70 p-5 backdrop-blur-md md:col-span-4 xl:col-span-3 md:p-7">
            <p className="text-[10px] font-bold tracking-[0.17em] text-[var(--pine-700)] uppercase md:text-xs">
              Case Modulare • Structuri Metalice • Garduri
            </p>
            <h1 className="font-display mt-2 text-3xl leading-tight md:mt-3 md:text-5xl">
              Construcții durabile. De la A la Z, oriunde în țară.
            </h1>
            <p className="mt-3 text-sm text-[var(--ink-950)]/80 md:text-base">
              Fundație, panouri sandwich, instalații și finisaje. Executăm corect, cu garanție și <strong>AVANS 0%</strong>.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-6 md:flex-wrap">
              <a href="#contact" className="shine w-full text-center rounded-xl bg-[var(--pine-700)] px-4 py-3 text-sm font-bold text-white md:w-auto md:rounded-2xl md:px-5">
                Sună: 0758 887 616
              </a>
              <a href="#servicii" className="w-full text-center rounded-xl border border-[rgb(142_163_181/0.6)] bg-white/80 px-4 py-3 text-sm font-medium text-[var(--ink-950)] md:w-auto md:rounded-2xl md:px-5">
                Vezi Serviciile
              </a>
            </div>
          </article>

          <div className="hidden md:col-span-4 xl:col-span-6 md:block" />

          {/* Panoul din Dreapta */}
          <aside ref={rightPanelRef} className="rounded-3xl border border-[rgb(142_163_181/0.3)] bg-white/70 p-5 backdrop-blur-md md:col-span-4 xl:col-span-3 md:p-7">
            <h2 className="font-display text-xl md:text-2xl">Ce construim</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-950)]/80 md:text-base">
              <li>• Case Modulare (Panou Sandwich)</li>
              <li>• Cabane A-Frame & Lemn</li>
              <li>• Garduri & Porți la comandă</li>
              <li>• Garaje & Containere Birou</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--oak-500)] bg-[var(--oak-500)]/10 px-3 py-1 text-xs font-bold text-[var(--oak-500)]">AVANS 0%</span>
              <span className="rounded-full border border-[rgb(142_163_181/0.5)] bg-white/65 px-3 py-1 text-xs font-medium">Plată Eșalonată</span>
              <span className="rounded-full border border-[rgb(142_163_181/0.5)] bg-white/65 px-3 py-1 text-xs font-medium">Variante Auto +/-</span>
            </div>
            <p className="mt-4 text-xs font-medium text-[var(--pine-700)]">
              Transport și montaj gratuit în toată România.
            </p>
          </aside>
        </div>

        <div ref={glassDistortRef} className="pointer-events-none absolute inset-0 z-10 liquid-distort opacity-20" />
      </div>

      <div ref={handoffRef} className="pointer-events-none absolute inset-x-0 bottom-0 z-30">
        <div className="mx-auto flex max-w-[1400px] items-end px-4 pb-4 md:px-10">
          <div
            ref={overlayRef}
            className="pointer-events-auto w-full max-w-xl rounded-3xl border border-[rgb(207_230_243/0.55)] bg-[rgb(238_246_251/0.85)] p-5 text-[var(--ink-950)] backdrop-blur-xl md:p-8"
          >
            <h3 className="font-display text-2xl md:text-3xl">Peste 10 ani de experiență</h3>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              <li>• Echipă calificată</li>
              <li>• Factură, deviz și garanție</li>
              <li>• Fără costuri ascunse</li>
            </ul>
            <a
              href="#contact"
              className="shine mt-6 block w-full text-center rounded-2xl bg-[var(--pine-700)] px-5 py-4 text-sm font-bold text-white md:inline-block md:w-auto"
            >
              Cere consultanță gratuită
            </a>
            <div ref={bottomTitleRef} className="mt-5 rounded-2xl border border-[rgb(207_230_243/0.8)] bg-white/50 px-4 py-3 text-center">
              <p className="font-display text-lg md:text-2xl">Construim exact cum îți dorești</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

