// src/components/MeteorBackground.tsx
import React from "react";
import "./meteorBackground.css";

export const MeteorBackground: React.FC = () => {
  const meteors = Array.from({ length: 15 });

  return (
    <div className="meteor-layer">
      {meteors.map((_, i) => (
        <span key={i} className="meteor" />
      ))}
    </div>
  );
};
