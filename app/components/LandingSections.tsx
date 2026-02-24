import Image from "next/image";
import { AFrameProcessStory } from "./ProcessStory";

const CATEGORIES = [
  {
    name: "Case Modulare & Containere",
    description: "Structură metalică 100x100x3mm și panouri sandwich termoizolante. La roșu sau la cheie.",
    use: "Locuințe, birouri, garaje auto",
    image: "/images/model-family.jpg", // Schimbă cu o poză cu casă modulară
  },
  {
    name: "Cabane A-Frame & Case Lemn",
    description: "Arhitectură deosebită, mediu de locuit sănătos, materiale premium.",
    use: "Case de vacanță, locuințe permanente",
    image: "/images/aframe-hero.webp",
  },
  {
    name: "Garduri și Porți (Orice model)",
    description: "Jaluzea, șipcă metalică, fier forjat, tablă cutată, plasă, beton sau lemn. Înălțimi 1m - 2m.",
    use: "Cu sau fără fundație/stâlpi",
    image: "/images/terasa-1.webp", // Schimbă cu o poză cu un gard modern
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(142_163_181/0.3)] bg-[rgb(238_246_251/0.88)] backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Construcții România"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>
        <nav aria-label="Navigare principală" className="hidden gap-7 text-sm font-medium md:flex">
          <a href="#servicii">Servicii</a>
          <a href="#detalii-tehnice">Detalii Tehnice</a>
          <a href="#proces">Proces</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#contact" className="shine rounded-full bg-[var(--pine-700)] px-5 py-2 text-sm font-medium text-white">
          0758 887 616
        </a>
      </div>
    </header>
  );
}

export function StaggeredModels() {
  return (
    <section id="servicii" className="mx-auto max-w-7xl px-4 py-18 md:px-10 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
        <div>
          <p className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase">
            Portofoliu Servicii
          </p>
          <h2 className="font-display text-3xl md:text-5xl">De la fundație până la cheie. Peste tot în țară.</h2>
        </div>
        <div className="hidden h-px w-36 bg-[var(--oak-500)] md:block" />
      </div>

      <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
        {CATEGORIES.map((cat, index) => (
          <article
            key={cat.name}
            className="group rounded-[1.8rem] border border-[rgb(142_163_181/0.35)] bg-white p-5 transition hover:-translate-y-1 hover:border-[var(--oak-500)] md:p-6"
          >
            <div className="relative mb-4 h-48 overflow-hidden rounded-2xl md:mb-5">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-display text-xl">{cat.name}</h3>
            <p className="mt-2 text-sm text-[var(--ink-950)]/70">{cat.description}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[var(--pine-700)]">
              Destinație: {cat.use}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProofChips() {
  const chips = [
    "AVANS 0% - Plată eșalonată",
    "Peste 10 ani experiență",
    "Acoperire Națională Gratuită",
    "Factură, deviz și garanție",
    "Update-uri Video pe WhatsApp",
    "Acceptăm variante auto +/-",
  ];

  return (
    <section className="noise-overlay bg-[var(--slate-900)] px-4 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--glacier-200)] uppercase">
          De ce Construcții România
        </p>
        <h2 className="font-display max-w-3xl text-3xl leading-tight md:text-5xl">
          Fără bătăi de cap. Lucrăm de la A la Z cu echipe calificate.
        </h2>
        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgb(207_230_243/0.65),transparent)] md:block" />
          <div className="space-y-4 md:space-y-5">
            {chips.map((chip, index) => (
              <div
                key={chip}
                className={`group relative w-full rounded-2xl border border-[rgb(142_163_181/0.35)] bg-[rgb(255_255_255/0.08)] px-4 py-3 text-sm backdrop-blur-sm transition duration-500 hover:-translate-y-0.5 hover:bg-[rgb(255_255_255/0.14)] md:w-[46%] md:px-5 md:py-4 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <p className="font-medium text-base">{chip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnicalSpecs() {
  return (
    <section id="detalii-tehnice" className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
      <div className="mb-8 md:mb-10 max-w-2xl">
        <p className="mb-2 md:mb-3 text-xs md:text-sm font-bold tracking-[0.2em] text-[var(--pine-700)] uppercase">
          Transparență Totală
        </p>
        <h2 className="font-display text-3xl md:text-5xl">Detalii Tehnice: Case Modulare</h2>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-[var(--ink-950)]/75">
          Alege stadiul la care dorești să îți predăm lucrarea.
        </p>
      </div>
      
      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        {/* Constructie la rosu */}
        <div className="rounded-3xl border border-[rgb(142_163_181/0.4)] bg-white/80 p-5 shadow-sm md:p-8">
          <h3 className="font-display text-xl md:text-2xl mb-4 font-bold text-[var(--oak-500)]">1. Construcție "La Roșu"</h3>
          <ul className="space-y-3 text-sm md:text-base text-[var(--ink-950)]/80">
            <li><strong className="text-[var(--pine-700)]">Talpa casei:</strong> fundație sau piloni.</li>
            <li><strong className="text-[var(--pine-700)]">Pereți:</strong> structură metalică 100x100x3mm; panouri sandwich termoizolante 100mm.</li>
            <li><strong className="text-[var(--pine-700)]">Tavan:</strong> grinzi 150x100mm (la 60cm); scândură 25mm.</li>
            <li><strong className="text-[var(--pine-700)]">Acoperiș:</strong> grinzi 150x100mm (la 60cm); scândură 25mm; folie.</li>
          </ul>
        </div>

        {/* Constructie la gata */}
        <div className="rounded-3xl border border-[rgb(142_163_181/0.4)] bg-white/80 p-5 shadow-sm md:p-8">
          <h3 className="font-display text-xl md:text-2xl mb-4 font-bold text-[var(--pine-700)]">2. Construcție "La Cheie"</h3>
          <ul className="space-y-3 text-sm md:text-base text-[var(--ink-950)]/80">
            <li><strong className="text-[var(--pine-700)]">Talpa casei:</strong> gresie și parchet; instalații sanitare.</li>
            <li><strong className="text-[var(--pine-700)]">Pereți exteriori:</strong> polistiren 100mm; tencuială; plasă; finisaj decorativ.</li>
            <li><strong className="text-[var(--pine-700)]">Pereți interiori:</strong> vată bazaltică 100mm; instalații electrice; rigips; lavabilă; geamuri/uși PVC.</li>
            <li><strong className="text-[var(--pine-700)]">Tavan:</strong> vată bazaltică 150mm; rigips; vopsea lavabilă.</li>
            <li><strong className="text-[var(--pine-700)]">Acoperiș:</strong> caroiaj șipcă; tablă tip țiglă metalică; accesorii.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(142_163_181/0.4)] bg-[linear-gradient(145deg,rgb(255_255_255/0.95),rgb(238_246_251/0.9))] p-6 shadow-xl md:p-12 text-center">
        <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight md:text-5xl">
          Ești gata să începi proiectul tău?
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[var(--ink-950)]/80 max-w-2xl mx-auto">
          Contactează-ne acum pentru consultanță gratuită. Suntem mereu disponibili. 
          <br className="hidden md:block"/> 
          <strong className="text-[var(--pine-700)]">Transport și montaj GRATUT în toată țara. ZERO Avans.</strong>
        </p>
        
        {/* Butoanele devin stivuite (pe coloană) pe mobil și pe același rând de la sm în sus */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="tel:+40758887616" className="shine flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--pine-700)] px-6 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto md:text-lg">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            0758 887 616
          </a>
          
          <a href="https://wa.me/40758887616" target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[var(--pine-700)] bg-transparent px-6 py-4 text-base font-bold text-[var(--pine-700)] transition-colors hover:bg-[var(--pine-700)] hover:text-white sm:w-auto md:text-lg">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Scrie-ne pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// Process timeline component - reuses the existing ProcessStory
export function AFrameProcessTimeline() {
  return <AFrameProcessStory />;
}

// Footer component - simplified for new layout
export function Footer() {
  return (
    <footer className="border-t border-[rgb(142_163_181/0.3)] bg-[rgb(15_27_45/0.98)] px-6 py-10 text-[var(--glacier-200)] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-white">Construcții România</p>
          <p className="mt-2 text-sm text-[var(--glacier-200)]/80">Case modulare, cabane A-Frame, garduri și porți.</p>
        </div>
        <div>
          <p className="mb-2 text-sm text-white">Linkuri rapide</p>
          <ul className="space-y-1 text-sm">
            <li><a href="#servicii">Servicii</a></li>
            <li><a href="#detalii-tehnice">Detalii Tehnice</a></li>
            <li><a href="#proces">Proces</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 text-white">Arie de servicii</p>
          <p className="text-[var(--glacier-200)]/80">Acoperire națională cu transport și montaj gratuit în toată România.</p>
          <p className="mt-2 text-[var(--glacier-200)]/70">Social: Instagram • Facebook • YouTube</p>
          <div className="mt-4">
            <p className="mb-2 text-xs tracking-[0.16em] text-[var(--glacier-200)]/75 uppercase">Crafted in the clouds by</p>
            <a href="https://sky.ro" target="_blank" rel="noreferrer" className="inline-block">
              <Image
                src="/images/skyro-LOGO-6A-final -without tagline-01 (3).png"
                alt="sky.ro"
                width={150}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
