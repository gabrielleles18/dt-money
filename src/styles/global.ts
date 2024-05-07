import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Baloo 2", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button, input {
    border: none;
    outline: none;
    box-sizing: border-box;
  }
`
