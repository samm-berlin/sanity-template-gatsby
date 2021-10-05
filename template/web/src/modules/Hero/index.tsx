import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleHero } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import RichTextModule from '@/modules/RichText'
import SanityImage from '@/atoms/SanityImage'
import theme from '@/styles/theme'

const HeroModule: FC<SanityModuleHero> = ({heroTitle, heroImage}) =>
    <Box height="85vh" position="relative">
        <SanityImage image={heroImage} />
        <Box
            p={4}
            width="100%"
            maxWidth={theme.containerWidth}
            mx="auto"
            position="absolute"
            bottom={0}
            left="50%"
            style={{
                transform: "translateX(-50%)"
            }}
        >
            {heroTitle && <RichTextModule text={heroTitle} />}
        </Box>
    </Box>

export default HeroModule

export const query = graphql`
  fragment moduleHeroData on SanityModuleHero {
    _type
    heroTitle { ...RichTextData }
    heroImage { ...ImageWithPreview }
  }
`
