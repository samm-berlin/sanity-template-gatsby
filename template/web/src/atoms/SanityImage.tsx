import React, { FC } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  compose,
  system,
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
import SImage from 'gatsby-plugin-sanity-image'

interface Props
  extends PositionProps,
    FlexboxProps,
    ColorProps,
    SpaceProps,
    BorderProps,
    ShadowProps,
    LayoutProps {
  image: any
  loading: string
  objectFit?: string
}

const IMG = styled(SImage)<Props>(
  compose(space, layout, position, border, shadow, flexbox),
  {
    width: '100%',
    height: '100%'
  },
  system({
    objectFit: true
  })
)

const SanityImage: FC<Props> = ({ image, loading, objectFit }) => (
  <IMG {...image} width={4096} loading={loading} objectFit={objectFit || 'cover'} />
)

export default SanityImage

export const query = graphql`
  fragment Image on SanityImageField {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      altText
      metadata {
        lqip
        dimensions {
          aspectRatio
          width
          height
        }
      }
    }
  }

  fragment ImageWithPreview on SanityImageField {
    ...Image
    asset {
      metadata {
        preview: lqip
      }
    }
  }
`
