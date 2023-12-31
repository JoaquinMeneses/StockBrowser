import { Routes, Route } from "react-router-dom";
import App from "../App";
import Hero from "../pages/Hero";
import Ejemplo from "../pages/Ejemplo";
import Dashboard from "../pages/Dashboard";

export default function RouterApp() {
  return (
    <Routes>
      // Rutas con NavBar y Footer
      <Route element={<App />}>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      // Rutas sin NavBar y Footer
      <Route path="/ejemplo" element={<Ejemplo />} />
    </Routes>
  );
}
