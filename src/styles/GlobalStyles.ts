// styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body #root {
    /* font-family: 'Roboto', sans-serif; */
    height: 100%;
    background-color: white;
  }
  *, button, input {
    border:0;
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
