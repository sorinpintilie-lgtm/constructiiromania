"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "Ce înseamnă AVANS 0%?",
    a: "Nu solicităm bani în avans înainte de a începe lucrarea. Plata se face eșalonat, exact în ritmul în care avansează lucrarea pe șantier.",
  },
  {
    q: "Lucrați și în afara județului?",
    a: "Da, ne deplasăm cu echipa în toată România, fără absolut niciun cost suplimentar de transport sau cazare.",
  },
  {
    q: "Cum funcționează plata cu variante auto?",
    a: "Acceptăm anumite autoturisme ca metodă de plată (totală sau parțială) +/- diferență, în urma unei evaluări corecte de ambele părți.",
  },
  {
    q: "Pentru garduri, trebuie să cumpăr eu materialele?",
    a: "Gardul poate fi construit fie din materialele noastre (la cheie), fie doar montaj, folosind materialele furnizate de dumneavoastră.",
  },
  {
    q: "Pot vedea stadiul lucrării dacă nu sunt prezent?",
    a: "Sigur! Oferim demonstrații video pe WhatsApp pentru fiecare etapă a construcției și vă îndrumăm către locații unde am mai construit.",
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
