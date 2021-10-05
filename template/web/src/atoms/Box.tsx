import styled from 'styled-components'
import {
    compose, system,
    space, layout, color, flexbox, position, border, shadow,
    SpaceProps, LayoutProps, ColorProps, FlexboxProps, PositionProps, BorderProps, ShadowProps,
} from 'styled-system'

interface Props extends PositionProps, LayoutProps, FlexboxProps, ColorProps, SpaceProps, BorderProps, ShadowProps {
    children: React.ReactNode;
    transition?: string;
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
    ),
    system({
      transition: true
    })
  )

export default Box
