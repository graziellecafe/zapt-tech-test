// backend/src/controllers/storeController.js

const api = require("../config/apiConfig"); // Corrigido o caminho para o arquivo apiConfig.js

// Função para obter lojas
const getStores = async (req, res) => {
  try {
    // Realiza a requisição para a API
    const response = await api.get("/stores"); // Certifique-se de ajustar o endpoint se necessário
    console.log("Resposta da API:", response.data); // Inspeciona os dados da resposta

    // Acessa as lojas da resposta da API (ajuste conforme a estrutura da sua API)
    const stores = response.data.stores; // Ajuste conforme a chave da resposta
    res.status(200).json(stores); // Retorna as lojas para o frontend
  } catch (error) {
    console.error(error); // Exibe o erro no console
    res.status(500).json({ message: "Erro ao obter lojas" }); // Retorna uma mensagem de erro para o frontend
  }
};

module.exports = {
  getStores,
};
