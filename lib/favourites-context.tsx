"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "karnet:favourites";

interface FavouritesContextValue {
  ids: string[];
  isFavourite: (eventId: string) => boolean;
  toggle: (eventId: string) => void;
  clear: () => void;
}

const FavouritesContext = createContext<FavouritesContextValue | null>(null);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Anonymous, device-scoped favourites (PRD §7.6) — read once on mount so
  // server-rendered markup never disagrees with the client on first paint.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch {
      // localStorage unavailable (private mode, blocked storage) — fall back to session-only state.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // ignore
    }
  }, [ids, hydrated]);

  const toggle = useCallback((eventId: string) => {
    setIds((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]));
  }, []);

  const isFavourite = useCallback((eventId: string) => ids.includes(eventId), [ids]);
  const clear = useCallback(() => setIds([]), []);

  return (
    <FavouritesContext.Provider value={{ ids, isFavourite, toggle, clear }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) throw new Error("useFavourites must be used within FavouritesProvider");
  return ctx;
}
