import { allQuestionsFlat } from "../data/questionBank";
import { QuestionCard } from "../components/QuestionCard";
import { EmptyState } from "../components/UI";
import { useStringSet, STORAGE_KEYS } from "../lib/storage";

export function Bookmarks() {
  const bookmarked = useStringSet(STORAGE_KEYS.bookmarked);
  const completed = useStringSet(STORAGE_KEYS.completed);
  const items = allQuestionsFlat().filter((x) => bookmarked.has(x.q.id));

  return (
    <div>
      <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-1">Bookmarks</h1>
      <p className="text-brand-500 dark:text-brand-400 mb-6">Questions you've saved to revisit, from anywhere in the question bank.</p>

      {items.length === 0 ? (
        <EmptyState title="No bookmarks yet" hint="Tap the bookmark icon on any question to save it here." />
      ) : (
        <div className="space-y-5">
          {items.map(({ q, chapterName }) => (
            <QuestionCard
              key={q.id} q={q} chapterName={chapterName}
              completed={completed.has(q.id)} bookmarked
              onToggleComplete={() => completed.toggle(q.id)} onToggleBookmark={() => bookmarked.toggle(q.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
