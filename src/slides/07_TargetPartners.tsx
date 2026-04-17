import { Eyebrow } from "../components/Brand";

const categories = [
  "Extra Virgin Olive Oil",
  "Wines",
  "Coffee",
  "Parmesan",
  "Pesto",
  "Olives",
  "Tuna",
  "Vinegar",
  "Pasta",
  "Flour",
  "Dairies",
  "Cured Meats",
  "Truffle",
  "Rice",
  "Chocolate",
  "Liqueurs",
  "Beer",
  "Honey",
  "Sweets",
  "Sauces & Preserves",
  "Mushrooms",
  "Dried Fruit",
  "Soft Drinks",
  "Mineral Water",
  "Hazelnuts",
  "Bread & Baked",
  "Legumes",
  "Fish",
  "Meat",
  "Milk",
  "Fruit",
  "Spices & Herbs",
];

export default function TargetPartnersSlide() {
  return (
    <div className="absolute inset-0 bg-bottega-mint p-[4%] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Target partners</Eyebrow>
          <h1 className="mt-2 font-display font-bold text-[56px] leading-none text-bottega-green-deep">
            450+ producers identified. 32 categories covered.
          </h1>
          <p className="mt-4 text-base text-bottega-ink-soft max-w-2xl leading-relaxed">
            A diversified supply across Italy&apos;s premium food &amp; beverage
            categories — from Extra Virgin Olive Oil and wines to cheeses,
            cured meats, truffle, rice and specialty preserves.
          </p>
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-7xl text-bottega-green-deep leading-none">
            450+
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-bottega-green-dark mt-1">
            Identified partners
          </div>
        </div>
      </div>

      <div className="mt-6 flex-1 min-h-0 rounded-2xl bg-white p-6 shadow-soft border border-bottega-green/10 flex flex-wrap content-start gap-2 overflow-hidden">
        {categories.map((c) => (
          <span
            key={c}
            className="px-3 py-1.5 rounded-full bg-bottega-mint text-bottega-green-deep text-sm font-medium border border-bottega-green/15"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
