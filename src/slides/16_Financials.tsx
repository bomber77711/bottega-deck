import { Eyebrow } from "../components/Brand";

type Row = {
  label: string;
  values: [number, number, number, number];
  bold?: boolean;
  highlight?: boolean;
};

const rows: Row[] = [
  { label: "Revenue", values: [0.18, 4.45, 17.21, 31.24], bold: true, highlight: true },
  { label: "COGS", values: [-0.12, -3.11, -8.03, -14.58] },
  { label: "Gross profit", values: [0.05, 1.33, 9.18, 16.66], bold: true },
  { label: "OPEX", values: [-0.14, -1.01, -2.04, -3.66] },
  { label: "EBITDA", values: [-0.09, 0.32, 7.14, 13.0], bold: true },
  { label: "Amortization", values: [-0.01, -0.01, -0.01, -0.01] },
  { label: "EBIT", values: [-0.1, 0.31, 7.13, 12.99] },
  { label: "Tax", values: [0.02, -0.07, -1.71, -3.12] },
  { label: "Net income", values: [-0.07, 0.23, 5.42, 9.87], bold: true, highlight: true },
];

const years = ["2026", "2027", "2028", "2029"] as const;

export default function FinancialsSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Financial valuation</Eyebrow>
          <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
            €0.18M → €31.24M in four years.
          </h1>
          <p className="mt-4 text-sm text-bottega-ink-soft max-w-2xl leading-relaxed">
            Revenue scales with partner portfolio and international expansion.
            EBITDA turns positive in 2027; net income reaches €9.87M by 2029.
          </p>
        </div>
        <div className="rounded-2xl bg-bottega-red text-white px-6 py-5 text-right">
          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/80">
            DCF EV after 4y
          </div>
          <div className="font-display font-bold text-5xl leading-none mt-1">
            €16.28M
          </div>
          <div className="text-xs text-white/80 mt-1">
            with expansion to the rest of the EU
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1 min-h-0 rounded-2xl bg-white shadow-soft border border-bottega-green/10 overflow-hidden">
        <div className="grid grid-cols-[2fr_repeat(4,_1fr)] bg-bottega-green-deep text-white text-xs uppercase tracking-wider font-bold">
          <div className="px-5 py-3">Income statement (€M)</div>
          {years.map((y) => (
            <div key={y} className="px-5 py-3 text-right">
              {y}
            </div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`grid grid-cols-[2fr_repeat(4,_1fr)] text-sm border-t border-bottega-green/5 ${
              r.highlight ? "bg-bottega-mint/60" : i % 2 === 0 ? "bg-white" : "bg-bottega-mint/25"
            }`}
          >
            <div
              className={`px-5 py-2.5 ${
                r.bold ? "font-bold text-bottega-green-deep" : "text-bottega-ink-soft"
              }`}
            >
              {r.label}
            </div>
            {r.values.map((v, j) => (
              <div
                key={j}
                className={`px-5 py-2.5 text-right tabular-nums ${
                  r.bold ? "font-bold text-bottega-green-deep" : "text-bottega-ink-soft"
                } ${v < 0 ? "text-bottega-red" : ""}`}
              >
                {v < 0 ? `(${Math.abs(v).toFixed(2)})` : v.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-3 text-[10px] text-bottega-muted italic">
        *Projections are estimates and subject to change. Not an offer to buy or sell securities.
      </div>
    </div>
  );
}
