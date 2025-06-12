"use client";

const visualizations = [
  "API Tree Chart",
  "Comparison View",
  "Visualisation 1",
  "Visualisation 2",
];

export default function VisualizationSelector({
  selectedViz,
  setSelectedViz,
}: {
  selectedViz: string;
  setSelectedViz: (viz: string) => void;
}) {
  return (
    <div className="flex gap-4 justify-center flex-wrap mb-8">
      {visualizations.map((viz) => (
        <button
          key={viz}
          onClick={() => setSelectedViz(viz)}
          className={`px-4 py-2 rounded-full border transition-all duration-300 ${
            selectedViz === viz
              ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white shadow-lg"
              : "bg-white/20 backdrop-blur-lg border-white/30 text-white hover:bg-white/30"
          }`}
        >
          {viz}
        </button>
      ))}
    </div>
  );
}
