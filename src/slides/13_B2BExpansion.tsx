import { Eyebrow } from "../components/Brand";

const cities = [
  { name: "Tokyo", value: 4982 },
  { name: "New York", value: 938 },
  { name: "Rio de Janeiro", value: 722 },
  { name: "Los Angeles", value: 570 },
  { name: "Hong Kong", value: 541 },
  { name: "Buenos Aires", value: 373 },
  { name: "Melbourne", value: 324 },
  { name: "Beijing", value: 253 },
];

const countries = [
  { name: "Italy", value: 143852, color: "bg-bottega-green-deep" },
  { name: "USA", value: 137044, color: "bg-bottega-green" },
  { name: "Brazil", value: 34550, color: "bg-bottega-red" },
];

export default function B2BExpansionSlide() {
  const maxCity = cities[0].value;
  const maxCountry = countries[0].value;

  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>B2B international expansion</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
          471,000 Italian restaurants want Italian suppliers.
        </h1>
        <p className="mt-4 text-sm text-bottega-ink-soft max-w-3xl leading-relaxed">
          In 2023 Italy&apos;s agri-food exports reached <b>€64B</b>, driven by
          vegetable preserves (+13%) and cheeses (+12%). Italian cuisine supports
          a <b>€75B global foodservice market</b> — restaurants alone contribute
          €15–20B in sales. Bottega wins B2B through food brokers in each region.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-5 flex-1 min-h-0">
        {/* Cities chart */}
        <div className="rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
          <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark mb-4">
            Italian restaurants · by city (2023)
          </div>
          <div className="flex-1 flex flex-col justify-between gap-2">
            {cities.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-24 shrink-0 text-sm text-bottega-ink-soft">
                  {c.name}
                </div>
                <div className="flex-1 h-5 bg-bottega-mint rounded-full overflow-hidden">
                  <div
                    className="h-full bg-bottega-green-deep rounded-full"
                    style={{ width: `${(c.value / maxCity) * 100}%` }}
                  />
                </div>
                <div className="w-16 text-right text-sm font-semibold text-bottega-green-deep tabular-nums">
                  {c.value.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries chart */}
        <div className="rounded-2xl bg-bottega-green-deep p-6 text-white flex flex-col">
          <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-mint-deep mb-4">
            Top countries · Italian restaurants
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {countries.map((c) => (
              <div key={c.name}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-display font-bold text-2xl">{c.name}</span>
                  <span className="tabular-nums text-sm text-white/80">
                    {c.value.toLocaleString()}
                  </span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${c.color} rounded-full`}
                    style={{ width: `${(c.value / maxCountry) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-white/15 text-sm text-white/85 leading-relaxed">
            <b className="font-display text-2xl text-white">471,000</b> Italian
            restaurants globally (BoldData). <b>~60%</b> of Italian food exports
            flow through retail chains — a €38–40B opportunity.
          </div>
        </div>
      </div>
    </div>
  );
}
