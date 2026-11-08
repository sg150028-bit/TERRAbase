import { AlertTriangle, Compass, FlaskConical, Mountain, Orbit, ShieldCheck } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Hardware fails off-world',
    body: 'Rovers, drills, and suits break under thermal cycling, dust abrasion, and radiation that no single lab can reproduce.',
  },
  {
    icon: Mountain,
    title: 'No ground-truth terrain',
    body: 'Mission teams lack accessible, quantified Earth sites that genuinely mimic Martian and lunar surface conditions.',
  },
  {
    icon: Orbit,
    title: 'Siloed analogue data',
    body: 'Geology, climate, and engineering test results are scattered across agencies, making cross-comparison manual and slow.',
  },
];

const pathways = [
  {
    icon: FlaskConical,
    title: 'Match & Rank',
    body: 'Score Earth sites against space targets across terrain, mineralogy, shielding, and thermal delta.',
  },
  {
    icon: ShieldCheck,
    title: 'Stress-Test Hardware',
    body: 'Dial in thermal, basalt, and shielding parameters to predict failure risk before you fly.',
  },
  {
    icon: Compass,
    title: 'Plan the Mission',
    body: 'Export a decision-ready memo pairing the best analog with your payload and target coordinates.',
  },
];

export function MissionOverview() {
  return (
    <section className="space-y-8">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-cyan-300" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Problem vs. Solution</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass-card group p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center gap-2">
          <Compass className="h-5 w-5 text-cyan-300" />
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Mission Pathways</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pathways.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="glass-card group relative p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,229,255,0.12)]"
            >
              <span className="absolute right-4 top-3 text-4xl font-bold tabular-nums text-cyan-300/10">
                0{i + 1}
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
