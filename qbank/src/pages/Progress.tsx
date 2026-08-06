import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { allQuestionsFlat, totalQuestionCount } from "../data/questionBank";
import { ProgressBar } from "../components/UI";
import { useStringSet, STORAGE_KEYS } from "../lib/storage";

export function Progress() {
  const completed = useStringSet(STORAGE_KEYS.completed);
  const bookmarked = useStringSet(STORAGE_KEYS.bookmarked);
  const [confirming, setConfirming] = useState(false);
  const total = totalQuestionCount();
  const pct = total ? completed.items.length / total : 0;

  // group progress by chapter, entirely from the data tree — new chapters
  // just show up here automatically.
  const byChapter = new Map<string, { name: string; total: number; done: number }>();
  for (const { q, chapterId, chapterName } of allQuestionsFlat()) {
    const row = byChapter.get(chapterId) ?? { name: chapterName, total: 0, done: 0 };
    row.total++;
    if (completed.has(q.id)) row.done++;
    byChapter.set(chapterId, row);
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-1">Your Progress</h1>
      <p className="text-brand-500 dark:text-brand-400 mb-6">Saved on this device only.</p>

      <div className="rounded-2xl border border-brand-100 dark:border-brand-800 bg-white dark:bg-brand-900/40 p-6 mb-6">
        <div className="flex justify-between mb-2 text-sm font-semibold">
          <span>Overall completion</span>
          <span>{completed.items.length} / {total} ({Math.round(pct * 100)}%)</span>
        </div>
        <ProgressBar value={pct} />
      </div>

      <div className="space-y-3 mb-8">
        {[...byChapter.entries()].map(([id, row]) => (
          <div key={id} className="rounded-xl border border-brand-100 dark:border-brand-800 p-4">
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span>{row.name}</span>
              <span>{row.done} / {row.total}</span>
            </div>
            <ProgressBar value={row.total ? row.done / row.total : 0} />
          </div>
        ))}
      </div>

      <p className="text-sm text-brand-500 dark:text-brand-400 mb-3">{bookmarked.items.length} question(s) bookmarked.</p>

      {!confirming ? (
        <button onClick={() => setConfirming(true)} className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline">
          <RotateCcw size={15} /> Reset progress
        </button>
      ) : (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-4">
          <p className="text-sm font-semibold mb-3">Reset all completed and bookmarked questions on this device? This can't be undone.</p>
          <div className="flex gap-2">
            <button
              onClick={() => { completed.clear(); bookmarked.clear(); setConfirming(false); }}
              className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
            >
              Yes, reset
            </button>
            <button onClick={() => setConfirming(false)} className="px-4 py-2 rounded-lg border border-brand-200 dark:border-brand-700 text-sm font-semibold">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
