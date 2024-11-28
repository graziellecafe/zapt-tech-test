import React from "react";
import "../App.css";

export const MapContainer = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed=true"
        title="Zapt Tech Map"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}></iframe>
    </div>
  );
};
