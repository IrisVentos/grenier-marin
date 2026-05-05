"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function InteractiveMap({
  center,
  zoom = 14,
  markers = [],
  polygon,
  polygonPopup,
  scrollWheelZoom = false,
  ariaLabel = "Carte interactive",
}) {
  const containerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapInstanceRef.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom,
        zoomControl: false,
        attributionControl: false,
      }).setView(center, zoom);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      L.control
        .attribution({ prefix: false })
        .addAttribution(
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        )
        .addTo(map);

      if (polygon) {
        const layer = L.polygon(polygon, {
          color: "#4ade80",
          weight: 2,
          fillColor: "#4ade80",
          fillOpacity: 0.15,
        }).addTo(map);
        if (polygonPopup) layer.bindPopup(polygonPopup);
      }

      const markerStyle = {
        radius: 6,
        color: "#1e3a8a",
        weight: 2,
        fillColor: "#4a9ede",
        fillOpacity: 1,
      };

      markers.forEach((m) => {
        const cm = L.circleMarker(m.coords, markerStyle).addTo(map);
        if (m.label) {
          cm.bindTooltip(m.label, {
            permanent: true,
            direction: m.direction || "right",
            offset: m.direction === "left" ? [-8, 0] : [8, 0],
            className: "gm-map-label",
          });
        }
      });

      mapInstanceRef.current = map;
    })();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markers, polygon, polygonPopup, scrollWheelZoom]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-video border border-white/10 bg-slate-100 relative isolate"
      aria-label={ariaLabel}
    />
  );
}
