import React, { FC } from 'react'
// import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import SanityImage from '@/atoms/SanityImage'

const ImageModule: FC<SanityModuleImage> = ({ image, ...props }) =>
  image?.asset ? (
    <>
      <SanityImage image={image} />
      {image.subtitle && (
        <Box pt={1}>
          <Text variant="body">{image.subtitle}</Text>
        </Box>
      )}
    </>
  ) : null

export default ImageModule

export const query = graphql`
fragment moduleImageData on SanityModuleImage {
  image {
    ...ImageWithPreview
  }
}
`
