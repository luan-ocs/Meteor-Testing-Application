import React from "react";
import {
  ClientsCollection,
  ClientsTrending,
} from "../../../api/ClientsCollection";
import { useTracker } from "meteor/react-meteor-data";
import {
  Container,
  Title,
  Board,
  MostProfitable,
  Trending,
  ItemsList,
} from "./styles";

function Clients() {
  const client = useTracker(() => {
    return ClientsCollection.find({}).fetch();
  });

  client.sort((a, b) => {
    if (a.thisMonth > b.thisMonth) {
      return -1;
    } else if (a.thisMonth < b.thisMonth) {
      return 1;
    }
    return 0;
  });

  const clientTrending = useTracker(() => {
    return ClientsTrending.find({}).fetch();
  });

  clientTrending.sort((a, b) => {
    if (a.percentage > b.percentage) {
      return -1;
    } else if (a.percentage < b.percentage) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <Title>Relacionamento com Clientes</Title>
      <Board>
        <MostProfitable>
          <h2>Clientes que mais compraram este mês</h2>
          <ItemsList>
            {client.map((value) => (
              <li key={value._id}>
                {value.username} ({value.thisMonth} items comprados)
              </li>
            ))}
          </ItemsList>
        </MostProfitable>
        <Trending>
          <h2>Clientes em alta este mês</h2>
          <ItemsList>
            {clientTrending.map((value) => (
              <li key={value._id}>
                {value.username} ({value.percentage * 100}% a mais que o mês
                passado)
              </li>
            ))}
          </ItemsList>
        </Trending>
      </Board>
    </Container>
  );
}

export default Clients;
