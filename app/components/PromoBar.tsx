export function PromoBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[100] border-b border-[rgb(31_41_51/0.22)] bg-[#F2B94B] pt-[env(safe-area-inset-top)] text-[#1F2933]">
      <div className="mx-auto grid h-[var(--promo-bar-height)] max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 text-[12px] font-normal md:hidden">
        <span className="truncate">Concept demo</span>
        <span className="whitespace-nowrap text-center">Dezvoltat de sky.ro</span>
        <a href="tel:+40720088880" className="justify-self-end whitespace-nowrap text-right text-[#1F2933]">
          +4 0720 088 880
        </a>
      </div>

      <div className="mx-auto hidden h-[var(--promo-bar-height)] max-w-7xl items-center justify-between gap-4 px-4 text-[13px] font-normal md:flex">
        <p className="min-w-0 whitespace-nowrap">
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
          <a href="mailto:dan.trifan@sky.ro" className="text-[#1F2933] underline-offset-2 hover:underline">
            dan.trifan@sky.ro
          </a>{" "}
          •{" "}
          <a href="tel:+40720088880" className="text-[#1F2933] underline-offset-2 hover:underline">
            +4 0720 088 880
          </a>
        </p>

        <a
          href="#contact"
          className="rounded-md bg-[#2F80ED] px-3 py-1.5 text-[12px] font-normal text-white transition-colors hover:bg-[#246fda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          Cere ofertă
        </a>
      </div>
    </div>
  );
}

