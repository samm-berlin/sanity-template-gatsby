import styled from 'styled-components'

import { Box } from '@material-ui/core'

import { pLarge, p, pSmall, h3, h4, h5 } from '@/styles/typography'
import theme from '@/styles/theme'

export default styled(Box).attrs(props => ({
  as: props.as || 'p',
  t: props.t || 0,
  whiteSpace: props.whiteSpace || 'normal'
}))`
  ${props => props.t === -1 && pSmall}
  ${props => props.t === 0 && p}
  ${props => props.t === 1 && pLarge}
  ${props => props.as === 'h3' && h3}
  ${props => props.as === 'h4' && h4}
  ${props => props.as === 'h5' && h5}

  hyphens: ${props => (props.hyphens ? 'auto' : 'none')};
  white-space: ${props => props.whiteSpace};

  ${props =>
    props.mono &&
    `
    font-family: ${theme.font.mono};
  `}

  ${props =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}

  ${props =>
    props.bold &&
    `
    font-weight: bold;
  `}
`
