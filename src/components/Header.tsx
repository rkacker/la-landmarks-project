export function Header({ onToggleMap, showMap }: { onToggleMap: () => void; showMap: boolean }) {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Discover LA
            </h1>
            <p className="mt-1 text-lg text-gray-500">
              Our Landmarks Project — 3rd Grade
            </p>
          </div>
          <button
            onClick={onToggleMap}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer
              bg-ocean text-white hover:bg-blue-600 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {showMap ? "Show Landmarks" : "Show Map"}
          </button>
        </div>
      </div>
    </header>
  );
}
