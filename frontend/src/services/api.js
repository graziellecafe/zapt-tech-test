// Arquivo para criar a instância do axios com a configuração necessária para fazer a requisição para a API

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.zapt.tech/v2/interests",
  headers: {
    "x-api-key": "26ee8805-55f8-484a-a229-59d813131484",
  },
  params: {
    placeId: "-ltvysf4acgzdxdhf81y",
  },
});
