import { Eyebrow, Tomato } from "../components/Brand";

type Feature = { title: string; items: string[] };

const producers: Feature = {
  title: "For producers",
  items: [
    "Custom store & product management",
    "AI marketing assistant",
    "Dynamic pricing intelligence",
    "High-quality LLM translations",
    "AI export advisor",
    "Automatic multilingual pages",
  ],
};

const consumers: Feature = {
  title: "For consumers",
  items: [
    "Semantic search & AI discovery",
    "Filters: organic, gluten-free, export-ready",
    "Unified checkout across producers",
    "Recurring purchases & reorders",
    "Culturally-adapted translations",
    "Reviews & producer stories",
  ],
};

const platform: Feature = {
  title: "For the platform",
  items: [
    "Integrated payments & commission mgmt.",
    "Full admin panel + CMS",
    "Multi-criteria recommendations",
    "Market & export trend prediction",
    "Pricing intelligence dashboard",
    "Strategic simulator",
  ],
};

export default function ProductSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-16 -top-20 w-[28%] opacity-15 pointer-events-none"
      >
        <Tomato className="w-full" />
      </div>

      <div className="relative z-10">
        <Eyebrow>AI Application</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[54px] leading-none text-bottega-green-deep">
          One platform. Three sides. AI on every one.
        </h1>
        <p className="mt-4 text-base text-bottega-ink-soft max-w-2xl">
          Core commerce plus AI-native tooling across producers, consumers, and
          the platform itself — with pricing intelligence as a structural
          advantage.
        </p>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-3 gap-5">
        <Column data={producers} accent />
        <Column data={consumers} />
        <Column data={platform} />
      </div>

      <div className="relative z-10 mt-6 rounded-2xl bg-bottega-green-deep text-white p-5 flex items-center gap-6">
        <div className="font-display font-bold text-2xl leading-tight shrink-0 max-w-[38%]">
          Pricing intelligence
        </div>
        <div className="text-sm text-white/85 leading-relaxed">
          Global data crawling → semantic product matching → interactive
          dashboard (prices, opportunities, alerts) → strategic simulator
          (ideal price, margins, competitors).
        </div>
      </div>
    </div>
  );
}

function Column({ data, accent = false }: { data: Feature; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-5 border ${
        accent
          ? "bg-white border-bottega-green/20 shadow-soft"
          : "bg-white/70 border-bottega-green/10"
      }`}
    >
      <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark mb-3">
        {data.title}
      </div>
      <ul className="space-y-2">
        {data.items.map((i) => (
          <li key={i} className="flex gap-2 text-sm text-bottega-ink-soft leading-snug">
            <span className="text-bottega-green mt-[2px]">●</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
