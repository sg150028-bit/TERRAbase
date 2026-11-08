import { useMemo } from 'react';
import { SlidersHorizontal, Thermometer, AlertTriangle } from 'lucide-react';

interface HardwarePayload {
  id: string;
  label: string;
  idealTemperature: number;
  idealBasalt: number;
  idealShielding: number;
  baseRisk: number;
  vector: string;
}

interface StressState {
  payload: HardwarePayload;
  temperature: number;
  basalt: number;
  shielding: number;
}

interface HardwareStressTesterProps {
  stress: StressState;
  onStressChange: (next: StressState) => void;
  searchQuery: string;
}

const payloads: HardwarePayload[] = [
  { id: 'viper-wheel', label: 'VIPER Lunar Rover Wheel', idealTemperature: -80, idealBasalt: 72, idealShielding: 3, baseRisk: 8, vector: 'Thermal fatigue at the wheel hub' },
  { id: 'perseverance-drill', label: 'Perseverance Coring Drill', idealTemperature: -50, idealBasalt: 88, idealShielding: 2, baseRisk: 12, vector: 'Bit dulling in basaltic regolith' },
  { id: 'starliner-suit', label: 'EVA Suit Glove Seal', idealTemperature: -120, idealBasalt: 40, idealShielding: 5, baseRisk: 15, vector: 'Seal embrittlement under thermal cycling' },
];

export type { StressState, HardwarePayload };

export { payloads as hardwarePayloads };

export function HardwareStressTester({ stress, onStressChange, searchQuery }: HardwareStressTesterProps) {
  const q = searchQuery.trim().toLowerCase();
  const filteredPayloads = q
    ? payloads.filter((p) =>
        [p.id, p.label, p.vector].join(' ').toLowerCase().includes(q)
      )
    : payloads;

  const { payload, temperature, basalt, shielding } = stress;

  const risk = useMemo(() => {
    const tempDev = Math.abs(temperature - payload.idealTemperature) / 180;
    const basaltDev = Math.abs(basalt - payload.idealBasalt) / 100;
    const shieldDev = Math.abs(shielding - payload.idealShielding) / 5;
    const raw = payload.baseRisk + (tempDev * 45) + (basaltDev * 25) + (shieldDev * 20);
    return Math.min(100, Math.round(raw));
  }, [payload, temperature, basalt, shielding]);

  const riskColor =
    risk < 30 ? 'text-emerald-300' : risk < 65 ? 'text-amber-300' : 'text-rose-400';
  const riskBg =
    risk < 30 ? 'from-emerald-400 to-emerald-300' : risk < 65 ? 'from-amber-400 to-amber-300' : 'from-rose-500 to-rose-400';

  const sliders = [
    { key: 'temperature', label: 'Temperature Delta', min: -200, max: 50, unit: '°C', value: temperature },
    { key: 'basalt', label: 'Basalt Density', min: 0, max: 100, unit: '%', value: basalt },
    { key: 'shielding', label: 'Shielding Depth', min: 0, max: 5, unit: 'm', value: shielding },
  ] as const;

  const setSlider = (key: 'temperature' | 'basalt' | 'shielding', v: number) =>
    onStressChange({ ...stress, [key]: v });

  return (
    <section className="glass-card group p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)] sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <SlidersHorizontal className="h-5 w-5 text-cyan-300" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Mission Hardware Stress-Tester</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          <div>
            <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Payload
            </label>
            <select
              value={payload.id}
              onChange={(e) => {
                const next = payloads.find((p) => p.id === e.target.value) ?? payloads[0];
                onStressChange({
                  ...stress,
                  payload: next,
                  temperature: next.idealTemperature,
                  basalt: next.idealBasalt,
                  shielding: next.idealShielding,
                });
              }}
              className="w-full rounded-xl border border-cyan-300/20 bg-[#05070B] px-3 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-300/50"
            >
              {filteredPayloads.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            {filteredPayloads.length === 0 && (
              <p className="mt-2 text-xs text-slate-500">No payloads match “{searchQuery}”.</p>
            )}
          </div>

          {sliders.map((s) => (
            <div key={s.key}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-slate-300">
                  <Thermometer className="h-3 w-3 text-cyan-300/70" /> {s.label}
                </span>
                <span className="font-mono text-xs font-semibold tabular-nums text-cyan-300">
                  {s.value}{s.unit}
                </span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                value={s.value}
                onChange={(e) => setSlider(s.key, Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-cyan-300/15 bg-[#05070B]/60 p-5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <AlertTriangle className="h-3 w-3 text-cyan-300/70" /> Failure Risk
          </div>
          <span className={`mt-3 text-5xl font-bold tabular-nums ${riskColor}`}>{risk}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">/ 100</span>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${riskBg}`}
              style={{ width: `${risk}%`, transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)' }}
            />
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            <span className="font-semibold text-slate-300">Primary vector:</span> {payload.vector}
          </p>
        </div>
      </div>
    </section>
  );
}
