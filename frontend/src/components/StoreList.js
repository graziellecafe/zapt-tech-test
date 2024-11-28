import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

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
