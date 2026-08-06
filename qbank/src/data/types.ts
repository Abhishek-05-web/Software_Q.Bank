// ─────────────────────────────────────────────────────────────────────────
// Central content types
// ─────────────────────────────────────────────────────────────────────────

export type CBlock =
  | { t: "p"; v: string }
  | { t: "m"; v: string; b?: boolean }
  | { t: "h"; v: string };

export type QuestionType =
  | "mcq"
  | "assertion-reason"
  | "proof"
  | "factor-tree"
  | "application"
  | "prime-composite"
  | "subjective";

export interface MCQOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface FactorTreeNode {
  label: string;
  children?: [FactorTreeNode, FactorTreeNode];
}

export type QuestionDiagramKey =
  | "poly-2026-q2"
  | "poly-2025-q3";

export interface QuestionDiagramData {
  type: "svg";
  key: QuestionDiagramKey;
  ariaLabel: string;
}

export interface Question {
  id: string;
  number: number | string;
  type: QuestionType;
  year: number;
  marks?: number;
  paper?: string;

  statement: CBlock[];

  assertion?: string;
  reason?: string;

  options?: MCQOption[];
  correctOption?: MCQOption["id"];

  factorTree?: FactorTreeNode;
  diagram?: QuestionDiagramData;

  hint: CBlock[];
  answer: CBlock[];
  solution: CBlock[];

  keywords: string[];

  verification:
    | "verified"
    | "editorially-corrected"
    | "source-format-corrected";

  sourceNote?: string;
}

export interface Chapter {
  id: string;
  name: string;
  active: boolean;
  years: {
    year: number;
    questions: Question[];
  }[];
}

export interface Subject {
  id: string;
  name: string;
  active: boolean;
  chapterWise: Chapter[];
  setWise: Chapter[];
}

export interface ClassNode {
  id: string;
  name: string;
  active: boolean;
  subjects: Subject[];
}

export type Tree = ClassNode[];