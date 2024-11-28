import React from "react";
import "./App.css";
import zaptLogo from "./images/zapt-logo.svg";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={zaptLogo} alt="Zapt Tech Logo" style={{ height: "50px" }} />
        </div>
        <h1>Zapt Tech</h1>
      </header>
      <div className="content">
        <div className="map-container">
          <iframe
            src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed=true"
            title="Zapt Tech"
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
      <footer className="footer">
        <h2>Zapt Tech</h2>
        <p>&copy; 2024 Zapt Tech</p>
      </footer>
    </div>
  );
}

export default App;
