import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar lojas do backend
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get("http://localhost:3001/stores");
        if (response.data) {
          setStores(response.data); // Atualiza o estado com os dados recebidos
          console.log("Lojas recebidas:", response.data);
        } else {
          console.error("Nenhuma loja disponível.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar lojas:", error);
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  {
    /* Está desse jeito passando o link do <iframe> diretamente para apenas renderizar direto a lista de Lojas*/
  }

  return (
    <div className="iframe-container">
      {loading ? (
        <p>Carregando lojas...</p>
      ) : (
        <iframe
          src="https://app.zapt.tech/#/interests?embed=true&placeId=-ltvysf4acgzdxdhf81y"
          title="Lista de Lojas"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}></iframe>
      )}
    </div>
  );
};

{
  /* O correto seria:
    return (
    <div className="iframe-container">
    <h2> Lista de Lojas </h2>
      {loading ? (
        <p>Carregando lojas...</p>
      ) : stores.length > 0 ? (
        <ul>
          {stores.map((store, index) => (
            <li key={index}>
              <h3>{store.name}</h3>
              <p>Coordenadas: ({store.x}, {store.y})</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma loja encontrada.</p>
      )}
    </div>
  );
}; 
  */
}
