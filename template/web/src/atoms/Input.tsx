import textVariants from '@/styles/textVariants'
import theme from '@/styles/theme'
import styled from 'styled-components'
import {
  compose,
  system,
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  shadow,
  SpaceProps,
  LayoutProps,
  ColorProps,
  FlexboxProps,
  PositionProps,
  BorderProps,
  ShadowProps,
  variant,
  typography,
  TypographyProps
} from 'styled-system'

interface Props
  extends PositionProps,
    LayoutProps,
    FlexboxProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    ShadowProps,
    TypographyProps {
  variant: string
}

// const inputVariants = variant({
//   variants: {
//     primary: {
//       border: 'none',
//       borderColor: 'black'
//     }
//   }
// })

const inputStyle = `
  display: block;
  box-sizing: border-box;
  border: none;
  box-shadow: none;

  &:focus {
    outline: 0;
    border: none;
  }

  ::placeholder {
    color: ${theme.colors.lightGrey};
    opacity: 0.2;
  }
`

const Input = styled('input')<Props>(
  compose(space, layout, color, typography, position, border, shadow, flexbox),
  variant({
    variants: textVariants
  }),
  system({}),
  inputStyle
)

export default Input
