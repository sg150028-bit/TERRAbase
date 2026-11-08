import { Search, Satellite } from 'lucide-react';
import { bodyFilters, type Body } from '@/data/analogueSites';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeBody: Body | 'all';
  onBodyChange: (body: Body | 'all') => void;
}

export function Header({ searchQuery, onSearchChange, activeBody, onBodyChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070B]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
              <div className="absolute inset-0 rounded-xl bg-cyan-300/15 animate-pulse-glow" />
              <Satellite className="relative h-5 w-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-white">
                TERRA<span className="text-cyan-300">base</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-200/60">Analogue Intelligence</p>
            </div>
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-300/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search target sites..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:bg-white/[0.08]"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {bodyFilters.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => onBodyChange(b.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                activeBody === b.id
                  ? 'bg-cyan-300/20 text-cyan-200 border border-cyan-300/40'
                  : 'text-slate-400 border border-white/10 hover:border-cyan-300/30 hover:text-cyan-200'
              }`}
            >
              [ {b.label} ]
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
