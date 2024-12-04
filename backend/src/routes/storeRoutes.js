const express = require("express");
const axios = require("axios");
const router = express.Router();

// Defina a rota para obter os pontos de interesse
router.get("/interests", async (req, res) => {
  try {
    // Realiza a requisição para a API da Zapt Tech
    const response = await axios.get("https://api.zapt.tech/v2/interests", {
      headers: {
        "x-api-key": "26ee8805-55f8-484a-a229-59d813131484",
      },
      params: {
        placeId: "-ltvysf4acgzdxdhf81y",
      },
    });

    // Envia a resposta com os dados das lojas
    res.json(response.data);
  } catch (error) {
    console.error("Erro ao obter os dados da API:", error);
    res.status(500).json({ message: "Erro ao obter os dados da API." });
  }
});

module.exports = router;
