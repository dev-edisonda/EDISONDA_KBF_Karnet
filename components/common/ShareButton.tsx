"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function ShareButton({ title, url, dict }: { title: string; url: string; dict: Dictionary }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled the native share sheet, or it failed — fall back to copy-link
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing more we can do silently
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-brand-300"
    >
      {copied ? <Check className="h-4 w-4 text-brand-600" aria-hidden="true" /> : <Share2 className="h-4 w-4" aria-hidden="true" />}
      {copied ? dict.event.linkCopied : dict.event.share}
    </button>
  );
}
