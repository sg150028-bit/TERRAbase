import { Activity, Table2 } from 'lucide-react';
import type { AnalogueSite } from '@/data/analogueSites';

interface ComparisonMatrixProps {
  site: AnalogueSite;
}

function RadialGauge({ value }: { value: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="relative flex h-36 w-36 items-center justify-center">
      <svg className="h-36 w-36 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1)' }}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold tabular-nums text-white">{value}</span>
        <span className="text-[10px] uppercase tracking-wider text-cyan-300/70">Fidelity</span>
      </div>
    </div>
  );
}

export function ComparisonMatrix({ site }: ComparisonMatrixProps) {
  const avgScore = Math.round(
    (site.metrics.topography + site.metrics.soilMineral + site.metrics.radiationShielding + site.metrics.thermalDelta) / 4
  );

  const bars = [
    { label: 'Topography', value: site.metrics.topography },
    { label: 'Soil / Mineral', value: site.metrics.soilMineral },
    { label: 'Radiation Shield', value: site.metrics.radiationShielding },
    { label: 'Thermal Delta', value: site.metrics.thermalDelta },
  ];

  return (
    <section className="glass-card group p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)] sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Activity className="h-5 w-5 text-cyan-300" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Compatibility Score Matrix</h2>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-2">
          <RadialGauge value={avgScore} />
          <p className="text-center text-xs text-slate-400">
            {site.earthName} → {site.spaceName}
          </p>
        </div>

        <div className="w-full flex-1 space-y-3">
          {bars.map(({ label, value }) => (
            <div key={label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs text-slate-300">{label}</span>
                <span className="font-mono text-xs font-semibold tabular-nums text-cyan-300">{value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#05070B]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300"
                  style={{ width: `${value}%`, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-cyan-300/15 pt-5">
        <div className="mb-3 flex items-center gap-2">
          <Table2 className="h-4 w-4 text-cyan-300/70" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Detailed Comparison</h3>
        </div>
        <div className="overflow-hidden rounded-xl border border-cyan-300/15">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-cyan-300/15 bg-cyan-300/5">
                <th className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">Parameter</th>
                <th className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">Earth Analogue</th>
                <th className="px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">Space Target</th>
              </tr>
            </thead>
            <tbody>
              {site.detailedRows.map((row, i) => (
                <tr
                  key={row.parameter}
                  className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}
                >
                  <td className="px-4 py-2.5 text-xs font-medium text-slate-200">{row.parameter}</td>
                  <td className="px-4 py-2.5 font-mono text-xs tabular-nums text-slate-300">{row.earthParam}</td>
                  <td className="px-4 py-2.5 font-mono text-xs tabular-nums text-cyan-200">{row.spaceParam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
