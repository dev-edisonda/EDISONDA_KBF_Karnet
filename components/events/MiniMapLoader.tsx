"use client";

import dynamic from "next/dynamic";

// next/dynamic with ssr:false can only be called from a Client Component —
// this thin wrapper is what lets the (server) event/place detail pages use it.
export const MiniMapLoader = dynamic(() => import("@/components/events/MiniMap").then((m) => m.MiniMap), {
  ssr: false,
  loading: () => <div className="h-56 w-full animate-pulse rounded-2xl bg-brand-50" />,
});
