import styled from 'styled-components'
import {
    compose,
    space, layout, color, flexbox, position, border, shadow,
    SpaceProps, LayoutProps, ColorProps, FlexboxProps, PositionProps, BorderProps, ShadowProps, flexDirection
} from 'styled-system'

interface Props extends PositionProps, LayoutProps, FlexboxProps, ColorProps, SpaceProps, BorderProps, ShadowProps {
    children: React.ReactNode;
  }

const Box = styled('div')<Props>(
    compose(
      space,
      layout,
      color,
      position,
      border,
      shadow,
      flexbox,
    )
  )

export default Box