import { useEffect } from 'react';
import { ArrowUpRight, Gauge, MapPin, Rocket, Satellite, Target, Thermometer, X } from 'lucide-react';
import type { AnalogueSite } from '@/data/analogueSites';

interface SiteInspectionModalProps {
  site: AnalogueSite;
  onClose: () => void;
  onLaunchArchive: (site: AnalogueSite) => void;
}

export function SiteInspectionModal({ site, onClose, onLaunchArchive }: SiteInspectionModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const avgScore = Math.round(
    (site.metrics.topography + site.metrics.soilMineral + site.metrics.radiationShielding + site.metrics.thermalDelta) / 4
  );

  const telemetry = [
    { icon: MapPin, label: 'Earth Coordinates', value: site.earthCoords },
    { icon: Target, label: 'Space Coordinates', value: site.spaceCoords },
    { icon: Thermometer, label: 'Thermal Delta', value: site.thermalDeltaLabel },
    { icon: Gauge, label: 'Composite Fidelity', value: `${avgScore}%` },
  ];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 animate-fade-up"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-[#05070B]/80 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#0a0e17]/90 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="relative h-40 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${site.spaceImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/50 to-transparent" />
          <div className="absolute right-4 top-4">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#05070B]/70 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="rounded-full bg-cyan-300/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 border border-cyan-300/25">
              {site.categoryLabel}
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-200">
              {site.spaceLocation}
            </span>
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
            <Satellite className="h-3.5 w-3.5" /> Site Inspection
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
            {site.earthName} <span className="text-cyan-300/70">→</span> {site.spaceName}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{site.tagline}</p>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {telemetry.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-cyan-300/70">
                  <Icon className="h-3 w-3" /> {label}
                </div>
                <p className="mt-1 text-sm font-medium tabular-nums text-slate-100">{value}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onLaunchArchive(site)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-[#07101f] transition hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20"
          >
            <Rocket className="h-4 w-4" />
            Launch Framer Archive
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
