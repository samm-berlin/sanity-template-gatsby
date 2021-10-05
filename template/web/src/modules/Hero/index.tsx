import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleHero } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import RichTextModule from '@/modules/RichText'
import SanityImage from 'gatsby-plugin-sanity-image'

const HeroModule: FC<SanityModuleHero> = ({heroTitle, heroImage}) =>
    <Box>
        <SanityImage {...heroImage} width={4096}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }} />
        {heroTitle && <RichTextModule text={heroTitle} />}
    </Box>

export default HeroModule

export const query = graphql`
  fragment moduleHeroData on SanityModuleHero {
    _type
    heroTitle { ...RichTextData }
    heroImage { ...ImageWithPreview }
  }

  fragment Image on SanityImage {
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
  
  fragment ImageWithPreview on SanityImage {
    ...Image
    asset {
      metadata {
        preview: lqip
      }
    }
}
`
