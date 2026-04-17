import { Eyebrow } from "../components/Brand";

export default function ProblemSlide() {
  return (
    <div className="absolute inset-0 grid grid-cols-12 gap-0 bg-bottega-mint">
      {/* left text block */}
      <div className="col-span-7 flex flex-col justify-center p-[6%]">
        <Eyebrow>The problem</Eyebrow>
        <h1 className="mt-4 font-display font-bold text-[64px] leading-[1.02] text-bottega-green-deep">
          Authentic Italian food is trapped behind borders.
        </h1>
        <p className="mt-6 text-lg text-bottega-ink-soft max-w-xl leading-relaxed">
          Only a fraction of Italian food exports qualify as authentically
          Made&nbsp;in&nbsp;Italy. The rest is Italian-sounding imitation —
          and the best small producers have no way to reach the global
          customers who want their products.
        </p>
      </div>

      {/* right stats */}
      <div className="col-span-5 bg-bottega-green-deep text-white p-[5%] flex flex-col justify-center gap-10">
        <Stat
          value="€120B"
          label="Italian sounding"
          sub="Imitation products sold globally under Italian-style branding each year."
        />
        <Stat
          value="60%"
          label="Flows through retail"
          sub="Of Italian food exports move through retail chains — small producers get squeezed."
        />
        <Stat
          value="471k+"
          label="Italian restaurants worldwide"
          sub="Global demand is enormous. Supply chains to serve them are fragmented."
        />
      </div>
    </div>
  );
}

function Stat({ value, label, sub }: { value: string; label: string; sub: string }) {
  return (
    <div>
      <div className="font-display font-bold text-[56px] leading-none text-white">
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold tracking-wide uppercase text-bottega-mint-deep">
        {label}
      </div>
      <div className="mt-2 text-sm text-white/80 leading-relaxed max-w-[28ch]">{sub}</div>
    </div>
  );
}
