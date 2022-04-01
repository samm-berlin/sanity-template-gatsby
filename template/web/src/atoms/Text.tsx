import styled from 'styled-components'
import {
  compose,
  typography,
  space,
  color,
  TypographyProps,
  SpaceProps,
  ColorProps,
  variant
} from 'styled-system'
import theme from '@/styles/theme'
import textVariants from '@/styles/textVariants'

export type TextComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'li'

export type TextVariant =
  | 'head'
  | 'subhead'
  | 'body'
  | 'bodyTitle'
  | 'bodyTitleSmall'
  | 'caption'
  | 'captionSmall'

export interface TextProps extends TypographyProps, SpaceProps, ColorProps {
  component?: TextComponent
  _type?: TextComponent
  variant?: TextVariant
  hyphens?: string
  whiteSpace?: string
  uppercase?: boolean
  mono?: boolean
  bold?: boolean
  opacity?: string | number
}

export default styled('div')<TextProps>(
  compose(space, typography, color),
  variant({
    variants: textVariants
  }),
  `
  line-height: 1.25;
  hyphens: ${(props: TextProps) => (props.hyphens ? 'auto' : 'none')};
  white-space: ${(props: TextProps) => props.whiteSpace};

  ${(props: TextProps) =>
    props.mono &&
    `
  `}

  ${(props: TextProps) =>
    props.uppercase &&
    `
    text-transform: uppercase;
  `}

  ${(props: TextProps) =>
    props.bold &&
    `
    font-weight: 900;
  `}

  ${(props: TextProps) =>
    props.opacity &&
    `
    color: ${props.opacity};
  `}
`
)
