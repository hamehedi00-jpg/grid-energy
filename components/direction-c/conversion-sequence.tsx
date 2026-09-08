const steps = [
  {
    code: '01',
    label: 'ROOF',
    body: 'An idle structural surface on an existing facility.',
  },
  {
    code: '02',
    label: 'ASSET',
    body: 'Engineered, owned and insured energy infrastructure.',
  },
  {
    code: '03',
    label: 'ENERGY',
    body: 'Generated on site and held to grid standard.',
  },
  {
    code: '04',
    label: 'CASH FLOW',
    body: 'Metered value returned over decades of operation.',
  },
]

export function ConversionSequence() {
  return (
    <div className="grid grid-cols-1 border-t border-line-dark md:grid-cols-4">
      {steps.map((step, i) => (
        <div
          key={step.label}
          className="relative flex flex-col justify-between border-b border-line-dark px-6 py-10 md:border-b-0 md:border-r md:last:border-r-0 md:px-8 md:py-14"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] tracking-[0.24em] text-amber">
              {step.code}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="font-mono text-lg text-concrete md:hidden"
              >
                ↓
              </span>
            )}
          </div>
          <div className="mt-10 md:mt-16">
            <h3 className="font-sans text-2xl font-black uppercase leading-none tracking-tight text-paper lg:text-3xl">
              {step.label}
            </h3>
            <p className="mt-4 max-w-[26ch] text-pretty text-sm leading-relaxed text-paper/60">
              {step.body}
            </p>
          </div>
          {i < steps.length - 1 && (
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
