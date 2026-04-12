import { useState } from "react";
import { landmarks } from "./data/landmarks";
import type { Landmark } from "./data/landmarks";
import { Header } from "./components/Header";
import { LandmarkGrid } from "./components/LandmarkGrid";
import { LandmarkDetail } from "./components/LandmarkDetail";
import { LAMap } from "./components/LAMap";

function App() {
  const [selected, setSelected] = useState<Landmark | null>(null);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Header onToggleMap={() => setShowMap(!showMap)} showMap={showMap} />

      {showMap ? (
        <LAMap />
      ) : (
        <LandmarkGrid landmarks={landmarks} onSelect={setSelected} />
      )}

      {selected && (
        <LandmarkDetail landmark={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
