import type { AccessibilityFlag } from "@/lib/accessibility";
import type { EventFilters } from "@/lib/data";

export type ViewMode = "list" | "map";

export interface EventFilterState extends EventFilters {
  view: ViewMode;
}

const ACCESSIBILITY_KEYS: AccessibilityFlag[] = [
  "wheelchair",
  "induction_loop",
  "captions",
  "audio_description",
  "quiet_zone",
];

function splitParam(value: string | null): string[] {
  return value ? value.split(",").filter(Boolean) : [];
}

export function parseEventFilters(searchParams: URLSearchParams): EventFilterState {
  const accessibility = splitParam(searchParams.get("acc")).filter((v): v is AccessibilityFlag =>
    ACCESSIBILITY_KEYS.includes(v as AccessibilityFlag),
  );

  return {
    q: searchParams.get("q") ?? undefined,
    eventCategories: splitParam(searchParams.get("cat")),
    placeCategories: splitParam(searchParams.get("pcat")),
    accessibility,
    freeOnly: searchParams.get("free") === "1",
    dateFrom: searchParams.get("from") ?? undefined,
    dateTo: searchParams.get("to") ?? undefined,
    view: searchParams.get("view") === "map" ? "map" : "list",
  };
}

export function eventFiltersToSearchParams(state: Partial<EventFilterState>): URLSearchParams {
  const params = new URLSearchParams();
  if (state.q) params.set("q", state.q);
  if (state.eventCategories?.length) params.set("cat", state.eventCategories.join(","));
  if (state.placeCategories?.length) params.set("pcat", state.placeCategories.join(","));
  if (state.accessibility?.length) params.set("acc", state.accessibility.join(","));
  if (state.freeOnly) params.set("free", "1");
  if (state.dateFrom) params.set("from", state.dateFrom);
  if (state.dateTo) params.set("to", state.dateTo);
  if (state.view === "map") params.set("view", "map");
  return params;
}

export function countActiveFilters(state: EventFilterState): number {
  return (
    (state.eventCategories?.length ?? 0) +
    (state.placeCategories?.length ?? 0) +
    (state.accessibility?.length ?? 0) +
    (state.freeOnly ? 1 : 0) +
    (state.dateFrom ? 1 : 0)
  );
}
