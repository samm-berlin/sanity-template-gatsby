import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import ScrollyModulesLoop from '@/modules/Scrolly'
import { SanityModuleScrollySection } from 'web/types/graphql-types'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollySectionModule: FC<SanityModuleScrollySection> = (props) => {
  const { scrollySectionRelation } = props

  const backgroundColor =
    scrollySectionRelation?.backgroundOptions?.backgroundType === 'color' &&
    scrollySectionRelation?.backgroundOptions?.color
  const backgroundImage =
    scrollySectionRelation?.backgroundOptions?.backgroundType === 'image' &&
    scrollySectionRelation?.backgroundOptions?.image

  useEffect(() => {
    console.log(
      scrollySectionRelation?.backgroundOptions,
      scrollySectionRelation?.scrollyContentModules
    )
  }, [])
  return (
    <Box backgroundColor={backgroundColor || undefined}>
      <ScrollyModulesLoop modules={scrollySectionRelation?.scrollyContentModules?.modules} />
    </Box>
  )
}

export default ScrollySectionModule

export const query = graphql`
  fragment moduleScrollySection on SanityModuleScrollySection {
    scrollySectionRelation {
      backgroundOptions {
        backgroundType
        color
        image {
          asset {
            url
          }
        }
        video {
          url
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
