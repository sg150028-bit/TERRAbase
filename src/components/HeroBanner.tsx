import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-[#111d3d]/80 via-[#0a0e17]/60 to-[#05070B]/70 px-6 py-14 text-center shadow-2xl shadow-cyan-950/20 sm:px-10 sm:py-20">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          <Sparkles className="h-3.5 w-3.5" />Open analogue intelligence
        </div>
        <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          TERRA<span className="text-cyan-300">base</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          Quantifying Earth-to-Space site synergy to prevent hardware failure on Mars &amp; the Moon using open NASA and USGS data.
        </p>
        <a
          href="#analogue-site-grid"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200 transition hover:text-white"
        >
          Explore target sites <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
