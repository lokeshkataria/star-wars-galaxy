import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${({ theme }) => theme.color.background}
    }
`;