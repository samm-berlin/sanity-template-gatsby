import React, { FC, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import { ScrollyModuleDefaultFields } from 'web/types/custom-graphql-types'
import Box from '@/atoms/Box'
import SanityImage from '@/atoms/SanityImage'

export interface ImageModuleProps extends SanityModuleImage {
  background?: boolean
  objectFit?: string
  options: ScrollyModuleDefaultFields
}

const ImageModule: FC<ImageModuleProps> = (props) => {
  const { image, background } = props
  return (
    <Box position={background ? 'absolute' : 'relative'} height={background ? '100vh' : '100%'}>
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
