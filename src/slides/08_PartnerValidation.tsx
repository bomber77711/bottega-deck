import { Eyebrow } from "../components/Brand";

type Quote = {
  name: string;
  company: string;
  location: string;
  category: string;
  activity: string;
  value: string;
  commission: string;
};

const quotes: Quote[] = [
  {
    name: "Pio Costa",
    company: "Olio Costa",
    location: "Genova, IT",
    category: "Olive Oil",
    activity:
      "Olio Costa specializes in premium extra virgin olive oil — crafted with a commitment to quality, tradition, and sustainability.",
    value:
      "Being associated with Bottega would enhance our visibility to a global audience, strengthen direct-to-consumer sales, and align us with a platform focused on authentic Italian products.",
    commission:
      "We would consider paying a reasonable commission if the partnership provides significant exposure and facilitates access to a broader consumer base.",
  },
  {
    name: "Matteo Costanzo",
    company: "Riseria Costanzo",
    location: "Villanova Monferrato, IT",
    category: "Agriculture",
    activity:
      "Riseria Costanzo offers premium rice varieties like Carnaroli and Basmati, with artisanal biscuits and ready-made risottos.",
    value:
      "Being able to sell at full price instead of to supermarkets at half price would almost double my income. It would restore my sense of pride — I want to be associated only with the quality of Made in Italy.",
    commission:
      "Yes — given the partnership would provide significant exposure to new markets and help reach a broader consumer base effectively.",
  },
];

export default function PartnerValidationSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div>
        <Eyebrow>Partner validation</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
          Producers told us exactly what they need.
        </h1>
      </div>

      <div className="mt-6 flex-1 min-h-0 grid grid-cols-2 gap-5">
        {quotes.map((q) => (
          <div
            key={q.company}
            className="rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="font-display font-bold text-xl text-bottega-green-deep leading-tight">
                  {q.company}
                </div>
                <div className="text-xs text-bottega-muted uppercase tracking-wider">
                  {q.name} · {q.location}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-bottega-mint text-bottega-green-deep text-xs font-semibold border border-bottega-green/15">
                {q.category}
              </span>
            </div>

            <QA label="Main activity" text={q.activity} />
            <QA label="Added value with Bottega" text={q.value} highlight />
            <QA label="Willing to pay commission?" text={q.commission} />
          </div>
        ))}
      </div>
    </div>
  );
}

function QA({ label, text, highlight = false }: { label: string; text: string; highlight?: boolean }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="uppercase tracking-[0.14em] text-[10px] font-bold text-bottega-green-dark mb-1">
        {label}
      </div>
      <div
        className={`text-sm leading-snug ${
          highlight ? "text-bottega-ink font-medium italic" : "text-bottega-ink-soft"
        }`}
      >
        {highlight && <span className="text-bottega-red">“</span>}
        {text}
        {highlight && <span className="text-bottega-red">”</span>}
      </div>
    </div>
  );
}
