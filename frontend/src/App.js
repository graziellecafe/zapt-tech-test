// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import zaptLogo from "./images/zapt-logo.svg";
import { MapContainer } from "./components/MapContainer";
import { StoreList } from "./components/StoreList";
import StoreDetails from "./components/StoreDetails";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img
              src={zaptLogo}
              alt="Zapt Tech Logo"
              style={{ height: "50px" }}
            />
          </div>
          <h1>Zapt Tech</h1>
        </header>

        <div className="content">
          <MapContainer />
          <StoreList />
        </div>

        {/* Checar lista de lojas:  http://localhost:5000/api/interests */}

        <footer className="footer">
          <h2>Zapt Tech</h2>
          <p>&copy; 2024 Zapt Tech</p>
        </footer>
      </div>

      <Routes>
        <Route path="/loja/:storeId" element={<StoreDetails />} />
        <Route path="/" element={<div />} />
      </Routes>
    </Router>
  );
}

export default App;
