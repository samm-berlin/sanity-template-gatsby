import React, { FC } from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  layout,
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
  flexbox
} from 'styled-system'
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'

type ImageProps = PositionProps &
  FlexboxProps &
  ColorProps &
  SpaceProps &
  BorderProps &
  ShadowProps &
  LayoutProps &
  GatsbyImageProps

const IMG = styled(GatsbyImage)<ImageProps>(
  compose(space, layout, position, border, shadow, flexbox)
)

const Image: FC<ImageProps> = (props) => <IMG {...props} />

export default Image
