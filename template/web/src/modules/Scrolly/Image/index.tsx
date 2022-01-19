import React, { FC, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import SanityImage from '@/atoms/SanityImage'

interface ImageModuleProps extends SanityModuleImage {
  background: boolean
}

const ImageModule: FC<ImageModuleProps> = ({ image, background }) => {
  return (
    <Box
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : undefined}
      width={background ? '100%' : undefined}
    >
      <SanityImage image={image} loading="eager" />
    </Box>
  )
}

export default ImageModule

export const query = graphql`
  fragment scrollyModuleImageData on SanityScrollyModuleImage {
    image {
      ...ImageWithPreview
    }
    subtitle
  }
`
