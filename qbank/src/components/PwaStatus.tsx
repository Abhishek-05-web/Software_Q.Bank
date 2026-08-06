import { useEffect, useState } from "react";
import { WifiOff, RefreshCw } from "lucide-react";
import { useOnline } from "../lib/platform";
import { onPwaStateChange, applyPwaUpdate } from "../lib/pwa";

export function PwaStatus() {
  const online = useOnline();
  const [needRefresh, setNeedRefresh] = useState(false);

  useEffect(() => onPwaStateChange((s) => setNeedRefresh(s.needRefresh)), []);

  return (
    <>
      {!online && (
        <div
          role="status"
          className="fixed top-[calc(env(safe-area-inset-top)+0.5rem)] left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 rounded-full bg-ink text-white text-xs font-semibold px-3 py-1.5 shadow-card"
        >
          <WifiOff size={13} /> You're offline — saved questions still work
        </div>
      )}

      {needRefresh && (
        <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+4.5rem)] md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-xl bg-ink text-white pl-4 pr-2 py-2.5 shadow-xl">
          <span className="text-sm font-medium">A new version is ready</span>
          <button
            onClick={applyPwaUpdate}
            className="flex items-center gap-1.5 rounded-lg bg-mark-500 hover:bg-mark-600 text-white text-xs font-bold px-3 py-2 transition"
          >
            <RefreshCw size={13} /> Update App
          </button>
        </div>
      )}
    </>
  );
}
