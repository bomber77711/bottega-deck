import { Eyebrow } from "../components/Brand";

type Member = {
  name: string;
  role: string;
  bio: string;
};

const leadership: Member[] = [
  {
    name: "Alessandro Vaccari",
    role: "Founder & CEO",
    bio: "5 years international sales & marketing at Ferrero and Barilla (UK, CH, DE, AU, IT). MSc International Management, Strathclyde.",
  },
  {
    name: "Michele Barchiesi",
    role: "CMO",
    bio: "Made-in-Italy food expert. Co-owner of Giorgione Orto & Cucina and Cantina Antonelli San Marco. Tourism Professor, Roma 3.",
  },
  {
    name: "Guillaume Griffith",
    role: "CFO",
    bio: "5+ years in project financing, financial planning, and strategic support for high-growth sustainability-focused companies.",
  },
  {
    name: "Edoardo Di Piero",
    role: "CTO",
    bio: "Founder & CEO of Galactica Soft. Extensive experience building websites and apps for major national and international clients.",
  },
];

const advisors = [
  { name: "Nicola Formichella", role: "CEO of Forbes Italia" },
  { name: "Leonardo Aresi", role: "Communication Expert & Lobbyist" },
  { name: "Roberto Rizzi", role: "Financial Advisor, UniTrend" },
  { name: "Thomas Wainstain", role: "Advisor" },
  { name: "Simone Fratini", role: "Multimedia Developer, Logicsolution" },
  { name: "Alberto Criscuolo", role: "Lawyer" },
  { name: "Francesco del Prato", role: "Lawyer" },
];

export default function TeamSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div className="flex items-end justify-between mb-6">
        <div>
          <Eyebrow>Meet the team</Eyebrow>
          <h1 className="mt-2 font-display font-bold text-[54px] leading-none text-bottega-green-deep">
            Operators who know the industry.
          </h1>
        </div>
        <div className="text-sm text-bottega-muted max-w-sm text-right">
          Combining global food-industry experience with deep tech and an
          unusually strong Italian advisory network.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 flex-1 min-h-0">
        {/* leadership cards */}
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {leadership.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl bg-white p-5 shadow-soft border border-bottega-green/10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bottega-mint-deep to-bottega-green/30 flex items-center justify-center font-display text-bottega-green-deep font-bold">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-bold text-bottega-ink">{m.name}</div>
                  <div className="text-xs uppercase tracking-wider text-bottega-green-dark">
                    {m.role}
                  </div>
                </div>
              </div>
              <div className="text-xs text-bottega-ink-soft/80 leading-snug">
                {m.bio}
              </div>
            </div>
          ))}
        </div>

        {/* advisors panel */}
        <div className="col-span-4 rounded-2xl bg-bottega-green-deep text-white p-6 flex flex-col">
          <div className="uppercase tracking-[0.18em] text-[11px] font-semibold text-bottega-mint-deep mb-4">
            Consultants & Advisors
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {advisors.map((a) => (
              <div key={a.name}>
                <div className="font-semibold text-sm leading-tight">{a.name}</div>
                <div className="text-xs text-white/70 leading-tight">{a.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
