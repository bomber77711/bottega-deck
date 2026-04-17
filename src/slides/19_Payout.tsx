import { Eyebrow } from "../components/Brand";

const years = [2025, 2026, 2027, 2028, 2029];
const values = [160, 400, 900, 1700, 2300]; // in thousands, illustrative growth

export default function PayoutSlide() {
  const max = Math.max(...values);
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Payout</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          €160k in. €2.3M out. 14× in four years.
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-5 flex-1 min-h-0">
        {/* Chart */}
        <div className="col-span-3 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
          <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark mb-4">
            Projected equity value (€k)
          </div>
          <div className="flex-1 flex items-end gap-4">
            {years.map((y, i) => {
              const h = (values[i] / max) * 100;
              const isFirst = i === 0;
              const isLast = i === years.length - 1;
              return (
                <div key={y} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <div className="flex-1 w-full flex items-end">
                    <div
                      className={`w-full rounded-t-xl ${
                        isFirst
                          ? "bg-bottega-red"
                          : isLast
                          ? "bg-bottega-green-deep"
                          : "bg-bottega-green"
                      } relative`}
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-6 inset-x-0 text-center text-xs font-bold text-bottega-green-deep">
                        €{values[i] >= 1000 ? `${(values[i] / 1000).toFixed(1)}M` : `${values[i]}k`}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-bottega-muted">{y}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callouts */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="rounded-2xl bg-bottega-red text-white p-6">
            <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-white/80">
              Equity investment
            </div>
            <div className="font-display font-bold text-5xl mt-1 leading-none">
              €160k
            </div>
            <div className="text-xs text-white/80 mt-1">2025 — seed round</div>
          </div>

          <div className="rounded-2xl bg-bottega-green-deep text-white p-6">
            <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-mint-deep">
              Projected equity value
            </div>
            <div className="font-display font-bold text-5xl mt-1 leading-none">
              €2.3M
            </div>
            <div className="text-xs text-white/80 mt-1">
              2029 · <span className="font-bold text-white">14×</span> multiple
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-soft border border-bottega-green/10 flex-1">
            <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark">
              Potential acquirers
            </div>
            <div className="mt-2 text-sm text-bottega-ink-soft leading-snug">
              VCs · delivery platforms (Deliveroo, Glovo, Just Eat) · F&amp;B
              producers (Barilla, De Cecco, Ferrero) · wholesalers.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-[10px] text-bottega-muted italic">
        *Projections are estimates and subject to change. Not an offer to buy or sell securities.
      </div>
    </div>
  );
}
