import { Eyebrow } from "../components/Brand";

const pillars = [
  {
    icon: "★",
    title: "Key influencer collaboration",
    body: "Partner with influencers like Giorgione Orto e Cucina to promote authentic Italian products through video content, recipes and tutorials. Leverage their audiences to build trust and awareness.",
  },
  {
    icon: "◆",
    title: "Social media strategy",
    body: "Engaging content on social networks — recipes, producer stories, customer testimonials. Paid ads, influencer takeovers and interactive campaigns drive engagement and conversions.",
  },
  {
    icon: "▲",
    title: "Food broker partnerships",
    body: "Collaborate with food brokers to expand partner portfolio and introduce Bottega to restaurants, delis and supermarkets. Expand reach via targeted B2B relationships and bulk incentives.",
  },
  {
    icon: "●",
    title: "SEO optimization",
    body: "Robust SEO for Italian produce, direct-to-producer marketplaces, and authentic recipes. Optimize listings, blog content and landing pages for organic traffic.",
  },
];

export default function MarketingPlanSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Marketing plan</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          Four channels. One coordinated launch.
        </h1>
      </div>

      <div className="mt-8 flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-5">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`rounded-2xl p-7 flex flex-col ${
              i === 0
                ? "bg-bottega-green-deep text-white"
                : "bg-white border border-bottega-green/10 shadow-soft"
            }`}
          >
            <div
              className={`font-display text-5xl leading-none mb-3 ${
                i === 0 ? "text-bottega-red" : "text-bottega-red"
              }`}
            >
              {p.icon}
            </div>
            <div
              className={`font-display font-bold text-2xl leading-tight ${
                i === 0 ? "text-white" : "text-bottega-green-deep"
              }`}
            >
              {p.title}
            </div>
            <div
              className={`mt-3 text-sm leading-relaxed ${
                i === 0 ? "text-white/85" : "text-bottega-ink-soft"
              }`}
            >
              {p.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
