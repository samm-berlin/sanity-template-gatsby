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

  const backgroundColor = scrollySectionRelation?.backgroundOptions?.color
  const sectionID = `s${scrollySectionRelation?._id}`

  // useEffect(() => {
  //   console.log([
  //     ...scrollySectionRelation?.backgroundOptions?.backgroundModule?.modules?.map((x) => ({
  //       background: true,
  //       ...x
  //     })),
  //     ...scrollySectionRelation?.scrollyContentModules?.modules.map((x) => ({
  //       background: false,
  //       ...x
  //     }))
  //   ])
  // }, [])

  return (
    <Box id={sectionID} backgroundColor={backgroundColor}>
      <ScrollyModulesLoop
        modules={[
          ...scrollySectionRelation?.backgroundOptions?.backgroundModule?.modules?.map((x) => ({
            background: true,
            ...x
          })),
          ...scrollySectionRelation?.scrollyContentModules?.modules.map((x) => ({
            background: false,
            ...x
          }))
        ]}
        sectionID={sectionID}
      />
      <Box id={`${sectionID}-end`} />
    </Box>
  )
}

export default ScrollySectionModule

export const query = graphql`
  fragment bgOptions on SanitySectionBackgroundOptions {
    color
    backgroundModule {
      _type
      modules {
        ...ScrollyBackgroundContentModules
      }
    }
  }

  fragment moduleScrollySection on SanityModuleScrollySection {
    scrollySectionRelation {
      _type
      _id
      title
      backgroundOptions {
        color
        backgroundModule {
          _type
          modules {
            ...ScrollyBackgroundContentModules
          }
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
            color
            backgroundModule {
              _type
              modules {
                ...ScrollyBackgroundContentModules
              }
            }
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
