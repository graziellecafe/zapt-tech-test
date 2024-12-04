const axios = require("axios");

exports.getInterests = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.zapt.tech/v1/maps/-ltvysf4acgzdxdhf81y/interests`,
      {
        headers: {
          "x-api-key": "26ee8805-55f8-484a-a229-59d813131484",
        },
      }
    );

    res.status(200).json(response.data); // Envia os dados obtidos da API Zapt Tech
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error.message);
    res.status(500).json({ error: "Erro ao obter os dados da API." });
  }
};
