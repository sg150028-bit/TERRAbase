import { ArrowUpRight, Globe2, Moon, Orbit, Radio } from 'lucide-react';

const archives = [
  {
    id: 'mars',
    glyph: '🔴',
    title: 'MARTIAN SURFACE ANALOGUE',
    description: 'Inspect Chasma Boreale ice caps, Nili Fossae mineral maps, and raw Odyssey feeds.',
    action: 'Open Mars Archive',
    href: 'https://terrabase-martian-archive.framer.website/',
    icon: Globe2,
    accent: 'mars-archive',
    iconClass: 'text-orange-300',
  },
  {
    id: 'lunar',
    glyph: '🌕',
    title: 'LUNAR SURFACE ANALOGUE',
    description: 'Explore Shackleton crater ice traps, Marius Hills lava tubes, and LROC multispectral scans.',
    action: 'Open Lunar Archive',
    href: 'https://terrabase-lunar-archive.framer.website/',
    icon: Moon,
    accent: 'lunar-archive',
    iconClass: 'text-cyan-200',
  },
] as const;

export function ArchiveDecks() {
  return (
    <section className="archive-decks rounded-2xl border border-cyan-300/20 bg-[#0a0e17] p-5 sm:p-7">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/80"><Orbit className="h-3.5 w-3.5" />Research navigation</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">PLANETARY RESEARCH DECKS <span className="text-cyan-300/60">// ANALOGUE ARCHIVES</span></h2>
          <p className="mt-2 max-w-xl text-xs leading-5 text-slate-400">Access full spatial and spectral data suites for interplanetary mission planning.</p>
        </div>
        <span className="flex flex-shrink-0 items-center gap-2 self-start rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200"><Radio className="h-3 w-3 animate-pulse" />TERRAbase INTERCONNECT // ONLINE</span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {archives.map(({ id, glyph, title, description, action, href, icon: Icon, accent, iconClass }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={`archive-card ${accent} group relative overflow-hidden rounded-xl border border-white/10 bg-[#0d1422] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)] sm:p-6`}>
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl transition duration-500 group-hover:bg-white/[0.08]" />
            <div className="relative flex items-start justify-between gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] ${iconClass}`}><Icon className="h-6 w-6" /></div>
              <span className="text-2xl" aria-hidden="true">{glyph}</span>
            </div>
            <div className="relative mt-8">
              <h3 className="text-lg font-semibold tracking-wide text-white">{glyph} {title}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">{description}</p>
            </div>
            <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-xs font-semibold text-slate-300 transition group-hover:text-white">{action} ↗</span><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-cyan-200 transition group-hover:border-current"><ArrowUpRight className="h-4 w-4" /></span></div>
          </a>
        ))}
      </div>
    </section>
  );
}
