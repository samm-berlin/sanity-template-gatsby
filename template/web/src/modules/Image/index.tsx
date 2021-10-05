import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import SanityImage from '@/atoms/SanityImage'

const ImageModule: FC<SanityModuleImage> = ({ image, subtitle }) =>
  image?.asset ? (
    <>
      <SanityImage image={image} />
      {subtitle && (
        <Box p={2}>
          <Text variant="captionSmall">{subtitle}</Text>
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
  subtitle
}
`
