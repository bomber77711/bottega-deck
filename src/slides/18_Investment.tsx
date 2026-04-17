import { Eyebrow } from "../components/Brand";

const budget = [
  { label: "App & website development", value: 50000 },
  { label: "Marketing & on-platform promotions", value: 28000 },
  { label: "Platform maintenance", value: 20000 },
  { label: "Broker fees", value: 15000 },
  { label: "Graphic design (UX + brand)", value: 10000 },
  { label: "Staff / contractors", value: 10000 },
  { label: "Contingency fund", value: 6500 },
  { label: "Legal & compliance", value: 5000 },
  { label: "Tech infrastructure & maintenance", value: 5000 },
  { label: "Customer support", value: 5000 },
  { label: "Travel", value: 5000 },
];

const total = budget.reduce((s, b) => s + b.value, 0);

export default function InvestmentSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>The ask</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          €160,000 for 10% equity.
        </h1>
        <p className="mt-4 text-base text-bottega-ink-soft max-w-2xl leading-relaxed">
          Covers the first two years of operations — platform build, partner
          onboarding, go-to-market and international scale-up. A capital-efficient
          plan with a clear path from seed to Series A readiness.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-5 flex-1 min-h-0">
        {/* Big summary card */}
        <div className="col-span-2 rounded-2xl bg-bottega-green-deep text-white p-7 flex flex-col justify-between">
          <div>
            <div className="uppercase tracking-[0.18em] text-[11px] font-bold text-bottega-mint-deep">
              Investment round
            </div>
            <div className="mt-3 font-display font-bold text-[72px] leading-none">
              €160k
            </div>
            <div className="mt-2 text-sm text-white/80">
              for <b className="text-white">10%</b> equity stake
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/15">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Runway
              </div>
              <div className="font-display font-bold text-2xl text-white">
                24 months
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Pre-money
              </div>
              <div className="font-display font-bold text-2xl text-white">
                €1.44M
              </div>
            </div>
          </div>
        </div>

        {/* Budget breakdown */}
        <div className="col-span-3 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
          <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark mb-4">
            Use of funds
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {budget.map((b) => {
              const pct = (b.value / total) * 100;
              return (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="w-[45%] text-sm text-bottega-ink-soft truncate">
                    {b.label}
                  </div>
                  <div className="flex-1 h-4 bg-bottega-mint rounded-full overflow-hidden">
                    <div
                      className="h-full bg-bottega-green rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-20 text-right text-sm font-semibold text-bottega-green-deep tabular-nums">
                    €{(b.value / 1000).toFixed(0)}k
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-bottega-green/10 flex items-center justify-between">
            <div className="text-sm font-bold text-bottega-green-deep uppercase tracking-wider">
              Net funding needed
            </div>
            <div className="font-display font-bold text-2xl text-bottega-green-deep">
              €{(total / 1000).toFixed(1).replace(/\.0$/, "")}k
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
