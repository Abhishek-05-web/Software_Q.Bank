import { useEffect, useState } from "react";

export function useOnline() {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);
  return online;
}

export function isStandalone() {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari's own flag for "launched from Home Screen"
    (navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export function isIOS() {
  const ua = navigator.userAgent;
  const iOSDevice = /iPad|iPhone|iPod/.test(ua);
  // iPadOS 13+ reports as "Macintosh" but has touch support
  const iPadOS = ua.includes("Macintosh") && navigator.maxTouchPoints > 1;
  return iOSDevice || iPadOS;
}
