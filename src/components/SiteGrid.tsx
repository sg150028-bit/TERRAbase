import { ArrowRight, Crosshair, Gauge, MapPin, SearchX } from 'lucide-react';
import type { AnalogueSite } from '@/data/analogueSites';

interface SiteGridProps {
  sites: AnalogueSite[];
  searchQuery: string;
  onOpenSite: (site: AnalogueSite) => void;
}

export function SiteGrid({ sites, searchQuery, onOpenSite }: SiteGridProps) {
  const q = searchQuery.trim().toLowerCase();

  const filtered = q
    ? sites.filter((s) =>
        [s.earthName, s.spaceName, s.earthLocation, s.spaceLocation, s.categoryLabel, ...s.subjectTags]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
    : sites;

  return (
    <div id="analogue-site-grid">
      <div className="mb-5 flex items-center gap-2">
        <Crosshair className="h-5 w-5 text-cyan-300" />
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Target Site Array</h2>
          <p className="mt-1 text-xs text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'target' : 'targets'} ready for inspection
          </p>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((site) => {
            const avgScore = Math.round(
              (site.metrics.topography + site.metrics.soilMineral + site.metrics.radiationShielding + site.metrics.thermalDelta) / 4
            );
            return (
              <button
                key={site.id}
                onClick={() => onOpenSite(site)}
                className="glass-card group relative overflow-hidden text-left transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] hover:border-cyan-300/40"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${site.earthImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/40 to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        site.body === 'mars'
                          ? 'bg-orange-500/25 text-orange-200 border border-orange-400/30'
                          : 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/30'
                      }`}
                    >
                      {site.body}
                    </span>
                  </div>
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#05070B]/80 px-2 py-0.5">
                    <Gauge className="h-3 w-3 text-cyan-300" />
                    <span className="text-[10px] font-bold text-cyan-300">{avgScore}%</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-sm font-semibold text-white">{site.earthName}</p>
                    <p className="flex items-center gap-0.5 text-[11px] text-cyan-300/70">
                      <MapPin className="h-2.5 w-2.5" /> {site.earthLocation}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-center gap-1.5 rounded-md bg-cyan-300/5 py-1.5">
                    <ArrowRight className="h-3 w-3 text-cyan-300" />
                    <span className="text-[11px] font-medium text-cyan-200">{site.spaceName}</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: 'Terrain', value: site.metrics.topography },
                      { label: 'Soil', value: site.metrics.soilMineral },
                      { label: 'Shield', value: site.metrics.radiationShielding },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center gap-2">
                        <span className="w-12 text-[10px] uppercase tracking-wide text-slate-500">{m.label}</span>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#05070B]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                            style={{ width: `${m.value}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-[10px] font-medium text-cyan-300">{m.value}%</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-wider text-cyan-300/60 transition group-hover:text-cyan-200">
                    Click to inspect →
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="glass-card flex flex-col items-center gap-3 p-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <SearchX className="h-6 w-6 text-slate-500" />
          </div>
          <p className="text-sm font-semibold text-slate-300">No targets found</p>
          <p className="max-w-xs text-xs text-slate-500">
            No analogue sites match “{searchQuery}”. Try a different name, location, or body filter.
          </p>
        </div>
      )}
    </div>
  );
}
