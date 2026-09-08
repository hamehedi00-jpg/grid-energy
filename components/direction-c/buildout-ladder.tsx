const phases = [
  { code: '01', name: 'ROOFTOP SOLAR', body: 'Generation on existing commercial & industrial structures.', horizon: 'NOW' },
  { code: '02', name: 'ENERGY STORAGE', body: 'Batteries for reliability, backup and load shifting.', horizon: 'NEAR' },
  { code: '03', name: 'ENERGY MANAGEMENT', body: 'Monitoring, control and optimisation across the asset.', horizon: 'NEAR' },
  { code: '04', name: 'EV INFRASTRUCTURE', body: 'Charging tied directly to on-site generation.', horizon: 'NEXT' },
  { code: '05', name: 'DISTRIBUTED ENERGY', body: 'Networked assets operated across many sites.', horizon: 'HORIZON' },
  { code: '06', name: 'UTILITY-SCALE INFRASTRUCTURE', body: 'Grid-scale generation and project development.', horizon: 'HORIZON' },
]

export function BuildoutLadder() {
  return (
    <div className="border-t border-line-dark">
      {phases.map((phase) => {
        const active = phase.horizon === 'NOW'
        return (
          <div
            key={phase.code}
            className="group grid grid-cols-1 items-baseline gap-2 border-b border-line-dark py-7 md:grid-cols-[auto_1fr_auto] md:gap-8"
          >
            <div className="flex items-baseline gap-4">
              <span
                className={`font-mono text-sm ${active ? 'text-amber' : 'text-paper/35'}`}
              >
                {phase.code}
              </span>
              <h3
                className={`font-sans text-2xl font-extrabold uppercase leading-none tracking-tight lg:text-4xl ${
                  active ? 'text-paper' : 'text-paper/70'
                }`}
              >
                {phase.name}
              </h3>
            </div>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-paper/55 md:justify-self-start">
              {phase.body}
            </p>
            <span
              className={`inline-flex w-fit items-center border px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] md:justify-self-end ${
                active
                  ? 'border-amber text-amber'
                  : 'border-line-dark text-paper/40'
              }`}
            >
              {phase.horizon}
            </span>
          </div>
        )
      })}
    </div>
  )
}
