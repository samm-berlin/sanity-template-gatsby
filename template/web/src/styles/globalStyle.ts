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
    &:hover {
      font-style: italic;
    }
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

`
export default GlobalStyle
