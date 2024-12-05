import React from "react";
import "../App.css";

export const MapContainer = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&search=true"
        title="Zapt Tech Map"
        className="map-iframe"></iframe>
    </div>
  );
};
