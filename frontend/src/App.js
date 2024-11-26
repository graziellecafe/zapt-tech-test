import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Metade Esquerda: Mapa */}
      <div className="map-container">
        <iframe
          src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed=true"
          title="Mapa Zapt Tech"
          style={{ width: "100%", height: "100%", border: "none" }}></iframe>
      </div>
      {/* Metade Direita: Lista ou outro conteúdo */}
      <div className="info-container">
        <h2>Nome da Loja</h2>
        <p>Informações da Loja</p>
      </div>
    </div>
  );
}

export default App;
