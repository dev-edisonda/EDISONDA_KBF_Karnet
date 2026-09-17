import { CategoryIcon } from "@/components/icon";
import { pickLocale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/i18n";
import type { AccessibilityProfile, Locale } from "@/lib/types";

const FLAG_ICON: Record<string, string> = {
  wheelchair: "Accessibility",
  induction_loop: "Ear",
  captions: "Captions",
  audio_description: "Headphones",
  quiet_zone: "Moon",
  accessible_toilet: "Toilet",
  accessible_parking: "CircleParking",
};

interface AccessibilityBadgesProps {
  profile: AccessibilityProfile;
  locale: Locale;
  dict: Dictionary;
  variant?: "compact" | "panel";
}

function confirmedAmenities(profile: AccessibilityProfile, dict: Dictionary) {
  const items: { key: string; icon: string; label: string }[] = [];
  if (profile.induction_loop) items.push({ key: "induction_loop", icon: FLAG_ICON.induction_loop, label: dict.accessibility.induction_loop });
  if (profile.captions_available) items.push({ key: "captions", icon: FLAG_ICON.captions, label: dict.accessibility.captions });
  if (profile.audio_description_available) items.push({ key: "audio_description", icon: FLAG_ICON.audio_description, label: dict.accessibility.audio_description });
  if (profile.quiet_zone_available) items.push({ key: "quiet_zone", icon: FLAG_ICON.quiet_zone, label: dict.accessibility.quiet_zone });
  if (profile.accessible_toilet) items.push({ key: "accessible_toilet", icon: FLAG_ICON.accessible_toilet, label: dict.accessibility.accessible_toilet });
  if (profile.accessible_parking) items.push({ key: "accessible_parking", icon: FLAG_ICON.accessible_parking, label: dict.accessibility.accessible_parking });
  return items;
}

/**
 * Display rule (PRD §7.5): only show a badge for what's actually confirmed true.
 * No badge shown must never be read as "not accessible" — the panel variant always
 * states the wheelchair status explicitly (including an honest "not yet confirmed"),
 * so absence is never mistaken for a negative.
 */
export function AccessibilityBadges({ profile, locale, dict, variant = "compact" }: AccessibilityBadgesProps) {
  const amenities = confirmedAmenities(profile, dict);
  const hasWheelchairInfo = profile.wheelchair_accessible === "yes" || profile.wheelchair_accessible === "partial";

  if (variant === "compact") {
    const compactItems = [
      ...(hasWheelchairInfo ? [{ key: "wheelchair", icon: FLAG_ICON.wheelchair, label: profile.wheelchair_accessible === "yes" ? dict.accessibility.wheelchair_yes : dict.accessibility.wheelchair_partial }] : []),
      ...amenities,
    ];
    if (compactItems.length === 0) return null;
    return (
      <ul className="flex flex-wrap gap-1.5" aria-label={dict.event.accessibilityPanel}>
        {compactItems.map((item) => (
          <li
            key={item.key}
            title={item.label}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-700"
          >
            <CategoryIcon name={item.icon} className="h-4 w-4" />
            <span className="sr-only">{item.label}</span>
          </li>
        ))}
      </ul>
    );
  }

  const notes = pickLocale(locale, profile.notes_pl ?? "", profile.notes_en ?? "");

  const wheelchairStatus = {
    yes: { icon: "CircleCheck", label: dict.accessibility.wheelchair_yes, tone: "text-brand-700" },
    partial: { icon: "CircleCheck", label: dict.accessibility.wheelchair_partial, tone: "text-brand-700" },
    no: { icon: "CircleX", label: dict.accessibility.wheelchair_no, tone: "text-muted" },
    unknown: { icon: "CircleHelp", label: dict.event.accessibilityUnknownNote, tone: "text-muted" },
  }[profile.wheelchair_accessible];

  return (
    <section className="rounded-2xl border border-border bg-surface p-4 sm:p-6" aria-labelledby="accessibility-heading">
      <h2 id="accessibility-heading" className="text-lg font-semibold text-ink">
        {dict.event.accessibilityPanel}
      </h2>

      <div className={`mt-3 flex items-start gap-2.5 text-sm font-medium ${wheelchairStatus.tone}`}>
        <CategoryIcon name={wheelchairStatus.icon} className="mt-0.5 h-5 w-5 shrink-0" />
        <span>{wheelchairStatus.label}</span>
      </div>

      {amenities.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {amenities.map((item) => (
            <li key={item.key} className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-3 py-2.5 text-sm font-medium text-brand-800">
              <CategoryIcon name={item.icon} className="h-5 w-5 shrink-0" />
              {item.label}
            </li>
          ))}
        </ul>
      )}

      {amenities.length === 0 && (
        <p className="mt-3 text-sm text-muted">{dict.event.accessibilityUnknownNote}</p>
      )}

      {notes && (
        <p className="mt-4 border-t border-border pt-3 text-sm text-muted">
          <span className="font-medium text-ink">{dict.accessibility.notes}: </span>
          {notes}
        </p>
      )}
    </section>
  );
}
