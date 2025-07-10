import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../App";
import Componente1 from "../components/Componente1";
import Componente2 from "../components/Componente2";
import Componente4 from "../components/Componente4";

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/C1" element={<Componente1 />} />
          <Route path="/C2" element={<Componente2 />} />
          <Route path="/C4" element={<Componente4 />} />
        </Routes>
    </Router>
  );
};