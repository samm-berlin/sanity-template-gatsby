import { withProps } from '@/lib/helpers'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

interface GridProps {
  display?: string
  alignSelf?: string
}

const StyledGrid = withProps<GridProps>()(styled(Grid))`
  ${props => props.display === 'none' && 'display: none'}


  ${props => props.alignSelf === 'flex-start' && 'align-self: flex-start'}
  ${props => props.alignSelf === 'flex-end' && 'align-self: flex-end'}
  ${props => props.alignSelf === 'center' && 'align-self: center'}
`

export default StyledGrid
