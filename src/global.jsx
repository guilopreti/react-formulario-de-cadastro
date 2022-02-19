import { createGlobalStyle } from "styled-components";
import Fundo from "./imgs/fundo.jpg";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background:url(${Fundo});
        height: 100vh; 
        
    }

    #root{
        height: 100%;
    }
`;

export default GlobalStyle;
