import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { Bookmarks } from "./pages/Bookmarks";
import { Progress } from "./pages/Progress";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* One wildcard route walks the entire Class → Subject → Mode →
            Chapter → Year → Questions tree from data/questionBank.ts.
            Adding new content never requires a new route. */}
        <Route path="/browse/*" element={<Browse />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
