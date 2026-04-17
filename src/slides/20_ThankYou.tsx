import { Logo, Tomato } from "../components/Brand";

export default function ThankYouSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-green-deep text-white overflow-hidden flex flex-col p-[6%]">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 w-[55%] opacity-20 pointer-events-none"
      >
        <Tomato className="w-full" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[70%]">
        <div className="uppercase tracking-[0.22em] text-xs font-semibold text-bottega-mint-deep mb-6">
          Thank you
        </div>
        <h1 className="font-display font-bold text-[88px] leading-[0.95] text-white">
          Let&apos;s bring Italy to the world.
        </h1>
        <p className="mt-8 text-xl text-white/80 max-w-xl leading-relaxed">
          Join us in building the operating system for authentic
          Italian food exports.
        </p>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="text-sm font-semibold text-white">
            Alessandro Vaccari
          </div>
          <div className="text-xs text-white/60 uppercase tracking-wider">
            Founder &amp; CEO
          </div>
          <div className="mt-3 text-sm text-white/80">
            alessandro.vaccari@bottega.delivery
          </div>
        </div>
        <div className="bg-white rounded-xl p-4">
          <Logo className="h-12" />
        </div>
      </div>
    </div>
  );
}
