import { Logo, Tomato } from "../components/Brand";

export default function TitleSlide() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-[6%] bg-bottega-mint overflow-hidden">
      {/* decorative tomato */}
      <div
        aria-hidden
        className="absolute -right-24 -top-24 w-[46%] opacity-90 pointer-events-none"
      >
        <Tomato className="w-full" />
      </div>
      <div
        aria-hidden
        className="absolute -left-32 -bottom-32 w-[38%] opacity-20 pointer-events-none"
      >
        <Tomato className="w-full" />
      </div>

      <div className="relative z-10">
        <Logo className="h-16" />
      </div>

      <div className="relative z-10 max-w-[70%]">
        <div className="uppercase tracking-[0.22em] text-xs font-semibold text-bottega-green-dark mb-4">
          The Italian Food Marketplace
        </div>
        <h1 className="font-display font-bold text-[72px] leading-[0.95] text-bottega-green-deep">
          The operating system for Italian food exports.
        </h1>
        <p className="mt-6 text-lg text-bottega-ink-soft max-w-xl">
          Connecting Italian Food &amp; Beverage producers with the world —
          one AI-powered marketplace, every authentic Made in Italy product.
        </p>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div className="text-xs tracking-wider text-bottega-muted uppercase">
          Investor deck · 2026
        </div>
        <div className="text-xs text-bottega-muted">
          Alessandro Vaccari — Founder &amp; CEO
        </div>
      </div>
    </div>
  );
}
