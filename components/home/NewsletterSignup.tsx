"use client";

import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function NewsletterSignup({ dict }: { dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Production version posts to a third-party ESP (Mailchimp/Brevo) via a Strapi
    // lifecycle hook or API route — PRD §7.8. No backend exists yet in this build.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-brand-700" role="status">
        <Check className="h-4 w-4" aria-hidden="true" />
        {dict.home.newsletterSuccess}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-base font-semibold text-ink">{dict.home.newsletterTitle}</h2>
        <p className="text-sm text-muted">{dict.home.newsletterBody}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          {dict.home.newsletterPlaceholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.home.newsletterPlaceholder}
          className="w-full rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-500"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {dict.home.newsletterCta}
        </button>
      </form>
    </div>
  );
}
