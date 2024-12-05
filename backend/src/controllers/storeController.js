const axios = require("axios");

exports.getInterests = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.zapt.tech/v1/maps/${process.env.PLACE_ID}/interests`,
      {
        headers: {
          "x-api-key": process.env.API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error.message);
    res.status(500).json({ error: "Erro ao obter os dados da API." });
  }
};
