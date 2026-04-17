// Unicode-safe constants - avoid literal non-ASCII in source to survive any
// paste/encode pipeline. All special chars are expressed as \u escapes.
const DOT = "\u00B7";          // middle dot
const ELLIPSIS = "\u2026";     // horizontal ellipsis
const STAR = "\u2605";         // black star
const ARROW = "\u2197";        // north-east arrow
const SPARKLE = "\u2728";      // sparkles
const EURO = "\u20AC";         // euro sign

export default function ProductSlide() {
  return (
    <div className="absolute inset-0 bg-[#0b0e0a] text-white p-[3%] overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-1/3 -right-1/4 w-[90%] h-[140%] rounded-full opacity-[0.10] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, #479e44 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-1/3 -left-1/4 w-[70%] h-[120%] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, #c94a3a 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="uppercase tracking-[0.2em] text-[11px] font-semibold text-bottega-green">
            The product {DOT} live at bottega-delivery.com
          </div>
          <h1 className="mt-2 font-display font-bold text-[46px] leading-[0.95] tracking-tight">
            It&apos;s not a pitch. It&apos;s shipping.
          </h1>
          <div className="mt-2 text-[13px] text-white/55 max-w-[620px]">
            A semantic map of Italy, 450 producers onboarded, DOP/IGP commerce, and an
            editorial layer. Built, live, and transacting today.
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bottega-green animate-pulse" />
          Production {DOT} 20 regions live
        </div>
      </div>

      {/* Product grid */}
      <div className="relative z-10 mt-5 grid grid-cols-12 gap-3 h-[66%]">
        <MapHero />
        <div className="col-span-5 grid grid-rows-3 gap-3 h-full">
          <ProducersTile />
          <ProductsTile />
          <StoriesTile />
        </div>
      </div>

      {/* KPI ribbon */}
      <div className="relative z-10 mt-4 grid grid-cols-4 gap-3 border-t border-white/10 pt-4">
        <Kpi value="450" label="Producers onboarded" />
        <Kpi value="20" label="Regions live" />
        <Kpi value="80+" label="Food experiences" />
        <Kpi value="20+" label="DOP / IGP products" />
      </div>
    </div>
  );
}

/* ------------------------------ Map hero ------------------------------ */

function MapHero() {
  // A more accurate Italy silhouette. Viewbox 0 0 500 700.
  // Mainland boot + Sicily + Sardinia, drawn with enough fidelity that it
  // reads as "Italy" at a glance.
  const mainland =
    "M245 60 C275 55 310 65 330 85 C345 100 355 120 352 140 C348 160 330 172 315 178 C300 184 290 195 298 210 C305 225 320 230 330 242 C340 258 335 280 322 292 C310 304 295 312 288 328 C284 342 292 356 306 364 C322 372 336 384 340 402 C344 420 336 438 322 450 C312 462 306 478 308 494 C312 512 324 524 335 538 C346 552 354 570 352 590 C348 610 332 624 315 628 C300 632 288 642 288 658 C288 672 300 682 314 682 C330 680 348 674 362 666 C374 660 385 658 396 664 C404 670 406 682 398 690 C386 698 368 700 352 700 L330 700 C308 700 284 696 266 686 C246 674 230 656 220 634 C212 614 210 592 210 572 L210 544 C210 528 204 514 194 502 C184 490 176 476 172 460 C168 442 172 424 180 408 C188 392 198 378 200 360 C202 340 192 322 180 308 C168 294 158 278 156 260 C156 244 164 228 176 216 C186 204 194 192 194 178 C194 162 184 150 172 140 C160 130 152 116 154 100 C158 84 174 72 192 68 C210 64 228 62 245 60 Z";

  const sicily =
    "M186 720 C175 718 162 722 152 728 C140 736 136 748 142 758 C148 766 162 770 176 768 C196 764 214 758 224 748 C230 742 228 732 220 726 C208 720 196 720 186 720 Z";

  const sardinia =
    "M70 460 C62 452 56 460 54 472 C52 486 54 502 60 516 C66 530 76 540 86 538 C96 534 102 520 100 504 C98 488 88 472 78 464 C74 462 72 460 70 460 Z";

  // Producer pins scattered across the peninsula.
  const pins: Array<[number, number, string]> = [
    [230, 110, "#e8c34a"], [280, 120, "#c94a3a"], [310, 140, "#479e44"],
    [248, 150, "#479e44"], [290, 180, "#e8c34a"], [270, 210, "#c94a3a"],
    [260, 240, "#479e44"], [300, 260, "#e8c34a"], [280, 290, "#479e44"],
    [270, 320, "#c94a3a"], [300, 340, "#e8c34a"], [290, 370, "#479e44"],
    [260, 400, "#c94a3a"], [280, 430, "#479e44"], [300, 460, "#e8c34a"],
    [290, 490, "#c94a3a"], [310, 520, "#479e44"], [300, 550, "#e8c34a"],
    [310, 590, "#479e44"], [290, 620, "#c94a3a"], [320, 650, "#479e44"],
    [180, 740, "#e8c34a"], [215, 745, "#479e44"], [80, 490, "#c94a3a"],
    [85, 510, "#e8c34a"], [340, 630, "#c94a3a"],
  ];

  return (
    <div className="col-span-7 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f1410]">
      {/* Top chrome */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/70 to-transparent">
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-bottega-green/90">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bottega-green" />
          Bottega {DOT} 20 regions live
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-white/60 border border-white/15 rounded px-2 py-0.5">
          Full map {ARROW}
        </div>
      </div>

      {/* Search bar */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 w-[72%]">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur border border-white/15 rounded-full px-4 py-2 shadow-xl">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[11px] text-white/60 flex-1">
            Ask Bottega about Italian food{ELLIPSIS}
          </span>
          <span className="text-bottega-green text-[11px]">{SPARKLE}</span>
        </div>
      </div>

      {/* Suggestion chips under the search */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-20 w-[72%] flex items-center justify-center gap-1.5">
        {["Barolo wines", "Tuscan EVO oil", "Sicilian cheese"].map((t) => (
          <span
            key={t}
            className="text-[9px] uppercase tracking-[0.15em] text-white/55 bg-white/5 border border-white/10 rounded-full px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Italy SVG */}
      <svg
        viewBox="0 0 500 760"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="italyFill" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#2f6b2c" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0f1d12" stopOpacity="0.95" />
          </radialGradient>
          <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path d={mainland} fill="url(#italyFill)" stroke="#5ab055" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d={sicily} fill="url(#italyFill)" stroke="#5ab055" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d={sardinia} fill="url(#italyFill)" stroke="#5ab055" strokeOpacity="0.45" strokeWidth="1.2" />

        {pins.map(([x, y, c], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill={c} fillOpacity="0.15" filter="url(#pinGlow)" />
            <circle cx={x} cy={y} r="4" fill={c} fillOpacity="0.35" />
            <circle cx={x} cy={y} r="2" fill={c} />
          </g>
        ))}
      </svg>

      {/* Bottom-left: featured card */}
      <div className="absolute bottom-3 left-3 z-20 rounded-lg bg-black/70 backdrop-blur border border-white/10 px-3 py-2">
        <div className="text-[9px] uppercase tracking-[0.2em] text-bottega-green">Wine discovery</div>
        <div className="mt-1 flex items-center gap-2">
          <span className="w-5 h-7 rounded-sm inline-block" style={{ background: "linear-gradient(180deg,#4a1a24 0%, #2a0e14 100%)" }} />
          <div>
            <div className="text-[11px] font-semibold leading-none">Barolo DOCG</div>
            <div className="text-[9px] text-white/60 leading-none mt-0.5">Piedmont {DOT} 14.5%</div>
          </div>
        </div>
      </div>

      {/* Bottom-right: density legend */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.18em] text-white/55">
        <span>low</span>
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green/30" />
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green/60" />
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green" />
        <span>high</span>
      </div>

      {/* Caption */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] uppercase tracking-[0.22em] text-white/55">
        Semantic AI search {DOT} 450 pins {DOT} live
      </div>
    </div>
  );
}

/* ------------------------------ Producers ------------------------------ */

function ProducersTile() {
  const producers = [
    { name: "Maria Rossi", region: "Tuscany", years: "3rd gen", hue1: "#c9994a", hue2: "#3a2a15" },
    { name: "Giovanni B.", region: "Sicily", years: "1952", hue1: "#a84a2f", hue2: "#3a1410" },
    { name: "Elena Conti", region: "Piedmont", years: "4th gen", hue1: "#6b5a2b", hue2: "#2a1f10" },
  ];
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12170f] p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-[0.22em] text-bottega-green">Producers</div>
          <div className="mt-0.5 font-display font-semibold text-[15px] leading-tight">
            Meet the people behind the food
          </div>
        </div>
        <div className="text-[10px] text-white/50">120+ live</div>
      </div>
      <div className="mt-auto flex items-end gap-2">
        {producers.map((p) => (
          <div key={p.name} className="flex-1 rounded-lg overflow-hidden bg-black/40 border border-white/10">
            <div
              className="h-16 w-full relative"
              style={{
                background:
                  `radial-gradient(circle at 30% 30%, ${p.hue1} 0%, ${p.hue2} 60%, #0a0a0a 100%)`,
              }}
            >
              {/* portrait silhouette */}
              <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full opacity-60">
                <circle cx="20" cy="15" r="6" fill="#000" fillOpacity="0.35" />
                <path d="M6 38 C8 28 14 24 20 24 C26 24 32 28 34 38 Z" fill="#000" fillOpacity="0.35" />
              </svg>
              <span className="absolute top-1 right-1 text-[7px] uppercase tracking-wider bg-black/60 text-white/80 border border-white/10 rounded px-1">
                {p.years}
              </span>
            </div>
            <div className="px-2 py-1.5">
              <div className="text-[10px] font-semibold leading-none truncate">{p.name}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-bottega-green text-[9px] tracking-widest">
                  {STAR}{STAR}{STAR}{STAR}{STAR}
                </span>
                <span className="text-[8px] text-white/50">{p.region}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Products ------------------------------ */

function ProductsTile() {
  const products = [
    { name: "EVO Oil DOP", price: "24", badge: "DOP", c1: "#3d5a2f", c2: "#1a2a12" },
    { name: "Aceto IGP",   price: "38", badge: "IGP", c1: "#4a2a14", c2: "#1a0f08" },
    { name: "Pecorino",    price: "18", badge: "DOP", c1: "#c49b5a", c2: "#3a2a10" },
  ];
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12170f] p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-[0.22em] text-bottega-green">Products</div>
          <div className="mt-0.5 font-display font-semibold text-[15px] leading-tight">
            DOP &amp; IGP, one unified checkout
          </div>
        </div>
        <div className="text-[10px] text-white/50">multi-producer cart</div>
      </div>
      <div className="mt-auto flex items-end gap-2">
        {products.map((p) => (
          <div key={p.name} className="flex-1 rounded-lg overflow-hidden border border-white/10 bg-black/40">
            <div
              className="h-16 relative flex items-end justify-between p-1.5"
              style={{
                background: `linear-gradient(160deg, ${p.c1} 0%, ${p.c2} 100%)`,
              }}
            >
              {/* bottle/product silhouette */}
              <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full opacity-55">
                <rect x="17" y="6" width="6" height="6" fill="#000" fillOpacity="0.45" />
                <path d="M15 14 C15 12 18 12 20 12 C22 12 25 12 25 14 L27 20 L27 34 C27 36 25 37 20 37 C15 37 13 36 13 34 L13 20 Z" fill="#000" fillOpacity="0.45" />
              </svg>
              <span className="relative text-[7px] font-bold uppercase tracking-wider bg-bottega-red text-white px-1 py-[1px] rounded-sm">
                {p.badge}
              </span>
              <span className="relative text-[8px] uppercase tracking-[0.15em] text-white/70 bg-black/40 rounded px-1">
                new
              </span>
            </div>
            <div className="px-2 py-1.5 flex items-center justify-between">
              <div className="text-[10px] font-semibold truncate">{p.name}</div>
              <div className="text-[10px] text-bottega-green font-bold">{EURO}{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Stories ------------------------------ */

function StoriesTile() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12170f] p-4 flex">
      <div className="flex-1 flex flex-col pr-3">
        <div className="text-[9px] uppercase tracking-[0.22em] text-bottega-green">Stories &amp; Recipes</div>
        <div className="mt-0.5 font-display font-semibold text-[15px] leading-tight">
          Editorial engine, not a marketplace
        </div>
        <div className="mt-1 text-[10px] text-white/55 leading-snug">
          Long-form pieces on producers, regions, recipes. Each story links to the exact
          products and experiences featured.
        </div>
        <div className="mt-auto flex items-end gap-1.5">
          <Chip label="Stories" n="48" />
          <Chip label="Recipes" n="120" />
          <Chip label="Experiences" n="80" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 w-[42%]">
        <StoryCard
          gradient="linear-gradient(135deg,#8b3a25 0%, #3a1a10 100%)"
          kicker="TUSCANY"
          title="The last pecorino cave"
        />
        <StoryCard
          gradient="linear-gradient(135deg,#c49b5a 0%, #3a2a10 100%)"
          kicker="RECIPE"
          title="Cacio e pepe, done right"
        />
      </div>
    </div>
  );
}

function StoryCard({ gradient, kicker, title }: { gradient: string; kicker: string; title: string }) {
  return (
    <div
      className="flex-1 rounded-md border border-white/10 relative overflow-hidden flex flex-col justify-end p-1.5"
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative">
        <div className="text-[7px] uppercase tracking-[0.22em] text-bottega-green font-semibold">{kicker}</div>
        <div className="text-[9px] font-semibold leading-tight text-white">{title}</div>
      </div>
    </div>
  );
}

/* ------------------------------ Primitives ------------------------------ */

function Chip({ label, n }: { label: string; n: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/30 px-2 py-1">
      <div className="text-[13px] font-bold leading-none">{n}</div>
      <div className="text-[8px] uppercase tracking-[0.15em] text-white/55 mt-0.5">{label}</div>
    </div>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-[28px] leading-none text-bottega-green">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
        {label}
      </div>
    </div>
  );
}
