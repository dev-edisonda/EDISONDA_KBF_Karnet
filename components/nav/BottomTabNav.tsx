"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, MapPin, Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const ITEMS = [
  { href: "", icon: Home, key: "home" as const },
  { href: "/events", icon: CalendarDays, key: "events" as const },
  { href: "/places", icon: MapPin, key: "places" as const },
  { href: "/favourites", icon: Heart, key: "favourites" as const },
  { href: "/team", icon: Menu, key: "more" as const },
];

// Thumb-reachable bottom tab bar on mobile, replacing a squeezed top nav (PRD §8.11).
export function BottomTabNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-border bg-surface/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label={dict.nav.home}
    >
      {ITEMS.map(({ href, icon: Icon, key }) => {
        const target = `/${locale}${href}`;
        const active = href === "" ? pathname === target : pathname.startsWith(target);
        return (
          <Link
            key={key}
            href={target}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium",
              active ? "text-brand-700" : "text-muted",
            )}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {dict.nav[key]}
          </Link>
        );
      })}
    </nav>
  );
}
