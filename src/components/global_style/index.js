import { createGlobalStyle } from "styled-components";
import { arrToFontString } from "utils/helpers";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=DM+Sans:400,700|DM+Serif+Display|Lora&display=swap');

html, body {
  font-family: ${props => props.theme.fontFamily.body.reduce(arrToFontString)};
}

body {
  line-height: 1.5;
}
`;
