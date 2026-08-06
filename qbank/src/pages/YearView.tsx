import { useEffect, useMemo, useState } from "react";
import { Search, LayoutList, SquareStack, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";
import type { Question } from "../data/types";
import { QuestionCard } from "../components/QuestionCard";
import { EmptyState } from "../components/UI";
import { useStringSet, usePersistentState, STORAGE_KEYS } from "../lib/storage";

type Filter = "all" | Question["type"] | "completed" | "not-completed" | "bookmarked";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mcq", label: "MCQ" },
  { id: "assertion-reason", label: "Assertion–Reason" },
  { id: "proof", label: "Proof-Based" },
  { id: "factor-tree", label: "Factor Tree" },
  { id: "application", label: "Application" },
  { id: "prime-composite", label: "Prime/Composite" },
  { id: "completed", label: "Completed" },
  { id: "not-completed", label: "Not Completed" },
  { id: "bookmarked", label: "Bookmarked" }
];

export function YearView({ questions, chapterName }: { questions: Question[]; chapterName: string }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [mode, setMode] = usePersistentState<"all" | "practice">(STORAGE_KEYS.viewMode, "all");
  const [index, setIndex] = useState(0);

  const completed = useStringSet(STORAGE_KEYS.completed);
  const bookmarked = useStringSet(STORAGE_KEYS.bookmarked);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return questions.filter((item) => {
      if (q) {
        const hay = [
          ...item.statement.map((b) => b.v),
          item.assertion, item.reason,
          ...item.keywords, String(item.year), String(item.marks ?? "")
        ].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filter === "completed") return completed.has(item.id);
      if (filter === "not-completed") return !completed.has(item.id);
      if (filter === "bookmarked") return bookmarked.has(item.id);
      if (filter !== "all") return item.type === filter;
      return true;
    });
  }, [questions, query, filter, completed, bookmarked]);

  const current = filtered[Math.min(index, filtered.length - 1)];

  useEffect(() => {
    if (mode !== "practice") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(filtered.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, filtered.length]);

  if (questions.length === 0) return <EmptyState title="No questions yet" hint="This year will be populated soon." />;

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" />
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setIndex(0); }}
            placeholder="Search question text, topic or keyword…"
            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-brand-200 dark:border-brand-700 bg-white dark:bg-brand-900/50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mark-500"
          />
        </div>
        <div className="flex rounded-lg border border-brand-200 dark:border-brand-700 overflow-hidden shrink-0">
          <button onClick={() => setMode("all")} className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold ${mode === "all" ? "bg-brand-600 text-white" : "hover:bg-brand-100 dark:hover:bg-brand-800"}`}>
            <LayoutList size={15} /> All
          </button>
          <button onClick={() => setMode("practice")} className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold border-l border-brand-200 dark:border-brand-700 ${mode === "practice" ? "bg-brand-600 text-white" : "hover:bg-brand-100 dark:hover:bg-brand-800"}`}>
            <SquareStack size={15} /> Practice
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => { setFilter(f.id); setIndex(0); }}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
              filter === f.id ? "bg-mark-500 border-mark-500 text-white" : "border-brand-200 dark:border-brand-700 text-brand-600 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-brand-800"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No questions match" hint="Try a different search term or filter." />
      ) : mode === "all" ? (
        <div className="space-y-5">
          {filtered.map((q) => (
            <QuestionCard
              key={q.id} q={q} chapterName={chapterName}
              completed={completed.has(q.id)} bookmarked={bookmarked.has(q.id)}
              onToggleComplete={() => completed.toggle(q.id)} onToggleBookmark={() => bookmarked.toggle(q.id)}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-3 text-sm font-semibold text-brand-500 dark:text-brand-400">
            <span>Question {index + 1} of {filtered.length}</span>
            <button onClick={() => setIndex(Math.floor(Math.random() * filtered.length))} className="flex items-center gap-1 hover:text-mark-600">
              <Shuffle size={14} /> Random
            </button>
          </div>
          <QuestionCard
            q={current} chapterName={chapterName}
            completed={completed.has(current.id)} bookmarked={bookmarked.has(current.id)}
            onToggleComplete={() => completed.toggle(current.id)} onToggleBookmark={() => bookmarked.toggle(current.id)}
          />
          <div className="flex justify-between gap-3 mt-4 sticky bottom-[calc(env(safe-area-inset-bottom)+4rem)] md:static md:bottom-auto bg-paper/95 dark:bg-slate-950/95 backdrop-blur md:bg-transparent md:backdrop-blur-none rounded-xl md:rounded-none p-2 md:p-0 -mx-2 md:mx-0">
            <NavBtn disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))}><ChevronLeft size={16} /> Previous</NavBtn>
            <NavBtn disabled={index === filtered.length - 1} onClick={() => setIndex((i) => Math.min(filtered.length - 1, i + 1))}>Next <ChevronRight size={16} /></NavBtn>
          </div>
        </div>
      )}
    </div>
  );
}

function NavBtn({ children, onClick, disabled }: { children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick} disabled={disabled}
      className="flex items-center gap-1 px-4 py-2 rounded-lg border border-brand-200 dark:border-brand-700 text-sm font-semibold disabled:opacity-40 hover:bg-brand-100 dark:hover:bg-brand-800 transition"
    >
      {children}
    </button>
  );
}
