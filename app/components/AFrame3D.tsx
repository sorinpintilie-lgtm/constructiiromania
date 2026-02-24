"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AFrame3D.module.css";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  scrollTriggerSelector?: string;
};

export default function AFrame3D({ scrollTriggerSelector = "#hero" }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const aframeRef = useRef<HTMLDivElement | null>(null);
  const ridgeRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const aframe = aframeRef.current;
    const ridge = ridgeRef.current;
    const lines = linesRef.current;
    if (!root || !aframe || !ridge || !lines) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      aframe.style.opacity = "1";
      return;
    }

    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const ctx = gsap.context(() => {
      gsap.set(aframe, {
        opacity: 0,
        "--af-x": "0px",
        "--af-y": "40px",
        "--af-z": "-60px",
        "--af-rx": "18deg",
        "--af-ry": "-14deg",
        "--af-s": "0.92",
        "--mx": "0deg",
        "--my": "0deg",
      });

      gsap.set(ridge, { scaleX: 0, transformOrigin: "50% 50%" });
      gsap.set(lines, { opacity: 0 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro.to(aframe, { opacity: 1, duration: 0.4 });

      intro.to(
        aframe,
        {
          "--af-y": "0px",
          "--af-z": "0px",
          "--af-rx": "10deg",
          "--af-ry": "-8deg",
          "--af-s": "1",
          duration: 1.15,
        },
        0,
      );

      intro.to(ridge, { scaleX: 1, duration: 0.8, ease: "power2.out" }, 0.25);
      intro.to(lines, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0.35);

      const triggerEl = document.querySelector(scrollTriggerSelector) as HTMLElement | null;
      if (!triggerEl) return;

      gsap.to(aframe, {
        "--af-ry": "10deg",
        "--af-rx": "4deg",
        "--af-y": "-10px",
        "--af-z": "40px",
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(aframe, {
        "--af-s": "0.88",
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      const qx = gsap.quickTo(aframe, "--mx", { duration: 0.6, ease: "power3.out" });
      const qy = gsap.quickTo(aframe, "--my", { duration: 0.6, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = root.getBoundingClientRect();
        const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        const cx = Math.max(-1, Math.min(1, nx));
        const cy = Math.max(-1, Math.min(1, ny));
        qx(cx * 3);
        qy(-cy * 2);
      };

      root.addEventListener("pointermove", onMove);
      ScrollTrigger.refresh();

      return () => {
        root.removeEventListener("pointermove", onMove);
      };
    }, root);

    return () => ctx.revert();
  }, [scrollTriggerSelector]);

  return (
    <div ref={rootRef} className={styles.scene} aria-hidden="true">
      <div ref={aframeRef} className={styles.aframe}>
        <div className={`${styles.face} ${styles.front}`} />
        <div className={`${styles.face} ${styles.extrude}`} />
        <div ref={linesRef} className={styles.lines}>
          <span className={styles.beamH} />
          <span className={styles.beamV} />
        </div>
        <div ref={ridgeRef} className={styles.ridge} />
        <div className={styles.shadow} />
      </div>
    </div>
  );
}

