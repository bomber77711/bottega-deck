import { Eyebrow, Tomato } from "../components/Brand";

export default function SolutionSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint flex">
      <div className="flex-1 flex flex-col justify-center p-[5%]">
        <Eyebrow>The solution</Eyebrow>
        <h1 className="mt-4 font-display font-bold text-[68px] leading-[0.98] text-bottega-green-deep">
          The Shopify of<br />artisan food.
        </h1>
        <p className="mt-6 text-lg text-bottega-ink-soft max-w-lg leading-relaxed">
          One AI-powered platform connecting every Italian producer with
          customers worldwide. Custom stores, multilingual pages, smart
          pricing, unified checkout — all in one place.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 max-w-lg">
          <Feature title="Custom storefronts" body="Every producer gets their own branded digital store — live in minutes." />
          <Feature title="AI discovery" body="Semantic search helps buyers find exactly what they want, in any language." />
          <Feature title="Unified checkout" body="Buy from 10 producers in one cart. Pay once. Receive from each." />
          <Feature title="Export-ready" body="Automatic compliance filters: organic, gluten-free, export-ready." />
        </div>
      </div>

      {/* right: visual / product mock placeholder */}
      <div className="w-[46%] relative overflow-hidden bg-gradient-to-br from-bottega-green-deep to-bottega-green">
        {/* decorative tomato */}
        <div
          aria-hidden
          className="absolute -right-20 -bottom-20 w-[85%] opacity-15"
        >
          <Tomato className="w-full" />
        </div>
        {/* faux product UI */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[72%] aspect-[4/3] rounded-2xl bg-white shadow-2xl p-4 rotate-[-3deg]">
            <div className="flex items-center gap-2 text-xs text-bottega-muted mb-3">
              <div className="w-2 h-2 rounded-full bg-bottega-red" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-bottega-green" />
              <div className="ml-2">bottega.delivery</div>
            </div>
            <div className="h-6 rounded bg-bottega-mint mb-3 w-[70%]" />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-bottega-mint to-bottega-mint-deep"
                />
              ))}
            </div>
            <div className="mt-3 h-4 rounded bg-bottega-green/10 w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-sm font-bold text-bottega-green-deep">{title}</div>
      <div className="text-xs text-bottega-ink-soft/80 leading-snug mt-1">{body}</div>
    </div>
  );
}
