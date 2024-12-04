const express = require("express");
const app = express();
const storeRoutes = require("./src/routes/storeRoutes"); // Verifique o caminho correto
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json()); // Para que o Express entenda requisições JSON

// Configurando o uso das rotas
app.use("/api", storeRoutes); // Isso vai prefixar todas as rotas do arquivo storeRoutes com "/api"

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
