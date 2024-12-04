const express = require("express");
const router = express.Router();
const { getStores } = require("../controllers/storeController");

// Rota para obter as lojas
router.get("/stores", getStores);

module.exports = router;
