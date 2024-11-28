import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios"; // Certifique-se de que o axios está instalado
import "./App.css";
import zaptLogo from "./images/zapt-logo.svg";
import StoreDetails from "./StoreDetails"; // Importando a página de detalhes da loja

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
        const response = await axios.get(apiUrl, {
          params: {
            placeId,
            apiKey,
          },
        });
        setStores(response.data); // Armazena as lojas no estado
        setLoading(false); // Finaliza o carregamento
      } catch (error) {
        console.error("Erro ao carregar lojas", error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []); // O array vazio [] faz com que essa requisição seja feita apenas uma vez, quando o componente for montado

  return (
    <Router>
      <div className="container">
        {/* Cabeçalho */}
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

        {/* Conteúdo Principal */}
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
            {loading ? (
              <p>Carregando lojas...</p>
            ) : (
              <ul>
                {stores.map((store) => (
                  <li key={store.id}>
                    <Link to={`/loja/${store.id}`}>{store.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <footer className="footer">
          <h2>Zapt Tech</h2>
          <p>&copy; 2024 Zapt Tech</p>
        </footer>
      </div>

      {/* Configuração do Roteamento */}
      <Routes>
        {/* Rota para exibir os detalhes da loja */}
        <Route path="/loja/:storeId" element={<StoreDetails />} />
        {/* Caso não seja uma loja específica, mostra a lista de lojas */}
        <Route
          path="/"
          element={
            <div> {/* A página principal já está sendo exibida acima */} </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
