"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function pinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<span style="display:block;width:20px;height:20px;border-radius:9999px;background:${color};border:3px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.45)"></span>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
}

export function MiniMap({ lat, lng, color = "#A8154B" }: { lat: number; lng: number; color?: string }) {
  return (
    <div className="h-56 w-full overflow-hidden rounded-2xl border border-border">
      <MapContainer center={[lat, lng]} zoom={15} className="h-full w-full" zoomControl={false} dragging={false} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={pinIcon(color)} />
      </MapContainer>
    </div>
  );
}
