const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.zapt.tech/v2/interests", // URL da API que você está utilizando
  headers: {
    "x-api-key": "26ee8805-55f8-484a-a229-59d813131484", // Chave da API
  },
  params: {
    placeId: "-ltvysf4acgzdxdhf81y", // Adapte conforme necessário
  },
});
module.exports = api;
