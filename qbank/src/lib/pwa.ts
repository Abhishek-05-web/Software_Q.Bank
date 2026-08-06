import { registerSW } from "virtual:pwa-register";

type Listener = (state: { needRefresh: boolean; offlineReady: boolean }) => void;
let listeners: Listener[] = [];
let state = { needRefresh: false, offlineReady: false };

function emit() {
  listeners.forEach((l) => l(state));
}

export function onPwaStateChange(l: Listener) {
  listeners.push(l);
  l(state);
  return () => { listeners = listeners.filter((x) => x !== l); };
}

let updateFn: ((reload?: boolean) => Promise<void>) | null = null;

export function applyPwaUpdate() {
  updateFn?.(true);
}

export function initPwa() {
  updateFn = registerSW({
    immediate: true,
    onNeedRefresh() { state = { ...state, needRefresh: true }; emit(); },
    onOfflineReady() { state = { ...state, offlineReady: true }; emit(); }
  });
}
