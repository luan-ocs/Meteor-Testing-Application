import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html, #react-target {
        background-color: #27272b;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }
`;