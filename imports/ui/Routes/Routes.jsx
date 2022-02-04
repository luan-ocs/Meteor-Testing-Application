import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../Pages/Products";
import Clients from "../Pages/Clients";
import Menu from "../Components/Menu";
import { Container } from "./styles";
import ProductsForm from "../Pages/ProductsForm";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products/sales" element={<ProductsForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
