import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Switch } from "./styles";

function Menu() {

  const [active, setActive]= useState("Produtos");

  return (
    <Container>
      <Switch active={active === "Produtos"}>
        <Link onClick={e => setActive("Produtos")} to="/">Produtos </Link>
      </Switch>
      <Switch active={active === "Clientes"}>
        <Link to="/clients" onClick={e => setActive("Clientes")}>Clientes</Link>
      </Switch>
      <Switch active={active === "ProductForm"}>
        <Link to="/products/sales" onClick={e => setActive("ProductForm")}>Vendas</Link>
      </Switch>
    </Container>
  );
}

export default Menu;
