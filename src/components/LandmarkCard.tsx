import type { Landmark } from "../data/landmarks";

const categoryColors: Record<string, string> = {
  food: "bg-sunshine-light text-amber-800",
  culture: "bg-ocean-light text-blue-800",
  nature: "bg-palm-light text-emerald-800",
  history: "bg-coral-light text-rose-800",
};

export function LandmarkCard({ landmark, onClick }: { landmark: Landmark; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer w-full border border-gray-100"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={landmark.imageUrl}
          alt={landmark.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${categoryColors[landmark.category]}`}>
          {landmark.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{landmark.name}</h3>
        <p className="text-sm text-gray-500">{landmark.tagline}</p>
      </div>
    </button>
  );
}
