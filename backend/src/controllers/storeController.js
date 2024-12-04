const api = require("../config/apiConfig"); // Corrija a importação com o caminho correto

const getStores = async (req, res) => {
  try {
    const response = await api.get(); // Realiza a requisição
    console.log("Resposta da API:", response.data); // Inspeciona os dados
    const stores = response.data.stores; // Ajusta para acessar a chave correta
    res.status(200).json(stores); // Retorna as lojas
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao obter lojas" });
  }
};

module.exports = {
  getStores,
};
