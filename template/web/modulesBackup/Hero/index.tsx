import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { Hero, HeroTitleContainer } from './HeroStyle'
import { SanityModuleHero } from 'web/graphql-types'
import { Box, Typography } from '@material-ui/core'

// use Typography component for this title (subtitle2 / blog title )

const ImageModule: FC<SanityModuleHero> = ({ heroImage, heroTitle, ...props }) =>
  heroImage?.asset?.url ? (
    <Hero style={{ backgroundImage: `url(${heroImage?.asset?.url || ''})` }}>
      <HeroTitleContainer>
        <Typography component="h1" variant="subtitle2">
          {heroTitle}
        </Typography>
      </HeroTitleContainer>
    </Hero>
  ) : null

export default ImageModule

export const query = graphql`
  fragment moduleHeroData on SanityModuleHero {
    _key
    _type
    heroImage {
      asset {
        url
      }
    }
    heroTitle
  }
`
