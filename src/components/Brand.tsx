import logoSrc from "../assets/logo.png";
import tomatoSrc from "../assets/tomato.png";

export function Logo({ className = "h-10", alt = "Bottega" }: { className?: string; alt?: string }) {
  return <img src={logoSrc} className={className} alt={alt} />;
}

export function Tomato({ className = "h-10", alt = "" }: { className?: string; alt?: string }) {
  return <img src={tomatoSrc} className={className} alt={alt} />;
}

/** Decorative tomato silhouette that bleeds off the slide edge. */
export function TomatoBleed({
  corner = "top-left",
  size = 520,
  opacity = 0.18,
  tint = "#e04635",
}: {
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  opacity?: number;
  tint?: string;
}) {
  const inset: React.CSSProperties = {};
  if (corner === "top-left") {
    inset.top = -size / 3;
    inset.left = -size / 3;
  } else if (corner === "top-right") {
    inset.top = -size / 3;
    inset.right = -size / 3;
  } else if (corner === "bottom-left") {
    inset.bottom = -size / 3;
    inset.left = -size / 3;
  } else {
    inset.bottom = -size / 3;
    inset.right = -size / 3;
  }
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        ...inset,
        width: size,
        height: size,
        opacity,
      }}
    >
      <img
        src={tomatoSrc}
        className="w-full h-full object-contain"
        alt=""
        style={{
          filter: `drop-shadow(0 0 0 ${tint})`,
        }}
      />
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="uppercase tracking-[0.18em] text-[11px] font-semibold text-bottega-green-dark/80">
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur px-6 py-5 shadow-soft border border-bottega-green/10">
      <div className="font-display text-4xl text-bottega-green-deep leading-none">
        {value}
      </div>
      <div className="mt-2 text-sm font-semibold text-bottega-ink">{label}</div>
      {sub && <div className="mt-1 text-xs text-bottega-muted leading-snug">{sub}</div>}
    </div>
  );
}
