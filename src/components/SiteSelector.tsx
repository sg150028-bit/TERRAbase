import { ChevronsUpDown, MapPin, Rocket } from 'lucide-react';
import type { AnalogueSite } from '@/data/analogueSites';

interface SiteSelectorProps {
  sites: AnalogueSite[];
  selectedId: string;
  onSelect: (id: string) => void;
  searchQuery: string;
}

export function SiteSelector({ sites, selectedId, onSelect, searchQuery }: SiteSelectorProps) {
  const q = searchQuery.trim().toLowerCase();
  const filtered = q
    ? sites.filter((s) =>
        [s.earthName, s.spaceName, s.earthLocation, s.spaceLocation, s.categoryLabel, ...s.subjectTags]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
    : sites;

  const selected = sites.find((s) => s.id === selectedId) ?? sites[0];

  return (
    <section className="glass-card p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <ChevronsUpDown className="h-5 w-5 text-cyan-300" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Analogue Pair Selector</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <MapPin className="h-3 w-3 text-cyan-300/70" /> Earth Analogue
          </span>
          <select
            value={selected.id}
            onChange={(e) => onSelect(e.target.value)}
            className="rounded-xl border border-cyan-300/20 bg-[#05070B] px-3 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-300/50"
          >
            {filtered.map((s) => (
              <option key={s.id} value={s.id}>
                {s.earthName} — {s.earthLocation}
              </option>
            ))}
          </select>
        </label>

        <div className="flex flex-col gap-1.5">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <Rocket className="h-3 w-3 text-cyan-300/70" /> Space Target
          </span>
          <div className="flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-3 py-2.5">
            <span className="text-sm font-medium text-cyan-200">{selected.spaceName}</span>
            <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300">
              {selected.spaceLocation}
            </span>
          </div>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="mt-3 text-xs text-slate-500">
          No pairs match “{searchQuery}” — adjust your search to repopulate the dropdown.
        </p>
      )}
    </section>
  );
}
