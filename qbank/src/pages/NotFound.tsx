import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="text-center py-20">
      <p className="font-display text-6xl font-semibold text-brand-200 dark:text-brand-800 mb-3">404</p>
      <h1 className="text-xl font-semibold mb-2">We couldn't find that page</h1>
      <p className="text-brand-500 dark:text-brand-400 mb-6">The class, subject or chapter you're looking for doesn't exist yet.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-xl">
        Back to Home
      </Link>
    </div>
  );
}
