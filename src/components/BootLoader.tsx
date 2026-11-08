import { useEffect, useState } from 'react';
import { Satellite } from 'lucide-react';

interface BootLoaderProps {
  onDone: () => void;
}

export function BootLoader({ onDone }: BootLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        window.setTimeout(onDone, 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070B] transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-stars opacity-30" />

      <div className="relative flex flex-col items-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/5">
          <div className="absolute inset-0 rounded-2xl bg-cyan-300/10 animate-pulse-glow" />
          <Satellite className="relative h-10 w-10 text-cyan-300 glow-text" />
        </div>
        <h1 className="mt-7 text-2xl font-semibold tracking-[0.32em] text-white glow-text">
          TERRA<span className="text-cyan-300">base</span>
        </h1>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200/50">
          Analogue Intelligence Engine
        </p>

        <div className="mt-9 h-[3px] w-60 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_12px_rgba(0,229,255,0.6)] transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-3 text-[10px] font-medium tabular-nums tracking-widest text-cyan-300/60">
          {Math.round(progress).toString().padStart(3, '0')}%
        </p>
      </div>
    </div>
  );
}
