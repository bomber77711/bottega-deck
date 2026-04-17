import { Eyebrow } from "../components/Brand";

export default function RevenueStreamsSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Future revenue streams</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          From commissions to a Bottega-branded portfolio.
        </h1>
        <p className="mt-4 text-base text-bottega-ink-soft max-w-2xl leading-relaxed">
          Commission on partner sales is the foundation. Once the marketplace
          is live, Bottega launches its own premium private-label program —
          leveraging existing producers, with zero logistics overhead.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 flex-1 min-h-0">
        <Stream
          index="01"
          title="Marketplace commission"
          badge="Primary · live at launch"
          items={[
            "Commission on every B2C and B2B transaction",
            "Bulk buyer pricing for restaurants & supermarkets",
            "Recurring orders for repeat revenue",
            "Premium subscription tier for producers (optional)",
          ]}
        />
        <Stream
          index="02"
          title="Bottega-branded products"
          badge="Expansion · year 2+"
          items={[
            "Bulk-purchase premium products at B2B rates",
            "Producers handle storage & direct dispatch — no warehouse needed",
            "Resell at benchmark market prices (2–3× margin)",
            "Featured at the top of platform listings",
            "Scales without infrastructure cost",
          ]}
          accent
        />
      </div>
    </div>
  );
}

function Stream({
  index,
  title,
  badge,
  items,
  accent = false,
}: {
  index: string;
  title: string;
  badge: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-7 flex flex-col ${
        accent
          ? "bg-bottega-green-deep text-white"
          : "bg-white border border-bottega-green/10 shadow-soft"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`font-display font-bold text-6xl leading-none ${
            accent ? "text-white/20" : "text-bottega-green-deep/15"
          }`}
        >
          {index}
        </div>
        <span
          className={`text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded-full ${
            accent ? "bg-white/15 text-white" : "bg-bottega-mint text-bottega-green-deep"
          }`}
        >
          {badge}
        </span>
      </div>
      <div
        className={`font-display font-bold text-3xl leading-tight ${
          accent ? "text-white" : "text-bottega-green-deep"
        }`}
      >
        {title}
      </div>
      <ul className="mt-5 space-y-2 flex-1">
        {items.map((i) => (
          <li
            key={i}
            className={`flex gap-2 text-sm leading-snug ${
              accent ? "text-white/90" : "text-bottega-ink-soft"
            }`}
          >
            <span className={accent ? "text-bottega-mint-deep" : "text-bottega-green"}>
              →
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
