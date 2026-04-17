import { Eyebrow } from "../components/Brand";

type Row = { country: string; users: string; pop: string; spend: string; size: string };

const rows: Row[] = [
  { country: "UK", users: "3.08M", pop: "32%", spend: "€4,200", size: "€25,895" },
  { country: "USA", users: "4.72M", pop: "38%", spend: "€850", size: "€8,024" },
  { country: "China", users: "8.10M", pop: "10%", spend: "€850", size: "€27,540" },
  { country: "Singapore", users: "3.42M", pop: "60%", spend: "€1,200", size: "€4,107" },
  { country: "Spain", users: "1.60M", pop: "19%", spend: "€700", size: "€2,240" },
  { country: "Canada", users: "1.44M", pop: "40%", spend: "€850", size: "€2,449" },
  { country: "France", users: "1.10M", pop: "51%", spend: "€1,100", size: "€1,210" },
  { country: "Netherlands", users: "960k", pop: "81%", spend: "€1,100", size: "€1,056" },
];

export default function ScalabilitySlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Scalability</Eyebrow>
          <h1 className="mt-2 font-display font-bold text-[52px] leading-none text-bottega-green-deep">
            Italy first. Europe next. Global after.
          </h1>
          <p className="mt-4 text-sm text-bottega-ink-soft max-w-2xl leading-relaxed">
            1k+ partner portfolio in Italy, then rapid expansion into France,
            Germany, Spain — with in-market food brokers driving restaurant and
            supermarket deals. Prioritized markets represent a combined
            F&amp;G e-commerce market of <b>€81.8B</b>.
          </p>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-7xl text-bottega-green-deep leading-none">
            €81.8B
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-bottega-green-dark mt-1">
            Total target TAM
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1 min-h-0 rounded-2xl bg-white shadow-soft border border-bottega-green/10 overflow-hidden">
        <div className="grid grid-cols-5 bg-bottega-green-deep text-white text-xs uppercase tracking-wider font-bold">
          <Cell head>Country</Cell>
          <Cell head>Users (main cities)</Cell>
          <Cell head>% Pop.</Cell>
          <Cell head>Avg spend / user / yr</Cell>
          <Cell head>Market size (€M)</Cell>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.country}
            className={`grid grid-cols-5 text-sm ${
              i % 2 === 0 ? "bg-white" : "bg-bottega-mint/40"
            }`}
          >
            <Cell bold>{r.country}</Cell>
            <Cell>{r.users}</Cell>
            <Cell>{r.pop}</Cell>
            <Cell>{r.spend}</Cell>
            <Cell>{r.size}</Cell>
          </div>
        ))}
        <div className="grid grid-cols-5 text-sm bg-bottega-mint-deep font-bold text-bottega-green-deep">
          <Cell bold>Total · WAVG</Cell>
          <Cell>33.8M</Cell>
          <Cell>16.4%</Cell>
          <Cell>€947</Cell>
          <Cell>€81,852</Cell>
        </div>
      </div>
    </div>
  );
}

function Cell({
  children,
  head = false,
  bold = false,
}: {
  children: React.ReactNode;
  head?: boolean;
  bold?: boolean;
}) {
  return (
    <div
      className={`px-4 py-2.5 ${head ? "" : "border-t border-bottega-green/5"} ${
        bold ? "font-semibold text-bottega-green-deep" : ""
      }`}
    >
      {children}
    </div>
  );
}
