import { Eyebrow } from "../components/Brand";

type Milestone = {
  date: string;
  title: string;
  desc: string;
  target: string;
};

const milestones: Milestone[] = [
  {
    date: "12/2025",
    title: "Collect the capital",
    desc: "Finalize fundraising and ensure budget is ready for deployment.",
    target: "€160k raised",
  },
  {
    date: "01/2026",
    title: "Set compliance structure",
    desc: "Partner contracts, GDPR, certifications, permissions.",
    target: "Legal setup complete",
  },
  {
    date: "03/2026",
    title: "Demo + platform build",
    desc: "Demo website for partners; full build including Italian map tool, AI, partner UI.",
    target: "Platform ready for testing",
  },
  {
    date: "03–04/2026",
    title: "Testing period",
    desc: "Platform testing for bugs and functionalities for B2B and B2C clients.",
    target: "Fully functional platform",
  },
  {
    date: "04/2026",
    title: "Onboard 100+ early partners",
    desc: "Pre-live onboarding with a 12% commission on sales we provide.",
    target: "100 partners confirmed",
  },
  {
    date: "04/2026",
    title: "Influencer + SEO kickoff",
    desc: "Food influencer deals, social campaigns, SEO & referral programs.",
    target: "500k audience reached",
  },
  {
    date: "05/2026",
    title: "Platform goes live",
    desc: "Launch once critical mass of partners reached and platform fully functional.",
    target: "€3k first-month revenue",
  },
  {
    date: "06/2026",
    title: "Scale partners + B2B deals",
    desc: "Target 1k+ partners; structure international distribution (EU, China, India).",
    target: "5 distribution partnerships",
  },
];

export default function TimelineSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Timeline</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
          Capital to launch in six months.
        </h1>
      </div>

      <div className="mt-8 flex-1 min-h-0 relative">
        {/* timeline line */}
        <div className="absolute left-0 right-0 top-[46px] h-[2px] bg-bottega-green/25" />

        <div className="grid grid-cols-8 gap-3 h-full">
          {milestones.map((m, i) => (
            <div key={m.title} className="flex flex-col">
              <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-bottega-green-dark mb-2">
                {m.date}
              </div>
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full ${
                    i === 0
                      ? "bg-bottega-red"
                      : i === milestones.length - 1
                      ? "bg-bottega-green-deep"
                      : "bg-bottega-green"
                  } ring-4 ring-bottega-mint`}
                />
              </div>
              <div className="mt-4 text-sm font-bold text-bottega-green-deep leading-tight">
                {m.title}
              </div>
              <div className="mt-2 text-xs text-bottega-ink-soft/85 leading-snug flex-1">
                {m.desc}
              </div>
              <div className="mt-3 text-[11px] font-semibold text-bottega-red leading-tight">
                → {m.target}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-[10px] text-bottega-muted italic">
        *Estimates, subject to change. Actual results may differ due to market conditions.
      </div>
    </div>
  );
}
