// components/ClientMap.tsx
"use client";

import { useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src ?? markerIcon2x,
  iconUrl: markerIcon.src ?? markerIcon,
  shadowUrl: markerShadow.src ?? markerShadow,
});

export interface MapMarker {
  position: { lat: number; lng: number };
  label: string; // Shown in popup
}

interface ClientMapProps {
  /** Initial center. If `markers` provided, map will auto-fit to them after load. */
  center: { lat: number; lng: number };
  zoom: number;
  /** Back-compat single-address popup text */
  address?: string;
  /** Optional multiple markers to render and fit-bounds to */
  markers?: MapMarker[];
  /** Optional: disable fitBounds even if markers provided */
  disableFitBounds?: boolean;
  className?: string;
}

function FitToMarkers({ markers, disable }: { markers: MapMarker[]; disable?: boolean }) {
  const map = useMap();
  const fittedRef = useRef(false);

  if (!disable && markers.length > 0 && !fittedRef.current) {
    const bounds = L.latLngBounds(markers.map((m) => [m.position.lat, m.position.lng]));
    // Slight padding so markers aren't on the very edge
    map.fitBounds(bounds, { padding: [24, 24] });
    fittedRef.current = true;
  }
  return null;
}

export default function ClientMap({ center, zoom, address, markers = [], disableFitBounds, className }: ClientMapProps) {
  // ensure a stable array reference for FitToMarkers
  const mk = useMemo(() => markers, [markers]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      className={className ?? "h-full w-full rounded-lg shadow-md"}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Multi-pin mode */}
      {mk.length > 0 && (
        <>
          {mk.map((m, idx) => (
            <Marker key={`${m.label}-${idx}`} position={m.position}>
              <Popup>{m.label}</Popup>
            </Marker>
          ))}
          <FitToMarkers markers={mk} disable={disableFitBounds} />
        </>
      )}

      {/* Back-compat single-pin mode */}
      {mk.length === 0 && (
        <Marker position={center}>
          <Popup>{address}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}