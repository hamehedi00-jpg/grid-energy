const stages = [
  'PHYSICAL ASSET',
  'ENGINEERING',
  'CAPITAL STRUCTURE',
  'ENERGY GENERATION',
  'CONTRACTED / REALIZED CASH FLOW',
  'OPERATING ASSET',
]

export function CapitalChain() {
  return (
    <div className="border border-line-dark">
      <div className="flex items-center justify-between border-b border-line-dark px-5 py-3">
        <span className="font-mono text-[10px] tracking-[0.22em] text-paper/45">
          THE CAPITAL SEQUENCE
        </span>
        <span className="font-mono text-[10px] tracking-[0.22em] text-amber">
          ASSET → CASH FLOW
        </span>
      </div>
      <div className="flex flex-col lg:flex-row">
        {stages.map((stage, i) => {
          const last = i === stages.length - 1
          return (
            <div
              key={stage}
              className="flex flex-1 items-center gap-4 border-b border-line-dark px-5 py-5 last:border-b-0 lg:flex-col lg:items-start lg:justify-between lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span
                className={`font-mono text-[11px] ${last ? 'text-amber' : 'text-paper/35'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`font-sans text-sm font-bold uppercase leading-tight tracking-tight lg:mt-10 lg:text-base ${
                  last ? 'text-amber-bright' : 'text-paper/85'
                }`}
              >
                {stage}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
