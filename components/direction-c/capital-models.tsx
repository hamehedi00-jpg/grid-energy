const rows = [
  { label: 'UPFRONT CAPEX', a: 'Funded by GRID ENERGY', b: 'Funded by the facility' },
  { label: 'THE ASSET', a: 'Owned & operated by GRID ENERGY', b: 'Owned by the facility' },
  { label: 'CUSTOMER PAYS', a: 'Per unit of energy generated', b: 'One-time build cost' },
  { label: 'OPERATION & O&M', a: 'GRID ENERGY, full term', b: 'GRID ENERGY, contracted' },
  { label: 'HORIZON', a: 'Long-term energy contract', b: 'System life, 25+ years' },
  { label: 'OUTCOME', a: 'Energy at a fixed rate, no capital outlay', b: 'Full ownership of the cash flow' },
]

export function CapitalModels() {
  return (
    <div className="border border-line-dark">
      {/* model headers */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr]">
        <div className="hidden items-end border-b border-line-dark px-5 py-5 md:flex">
          <span className="font-mono text-[10px] tracking-[0.22em] text-paper/40">
            STRUCTURE
          </span>
        </div>
        <div className="border-b border-line-dark px-5 py-5 md:border-l">
          <p className="font-mono text-[10px] tracking-[0.22em] text-amber">MODEL 01</p>
          <p className="mt-2 font-sans text-lg font-bold tracking-tight text-paper">
            GRID-OWNED · PPA
          </p>
        </div>
        <div className="border-b border-line-dark px-5 py-5 md:border-l">
          <p className="font-mono text-[10px] tracking-[0.22em] text-amber">MODEL 02</p>
          <p className="mt-2 font-sans text-lg font-bold tracking-tight text-paper">
            CUSTOMER-OWNED · CAPEX
          </p>
        </div>
      </div>

      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 border-b border-line-dark last:border-b-0 md:grid-cols-[1fr_1.4fr_1.4fr]"
        >
          <div className="px-5 pt-5 md:py-5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-paper/40">
              {row.label}
            </span>
          </div>
          <div className="px-5 pt-1 pb-2 md:border-l md:border-line-dark md:py-5">
            <p className="text-pretty text-sm leading-relaxed text-paper/80">{row.a}</p>
          </div>
          <div className="px-5 pt-1 pb-5 md:border-l md:border-line-dark md:py-5">
            <p className="text-pretty text-sm leading-relaxed text-paper/80">{row.b}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
