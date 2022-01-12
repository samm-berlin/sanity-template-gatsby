import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import ScrollyModulesLoop from '@/modules/Scrolly'
import { SanityModuleScrollySection } from 'web/types/graphql-types'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import BackgroundVideo from './BackgroundVideo'

gsap.registerPlugin(ScrollTrigger)

const ScrollySectionModule: FC<SanityModuleScrollySection> = (props) => {
  const { scrollySectionRelation } = props

  const backgroundColor =
    scrollySectionRelation?.backgroundOptions?.backgroundType === 'color' &&
    scrollySectionRelation?.backgroundOptions?.color

  const backgroundImage =
    scrollySectionRelation?.backgroundOptions?.backgroundType === 'image' &&
    scrollySectionRelation?.backgroundOptions?.image

  return (
    <Box
      className={scrollySectionRelation?._id || undefined}
      backgroundColor={backgroundColor || undefined}
    >
      {scrollySectionRelation?.backgroundOptions?.backgroundType === 'image' && (
        <Box position="absolute"></Box>
      )}

      {scrollySectionRelation?.backgroundOptions?.backgroundType === 'video' && (
        <BackgroundVideo {...scrollySectionRelation.backgroundOptions.video}></BackgroundVideo>
      )}

      <ScrollyModulesLoop modules={scrollySectionRelation?.scrollyContentModules?.modules} />
    </Box>
  )
}

export default ScrollySectionModule

export const query = graphql`
  fragment moduleScrollySection on SanityModuleScrollySection {
    scrollySectionRelation {
      _type
      _id
      title
      backgroundOptions {
        backgroundType
        color
        image {
          asset {
            url
          }
        }
        video {
          ...moduleVideoEmbedData
        }
      }
      scrollyContentModules {
        _type
        ...CM
      }
    }
  }

  fragment CM on SanityScrollyContentModules {
    modules {
      ...ScrollyContentModules
      ... on SanityModuleScrollySection {
        _key
        _type
        scrollySectionRelation {
          _type
          backgroundOptions {
            backgroundType
            color
          }
          scrollyContentModules {
            _type
            modules {
              ...ScrollyContentModules
            }
          }
        }
      }
    }
  }
`
