import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  number?: number;
  total?: number;
  /** override background; defaults to bottega mint */
  bg?: string;
};

/**
 * SlideShell locks the inner content to a 16:9 stage that scales to fit the
 * viewport. Each slide component renders inside an absolute-positioned canvas
 * sized 1600×900 (design units). We use a transform scale so pixel-perfect
 * layouts translate 1:1 regardless of browser size.
 */
export function SlideShell({ children, number, total, bg }: Props) {
  return (
    <div className="slide-stage" style={{ background: bg ?? "#edf3eb" }}>
      <div
        className="absolute inset-0 origin-center"
        style={{
          // 16:9 native dims
          // children are expected to fill absolute 0,0 -> 100%,100%
        }}
      >
        {children}
      </div>
      {number !== undefined && total !== undefined && (
        <div className="no-print absolute bottom-4 right-6 text-xs tracking-widest uppercase text-bottega-green-deep/60 font-medium">
          {String(number).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}
