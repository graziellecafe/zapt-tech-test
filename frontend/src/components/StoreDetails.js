import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function StoreDetails() {
  const { storeId } = useParams();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.zapt.tech/store/${storeId}`
        );
        setStore(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os detalhes da loja", error);
        setLoading(false);
      }
    };

    fetchStoreDetails();
  }, [storeId]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (!store) return <p>Loja não encontrada.</p>;

  return (
    <div>
      <h2>{store.name}</h2>
      <p>{store.description}</p>
      <h3>Lojas próximas:</h3>
      <ul>
        {store.nearbyStores.map((nearbyStore) => (
          <li key={nearbyStore.id}>{nearbyStore.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StoreDetails;
