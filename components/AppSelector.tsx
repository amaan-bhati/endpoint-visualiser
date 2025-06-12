"use client";

import { useState } from "react";

const apps = ["PetClinic", "App 1", "App 2"];

export default function AppSelector({
  selectedApp,
  setSelectedApp,
}: {
  selectedApp: string;
  setSelectedApp: (app: string) => void;
}) {
  return (
    <div className="flex gap-4 justify-center flex-wrap mb-6">
      {apps.map((app) => (
        <button
          key={app}
          onClick={() => setSelectedApp(app)}
          className={`px-4 py-2 rounded-full border transition-all duration-300 ${
            selectedApp === app
              ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white shadow-lg"
              : "bg-white/20 backdrop-blur-lg border-white/30 text-white hover:bg-white/30"
          }`}
        >
          {app}
        </button>
      ))}
    </div>
  );
}
