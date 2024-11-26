import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fazendo requisição para o backend
    axios
      .get("http://localhost:3001/")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error("Erro ao conectar ao backend:", error));
  }, []);

  return (
    <div>
      <h1>Sistema Zapt Tech</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
