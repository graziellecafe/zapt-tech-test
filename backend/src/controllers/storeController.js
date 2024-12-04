const api = require("../config/apiConfig");

const getStores = async (req, res) => {
  try {
    const response = await api.get();
    const stores = response.data;
    res.status(200).json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao obter lojas" });
  }
};

module.exports = {
  getStores,
};
