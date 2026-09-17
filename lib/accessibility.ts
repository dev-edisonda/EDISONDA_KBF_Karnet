import type { AccessibilityProfile, KarnetEvent, Place } from "@/lib/types";

/**
 * An event's effective accessibility = the place's baseline profile, with any
 * non-null fields on the event's override component taking precedence.
 * PRD §7.5 "Resolution logic".
 */
export function resolveAccessibility(event: KarnetEvent, place: Place): AccessibilityProfile {
  const base = place.accessibility_profile;
  const override = event.accessibility_override ?? {};

  return {
    wheelchair_accessible: override.wheelchair_accessible ?? base.wheelchair_accessible,
    induction_loop: override.induction_loop ?? base.induction_loop,
    captions_available: override.captions_available ?? base.captions_available,
    audio_description_available: override.audio_description_available ?? base.audio_description_available,
    quiet_zone_available: override.quiet_zone_available ?? base.quiet_zone_available,
    accessible_toilet: override.accessible_toilet ?? base.accessible_toilet,
    accessible_parking: override.accessible_parking ?? base.accessible_parking,
    notes_pl: override.notes_pl ?? base.notes_pl,
    notes_en: override.notes_en ?? base.notes_en,
  };
}

export type AccessibilityFlag =
  | "wheelchair"
  | "induction_loop"
  | "captions"
  | "audio_description"
  | "quiet_zone";

/**
 * Only true booleans (or wheelchair yes/partial) count as a confirmed flag —
 * absence/unknown must never be displayed as "not accessible" (PRD §7.5 display rule).
 */
export function activeAccessibilityFlags(profile: AccessibilityProfile): AccessibilityFlag[] {
  const flags: AccessibilityFlag[] = [];
  if (profile.wheelchair_accessible === "yes" || profile.wheelchair_accessible === "partial") {
    flags.push("wheelchair");
  }
  if (profile.induction_loop) flags.push("induction_loop");
  if (profile.captions_available) flags.push("captions");
  if (profile.audio_description_available) flags.push("audio_description");
  if (profile.quiet_zone_available) flags.push("quiet_zone");
  return flags;
}

export function matchesAccessibilityFilters(
  profile: AccessibilityProfile,
  required: AccessibilityFlag[],
): boolean {
  if (required.length === 0) return true;
  const active = new Set(activeAccessibilityFlags(profile));
  return required.every((flag) => active.has(flag));
}
