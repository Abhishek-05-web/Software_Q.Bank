import { QuestionDiagram } from "./QuestionDiagram";
import { useState } from "react";
import { Lightbulb, CheckCircle2, BookOpenCheck, Bookmark, BookmarkCheck, Copy, Check, ShieldCheck, PencilLine } from "lucide-react";
import type { Question } from "../data/types";
import { ContentRenderer, MathRenderer } from "./MathRenderer";
import { FactorTree } from "./FactorTree";

const TYPE_LABEL: Record<Question["type"], string> = {
  mcq: "MCQ",
  "assertion-reason": "Assertion–Reason",
  proof: "Proof",
  "factor-tree": "Factor Tree",
  application: "Application",
  "prime-composite": "Prime / Composite",
  subjective: "Subjective"
};

function containsMath(s: string) { return /\\[a-zA-Z]|[\^_]/.test(s); }

/** Renders a short string that may contain inline LaTeX (used for MCQ option text). */
function InlineText({ text }: { text: string }) {
  return containsMath(text) ? <MathRenderer expression={text} /> : <>{text}</>;
}

export function QuestionCard({
  q, chapterName, completed, bookmarked, onToggleComplete, onToggleBookmark
}: {
  q: Question;
  chapterName: string;
  completed: boolean;
  bookmarked: boolean;
  onToggleComplete: () => void;
  onToggleBookmark: () => void;
}) {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyQuestion = async () => {
    const text = q.statement.map((b) => (b.t === "p" ? b.v : b.t === "m" ? b.v : "")).join(" ") || `${q.assertion ?? ""} ${q.reason ?? ""}`;
    try { await navigator.clipboard.writeText(text.trim()); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* clipboard unavailable */ }
  };

  return (
    <article className="rounded-2xl border border-brand-100 dark:border-brand-800 bg-white dark:bg-brand-900/40 shadow-card overflow-hidden">
      <header className="flex flex-wrap items-center gap-2 px-5 pt-4">
        <span className="font-display text-lg font-semibold text-ink dark:text-brand-100">Q{q.number}</span>
        <Badge>{chapterName}</Badge>
        <Badge tone="mark">{q.year}</Badge>
        {q.marks && <Badge>{q.marks} Mark{q.marks > 1 ? "s" : ""}</Badge>}
        <Badge tone="brand">{TYPE_LABEL[q.type]}</Badge>
        {q.paper && <span className="text-xs text-brand-500 dark:text-brand-400 ml-auto font-mono">{q.paper}</span>}
      </header>

      <div className="px-5 pt-3">
        {q.type === "assertion-reason" ? (
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div className="rounded-lg border border-brand-200 dark:border-brand-700 p-3">
              <p className="text-xs font-bold uppercase text-brand-600 dark:text-brand-300 mb-1">Assertion (A)</p>
              <p className="leading-6 text-[0.95rem]"><InlineText text={q.assertion ?? ""} /></p>
            </div>
            <div className="rounded-lg border border-mark-500/40 p-3">
              <p className="text-xs font-bold uppercase text-mark-600 mb-1">Reason (R)</p>
              <p className="leading-6 text-[0.95rem]"><InlineText text={q.reason ?? ""} /></p>
            </div>
          </div>
        ) : (
          <ContentRenderer blocks={q.statement} className="mb-3" />
        )}

        {q.type === "factor-tree" && q.factorTree && (
          <div className="mb-4"><FactorTree root={q.factorTree} /></div>
        )}

        {q.options && (
          <ol className="grid sm:grid-cols-2 gap-2 mb-3">
            {q.options.map((o) => (
              <li key={o.id} className="flex gap-2 rounded-lg bg-brand-50 dark:bg-brand-800/40 px-3 py-2 text-[0.93rem]">
                <span className="font-mono font-semibold text-brand-600 dark:text-brand-300">({o.id})</span>
                <span><InlineText text={o.text} /></span>
              </li>
            ))}
          </ol>
        )}

        {q.keywords.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {q.keywords.map((k) => (
              <span key={k} className="text-[0.7rem] px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-200">{k}</span>
            ))}
          </div>
        )}
      </div>

      {/* Hint / Answer / Solution panels */}
      <div className="px-5 space-y-2 pb-2">
        <Toggle label="Hint" open={showHint} onClick={() => setShowHint((s) => !s)} icon={<Lightbulb size={16} />} tone="amber" />
        {showHint && (
          <Panel tone="amber"><ContentRenderer blocks={q.hint} /></Panel>
        )}

        <Toggle label="Answer" open={showAnswer} onClick={() => setShowAnswer((s) => !s)} icon={<CheckCircle2 size={16} />} tone="emerald" />
        {showAnswer && (
          <Panel tone="emerald"><ContentRenderer blocks={q.answer} /></Panel>
        )}

        <Toggle label="Full Solution" open={showSolution} onClick={() => setShowSolution((s) => !s)} icon={<BookOpenCheck size={16} />} tone="violet" />
        {showSolution && (
          <Panel tone="violet">
            <ContentRenderer blocks={q.solution} />
            {q.sourceNote && (
              <p className="mt-3 text-xs text-brand-500 dark:text-brand-400 flex gap-1.5 items-start">
                <PencilLine size={13} className="mt-0.5 shrink-0" /> {q.sourceNote}
              </p>
            )}
          </Panel>
        )}
      </div>

      {/* Footer actions */}
      <footer className="flex flex-wrap items-center gap-2 px-5 py-3 border-t border-brand-100 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-950/30">
        <IconBtn onClick={onToggleBookmark} active={bookmarked} label={bookmarked ? "Bookmarked" : "Bookmark"}>
          {bookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </IconBtn>
        <IconBtn onClick={onToggleComplete} active={completed} label={completed ? "Completed" : "Mark Completed"}>
          <Check size={16} />
        </IconBtn>
        <IconBtn onClick={copyQuestion} active={copied} label={copied ? "Copied" : "Copy"}>
          <Copy size={16} />
        </IconBtn>
        <span className="ml-auto flex items-center gap-1 text-[0.7rem] text-brand-500 dark:text-brand-400">
          <ShieldCheck size={13} /> {q.verification.replace("-", " ")}
        </span>
      </footer>
    </article>
  );
}

function Badge({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "mark" | "brand" }) {
  const styles = {
    slate: "bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-200",
    mark: "bg-mark-400/20 text-mark-600 dark:text-mark-400",
    brand: "bg-brand-600 text-white"
  }[tone];
  return <span className={`text-[0.72rem] font-semibold px-2.5 py-1 rounded-full ${styles}`}>{children}</span>;
}

function Toggle({ label, open, onClick, icon, tone }: { label: string; open: boolean; onClick: () => void; icon: React.ReactNode; tone: "amber" | "emerald" | "violet" }) {
  const styles = {
    amber: "border-mark-500/50 text-mark-700 dark:text-mark-400 hover:bg-mark-400/10",
    emerald: "border-emerald-500/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10",
    violet: "border-brand-500/40 text-brand-700 dark:text-brand-300 hover:bg-brand-500/10"
  }[tone];
  return (
    <button
      onClick={onClick}
      aria-expanded={open}
      className={`w-full flex items-center gap-2 rounded-lg border px-3 py-2.5 min-h-[44px] text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mark-500 active:scale-[0.99] ${styles}`}
    >
      {icon} {open ? `Hide ${label}` : `Show ${label}`}
    </button>
  );
}

function Panel({ tone, children }: { tone: "amber" | "emerald" | "violet"; children: React.ReactNode }) {
  const styles = {
    amber: "bg-mark-400/10 border-mark-500/30",
    emerald: "bg-emerald-500/10 border-emerald-500/30",
    violet: "bg-brand-500/10 border-brand-500/30"
  }[tone];
  return <div className={`rounded-lg border p-4 animate-[fadeIn_.15s_ease]`+" "+styles}>{children}</div>;
}

function IconBtn({ children, onClick, active, label }: { children: React.ReactNode; onClick: () => void; active?: boolean; label: string }) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-pressed={active}
      className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 min-h-[44px] text-xs font-semibold border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mark-500 ${
        active ? "bg-brand-600 text-white border-brand-600" : "border-brand-200 dark:border-brand-700 text-brand-600 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800"
      }`}
    >
      {children} {label}
    </button>
  );
}
