import React from "react";
import { SalesCollection, SalesTrendingCollection } from "../../../api/SalesCollection";
import { useTracker} from "meteor/react-meteor-data"
import {
  Container,
  MostProfitable,
  Title,
  ItemsList,
  Trending,
  Board,
} from "./styles";

function Products() {


  const itemSales = useTracker(() => {
    return SalesCollection.find({}).fetch();
  });

  itemSales.sort((a, b) => {
    if (a.thisMonth > b.thisMonth) {
      return -1;
    } else if (a.thisMonth < b.thisMonth) {
      return 1;
    }
    return 0;
  });

  const ItemTrending = useTracker(() => {
    return SalesTrendingCollection.find({}).fetch();
  });

  ItemTrending.sort((a, b) => {
    if (a.percentage > b.percentage) {
      return -1;
    } else if (a.percentage < b.percentage) {
      return 1;
    }
    return 0;
  });

  return (
    <Container>
      <Title>Venda de produtos</Title>
      <Board>
        <MostProfitable>
          <h2>Itens mais vendidos este mês</h2>
          <ItemsList>
          {itemSales.map(item => <li key={item._id}> {item.username} ({item.thisMonth} itens vendidos)</li>)}
          </ItemsList>
        </MostProfitable>
        <Trending>
          <h2>Itens em alta este mês</h2>
          <ItemsList>
            {ItemTrending.map(item => <li key={item._id}> {item.username} ({item.percentage * 100}% mais vendas que o mês passado)</li>)}
          </ItemsList>
        </Trending>
      </Board>
    </Container>
  );
}

export default Products;
