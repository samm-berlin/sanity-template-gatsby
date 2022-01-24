import React, { FC, useEffect } from 'react'
import {
  SanityScrollyModuleRichText,
  SanityScrollyModuleImage,
  SanityScrollyModuleVideoEmbed,
  SanityScrollyModuleSpacer,
  SanityScrollyContentModules,
  SanityModuleScrollySection
} from 'web/types/graphql-types'
import ScrollyModuleContainer from '@/containers/ScrollyModuleContainer'
import RichText from './RichText'
import SpacerModule from './Spacer'
import ImageModule from './Image'
import VideoModule from './VideoEmbed'
import ScrollySectionModule from './ScrollySection'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'

const modulesMap = {
  scrollyModuleRichText: (props: SanityScrollyModuleRichText) => <RichText {...props} />,
  scrollyModuleImage: (props: SanityScrollyModuleImage) => <ImageModule {...props} />,
  scrollyModuleVideoEmbed: (props: SanityScrollyModuleVideoEmbed) => <VideoModule {...props} />,
  scrollyModuleSpacer: (props: SanityScrollyModuleSpacer) => <SpacerModule {...props} />,
  moduleScrollySection: (props: SanityModuleScrollySection) => <ScrollySectionModule {...props} />,
  fragment: <div />
}

interface ScrollyModulesLoopProps extends SanityScrollyContentModules {
  sectionID: string
}

const ScrollyModuleLoop: FC<ScrollyModulesLoopProps> = (props) => {
  const { modules, sectionID } = props

  return (
    <Box>
      {modules?.map((module) => {
        if (module?._type) {
          return (
            <ScrollyModuleContainer
              scrollOptions={module.options?.scrollOptions}
              layoutOptions={module.options?.layoutOptions}
              anchor={`a${module._key}` || undefined}
              sectionID={sectionID}
              background={module.background}
            >
              {modulesMap[module?._type]({
                key: module?._key,
                ...module,
                anchor: `a${module._key}` || '',
                sectionID: sectionID,
                background: module.background
              })}
            </ScrollyModuleContainer>
          )
        } else return <div />
      })}
    </Box>
  )
}

export default ScrollyModuleLoop

export const query = graphql`
  fragment ScrollyBackgroundContentModules on SanityScrollyModuleImageOrScrollyModuleVideoEmbed {
    ... on SanityScrollyModuleImage {
      _key
      _type
      ...scrollyModuleImageData
      options {
        ...ScrollModuleOptions
      }
    }
    ... on SanityScrollyModuleVideoEmbed {
      _key
      _type
      ...scrollyModuleVideoEmbedData
      options {
        ...ScrollModuleOptions
      }
    }
  }

  fragment ScrollyContentModules on SanityModuleScrollySectionOrScrollyModuleImageOrScrollyModuleRichTextOrScrollyModuleSpacerOrScrollyModuleVideoEmbed {
    ... on SanityScrollyModuleRichText {
      _key
      _type
      ...scrollyModuleRichTextData
      options {
        ...ScrollModuleOptions
      }
    }

    ... on SanityScrollyModuleImage {
      _key
      _type
      ...scrollyModuleImageData
      options {
        ...ScrollModuleOptions
      }
    }

    ... on SanityScrollyModuleVideoEmbed {
      _key
      _type
      ...scrollyModuleVideoEmbedData
      options {
        ...ScrollModuleOptions
      }
    }

    ... on SanityScrollyModuleSpacer {
      _key
      _type
      ...scrollyModuleSpacerData
      options {
        ...ScrollModuleOptions
      }
    }
  }

  fragment ScrollyContentModulesData on SanityScrollyContentModules {
    modules {
      ...ScrollyContentModules
    }
  }
`
