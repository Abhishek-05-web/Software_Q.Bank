import { useCallback, useEffect, useState } from "react";

// A single small localStorage hook powers every piece of persisted state
// (theme, completed questions, bookmarks, last-opened location, filters,
// view mode). Nothing here is tied to specific question IDs, so it keeps
// working unchanged as content is added.

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function usePersistentState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable — fail silently, app still works in-memory */
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export function useStringSet(key: string) {
  const [set, setSet] = usePersistentState<string[]>(key, []);
  const has = useCallback((id: string) => set.includes(id), [set]);
  const toggle = useCallback(
    (id: string) => setSet((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    [setSet]
  );
  const clear = useCallback(() => setSet([]), [setSet]);
  return { items: set, has, toggle, clear };
}

export const STORAGE_KEYS = {
  theme: "qb.theme",
  completed: "qb.completed",
  bookmarked: "qb.bookmarked",
  viewMode: "qb.viewMode",
  recent: "qb.recent"
} as const;
