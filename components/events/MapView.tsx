"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { findEventCategory, type FilterableEvent } from "@/lib/data";
import { formatDateRange } from "@/lib/format";
import { pickLocale, type Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

const KRAKOW_CENTER: [number, number] = [50.0614, 19.9366];

function categoryDivIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<span style="display:block;width:16px;height:16px;border-radius:9999px;background:${color};border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.4)"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

// Defaults to "near me" via device geolocation, falling back to the city centre
// if permission is denied or unavailable (PRD §8.11).
export function MapView({ items, locale, dict }: { items: FilterableEvent[]; locale: Locale; dict: Dictionary }) {
  const [center, setCenter] = useState<[number, number]>(KRAKOW_CENTER);

  useEffect(() => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setCenter([pos.coords.latitude, pos.coords.longitude]),
      () => {
        /* permission denied or unavailable — keep the city-centre fallback */
      },
      { timeout: 5000 },
    );
  }, []);

  return (
    <div className="h-[60vh] w-full overflow-hidden rounded-2xl border border-border sm:h-[70vh]">
      <MapContainer center={center} zoom={13} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {items.map(({ event, place }) => {
            const category = findEventCategory(event.category_slugs[0]);
            return (
              <Marker
                key={event.id}
                position={[place.latitude, place.longitude]}
                icon={categoryDivIcon(category?.color ?? "#6B7280")}
              >
                <Popup>
                  <div className="max-w-[220px]">
                    <p className="font-semibold text-ink">{pickLocale(locale, event.title_pl, event.title_en)}</p>
                    <p className="text-xs text-muted">{formatDateRange(event.start_date, event.end_date, locale)}</p>
                    <Link href={`/${locale}/events/${event.slug}`} className="mt-1 inline-block text-xs font-semibold text-brand-700 underline">
                      {dict.home.heroCta}
                    </Link>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
