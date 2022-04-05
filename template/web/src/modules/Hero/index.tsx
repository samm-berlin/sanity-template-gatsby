import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleHero } from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import RichTextModule from '@/modules/RichText'
import SanityImage from '@/atoms/SanityImage'
import theme from '@/styles/theme'

interface HeroModuleProps extends SanityModuleHero {
  heroTitleString: string
}

const HeroModule: FC<HeroModuleProps> = (props) => {
  const { heroTitle, heroImage, heroTitleString } = props

  return (
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
          transform: 'translateX(-50%)'
        }}
      >
        {heroTitle && <RichTextModule text={heroTitle} />}
        {heroTitleString && (
          <Text variant="head" component="h1">
            {heroTitleString}
          </Text>
        )}
      </Box>
    </Box>
  )
}

export default HeroModule

export const query = graphql`
  fragment moduleHeroData on SanityModuleHero {
    _type
    heroTitle {
      ...RichTextData
    }
    heroImage {
      ...ImageWithPreview
    }
  }
`
