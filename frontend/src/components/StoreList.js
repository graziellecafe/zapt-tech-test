import React, { useEffect, useState } from "react";
import { useFetchInterests } from "../hooks/useFetchInterests"; // Importando o hook para pegar os dados
import Modal from "react-modal"; // Importando o Modal
import "../App.css";

Modal.setAppElement("#root"); // Definir o nó de raiz da aplicação para o Modal

export const StoreList = () => {
  const { interests, loading, error } = useFetchInterests(); // Usando o hook para pegar os dados
  const [stores, setStores] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar a abertura do Modal
  const [selectedStore, setSelectedStore] = useState(null); // Estado para armazenar a loja selecionada

  useEffect(() => {
    if (interests && Object.keys(interests).length > 0) {
      const storeList = Object.values(interests); // Convertendo as lojas para um array
      setStores(storeList);
    }
  }, [interests]);

  // Função para capitalizar a primeira letra de cada palavra nas tags
  const capitalizeTags = (tags) => {
    return tags.map(
      (tag) => tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()
    );
  };

  // Função para abrir o Modal com a loja selecionada
  const openModal = (store) => {
    setSelectedStore(store); // Armazenando a loja selecionada
    setModalIsOpen(true); // Abrindo o modal
  };

  // Função para fechar o Modal
  const closeModal = () => {
    setModalIsOpen(false); // Fechando o modal
    setSelectedStore(null); // Limpando a loja selecionada
  };

  const calculateDistance = (coords1, coords2) => {
    const [x1, y1] = coords1;
    const [x2, y2] = coords2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceInPixels = Math.sqrt(dx * dx + dy * dy);
    const distanceInMeters = distanceInPixels / 25; // Convertendo de pixels para metros
    return distanceInMeters;
  };

  const findNearbyStores = (coords) => {
    return stores
      .filter((store) => store.coords !== coords) // Excluindo a loja selecionada
      .map((store) => ({
        ...store,
        distance: calculateDistance(coords, store.coords),
      }))
      .sort((a, b) => a.distance - b.distance); // Ordenando pela menor distância
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
            <div className="store-image" onClick={() => openModal(store)}>
              <img src={store.media} alt={store.title} className="store-img" />
            </div>
            <div className="store-info" onClick={() => openModal(store)}>
              <p>
                <strong>Loja: </strong>
                {store.title}
              </p>
              <p>
                <strong>Andar: </strong> {store.floorId}º andar
              </p>
              <p>
                <strong>Coordenadas: </strong> <strong>x:</strong>{" "}
                {store.coords[0]}, <strong>y:</strong> {store.coords[1]}
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

      {/* Modal com as lojas mais próximas */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes da Loja"
        className="modal-content">
        {selectedStore && (
          <>
            <div className="modal-header">{selectedStore.title}</div>
            <div className="modal-body">
              <img
                src={selectedStore.media}
                alt={selectedStore.title}
                className="modal-image"
              />
              <h3>Detalhes da Loja</h3>
              <p>
                <strong>Andar:</strong> {selectedStore.floorId}º andar
              </p>
              <p>
                <strong>Coordenadas:</strong> x: {selectedStore.coords[0]}, y:{" "}
                {selectedStore.coords[1]}
              </p>
              <h3>Lojas mais próximas:</h3>
              <div className="nearby-stores">
                {findNearbyStores(selectedStore.coords)
                  .slice(0, 2) // Limita às duas lojas mais próximas
                  .map((store, index) => (
                    <div className="nearby-store-card" key={index}>
                      <img
                        src={store.media}
                        alt={store.title}
                        className="nearby-store-image"
                      />
                      <p className="nearby-store-name">{store.title}</p>
                      <p className="nearby-store-floor">
                        {store.floorId}º andar
                      </p>
                      <p className="nearby-store-distance">
                        Distância: {store.distance.toFixed(2)} metros
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <button className="modal-close-button" onClick={closeModal}>
              Fechar
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};
