const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.zapt.tech/v2/interests",
  headers: {
    "x-api-key": process.env.API_KEY,
  },
  params: {
    placeId: process.env.PLACE_ID,
  },
});

module.exports = api;
