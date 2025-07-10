import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App";
import Nosotros from "../components/Nosotros";
import Galeria from "../components/Galeria";
import Contacto from "../components/Contacto";
import Inicio from "../components/Inicio";

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Compras" element={<App />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
    </Router>
  );
};