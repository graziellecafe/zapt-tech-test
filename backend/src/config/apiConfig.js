require("dotenv").config();
const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.zapt.tech/v2/interests",
  headers: {
    "x-api-key": process.env.API_KEY,
  },
  params: {
    placeId: "-ltvysf4acgzdxdhf81y",
  },
});

module.exports = api;
