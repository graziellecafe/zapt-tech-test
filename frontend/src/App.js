import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import zaptLogo from "./images/zapt-logo.svg";
import StoreDetails from "./components/StoreDetails";

function App() {
  const [stores, setStores] = useState([]); // armazenar lojas
  const [loading, setLoading] = useState(true); // armazenar carregamentos

  useEffect(() => {
    const fetchStores = async () => {
      try {
        console.log("Fazendo requisição ao backend...");

        const response = await axios.get("http://localhost:3001/stores");

        if (response.data) {
          setStores(response.data);
          console.log("Lojas recebidas do backend:", response.data);
        } else {
          console.error("Não há lojas disponíveis.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar lojas", error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img
              src={zaptLogo}
              alt="Zapt Tech Logo"
              style={{ height: "50px" }}
            />
          </div>
          <h1>Zapt Tech</h1>
        </header>

        <div className="content">
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

          <div className="iframe-container">
            <iframe
              src="https://app.zapt.tech/#/interests?embed=true&placeId=-ltvysf4acgzdxdhf81y"
              title="Lista de Lojas"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}></iframe>
          </div>
        </div>

        <footer className="footer">
          <h2>Zapt Tech</h2>
          <p>&copy; 2024 Zapt Tech</p>
        </footer>
      </div>

      <Routes>
        <Route path="/loja/:storeId" element={<StoreDetails />} />
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}

export default App;
