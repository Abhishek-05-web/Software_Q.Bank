import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import type { CBlock } from "../data/types";

/** Renders one LaTeX expression. Never shows raw LaTeX to the student —
 * on a parse error it falls back to a plain-text notice instead. */
export function MathRenderer({ expression, block = false }: { expression: string; block?: boolean }) {
  try {
    return (
      <span className={block ? "block-math" : "inline-math"}>
        {block ? <BlockMath math={expression} /> : <InlineMath math={expression} />}
      </span>
    );
  } catch {
    return <span className="text-red-600 font-semibold">Expression could not be displayed.</span>;
  }
}

/** Renders an ordered list of content blocks (paragraph / math / heading). */
export function ContentRenderer({ blocks, className = "" }: { blocks: CBlock[]; className?: string }) {
  if (!blocks?.length) return null;
  return (
    <div className={`space-y-2.5 ${className}`}>
      {blocks.map((b, i) => {
        if (b.t === "p") return (
          <p key={i} className="leading-7 text-[0.97rem]">{b.v}</p>
        );
        if (b.t === "h") return (
          <h4 key={i} className="text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300 pt-1">{b.v}</h4>
        );
        return <MathRenderer key={i} expression={b.v} block={b.b !== false} />;
      })}
    </div>
  );
}
