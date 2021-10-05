import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleHero } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import RichTextModule from '@/modules/RichText'
import SanityImage from '@/atoms/SanityImage'

const HeroModule: FC<SanityModuleHero> = ({heroTitle, heroImage}) =>
    <Box>
        <SanityImage image={heroImage} />
        {heroTitle && <RichTextModule text={heroTitle} />}
    </Box>

export default HeroModule

export const query = graphql`
  fragment moduleHeroData on SanityModuleHero {
    _type
    heroTitle { ...RichTextData }
    heroImage { ...ImageWithPreview }
  }
`
