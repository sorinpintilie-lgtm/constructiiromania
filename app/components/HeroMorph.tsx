"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroMorph() {
  const headerRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const slotRef = useRef<HTMLDivElement | null>(null);
  const dockRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const markRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !headerRef.current ||
      !heroRef.current ||
      !slotRef.current ||
      !dockRef.current ||
      !floatingRef.current
    ) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(headerRef.current, { "--header-alpha": 0.88, "--header-blur": 12 });
      return;
    }

    const ctx = gsap.context(() => {
      const placeFloatingAt = (source: HTMLElement) => {
        const rect = source.getBoundingClientRect();
        gsap.set(floatingRef.current, {
          width: rect.width,
          height: rect.height,
          x: rect.left,
          y: rect.top,
          scaleX: 1,
          scaleY: 1,
          transformOrigin: "top left",
        });
      };

      placeFloatingAt(slotRef.current!);

      // FLIP mapping: animate the same floating A-Frame element from hero slot bounds
      // to dock target bounds, using rect deltas as function-based values.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(floatingRef.current, {
        x: () => dockRef.current!.getBoundingClientRect().left,
        y: () => dockRef.current!.getBoundingClientRect().top,
        width: () => dockRef.current!.getBoundingClientRect().width,
        height: () => dockRef.current!.getBoundingClientRect().height,
        ease: "none",
      });

      tl.to(
        [leftRef.current, rightRef.current],
        {
          x: (i) => (i === 0 ? -48 : 48),
          opacity: 0,
          ease: "none",
        },
        0,
      )
        .to([lineRef.current, dividerRef.current], { opacity: 0, ease: "none" }, 0.25)
        .to(photoRef.current, { opacity: 0.2, ease: "none" }, 0.3)
        .to(markRef.current, { opacity: 1, ease: "none" }, 0.35)
        .to(
          headerRef.current,
          {
            "--header-alpha": 0.9,
            "--header-blur": 12,
            borderColor: "rgb(142 163 181 / 0.28)",
            ease: "none",
          },
          0.5,
        );

      const onMove = (e: MouseEvent) => {
        const mx = (e.clientX / window.innerWidth - 0.5) * 6;
        const my = (e.clientY / window.innerHeight - 0.5) * 6;
        gsap.to(photoRef.current, { x: mx, y: my, duration: 0.5, overwrite: true });
      };

      window.addEventListener("mousemove", onMove);
      ScrollTrigger.addEventListener("refreshInit", () => placeFloatingAt(slotRef.current!));

      return () => {
        window.removeEventListener("mousemove", onMove);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-transparent"
        style={{
          backgroundColor: "rgb(238 246 251 / var(--header-alpha, 0))",
          backdropFilter: "blur(calc(var(--header-blur, 0) * 1px))",
        }}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10">
          <div className="flex items-center gap-3">
            <div
              ref={dockRef}
              className="h-9 w-9 rounded-md border border-[rgb(142_163_181/0.35)] bg-[rgb(15_27_45/0.95)] md:h-11 md:w-11"
            />
            <span className="font-display text-sm md:text-base">Constructii Durabile</span>
          </div>
          <nav aria-label="Navigare principală" className="hidden gap-7 text-sm md:flex">
            <a href="#modele">Modele</a>
            <a href="#proces">Proces</a>
            <a href="#terase">Terase</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="shine rounded-full bg-[var(--pine-700)] px-5 py-2 text-sm text-white">
            Cere ofertă
          </a>
        </div>
      </header>

      <section ref={heroRef} className="relative isolate h-[80vh] min-h-[700px] overflow-hidden md:h-[92vh]">
        <div className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 mx-auto h-[72%] max-w-6xl opacity-50" />
        <div className="noise-overlay absolute inset-0 bg-gradient-to-b from-[rgb(238_246_251/0.95)] to-[rgb(238_246_251/0.72)]" />

        <div className="relative mx-auto grid h-full max-w-7xl items-center px-5 md:px-10 lg:grid-cols-[1fr_1.35fr_0.9fr]">
          <article
            ref={leftRef}
            className="z-20 -mr-4 rounded-3xl border border-[rgb(142_163_181/0.32)] bg-white/78 p-6 backdrop-blur-sm md:p-8 lg:-mr-18"
          >
            <p className="text-xs tracking-[0.18em] text-[var(--pine-700)] uppercase">Cabane A-Frame • Lemn • La cheie</p>
            <h1 className="font-display mt-4 text-3xl leading-tight md:text-5xl">Cabane A-Frame construite corect.</h1>
            <p className="mt-4 text-[var(--ink-950)]/78">
              Proiectare + execuție din lemn, izolație gândită, finisaje care rezistă.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="shine rounded-full bg-[var(--pine-700)] px-5 py-2.5 text-sm font-medium text-white">
                Cere ofertă
              </a>
              <a href="#modele" className="rounded-full border border-[rgb(142_163_181/0.5)] px-5 py-2.5 text-sm">
                Vezi modele
              </a>
              <a href="#contact" className="self-center text-sm underline decoration-[var(--oak-500)] underline-offset-3">
                Trimite schița ta
              </a>
            </div>
          </article>

          <div className="relative z-10 mx-auto hidden w-full max-w-[760px] lg:block">
            <div ref={slotRef} className="mx-auto aspect-[1/0.82] w-[82%] [clip-path:polygon(50%_3%,98%_97%,2%_97%)]" />
          </div>

          <aside
            ref={rightRef}
            className="z-20 mt-6 rounded-3xl border border-[rgb(142_163_181/0.32)] bg-white/78 p-6 backdrop-blur-sm md:p-8 lg:mt-0 lg:-ml-14"
          >
            <h2 className="font-display text-xl">Servicii</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-[var(--ink-950)]/82">
              <li>Cabane A-Frame</li>
              <li>Case din lemn</li>
              <li>Terase</li>
              <li>Foișoare</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[rgb(142_163_181/0.34)] px-3 py-1 text-xs">Garanție</span>
              <span className="rounded-full border border-[rgb(142_163_181/0.34)] px-3 py-1 text-xs">Execuție curată</span>
              <span className="rounded-full border border-[rgb(142_163_181/0.34)] px-3 py-1 text-xs">Personalizare</span>
            </div>
            <p className="mt-5 text-xs text-[var(--ink-950)]/68">Lucrăm în toată România (în funcție de proiect).</p>
          </aside>
        </div>
      </section>

      <div
        ref={floatingRef}
        className="pointer-events-none fixed left-0 top-0 z-40 overflow-hidden border border-[rgb(142_163_181/0.55)] bg-[var(--slate-900)] [clip-path:polygon(50%_3%,98%_97%,2%_97%)]"
      >
        <div className="absolute inset-0">
          <Image
            ref={photoRef}
            src="/images/aframe-hero.webp"
            alt="A-Frame Constructii Durabile"
            fill
            priority
            sizes="(max-width: 1024px) 88vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.12),rgba(11,18,32,0.44))]" />
        </div>

        <div
          ref={markRef}
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(180deg, rgb(207 230 243 / 0.94), rgb(142 163 181 / 0.78))",
            clipPath: "polygon(50% 12%, 88% 90%, 12% 90%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-[10%] top-[44%] h-px bg-[rgb(207_230_243/0.9)]" ref={lineRef} />
        <div className="pointer-events-none absolute left-1/2 top-[44%] h-[53%] w-px -translate-x-1/2 bg-[rgb(207_230_243/0.84)]" ref={dividerRef} />
        <div className="pointer-events-none absolute left-1/2 top-[7%] h-[2px] w-[12%] -translate-x-1/2 bg-[var(--oak-500)]/90" />
      </div>
    </>
  );
}

