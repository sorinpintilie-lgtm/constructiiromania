"use client";

import { useEffect, useState } from "react";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-[calc(var(--promo-bar-height)+env(safe-area-inset-top))] z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-[rgb(142_163_181/0.35)] bg-[rgb(238_246_251/0.72)] shadow-[0_8px_40px_rgb(11_18_32/0.08)] backdrop-blur-xl"
          : "border-[rgb(142_163_181/0.2)] bg-[rgb(238_246_251/0.28)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-[rgb(142_163_181/0.35)] bg-white/45" />
          <span className="font-display text-xs md:text-base">Construcții România</span>
        </div>
        <nav className="hidden gap-5 text-sm text-[var(--ink-950)]/75 md:flex">
          <a href="#modele">Modele</a>
          <a href="#proces">Proces</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="shine rounded-xl bg-[var(--pine-700)] px-3 py-2 text-xs text-white md:px-4 md:text-sm">
          Cere ofertă
        </a>
      </div>
    </header>
  );
}
