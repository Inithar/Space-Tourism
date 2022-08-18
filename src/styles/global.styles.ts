import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Barlow', sans-serif;
        /* font-family: 'Barlow Condensed', sans-serif;
        font-family: 'Bellefair', serif; */
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;
    }

    input,
    input:hover,
    input:focus {
        border: none;
        outline: none;
    }

    button,
    button:hover,
    button:focus,
    button:focus-visible,
    button:focus-within {
        padding: 0;
        font-family: inherit;
        color: inherit;
        background-color: inherit;
        border: none;
        outline: inherit;
        cursor: pointer;
    }

    a {
        cursor: pointer;
    }
`;

export default GlobalStyle;
