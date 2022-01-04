import { Grid, Typography } from '@material-ui/core'

import styled from 'styled-components'

export const Anchor = styled.a`
  text-decoration: unset;
  color: inherit;
`
export const StyledTypography = styled(Typography)`
  max-width: ${(props) => (props.maxWidth / 12) * 100 * 2}%;
  text-decoration: underline;
`

export const Image = styled.div`
  height: 0;
  padding-bottom: 120%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Post = styled(Grid)`
  padding-left: 0.9167rem;
  padding-right: 0.9167rem;
`
