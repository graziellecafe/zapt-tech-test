const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Autenticação e configuração
const apiUrl = "https://api.zapt.tech/interests";
const placeId = "-ltvysf4acgzdxdhf81y";
const apiKey = "26ee8805-55f8-484a-a229-59d813131484";

app.get("/stores", async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "x-access-token": apiKey,
      },
      params: {
        placeId,
      },
    });

    if (response.data) {
      res.json(response.data);
    } else {
      res.status(404).json({ message: "Nenhuma loja encontrada" });
    }
  } catch (error) {
    console.error("Erro ao buscar lojas:", error);
    res
      .status(500)
      .json({ message: "Erro ao buscar lojas", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend funcionando!");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
