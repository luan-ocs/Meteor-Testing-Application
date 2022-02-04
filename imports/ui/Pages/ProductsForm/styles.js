import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > label {
        margin: 5px 0px;
    }
    & > input {
        padding: 10px;
        border-radius: 5px;
        border: none;
    }
`;

export const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-style: bold;
    font-size: 18px;
    color: #fff;
    background-color: #44a1a0;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background: #183a39;
    }
`;