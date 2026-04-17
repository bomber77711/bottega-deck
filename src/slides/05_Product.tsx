export default function ProductSlide() {
  return (
    <div className="absolute inset-0 bg-[#0b0e0a] text-white p-[3%] overflow-hidden">
      {/* Subtle topographic glow */}
      <div
        aria-hidden
        className="absolute -top-1/3 -right-1/4 w-[90%] h-[140%] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, #479e44 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="uppercase tracking-[0.2em] text-[11px] font-semibold text-bottega-green">
            The product Â· live at bottega-delivery.com
          </div>
          <h1 className="mt-2 font-display font-bold text-[46px] leading-[0.95] tracking-tight">
            It&apos;s not a pitch. It&apos;s shipping.
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bottega-green animate-pulse" />
          Production Â· 20 regions live
        </div>
      </div>

      {/* Product grid */}
      <div className="relative z-10 mt-5 grid grid-cols-12 gap-3 h-[68%]">
        {/* Hero: the Italy map */}
        <MapHero />

        {/* Right column: stacked product tiles */}
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

/* ------------------------------ Tiles ------------------------------ */

function MapHero() {
  return (
    <div className="col-span-7 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f1410]">
      {/* Top chrome */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-bottega-green/90">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-bottega-green" />
          Bottega Â· 20 regions live
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-white/60 border border-white/15 rounded px-2 py-0.5">
          Full map â
        </div>
      </div>

      {/* Search bar */}
      <div className="absolute top-[14%] left-1/2 -translate-x-1/2 z-20 w-[70%]">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur border border-white/15 rounded-full px-4 py-2 shadow-xl">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-[11px] text-white/60 flex-1">
            Ask Bottega about Italian foodâ¦
          </span>
          <span className="text-bottega-green text-[11px]">â¨</span>
        </div>
      </div>

      {/* Italy shape (stylized SVG silhouette) */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="italyFill" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#2e5e2c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#14251a" stopOpacity="0.95" />
          </radialGradient>
        </defs>
        {/* Stylized Italy mainland */}
        <path
          d="M185 70 Q200 55 225 60 Q255 65 265 85 Q270 105 255 120 Q250 135 235 140 Q240 160 230 175 Q225 195 215 205 Q230 215 240 230 Q255 250 250 275 Q245 295 230 310 Q225 335 210 355 Q200 380 195 405 Q190 425 180 440 Q190 455 210 455 Q230 450 240 465 Q245 475 230 480 Q210 475 195 470 Q175 460 165 445 Q155 420 160 395 Q165 370 175 350 Q170 320 175 295 Q165 275 150 260 Q135 245 140 225 Q150 210 165 205 Q155 185 150 165 Q145 140 160 120 Q170 95 185 80 Z"
          fill="url(#italyFill)"
          stroke="#479e44"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
        {/* Sicily */}
        <path
          d="M155 465 Q140 460 125 465 Q115 475 130 482 Q150 485 165 478 Z"
          fill="url(#italyFill)"
          stroke="#479e44"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />
        {/* Sardinia */}
        <path
          d="M100 330 Q90 320 85 335 Q82 360 92 375 Q105 380 110 365 Q112 345 100 330 Z"
          fill="url(#italyFill)"
          stroke="#479e44"
          strokeOpacity="0.35"
          strokeWidth="0.8"
        />

        {/* Producer pins â scattered */}
        {[
          [195, 105, "#e8c34a"], [215, 115, "#c94a3a"], [230, 125, "#479e44"],
          [185, 140, "#479e44"], [210, 155, "#e8c34a"], [225, 165, "#c94a3a"],
          [195, 175, "#479e44"], [215, 190, "#e8c34a"], [230, 205, "#479e44"],
          [205, 225, "#c94a3a"], [215, 245, "#e8c34a"], [225, 260, "#479e44"],
          [195, 275, "#c94a3a"], [215, 295, "#479e44"], [230, 310, "#e8c34a"],
          [210, 335, "#c94a3a"], [225, 360, "#479e44"], [200, 385, "#e8c34a"],
          [215, 410, "#479e44"], [200, 435, "#c94a3a"], [145, 470, "#479e44"],
          [95, 355, "#e8c34a"], [170, 130, "#c94a3a"], [245, 145, "#479e44"],
          [180, 230, "#e8c34a"], [240, 280, "#c94a3a"],
        ].map(([x, y, c], i) => (
          <g key={i}>
            <circle cx={x as number} cy={y as number} r="5" fill={c as string} fillOpacity="0.25" />
            <circle cx={x as number} cy={y as number} r="2.2" fill={c as string} />
          </g>
        ))}
      </svg>

      {/* Bottom overlays */}
      <div className="absolute bottom-3 left-3 z-20 rounded-lg bg-black/60 backdrop-blur border border-white/10 px-3 py-2">
        <div className="text-[9px] uppercase tracking-[0.2em] text-bottega-green">Wine discovery</div>
        <div className="mt-1 flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-[#5a2330] inline-block" />
          <div>
            <div className="text-[11px] font-semibold leading-none">Barolo DOCG</div>
            <div className="text-[9px] text-white/50 leading-none mt-0.5">Piedmont</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[8px] uppercase tracking-[0.18em] text-white/55">
        <span>low</span>
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green/30" />
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green/60" />
        <span className="w-1.5 h-1.5 rounded-sm bg-bottega-green" />
        <span>high</span>
      </div>

      {/* Caption */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] uppercase tracking-[0.22em] text-white/45">
        Semantic AI search Â· 450 pins Â· live
      </div>
    </div>
  );
}

function ProducersTile() {
  const producers = [
    { name: "Maria Rossi", region: "Tuscany", hue: "#8b6b3d" },
    { name: "Giovanni B.", region: "Sicily", hue: "#a84a2f" },
    { name: "Elena Conti", region: "Piedmont", hue: "#5b4a2b" },
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
        <div className="text-[10px] text-white/45">120+ live</div>
      </div>
      <div className="mt-auto flex items-end gap-2">
        {producers.map((p) => (
          <div key={p.name} className="flex-1 rounded-lg overflow-hidden bg-black/40 border border-white/10">
            <div
              className="h-14 w-full"
              style={{
                background: `linear-gradient(135deg, ${p.hue} 0%, #1a1a1a 100%)`,
              }}
            />
            <div className="px-2 py-1.5">
              <div className="text-[10px] font-semibold leading-none truncate">{p.name}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-bottega-green text-[9px]">âââââ</span>
                <span className="text-[8px] text-white/40">{p.region}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsTile() {
  const products = [
    { name: "EVO Oil DOP", price: "â¬24", badge: "DOP", c1: "#3d5a2f", c2: "#6b8b4a" },
    { name: "Aceto IGP", price: "â¬38", badge: "IGP", c1: "#3d2a1a", c2: "#6b4a2b" },
    { name: "Pecorino", price: "â¬18", badge: "DOP", c1: "#c49b5a", c2: "#7a5a2a" },
  ];
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12170f] p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-[0.22em] text-bottega-green">Products</div>
          <div className="mt-0.5 font-display font-semibold text-[15px] leading-tight">
            DOP &amp; IGP, checkout across producers
          </div>
        </div>
        <div className="text-[10px] text-white/45">unified cart</div>
      </div>
      <div className="mt-auto flex items-end gap-2">
        {products.map((p) => (
          <div key={p.name} className="flex-1 rounded-lg overflow-hidden border border-white/10 bg-black/40">
            <div
              className="h-14 relative flex items-end justify-end p-1"
              style={{
                background: `linear-gradient(160deg, ${p.c1} 0%, ${p.c2} 100%)`,
              }}
            >
              <span className="text-[7px] font-bold uppercase tracking-wider bg-bottega-red text-white px-1 py-[1px] rounded-sm">
                {p.badge}
              </span>
            </div>
            <div className="px-2 py-1.5 flex items-center justify-between">
              <div className="text-[10px] font-semibold truncate">{p.name}</div>
              <div className="text-[10px] text-bottega-green font-bold">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoriesTile() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#12170f] p-4 flex">
      <div className="flex-1 flex flex-col">
        <div className="text-[9px] uppercase tracking-[0.22em] text-bottega-green">Stories &amp; Recipes</div>
        <div className="mt-0.5 font-display font-semibold text-[15px] leading-tight">
          Editorial engine, not a marketplace
        </div>
        <div className="mt-auto flex items-end gap-1.5">
          <Chip label="Stories" n="48" />
          <Chip label="Recipes" n="120" />
          <Chip label="Experiences" n="80" />
        </div>
      </div>
      <div className="ml-3 flex flex-col gap-1.5 w-[38%]">
        <div className="flex-1 rounded-md bg-gradient-to-br from-[#8b3a25] to-[#3a1a10] border border-white/10" />
        <div className="flex-1 rounded-md bg-gradient-to-br from-[#c49b5a] to-[#3a2a10] border border-white/10" />
      </div>
    </div>
  );
}

function Chip({ label, n }: { label: string; n: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/30 px-2 py-1">
      <div className="text-[13px] font-bold leading-none">{n}</div>
      <div className="text-[8px] uppercase tracking-[0.15em] text-white/50 mt-0.5">{label}</div>
    </div>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold text-[28px] leading-none text-bottega-green">
        {value}
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </div>
    </div>
  );
}
