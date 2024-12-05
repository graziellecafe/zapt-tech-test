const express = require("express");
const dotenv = require("dotenv");
const storeRoutes = require("./src/routes/storeRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", storeRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
