import { Eyebrow } from "../components/Brand";

const cac = [25, 26, 26, 27];
const ltv = [96, 240, 458, 466];
const years = [2026, 2027, 2028, 2029];

export default function CustomerMetricsSlide() {
  const maxLtv = Math.max(...ltv);
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Customer metrics</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
          CAC flat. LTV 5×. Ratio compounds.
        </h1>
        <p className="mt-4 text-sm text-bottega-ink-soft max-w-2xl leading-relaxed">
          Projected CAC stays between <b>€25–€27</b>. LTV grows from <b>€96
          to €466</b> — driven by order frequency and basket size. The CAC-to-LTV
          ratio consistently improves, confirming a highly capital-efficient
          acquisition model.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-5 flex-1 min-h-0">
        {/* Chart panel */}
        <div className="col-span-2 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark">
              CAC vs LTV (€)
            </div>
            <div className="flex gap-4 text-xs">
              <Legend color="bg-bottega-red" label="CAC" />
              <Legend color="bg-bottega-green-deep" label="LTV" />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-6 items-end">
            {years.map((y, i) => {
              const ltvH = (ltv[i] / maxLtv) * 100;
              const cacH = (cac[i] / maxLtv) * 100;
              return (
                <div key={y} className="flex flex-col items-center gap-2 h-full">
                  <div className="flex-1 w-full flex items-end gap-1.5 justify-center">
                    <div className="flex flex-col items-center justify-end flex-1 max-w-[32px]">
                      <div className="text-[10px] font-bold text-bottega-red mb-1">
                        €{cac[i]}
                      </div>
                      <div
                        className="w-full bg-bottega-red rounded-t"
                        style={{ height: `${cacH}%` }}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-end flex-1 max-w-[32px]">
                      <div className="text-[10px] font-bold text-bottega-green-deep mb-1">
                        €{ltv[i]}
                      </div>
                      <div
                        className="w-full bg-bottega-green-deep rounded-t"
                        style={{ height: `${ltvH}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-bottega-muted font-medium">{y}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ratio panel */}
        <div className="rounded-2xl bg-bottega-green-deep text-white p-6 flex flex-col">
          <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-mint-deep mb-4">
            CAC-to-LTV ratio
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3">
            {years.map((y, i) => {
              const ratio = cac[i] / ltv[i];
              return (
                <div key={y} className="flex items-baseline justify-between">
                  <span className="text-sm text-white/70">{y}</span>
                  <span className="font-display font-bold text-3xl tabular-nums">
                    {ratio.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-5 pt-5 border-t border-white/15 text-xs text-white/80 leading-relaxed">
            Lower ratios mean stronger unit economics. A <b>0.06</b> ratio
            means every €1 of CAC returns roughly <b>€17 of LTV</b>.
          </div>
        </div>
      </div>

      <div className="mt-3 text-[10px] text-bottega-muted italic">
        *Projections are estimates and subject to change.
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-bottega-ink-soft">
      <span className={`w-3 h-3 rounded-sm ${color}`} />
      <span>{label}</span>
    </div>
  );
}
