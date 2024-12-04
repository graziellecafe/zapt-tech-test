const express = require("express");
const app = express();
const storeRoutes = require("./src/routes/storeRoutes");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", storeRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
