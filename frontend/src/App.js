import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import zaptLogo from "./images/zapt-logo.svg";
import StoreDetails from "./StoreDetails"; // Componente para exibir os detalhes da loja

function App() {
  const [stores, setStores] = useState([]); // Estado para armazenar as lojas
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

  // URL da API
  const apiUrl = "https://api.zapt.tech/interests";
  const apiKey = "26ee8805-55f8-484a-a229-59d813131484";
  const placeId = "-ltvysf4acgzdxdhf81y";

  // Função para buscar as lojas da API
  useEffect(() => {
    const fetchStores = async () => {
      try {
        console.log("Fazendo requisição com os parâmetros:", {
          placeId,
          apiKey,
        });

        const response = await axios.get(apiUrl, {
          params: {
            placeId,
            apiKey,
          },
        });

        // Verifique se a resposta está chegando corretamente
        console.log("Resposta da API:", response);

        if (response.data) {
          setStores(response.data); // Armazena as lojas no estado
        } else {
          console.error("A resposta não contém dados válidos.");
        }

        setLoading(false); // Finaliza o carregamento
      } catch (error) {
        console.error("Erro ao carregar lojas", error);
        setLoading(false); // Finaliza o carregamento mesmo em caso de erro
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
          {/* Mapa */}
          <div className="map-container">
            <iframe
              src="https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed=true"
              title="Zapt Tech"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                margin: "0",
              }}></iframe>
          </div>

          {/* Lista de Lojas */}
          <div className="info-container">
            <h2>Lista de Lojas</h2>
            {loading ? (
              <p>Carregando lojas...</p>
            ) : stores.length > 0 ? (
              <ul>
                {stores.map((store) => (
                  <li key={store.id}>
                    <Link to={`/loja/${store.id}`}>{store.name}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Não há lojas disponíveis.</p>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <footer className="footer">
          <h2>Zapt Tech</h2>
          <p>&copy; 2024 Zapt Tech</p>
        </footer>
      </div>

      {/* Roteamento */}
      <Routes>
        <Route path="/loja/:storeId" element={<StoreDetails />} />
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}

export default App;
