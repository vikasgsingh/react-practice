import React, { useState } from 'react';

const About = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); // Maximum zoom level: 3 (300%)
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Minimum zoom level: 0.5 (50%)
  };

  const handleSelectZoom = (event) => {
    setZoom(Number(event.target.value));
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleZoomOut}>-</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button onClick={handleZoomIn}>+</button>
        <select value={zoom} onChange={handleSelectZoom}>
          {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3].map((value) => (
            <option key={value} value={value}>
              {Math.round(value * 100)}%
            </option>
          ))}
        </select>
      </div>
      <div
     
      >
        <img src="https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back01.jpg" alt="Zoomable" />
      </div>
    </div>
  );
};

export default About;
