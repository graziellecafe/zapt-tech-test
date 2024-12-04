// backend/src/routes/storeRoutes.js
const express = require("express");
const router = express.Router();
const { getStores } = require("../controllers/storeController");

// Rota para obter as lojas
router.get("/stores", getStores);

// Exportando o roteador corretamente
module.exports = router;
