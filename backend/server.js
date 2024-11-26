const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint inicial para verificar se o backend está funcionando
app.get("/", (req, res) => {
  res.send("Backend funcionando!");
});

// Porta do servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
