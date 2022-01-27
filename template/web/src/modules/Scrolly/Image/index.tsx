import React, { FC, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import SanityImage from '@/atoms/SanityImage'

interface ImageModuleProps extends SanityModuleImage {
  background: boolean
  objectFit?: string
}

const ImageModule: FC<ImageModuleProps> = ({ image, background, objectFit }) => {
  return (
    <Box
      m={background ? undefined : 5}
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : '100%'}
      width={background ? '100%' : undefined}
    >
      <SanityImage image={image} loading="eager" objectFit={background ? 'cover' : 'contain'} />
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
