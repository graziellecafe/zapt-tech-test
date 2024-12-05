const express = require("express");
const storeController = require("../controllers/storeController");
const router = express.Router();

router.get("/interests", storeController.getInterests);

module.exports = router;
