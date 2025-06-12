"use client";

import { useState } from "react";
import AppSelector from "@/components/AppSelector";
import VisualizationSelector from "@/components/VisualizationSelector";
import TreeChart from "@/components/TreeChart";
import EChartsTree from "@/components/EChartsTree";

export default function Home() {
  const [selectedApp, setSelectedApp] = useState("PetClinic");
  const [selectedViz, setSelectedViz] = useState("API Tree Chart");

  const renderVisualization = () => {
    switch (selectedViz) {
      case "API Tree Chart":
        return <TreeChart width={800} height={600} />;
      case "Comparison View":
        return <div className="text-white">Comparison View Coming Soon</div>;
      case "Visualisation 1":
        return <div className="text-white">Visualisation 1 Coming Soon</div>;
      case "Visualisation 2":
        return <div className="text-white">Visualisation 2 Coming Soon</div>;
      default:
        return null;
    }
  };

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center p-6 md:p-10"
      style={{
        backgroundImage: "url('https://wallpaperbat.')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-md">
          Dashbaord Visualiser
        </h1>

        <EChartsTree/>

        {/* App Toggler */}
        <AppSelector selectedApp={selectedApp} setSelectedApp={setSelectedApp} />

        {/* Visualization Toggler */}
        <VisualizationSelector selectedViz={selectedViz} setSelectedViz={setSelectedViz} />

        {/* Visualisation Content */}
        <div className="w-full mt-6 flex justify-center">
          <div className="w-full max-w-6xl bg-white/10 border border-white/30 backdrop-blur-3xl rounded-3xl p-6 md:p-10 shadow-2xl transition-all duration-300 flex justify-center items-center min-h-[400px]">
            {renderVisualization()}
          </div>
        </div>
      </div>
    </main>
  );
}
