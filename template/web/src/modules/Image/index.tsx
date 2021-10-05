import React, { FC } from 'react'
// import { GatsbyImage } from "gatsby-plugin-image"
import SanityImage from "gatsby-plugin-sanity-image"
import { graphql } from 'gatsby'
import { SanityModuleImage } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'

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
      <SanityImage {...image} width={4096}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }} />
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
    ...SammSanityImageWithPreview
  }
}

fragment SammSanityImage on SanityImageWithAlt {
  alt
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

fragment SammSanityImageWithPreview on SanityImageWithAlt {
  ...SammSanityImage
  asset {
    metadata {
      preview: lqip
    }
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
