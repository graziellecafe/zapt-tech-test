// backend/server.js
const express = require("express");
const cors = require("cors");
const storeRoutes = require("./src/routes/storeRoutes"); // Caminho correto

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Usando as rotas para "/api"
app.use("/api", storeRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
