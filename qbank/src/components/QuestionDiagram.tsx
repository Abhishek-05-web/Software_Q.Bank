import type { QuestionDiagramData } from "../data/types";

export function QuestionDiagram({
  diagram
}: {
  diagram: QuestionDiagramData;
}) {
  if (diagram.key === "poly-2026-q2") {
    return <Polynomial2026Question2 ariaLabel={diagram.ariaLabel} />;
  }

  if (diagram.key === "poly-2025-q3") {
    return <Polynomial2025Question3 ariaLabel={diagram.ariaLabel} />;
  }

  return null;
}

function Polynomial2026Question2({
  ariaLabel
}: {
  ariaLabel: string;
}) {
  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-brand-200 bg-white p-3 dark:border-brand-700 dark:bg-brand-950/40">
      <svg
        viewBox="0 0 380 220"
        className="h-auto w-full"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <marker
            id="arrow-poly-2026-q2"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="3.5"
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L7,3.5 L0,7 Z"
              fill="currentColor"
            />
          </marker>
        </defs>

        <line
          x1="30"
          y1="155"
          x2="350"
          y2="155"
          stroke="currentColor"
          strokeWidth="2"
          markerStart="url(#arrow-poly-2026-q2)"
          markerEnd="url(#arrow-poly-2026-q2)"
        />

        <line
          x1="110"
          y1="195"
          x2="110"
          y2="25"
          stroke="currentColor"
          strokeWidth="2"
          markerStart="url(#arrow-poly-2026-q2)"
          markerEnd="url(#arrow-poly-2026-q2)"
        />

        <path
          d="
            M 45 90
            C 70 62, 84 115, 110 116
            C 140 117, 150 52, 185 52
            C 220 52, 225 116, 260 116
            C 292 116, 304 74, 335 65
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />

        <text x="355" y="162" fontSize="17">X</text>
        <text x="8" y="162" fontSize="17">X′</text>
        <text x="118" y="24" fontSize="17">Y</text>
        <text x="118" y="207" fontSize="17">Y′</text>
        <text x="92" y="176" fontSize="17">O</text>
      </svg>
    </div>
  );
}

function Polynomial2025Question3({
  ariaLabel
}: {
  ariaLabel: string;
}) {
  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-brand-200 bg-white p-3 dark:border-brand-700 dark:bg-brand-950/40">
      <svg
        viewBox="0 0 380 250"
        className="h-auto w-full"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          <marker
            id="arrow-poly-2025-q3"
            markerWidth="7"
            markerHeight="7"
            refX="3.5"
            refY="3.5"
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L7,3.5 L0,7 Z"
              fill="currentColor"
            />
          </marker>
        </defs>

        <line
          x1="25"
          y1="125"
          x2="355"
          y2="125"
          stroke="currentColor"
          strokeWidth="2"
          markerStart="url(#arrow-poly-2025-q3)"
          markerEnd="url(#arrow-poly-2025-q3)"
        />

        <line
          x1="190"
          y1="225"
          x2="190"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          markerStart="url(#arrow-poly-2025-q3)"
          markerEnd="url(#arrow-poly-2025-q3)"
        />

        <path
          d="
            M 75 205
            C 105 120, 135 55, 190 55
            C 245 55, 275 120, 305 205
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />

        <path
          d="
            M 75 45
            C 105 125, 135 195, 190 195
            C 245 195, 275 125, 305 45
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />

        <text x="360" y="132" fontSize="17">X</text>
        <text x="5" y="132" fontSize="17">X′</text>
        <text x="198" y="20" fontSize="17">Y</text>
        <text x="198" y="240" fontSize="17">Y′</text>
      </svg>
    </div>
  );
}