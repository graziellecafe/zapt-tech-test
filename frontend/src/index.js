import React from "react";
import ReactDOM from "react-dom/client"; // Alterado para importar de react-dom/client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// Crie uma instância do QueryClient
const queryClient = new QueryClient();

// Usando o createRoot em vez de render
const root = ReactDOM.createRoot(document.getElementById("root")); // Cria a raiz

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
