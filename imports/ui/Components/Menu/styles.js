import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e4847;
  min-height: calc(100vh - 80px);
  width: 120px;
  align-items: center;
`;

export const Switch = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: ${props => props.active ? "#183a39" : "#44a1a0"};
    & > a {
      text-decoration: none;
      color: #fff;
    }
    &:hover {
      background-color: #1e4847;
    }
`;