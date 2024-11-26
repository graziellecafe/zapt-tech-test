const API_BASE_URL = "http://localhost:3000"; // Backend local

export const fetchStoresByFloor = async (floor) => {
  try {
    const response = await fetch(`${API_BASE_URL}/stores?floor=${floor}`);
    if (!response.ok) throw new Error("Erro ao buscar lojas.");
    const data = await response.json();
    return data.stores;
  } catch (error) {
    console.error("Erro na API:", error.message);
    return [];
  }
};
