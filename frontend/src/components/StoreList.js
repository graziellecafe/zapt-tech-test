import React, { useEffect, useState } from "react";
import { useFetchInterests } from "../hooks/useFetchInterests"; // Importando o hook para pegar os dados

export const StoreList = () => {
  const { interests, loading, error } = useFetchInterests(); // Usando o hook para pegar os dados
  const [stores, setStores] = useState([]);

  useEffect(() => {
    if (interests && Object.keys(interests).length > 0) {
      // Processar os dados das lojas
      const storeList = Object.values(interests); // Supondo que o dado seja um objeto de lojas
      setStores(storeList);
    }
  }, [interests]);

  // Função para capitalizar a primeira letra de cada palavra nas tags
  const capitalizeTags = (tags) => {
    return tags.map(
      (tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
    );
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar as lojas: {error.message}</div>;
  }

  return (
    <div className="store-list">
      {stores.length > 0 ? (
        stores.map((store) => (
          <div className="store-item" key={store.id}>
            <div className="store-image">
              <img src={store.media} alt={store.title} className="store-img" />
            </div>
            <div className="store-info">
              <p>
                <strong>Loja: </strong>
                {store.title}
              </p>

              <p>
                <strong>Andar: </strong> {store.floorId}º andar
              </p>

              <p>
                <strong>Coordenadas: </strong> x: {store.coords[0]}, y:{" "}
                {store.coords[1]}
              </p>

              <div className="tags">
                <strong>Tags: </strong>
                {store.tags && store.tags.length > 0 ? (
                  <ul>
                    {capitalizeTags(store.tags).map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                ) : (
                  <p>Sem tags disponíveis</p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Nenhuma loja encontrada.</div>
      )}
    </div>
  );
};
