import { Eyebrow } from "../components/Brand";

export default function TargetCustomersSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Target customers</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          B2C &amp; B2B, profiled and priced per segment.
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-5 flex-1 min-h-0">
        <div className="col-span-5 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
          <p className="text-sm text-bottega-ink-soft leading-relaxed">
            Our target customers span individual consumers, restaurants, and
            supermarkets. Operations start in Italy with a strategic plan for
            rapid international expansion.
          </p>
          <p className="mt-4 text-sm text-bottega-ink-soft leading-relaxed">
            When customers register, we profile them to customize pricing and
            promotions based on purchase volume — tailored deals for individuals
            and bulk buyers alike.
          </p>
          <p className="mt-4 text-sm text-bottega-ink-soft leading-relaxed">
            For the first time, customers worldwide can order from their
            favourite Italian producers with a single click, and set up
            automated recurring orders weekly or monthly.
          </p>
        </div>

        <div className="col-span-7 grid grid-cols-2 grid-rows-2 gap-4">
          <Segment
            title="Individual consumers"
            tag="B2C"
            desc="Home kitchens, gifting, Italian expats, food enthusiasts seeking authenticity."
          />
          <Segment
            title="Restaurants"
            tag="B2B"
            desc="471k+ Italian restaurants worldwide. Bulk-buy programs and recurring orders."
            accent
          />
          <Segment
            title="Supermarkets & delis"
            tag="B2B"
            desc="Specialty retailers sourcing direct from producer — cutting out middlemen."
          />
          <Segment
            title="Food brokers"
            tag="Channel"
            desc="In-market brokers drive platform deals with restaurants and supermarkets."
          />
        </div>
      </div>
    </div>
  );
}

function Segment({
  title,
  tag,
  desc,
  accent = false,
}: {
  title: string;
  tag: string;
  desc: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 flex flex-col justify-between ${
        accent
          ? "bg-bottega-green-deep text-white"
          : "bg-white border border-bottega-green/10 shadow-soft"
      }`}
    >
      <div>
        <div
          className={`uppercase tracking-[0.18em] text-[10px] font-bold ${
            accent ? "text-bottega-mint-deep" : "text-bottega-green-dark"
          }`}
        >
          {tag}
        </div>
        <div
          className={`mt-2 font-display text-2xl font-bold leading-tight ${
            accent ? "text-white" : "text-bottega-green-deep"
          }`}
        >
          {title}
        </div>
      </div>
      <div
        className={`mt-3 text-sm leading-snug ${
          accent ? "text-white/85" : "text-bottega-ink-soft"
        }`}
      >
        {desc}
      </div>
    </div>
  );
}
