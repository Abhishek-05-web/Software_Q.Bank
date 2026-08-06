import { useEffect, useState } from "react";
import { Download, Share, PlusSquare, X, CheckCircle2 } from "lucide-react";
import { isIOS, isStandalone } from "../lib/platform";
import { usePersistentState } from "../lib/storage";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(isStandalone());
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [dismissedIOS, setDismissedIOS] = usePersistentState("qb.iosInstallDismissed", false);
  const ios = isIOS();

  useEffect(() => {
    const onPrompt = (e: Event) => { e.preventDefault(); setDeferred(e as BeforeInstallPromptEvent); };
    const onInstalled = () => { setInstalled(true); setDeferred(null); };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null; // already installed / running standalone — nothing to show
  if (!ios && !deferred) return null; // Android/desktop: only show once the browser says it's installable
  if (ios && dismissedIOS) return null; // iOS: respect a saved dismissal, don't nag every visit

  const handleClick = async () => {
    if (ios) { setShowIOSModal(true); return; }
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferred(null);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 rounded-full bg-mark-500 hover:bg-mark-600 text-white text-sm font-semibold px-3.5 sm:px-4 py-2 min-h-[44px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mark-500"
      >
        <Download size={15} /> Install App
      </button>

      {showIOSModal && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-ink/50 backdrop-blur-sm p-4" role="dialog" aria-modal="true" aria-label="Install instructions">
          <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-brand-900 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-semibold">Add to Home Screen</h2>
              <button
                onClick={() => { setShowIOSModal(false); setDismissedIOS(true); }}
                aria-label="Close"
                className="w-11 h-11 -mr-2 grid place-items-center rounded-full hover:bg-brand-100 dark:hover:bg-brand-800"
              >
                <X size={18} />
              </button>
            </div>
            <ol className="space-y-4 text-sm">
              <Step icon={<Share size={18} />} text="Open this page in Safari, then tap the Share button." />
              <Step icon={<PlusSquare size={18} />} text={'Select "Add to Home Screen" from the menu.'} />
              <Step icon={<CheckCircle2 size={18} />} text={'Turn on "Open as Web App" if shown, then tap "Add".'} />
            </ol>
            <button
              onClick={() => { setShowIOSModal(false); setDismissedIOS(true); }}
              className="mt-6 w-full rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Step({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-brand-100 dark:bg-brand-800 text-brand-600 dark:text-mark-400 shrink-0">{icon}</span>
      <span className="leading-6 pt-1.5">{text}</span>
    </li>
  );
}
