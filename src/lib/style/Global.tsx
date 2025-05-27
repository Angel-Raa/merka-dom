import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // your theme properties here
    bgtotal: string;
  }
}

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.bgtotal};
        font-family: 'Courier New', Courier, monospace;
        color: white;
    }
`;
