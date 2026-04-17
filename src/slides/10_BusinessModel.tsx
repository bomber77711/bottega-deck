import { Eyebrow, Tomato } from "../components/Brand";

export default function BusinessModelSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 w-[30%] opacity-10 pointer-events-none"
      >
        <Tomato className="w-full" />
      </div>

      <div className="relative z-10">
        <Eyebrow>Business model</Eyebrow>
        <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
          We take a cut of every authentic Italian purchase.
        </h1>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-12 gap-5">
        {/* producer card */}
        <Actor
          label="Producers"
          emoji="🫒"
          body="High-quality Italian producers set up a digital store, manage listings, and fulfill orders directly."
        />

        {/* arrow + bottega */}
        <div className="col-span-4 relative">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center">
            <div className="w-full h-[2px] bg-bottega-green/30" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="rounded-2xl bg-bottega-green-deep text-white px-6 py-5 text-center shadow-card">
              <div className="font-display font-bold text-3xl leading-none">
                Bottega
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-bottega-mint-deep">
                AI marketplace
              </div>
              <div className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                Commission on every sale
              </div>
            </div>
          </div>
        </div>

        <Actor
          label="Customers"
          emoji="🛒"
          body="Individuals, restaurants, and supermarkets — profiled for tailored pricing and recurring orders."
        />
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-3 gap-5">
        <Benefit
          title="For producers"
          body="Global visibility, advanced AI marketing, higher margins than retail channels."
        />
        <Benefit
          title="For customers"
          body="Direct prices, authentic Made-in-Italy guarantee, AI discovery across 450+ producers."
        />
        <Benefit
          title="For Bottega"
          body="Scalable commission revenue with no inventory risk — producers hold and ship stock."
          accent
        />
      </div>
    </div>
  );
}

function Actor({ label, body, emoji }: { label: string; body: string; emoji: string }) {
  return (
    <div className="col-span-4 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-col">
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="font-display font-bold text-2xl text-bottega-green-deep">
        {label}
      </div>
      <div className="mt-2 text-sm text-bottega-ink-soft leading-snug">{body}</div>
    </div>
  );
}

function Benefit({ title, body, accent = false }: { title: string; body: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        accent
          ? "bg-bottega-red text-white"
          : "bg-white border border-bottega-green/10 shadow-soft"
      }`}
    >
      <div
        className={`uppercase tracking-[0.14em] text-[10px] font-bold ${
          accent ? "text-white/85" : "text-bottega-green-dark"
        }`}
      >
        {title}
      </div>
      <div
        className={`mt-2 text-sm leading-snug ${
          accent ? "text-white" : "text-bottega-ink-soft"
        }`}
      >
        {body}
      </div>
    </div>
  );
}
