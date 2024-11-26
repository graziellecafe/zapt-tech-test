import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Cabeçalho */}
      <header className="header">
        <h1>Mapa Zapt Tech</h1>
      </header>
      {/* Conteúdo principal */}
      <div className="content">
        <div className="map-container">
          <iframe
            src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed=true"
            title="Mapa Zapt Tech"
            style={{
              width: "90%",
              height: "90%",
              border: "none",
              margin: "5%",
            }}></iframe>
        </div>
        <div className="info-container">
          <h2>Lista de Lojas</h2>
          <p>Adicione informações ou uma lista de lojas aqui.</p>
        </div>
      </div>
      {/* Rodapé */}
      <footer className="footer">
        <h2>Zapt Tech</h2>
        <p>&copy; 2024 Zapt Tech</p>
      </footer>
    </div>
  );
}

export default App;
