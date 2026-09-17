"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export function SearchBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [q, setQ] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    router.push(`/${locale}/events${params.toString() ? `?${params}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-full border border-border bg-surface p-1.5 pl-5 shadow-sm"
    >
      <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
      <label htmlFor="home-search" className="sr-only">
        {dict.home.searchPlaceholder}
      </label>
      <input
        id="home-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={dict.home.searchPlaceholder}
        className="w-full bg-transparent py-2 text-sm text-ink placeholder:text-muted focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        {dict.home.searchCta}
      </button>
    </form>
  );
}
