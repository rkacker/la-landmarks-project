import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { DivIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { landmarks } from "../data/landmarks";

const SCHOOL = { lat: 34.0195, lng: -118.4912, name: "Carlthorp School" };

const categoryConfig: Record<string, { color: string; bg: string; emoji: string; label: string }> = {
  food:    { color: "#92400E", bg: "#FEF3C7", emoji: "🍔", label: "Food" },
  culture: { color: "#1E40AF", bg: "#DBEAFE", emoji: "🎭", label: "Culture" },
  nature:  { color: "#065F46", bg: "#D1FAE5", emoji: "🌿", label: "Nature" },
  history: { color: "#9F1239", bg: "#FFE4E6", emoji: "🏛️", label: "History" },
};

function makeCategoryIcon(category: string) {
  const cfg = categoryConfig[category];
  return new DivIcon({
    html: `<div style="
      width: 32px; height: 32px;
      background: ${cfg.bg};
      border: 2.5px solid ${cfg.color};
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    ">${cfg.emoji}</div>`,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
}

const schoolIcon = new DivIcon({
  html: `<div style="
    width: 36px; height: 36px;
    background: #FEF3C7;
    border: 3px solid #D97706;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  ">🏫</div>`,
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -20],
});

function FitBounds() {
  const map = useMap();
  const allPoints: [number, number][] = [
    [SCHOOL.lat, SCHOOL.lng],
    ...landmarks.map((l) => [l.lat, l.lng] as [number, number]),
  ];
  map.fitBounds(allPoints, { padding: [30, 30] });
  return null;
}

export function LAMap() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 overflow-hidden">
        <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Our LA Landmarks Map</h2>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
            <span className="text-base">🏫</span> Our School
          </div>
          {Object.entries(categoryConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: cfg.color }}>
              <span className="text-base">{cfg.emoji}</span> {cfg.label}
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ height: "500px" }}>
          <MapContainer
            center={[34.05, -118.35]}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <FitBounds />

            {/* School marker */}
            <Marker position={[SCHOOL.lat, SCHOOL.lng]} icon={schoolIcon}>
              <Popup>
                <div className="text-center">
                  <strong className="text-amber-700 text-base">Carlthorp School</strong>
                  <p className="text-sm text-gray-500 mt-1">Our school in Santa Monica!</p>
                </div>
              </Popup>
            </Marker>

            {/* Landmark pins */}
            {landmarks.map((l) => (
              <Marker
                key={l.id}
                position={[l.lat, l.lng]}
                icon={makeCategoryIcon(l.category)}
              >
                <Popup>
                  <div className="text-center min-w-[140px]">
                    <strong className="text-gray-900 text-sm">{l.name}</strong>
                    <p className="text-xs text-gray-500 mt-0.5">{l.neighborhood}</p>
                    <p className="text-xs text-gray-400 italic mt-1">{l.tagline}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <p className="text-center text-xs text-gray-400 mt-3">
          Drag to explore, scroll to zoom. Click a marker to learn about a landmark!
        </p>
      </div>
    </div>
  );
}
