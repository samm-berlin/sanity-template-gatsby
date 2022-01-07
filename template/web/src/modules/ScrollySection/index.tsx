import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import ModulesLoop from '@/modules'
import ImageModule from '@/modules/Image'
import { SanityModuleScrollySection } from 'web/types/graphql-types'

const ScrollySectionModule: FC = (props: SanityModuleScrollySection) => {
  const { scrollySectionRelation } = props
  const { backgroundOptions, contentModules } = scrollySectionRelation

  const backgroundColor = backgroundOptions?.backgroundType === 'color' && backgroundOptions?.color
  const backgroundImage = backgroundOptions?.backgroundType === 'image' && backgroundOptions?.image

  useEffect(() => {
    console.log(backgroundOptions, contentModules)
  }, [])
  return (
    <Box backgroundColor={backgroundColor}>
      <ModulesLoop modules={contentModules?.modules} />
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
      contentModules {
        _type
        ...CM
      }
    }
  }

  fragment CM on SanityContentModules {
    modules {
      ...ContentModules
      ... on SanityModuleScrollySection {
        _key
        _type
        scrollySectionRelation {
          _type
          backgroundOptions {
            backgroundType
            color
          }
          contentModules {
            _type
            modules {
              ...ContentModules
            }
          }
        }
      }
    }
  }
`
