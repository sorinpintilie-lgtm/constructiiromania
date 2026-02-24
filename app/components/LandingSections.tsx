import Image from "next/image";
import { AFrameProcessStory } from "./ProcessStory";

const MODELS = [
  {
    name: "A-Frame Compact",
    footprint: "42–58 mp",
    use: "2–4 persoane",
    time: "8–10 săptămâni",
    image: "/images/model-compact.webp",
  },
  {
    name: "A-Frame Family",
    footprint: "68–92 mp",
    use: "4–6 persoane",
    time: "10–14 săptămâni",
    image: "/images/model-family.jpg",
  },
  {
    name: "A-Frame Panorama",
    footprint: "85–120 mp",
    use: "fațadă vitrată",
    time: "12–16 săptămâni",
    image: "/images/model-panorama.webp",
  },
  {
    name: "A-Frame Nordic Loft",
    footprint: "96–136 mp",
    use: "dormitor înalt + living dublu",
    time: "14–18 săptămâni",
    image: "/images/terasa-2.jpg",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(142_163_181/0.3)] bg-[rgb(238_246_251/0.88)] backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10">
        <span className="font-display text-lg tracking-wide">Construcții România</span>
        <nav aria-label="Navigare principală" className="hidden gap-7 text-sm md:flex">
          <a href="#modele">Modele</a>
          <a href="#proces">Proces</a>
          <a href="#terase">Terase</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="shine rounded-full bg-[var(--pine-700)] px-5 py-2 text-sm font-medium text-white"
        >
          Cere ofertă
        </a>
      </div>
    </header>
  );
}

export function AFrameHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-18 pt-14 md:px-10 md:pt-18">
      <div className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[78%] opacity-55" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-[70%] w-px -translate-x-1/2 bg-[rgb(142_163_181/0.45)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-end">
        <div className="relative rounded-[2rem] border border-[rgb(142_163_181/0.35)] bg-white/70 p-8 backdrop-blur-sm md:p-10">
          <div className="mb-5 h-[2px] w-24 bg-[var(--oak-500)]" />
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Cabane A-Frame construite corect. Pentru ani, nu pentru sezoane.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--ink-950)]/78">
            Proiectare + execuție din lemn, detalii curate, izolație gândită,
            finisaje care rezistă.
          </p>
          <p className="mt-4 text-sm text-[var(--ink-950)]/65">
            Garanție • Calitate • Personalizare după terenul tău
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="shine rounded-full bg-[var(--pine-700)] px-6 py-3 font-medium text-white"
            >
              Cere ofertă
            </a>
            <a
              href="#modele"
              className="rounded-full border border-[rgb(142_163_181/0.55)] px-6 py-3"
            >
              Vezi modele A-Frame
            </a>
            <a className="self-center text-sm underline decoration-[var(--oak-500)]" href="#contact">
              Trimite schița / inspirația ta
            </a>
          </div>
        </div>
        <div className="group relative">
          <div className="pointer-events-none absolute right-10 top-2 z-20 rounded-full border border-[rgb(212_106_76/0.5)] bg-[rgb(212_106_76/0.14)] px-4 py-1 text-xs text-[var(--ember-500)]">
            A-Frame • Lemn • La cheie
          </div>
          <div className="aframe-mask shine relative aspect-[1/1.05] overflow-hidden border border-[rgb(142_163_181/0.6)] bg-[var(--slate-900)]">
            <Image
              src="/images/aframe-hero.webp"
              alt="Cabană A-Frame modernă din lemn"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StaggeredModels() {
  return (
    <section id="modele" className="mx-auto max-w-7xl px-4 py-18 md:px-10 md:py-24">
      <div className="mb-8 flex items-end justify-between gap-6 md:mb-12">
        <div>
          <p className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase">
            Modele A-Frame
          </p>
          <h2 className="font-display text-3xl md:text-5xl">Soluții calibrate pe teren și utilizare</h2>
        </div>
        <div className="hidden h-px w-36 bg-[var(--oak-500)] md:block" />
      </div>

      <div className="relative grid gap-5 md:grid-cols-2 md:gap-6">
        <div className="pointer-events-none absolute left-[35%] top-10 hidden h-[75%] w-px -rotate-[27deg] bg-[rgb(142_163_181/0.5)] md:block" />
        {MODELS.map((model, index) => (
          <article
            key={model.name}
            className={`group rounded-[1.8rem] border border-[rgb(142_163_181/0.35)] bg-white p-5 transition hover:-translate-y-1 hover:border-[var(--glacier-200)] md:p-6 ${
              index % 2 === 1 ? "md:mt-14" : ""
            }`}
          >
              <div className="relative mb-4 h-48 overflow-hidden rounded-2xl md:mb-5 md:h-54">
              <Image
                src={model.image}
                alt={`${model.name} - placeholder imagine`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
              <h3 className="font-display text-xl md:text-2xl">{model.name}</h3>
            <p className="mt-2 text-sm text-[var(--ink-950)]/70">
              {model.footprint} • {model.use} • Timp estimat: {model.time}
            </p>
            <p className="mt-4 text-sm uppercase tracking-wide text-[var(--steel-400)]">
              Structură • Izolație • Tâmplărie • Acoperiș
            </p>
            <a href="#contact" className="mt-4 inline-block text-xs underline decoration-[var(--oak-500)] md:mt-6 md:text-sm">
              Cere ofertă pentru acest model
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProofChips() {
  const chips = [
    "Structură calculată",
    "Îmbinări curate",
    "Barieră vapori corectă",
    "Izolație pe straturi",
    "Etanșare & ventilație",
    "Finisaje rezistente la intemperii",
  ];

  return (
    <section className="noise-overlay bg-[var(--slate-900)] px-4 py-18 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--glacier-200)] uppercase">
          De ce Construcții România
        </p>
        <h2 className="font-display max-w-3xl text-3xl leading-tight md:text-5xl">
          Nu vindem doar formă. Livrăm structură corectă, executată cu disciplină.
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
                <span className="pointer-events-none absolute top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[rgb(207_230_243/0.55)] md:block md:w-10" style={{ left: index % 2 === 0 ? "100%" : "auto", right: index % 2 === 0 ? "auto" : "100%" }} />
                <p className="font-medium">{chip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AFrameProcessTimeline() {
  return <AFrameProcessStory />;
}

export function AngledGallery() {
  return (
    <section id="terase" className="mx-auto max-w-7xl px-4 py-18 md:px-10 md:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm tracking-[0.2em] text-[var(--pine-700)] uppercase">Terase & Foișoare</p>
        <h2 className="font-display text-3xl md:text-5xl">Extindem spațiul, păstrând stilul</h2>
        <p className="mt-4 text-[var(--ink-950)]/75">
          Lemn tratat, prinderi corecte, drenaj și protecție.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-[1.05fr_1fr] md:gap-5">
        <figure className="relative h-[320px] overflow-hidden [clip-path:polygon(0_0,100%_2%,96%_100%,0_98%)] md:h-[460px]">
          <Image src="/images/terasa-1.webp" alt="Terasă placată cu lemn" fill loading="lazy" className="object-cover" />
        </figure>
        <div className="grid gap-5">
          <figure className="relative h-[180px] overflow-hidden [clip-path:polygon(2%_0,100%_0,98%_100%,0_100%)] md:h-[220px]">
            <Image src="/images/foisor-1.jpg" alt="Foișor modern din lemn" fill loading="lazy" className="object-cover" />
          </figure>
          <figure className="relative h-[180px] overflow-hidden [clip-path:polygon(0_0,98%_2%,100%_100%,2%_100%)] md:h-[220px]">
            <Image src="/images/terasa-2.jpg" alt="Detaliu balustradă terasă" fill loading="lazy" className="object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 py-18 md:px-10 md:py-24">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 800 400" aria-hidden>
        <path d="M120 340 L400 60 L680 340" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
      <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(142_163_181/0.35)] bg-[linear-gradient(145deg,rgb(255_255_255/0.92),rgb(238_246_251/0.88))] p-5 shadow-[0_24px_80px_rgb(11_18_32/0.08)] md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgb(184_137_90/0.22),transparent_70%)]" />
        <h2 className="font-display max-w-2xl text-2xl leading-tight md:text-5xl">
          Spune-ne terenul, bugetul și ideea. Noi revenim cu o propunere corectă.
        </h2>
        <form className="mt-6 grid gap-3 md:mt-8 md:gap-4 md:grid-cols-2">
          <label className="text-sm">
            Nume
            <input className="mt-2 w-full rounded-xl border border-[rgb(142_163_181/0.45)] px-4 py-3" name="name" />
          </label>
          <label className="text-sm">
            Telefon
            <input className="mt-2 w-full rounded-xl border border-[rgb(142_163_181/0.45)] px-4 py-3" name="phone" />
          </label>
          <label className="text-sm">
            Locație
            <input className="mt-2 w-full rounded-xl border border-[rgb(142_163_181/0.45)] px-4 py-3" name="location" />
          </label>
          <label className="text-sm">
            Tip proiect
            <input className="mt-2 w-full rounded-xl border border-[rgb(142_163_181/0.45)] px-4 py-3" name="projectType" />
          </label>
          <label className="text-sm md:col-span-2">
            Mesaj
            <textarea className="mt-2 min-h-28 w-full rounded-xl border border-[rgb(142_163_181/0.45)] px-4 py-3" name="message" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="shine rounded-xl bg-[var(--pine-700)] px-3 py-1.5 text-xs text-white md:rounded-full md:px-6 md:py-3 md:text-sm">
              Cere ofertă
            </button>
            <p className="mt-3 text-sm text-[var(--ink-950)]/70">Răspundem în 24–48h (lucrătoare).</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[rgb(142_163_181/0.3)] bg-[rgb(15_27_45/0.98)] px-6 py-10 text-[var(--glacier-200)] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-white">Construcții România</p>
          <p className="mt-2 text-sm text-[var(--glacier-200)]/80">Cabane A-Frame, case din lemn, terase și foișoare.</p>
        </div>
        <div>
          <p className="mb-2 text-sm text-white">Linkuri rapide</p>
          <ul className="space-y-1 text-sm">
            <li><a href="#modele">Modele</a></li>
            <li><a href="#proces">Proces</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 text-white">Arie de servicii</p>
          <p className="text-[var(--glacier-200)]/80">Execuție în toată România, în funcție de planificare și acces pe teren.</p>
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

