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
