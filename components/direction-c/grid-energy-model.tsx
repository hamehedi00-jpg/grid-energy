const stages = [
  {
    code: '01',
    name: 'DEVELOP',
    body: 'Identify viable energy assets and the facilities that can carry them.',
  },
  {
    code: '02',
    name: 'ENGINEER',
    body: 'Design the physical system — structure, electrical, protection and grid connection.',
  },
  {
    code: '03',
    name: 'FINANCE',
    body: 'Structure ownership and capital around the asset and its output.',
  },
  {
    code: '04',
    name: 'BUILD',
    body: 'Construct the infrastructure to specification and commission it.',
  },
  {
    code: '05',
    name: 'OPERATE',
    body: 'Monitor, maintain and account for performance across the asset life.',
  },
  {
    code: '06',
    name: 'SCALE',
    body: 'Aggregate operating assets into a connected energy portfolio.',
  },
]

export function GridEnergyModel() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line-dark sm:grid-cols-2 lg:grid-cols-3">
      {stages.map((stage) => (
        <div
          key={stage.code}
          className="flex min-h-[220px] flex-col justify-between border-b border-r border-line-dark px-6 py-8 lg:px-8 lg:py-10"
        >
          <span className="font-mono text-[11px] tracking-[0.24em] text-amber">
            {stage.code}
          </span>
          <div className="mt-10">
            <h3 className="font-sans text-2xl font-black uppercase leading-none tracking-tight text-paper lg:text-3xl">
              {stage.name}
            </h3>
            <p className="mt-4 max-w-[30ch] text-pretty text-sm leading-relaxed text-paper/55">
              {stage.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
