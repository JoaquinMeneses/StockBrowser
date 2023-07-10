import { Routes, Route } from "react-router-dom";
import App from "../App";
import Hero from "../pages/Hero";

export default function RouterApp() {
  return (
    <Routes>
      // Rutas con NavBar y Footer
      <Route element={<App />}>
        <Route path="/" element={<Hero />} />
      </Route>
      // Rutas sin NavBar y Footer
    </Routes>
  );
}
