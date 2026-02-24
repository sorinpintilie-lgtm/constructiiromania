"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Construcții România"
            width={100}
            height={35}
            className="h-9 w-auto object-contain"
          />
        </a>
        <nav className="hidden gap-5 text-sm text-[var(--ink-950)]/75 md:flex">
          <a href="#servicii">Servicii</a>
          <a href="#detalii-tehnice">Detalii Tehnice</a>
          <a href="#proces">Proces</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#contact" className="shine rounded-xl bg-[var(--pine-700)] px-3 py-2 text-xs text-white md:px-4 md:text-sm">
          0758 887 616
        </a>
      </div>
    </header>
  );
}
