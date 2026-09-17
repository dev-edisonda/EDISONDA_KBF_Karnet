"use client";

import { Heart } from "lucide-react";
import { useFavourites } from "@/lib/favourites-context";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";

export function FavouriteButton({
  eventId,
  dict,
  size = "md",
}: {
  eventId: string;
  dict: Dictionary;
  size?: "sm" | "md";
}) {
  const { isFavourite, toggle } = useFavourites();
  const active = isFavourite(eventId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(eventId);
      }}
      aria-pressed={active}
      aria-label={active ? dict.event.removeFromFavourites : dict.event.saveToFavourites}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border transition-colors",
        size === "sm" ? "h-9 w-9" : "h-11 w-11",
        active ? "border-brand-600 bg-brand-600 text-white" : "border-border bg-surface/90 text-ink hover:border-brand-300",
      )}
    >
      <Heart className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} fill={active ? "currentColor" : "none"} aria-hidden="true" />
    </button>
  );
}
