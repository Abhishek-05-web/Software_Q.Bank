import type { FactorTreeNode } from "../data/types";

// Lays a binary factor tree out on a simple grid: each level's y is fixed,
// x-positions are computed so children never overlap their siblings.
interface Positioned {
  node: FactorTreeNode;
  x: number;
  y: number;
  children?: [Positioned, Positioned];
}

function layout(node: FactorTreeNode, depth: number, xRange: [number, number]): { p: Positioned; leaves: number } {
  const y = depth * 84 + 34;
  if (!node.children) return { p: { node, x: (xRange[0] + xRange[1]) / 2, y }, leaves: 1 };
  const [a, b] = node.children;
  const la = layout(a, depth + 1, xRange);
  const mid = xRange[0] + ((xRange[1] - xRange[0]) * la.leaves) / (la.leaves + countLeaves(b));
  const lb = layout(b, depth + 1, [mid, xRange[1]]);
  const laFixed = layout(a, depth + 1, [xRange[0], mid]);
  const x = (laFixed.p.x + lb.p.x) / 2;
  return { p: { node, x, y, children: [laFixed.p, lb.p] }, leaves: la.leaves + countLeaves(b) };
}

function countLeaves(node: FactorTreeNode): number {
  if (!node.children) return 1;
  return countLeaves(node.children[0]) + countLeaves(node.children[1]);
}

function depthOf(node: FactorTreeNode): number {
  if (!node.children) return 0;
  return 1 + Math.max(depthOf(node.children[0]), depthOf(node.children[1]));
}

function collectNodes(p: Positioned, out: Positioned[] = []): Positioned[] {
  out.push(p);
  if (p.children) { collectNodes(p.children[0], out); collectNodes(p.children[1], out); }
  return out;
}

function collectEdges(p: Positioned, out: [Positioned, Positioned][] = []): [Positioned, Positioned][] {
  if (p.children) {
    out.push([p, p.children[0]], [p, p.children[1]]);
    collectEdges(p.children[0], out);
    collectEdges(p.children[1], out);
  }
  return out;
}

export function FactorTree({ root }: { root: FactorTreeNode }) {
  const width = 560;
  const { p } = layout(root, 0, [40, width - 40]);
  const nodes = collectNodes(p);
  const edges = collectEdges(p);
  const height = (depthOf(root) + 1) * 84 + 20;

  return (
    <div className="w-full overflow-x-auto rounded-xl bg-white/70 dark:bg-brand-900/40 border border-brand-100 dark:border-brand-800 p-2">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ minWidth: 420 }} role="img" aria-label="Factor tree diagram">
        {edges.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y + 16} x2={b.x} y2={b.y - 16} className="stroke-brand-300 dark:stroke-brand-600" strokeWidth={2} />
        ))}
        {nodes.map((n, i) => {
          const isUnknown = /^[a-zA-Z]/.test(n.node.label) && n.node.label.length <= 2;
          return (
            <g key={i} transform={`translate(${n.x},${n.y})`}>
              <rect x={-24} y={-16} width={48} height={32} rx={9}
                className={isUnknown ? "fill-mark-400/90 stroke-mark-600" : "fill-brand-600 stroke-brand-800 dark:fill-brand-700 dark:stroke-brand-500"}
                strokeWidth={1.5} />
              <text x={0} y={5} textAnchor="middle" className="fill-white text-[13px] font-mono font-semibold select-none">
                {n.node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
