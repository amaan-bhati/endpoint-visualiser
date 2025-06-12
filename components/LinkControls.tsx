// components/LinkControls.tsx
import React from 'react';

interface Controls {
  layout: string;
  orientation: string;
  linkType: string;
  stepPercent: number;
  setLayout(layout: string): void;
  setOrientation(o: string): void;
  setLinkType(t: string): void;
  setStepPercent(p: number): void;
}

export default function LinkControls({
  layout, orientation, linkType, stepPercent,
  setLayout, setOrientation, setLinkType, setStepPercent,
}: Controls) {
  return (
    <div className="mb-4 space-x-4 text-white">
      <select value={layout} onChange={e => setLayout(e.target.value)}>
        <option value="cartesian">Cartesian</option>
        <option value="polar">Polar</option>
      </select>
      <select value={orientation} onChange={e => setOrientation(e.target.value)}>
        <option value="horizontal">Horizontal</option>
        <option value="vertical">Vertical</option>
      </select>
      <select value={linkType} onChange={e => setLinkType(e.target.value)}>
        <option value="diagonal">Diagonal</option>
        <option value="step">Step</option>
        <option value="curve">Curve</option>
        <option value="line">Line</option>
        <option value="elbow">Elbow</option>
      </select>
      <label>
        Step: 
        <input
          type="range" min="0" max="1" step="0.01"
          value={stepPercent}
          onChange={e => setStepPercent(+e.target.value)}
        />
      </label>
    </div>
  );
}
