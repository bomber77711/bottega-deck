import { Eyebrow } from "../components/Brand";

export default function MarketTrendsSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Market trends</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          A €10B market, growing double digits.
        </h1>
        <p className="mt-4 text-base text-bottega-ink-soft max-w-2xl leading-relaxed">
          Food &amp; groceries e-commerce is accelerating worldwide. In Italy
          alone the market is projected to more than double by 2030.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-5 flex-1 min-h-0">
        <Pillar
          big="€575B"
          bigLabel="Italian Food sector"
          sub="+7% YoY (2021)"
          body="The Italian F&B sector is one of the country's largest economic engines."
        />
        <Pillar
          big="€4.6B → €10B"
          bigLabel="Italy F&G e-commerce"
          sub="2024 → 2030 projection"
          body="+6.2% YoY today, driven by premium, organic and direct-to-producer demand."
          accent
        />
        <Pillar
          big="27%"
          bigLabel="Italian online grocers"
          sub="+10–12% CAGR expected"
          body="Share of internet users buying groceries online in 2024 — growing fast over the next 5 years."
        />
      </div>

      <div className="mt-5 rounded-2xl bg-white p-5 shadow-soft border border-bottega-green/10">
        <div className="uppercase tracking-[0.18em] text-[10px] font-bold text-bottega-green-dark mb-2">
          Consumer trends powering the shift
        </div>
        <div className="grid grid-cols-3 gap-8 text-sm text-bottega-ink-soft">
          <div>
            <span className="font-semibold text-bottega-green-deep">
              Quality &amp; origin —
            </span>{" "}
            Growing demand for authentic, organic and direct-to-producer goods.
          </div>
          <div>
            <span className="font-semibold text-bottega-green-deep">
              Transparency —
            </span>{" "}
            Consumers prefer platforms that show freshness and sustainability.
          </div>
          <div>
            <span className="font-semibold text-bottega-green-deep">
              Convenience —
            </span>{" "}
            Personalized online shopping experiences drive higher engagement.
          </div>
        </div>
      </div>
    </div>
  );
}

function Pillar({
  big,
  bigLabel,
  sub,
  body,
  accent = false,
}: {
  big: string;
  bigLabel: string;
  sub: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col ${
        accent
          ? "bg-bottega-green-deep text-white"
          : "bg-white border border-bottega-green/10 shadow-soft"
      }`}
    >
      <div
        className={`font-display font-bold text-[44px] leading-none ${
          accent ? "text-white" : "text-bottega-green-deep"
        }`}
      >
        {big}
      </div>
      <div
        className={`mt-2 text-sm font-semibold ${
          accent ? "text-bottega-mint-deep" : "text-bottega-green-dark"
        }`}
      >
        {bigLabel}
      </div>
      <div
        className={`text-xs mt-1 ${accent ? "text-white/70" : "text-bottega-muted"}`}
      >
        {sub}
      </div>
      <div
        className={`mt-4 text-sm leading-snug ${
          accent ? "text-white/85" : "text-bottega-ink-soft"
        }`}
      >
        {body}
      </div>
    </div>
  );
}
