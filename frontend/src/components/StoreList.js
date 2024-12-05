import React, { useEffect, useState } from "react";
import { useFetchInterests } from "../hooks/useFetchInterests"; // Importando o hook para pegar os dados
import Modal from "react-modal"; // Importando o Modal

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

      {/* Modal com a foto e nome da loja selecionada */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes da Loja"
        style={{
          content: {
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center",
          },
        }}>
        {selectedStore && (
          <>
            <img
              src={selectedStore.media}
              alt={selectedStore.title}
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <h3>{selectedStore.title}</h3>
            <button onClick={closeModal}>Fechar</button>
          </>
        )}
      </Modal>
    </div>
  );
};
