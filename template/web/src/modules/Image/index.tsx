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
      {/* this is the old GatsbyImage implementation */}
      {/* <GatsbyImage image={image?.asset?.gatsbyImageData} alt={image?.alt || ''} /> */}
      {/* 
        if we use SanityImage we have a littleless traffic during build
        time but more traffic on runtime on our SanityCDN - more expensive
        however hotspot will be supported out of the box.
      */}
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


// ...SanityImageWithPreview



// export const query = graphql`
//   fragment moduleImageData on SanityModuleImage {
      // image {
      //   ...Image
      //   alt
      //   subtitle
      //   asset {
      //     gatsbyImageData(width: 4096)
      //   }
      // }
//   }
// `
