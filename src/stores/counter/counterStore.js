import { writable } from "svelte/store";

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    inc: () => update((n) => n + 1),
    dec: () => update((n) => n - 1),
    reset: () => set(0),
  };
}

export const count = createCount();
