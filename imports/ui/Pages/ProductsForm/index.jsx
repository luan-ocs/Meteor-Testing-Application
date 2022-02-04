import React, { useState } from "react";

import { Container, Form, Button } from "./styles";
import { ClientsCollection } from "../../../api/ClientsCollection";
import { SalesCollection } from "../../../api/SalesCollection";

function ProductsForm() {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && client && amount !== 0) {
      const data = await ClientsCollection.findOne(
        { username: client },
        { username: 1, thisMonth: 1 }
      );
      const itemData = await SalesCollection.findOne(
        { username: name },
        { username: 1, thisMonth: 1 }
      );

      console.log(data);
      if (data) {
        ClientsCollection.update(
          { _id: data._id },
          {
            username: client,
            thisMonth:
              Number.parseInt(data.thisMonth) + Number.parseInt(amount),
          }
        );
      } else {
        ClientsCollection.insert({
          username: client,
          thisMonth: Number.parseInt(amount),
        });
      }
      if (itemData) {
        SalesCollection.update(
          { _id: itemData._id },
          {
            username: name,
            thisMonth:
              Number.parseInt(itemData.thisMonth) + Number.parseInt(amount),
          }
        );
      } else {
        SalesCollection.insert({
          username: name,
          thisMonth: Number.parseInt(amount),
        });
      }
      setName("");
      setClient("");
      setAmount(0);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Nome do produto</label>
        <input
          id="product-name"
          type="text"
          placeholder="insira o nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="product-Qnty">Quantidade vendida</label>
        <input
          id="product-Qnty"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="product-client">Nome do Cliente</label>
        <input
          id="product-client"
          type="text"
          placeholder="insira o nome do produto"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default ProductsForm;
