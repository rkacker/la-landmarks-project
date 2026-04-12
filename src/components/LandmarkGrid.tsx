import type { Landmark } from "../data/landmarks";
import { LandmarkCard } from "./LandmarkCard";

export function LandmarkGrid({ landmarks, onSelect }: { landmarks: Landmark[]; onSelect: (l: Landmark) => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
        Click on any landmark to learn its story! Each one is a special part of what makes Los Angeles amazing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {landmarks.map((l) => (
          <LandmarkCard key={l.id} landmark={l} onClick={() => onSelect(l)} />
        ))}
      </div>
    </div>
  );
}
