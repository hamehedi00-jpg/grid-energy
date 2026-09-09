const stages = [
  {
    code: '01',
    name: 'PHYSICAL ASSETS',
    body: 'Infrastructure that generates power on an existing facility.',
  },
  {
    code: '02',
    name: 'DIGITAL ASSETS',
    body: 'The same system, instrumented and measured as continuous data.',
  },
  {
    code: '03',
    name: 'FINANCIAL ASSETS',
    body: 'Contracted and realized output — cash flow over decades of operation.',
  },
  {
    code: '04',
    name: 'ENERGY PORTFOLIO',
    body: 'Many assets aggregated into one connected energy platform.',
  },
]

export function AssetProgression() {
  return (
    <div className="grid grid-cols-1 border-t border-line-dark md:grid-cols-4">
      {stages.map((stage, i) => (
        <div
          key={stage.code}
          className="relative flex flex-col justify-between border-b border-line-dark px-6 py-10 md:border-b-0 md:border-r md:last:border-r-0 md:px-7 md:py-12"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] tracking-[0.24em] text-amber">
              {stage.code}
            </span>
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="font-mono text-lg text-concrete md:hidden"
              >
                ↓
              </span>
            )}
          </div>
          <div className="mt-12 md:mt-20">
            <h3 className="text-balance font-sans text-xl font-black uppercase leading-[0.95] tracking-tight text-paper lg:text-2xl">
              {stage.name}
            </h3>
            <p className="mt-4 max-w-[28ch] text-pretty text-sm leading-relaxed text-paper/55">
              {stage.body}
            </p>
          </div>
          {i < stages.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute right-[-9px] top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 items-center justify-center bg-ink font-mono text-sm text-amber md:flex"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
