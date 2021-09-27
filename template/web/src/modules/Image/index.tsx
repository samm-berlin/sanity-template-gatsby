import React, { FC } from 'react'

import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'

const ImageModule: FC<SanityModuleImage> = ({ image, ...props }) =>
  image?.asset?.url ? (
    <Box my={3} mx="auto" maxWidth="1440px" px={6}>
      <img src={image?.asset?.url || ''} alt={image?.alt || ''} />
      {image.subtitle && (
          <Box pt={1}>
            {/* <Typography variant="body2"> {image.subtitle}</Typography> */}
          </Box>
        )}
    </Box>
  ) : null

export default ImageModule

export const query = graphql`
  fragment moduleImageData on SanityModuleImage {
    image {
      alt
      subtitle
      asset {
        url
      }
    }
  }
`
