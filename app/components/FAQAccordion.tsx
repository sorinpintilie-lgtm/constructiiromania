"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "Cât durează o cabană A-Frame la cheie?",
    a: "În funcție de model, complexitate și teren, media este între 8 și 16 săptămâni după validarea proiectului tehnic.",
  },
  {
    q: "Ce include ‘la cheie’ concret?",
    a: "Structură, închideri, izolație pe straturi, tâmplărie, acoperiș, finisaje agreate și predare pregătită pentru utilizare.",
  },
  {
    q: "Se poate pe structură de lemn / metal?",
    a: "Da. Recomandarea finală vine după evaluarea deschiderilor, încărcărilor și a modului de utilizare al construcției.",
  },
  {
    q: "Ce recomandări aveți pentru izolație?",
    a: "Izolație stratificată corect, barieră de vapori montată atent, etanșare controlată și ventilație echilibrată pentru confort pe termen lung.",
  },
  {
    q: "Lucrați în toată România?",
    a: "Da, lucrăm național. Planificăm execuția în funcție de locație, acces pe teren și calendarul de montaj.",
  },
  {
    q: "Cum pornesc: cu schiță sau doar cu o idee?",
    a: "Ambele variante sunt bune. Pornim de la necesități, buget și teren, apoi construim împreună soluția corectă.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase">
          Întrebări frecvente
        </p>
        <h2 className="font-display text-3xl md:text-4xl">
          Răspunsuri clare înainte de decizia de construcție
        </h2>
      </div>
      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <article
              key={item.q}
              className="rounded-2xl border border-[rgb(142_163_181/0.3)] bg-white/80 backdrop-blur-sm"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium md:px-6 md:py-5"
                >
                  <span>{item.q}</span>
                  <span className="text-[var(--pine-700)]">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-trigger-${idx}`}
                className="grid transition-all duration-500 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden px-5 pb-5 text-[var(--ink-950)]/80 md:px-6">{item.a}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

