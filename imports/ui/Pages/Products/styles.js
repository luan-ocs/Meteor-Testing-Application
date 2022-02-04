import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MostProfitable = styled.div`
  margin-top: 10px;
  background-color: #575760;
  border-radius: 5px;
  padding: 10px;
  width: 45%;
  min-width: 300px;
`;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ItemsList = styled.ul`
  list-style: none;
  & > li {
    padding: 6px;
  }
`;

export const Trending = styled.div`
  margin-top: 10px;
  background-color: #575760;
  border-radius: 5px;
  padding: 10px;
  width: 45%;
  min-width: 300px;
`;

export const Board = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;