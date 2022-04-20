import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${theme.fonts.sans};
    font-size: 8px;
  }

  body {
    font-size: ${theme.fontSizes[3]}
  }

  a {
    text-decoration: none;
  }

  b, strong {
    font-weight: 900;
  }

  li {
    margin-left: 2em;
  }

  p, ul, ol {
    margin-bottom: 1em;
  }

  /* clears the 'X' from Internet Explorer */
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

  /* clears the 'X' from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`
export default GlobalStyle
