import type { Landmark } from "../data/landmarks";

export function LandmarkDetail({ landmark, onClose }: { landmark: Landmark; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={landmark.imageUrl}
            alt={landmark.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-lg cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline gap-3 mb-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{landmark.name}</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            {landmark.neighborhood} · {landmark.year}
          </p>

          <div className="space-y-6">
            <section>
              <h3 className="text-sm font-bold text-ocean uppercase tracking-wide mb-2">The Story</h3>
              <p className="text-gray-700 leading-relaxed">{landmark.story}</p>
            </section>

            <div className="bg-sunshine-light rounded-2xl p-4 border border-amber-200">
              <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Fun Fact</h3>
              <p className="text-amber-900">{landmark.funFact}</p>
            </div>

            <div className="bg-palm-light rounded-2xl p-4 border border-emerald-200">
              <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wide mb-1">
                How Far from Our School?
              </h3>
              <p className="text-emerald-900">{landmark.distanceFromSchool}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 border border-dashed border-gray-300">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Our Research</h3>
              <p className="text-gray-400 italic">Student work will go here — photos, writing, and drawings!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
