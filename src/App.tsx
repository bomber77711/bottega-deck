import { useEffect, useState, useCallback } from "react";
import { SlideShell } from "./components/SlideShell";
import { slides } from "./slides";

export default function App() {
  const [index, setIndex] = useState(() => {
    const hash = parseInt(window.location.hash.replace("#", ""), 10);
    return Number.isFinite(hash) && hash > 0 ? hash - 1 : 0;
  });

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setIndex(clamped);
      window.location.hash = String(clamped + 1);
    },
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  useEffect(() => {
    const onHash = () => {
      const h = parseInt(window.location.hash.replace("#", ""), 10);
      if (Number.isFinite(h) && h >= 1 && h <= slides.length) setIndex(h - 1);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Current = slides[index];

  return (
    <div className="h-screen w-screen bg-neutral-900 flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center p-0">
        <SlideShell number={index + 1} total={slides.length}>
          <Current />
        </SlideShell>
      </div>

      <nav className="no-print fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-2 rounded-full text-white/80 text-sm z-50 shadow-lg">
        <button
          onClick={() => go(index - 1)}
          className="px-2 py-1 rounded hover:bg-white/10"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className="tabular-nums text-xs px-2 text-white/60">
          {index + 1} / {slides.length}
        </span>
        <button
          onClick={() => go(index + 1)}
          className="px-2 py-1 rounded hover:bg-white/10"
          aria-label="Next slide"
        >
          ›
        </button>
      </nav>
    </div>
  );
}
