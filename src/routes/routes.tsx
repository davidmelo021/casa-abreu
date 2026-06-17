import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Products from "../pages/products";
import Perfil from "../pages/perfil";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

