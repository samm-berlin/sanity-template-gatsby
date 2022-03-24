import React, { FC, useEffect } from 'react'
import {
  SanityScrollyModuleRichText,
  SanityScrollyModuleImage,
  SanityScrollyModuleVideoEmbed,
  SanityScrollyModuleVideoUploaded,
  SanityScrollyModuleSpacer,
  SanityScrollyContentModules,
  SanityModuleScrollySection
} from 'web/types/graphql-types'
import ScrollyModuleContainer from '@/containers/ScrollyModuleContainer'
import RichText from './RichText'
import SpacerModule from './Spacer'
import ImageModule, { ImageModuleProps } from './Image'
import MultiImagesModule, { ScrollyModuleMultiImagesProps } from './MultiImages'
import VideoEmbedModule from './VideoEmbed'
import VideoUploadedModule from './VideoUploaded'
import ScrollySectionModule from './ScrollySection'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'

const modulesMap = {
  scrollyModuleRichText: (props: SanityScrollyModuleRichText) => <RichText {...props} />,
  scrollyModuleImage: (props: ImageModuleProps) => <ImageModule {...props} />,
  scrollyModuleMultiImages: (props: ScrollyModuleMultiImagesProps) => (
    <MultiImagesModule {...props} />
  ),
  scrollyModuleVideoEmbed: (props: SanityScrollyModuleVideoEmbed) => (
    <VideoEmbedModule {...props} />
  ),
  scrollyModuleVideoUploaded: (props: SanityScrollyModuleVideoUploaded) => (
    <VideoUploadedModule {...props} />
  ),
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
              scrollOptions={module.options.scrollOptions}
              layoutOptions={module.options.layoutOptions}
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
  fragment ScrollyBackgroundContentModules on SanityScrollyModuleImageOrScrollyModuleMultiImagesOrScrollyModuleVideoEmbedOrScrollyModuleVideoUploaded {
    ... on SanityScrollyModuleImage {
      _key
      _type
      ...scrollyModuleImageData
      options {
        ...ScrollModuleOptions
      }
    }
    ... on SanityScrollyModuleMultiImages {
      _key
      _type
      ...scrollyModuleMultiImagesData
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

    ... on SanityScrollyModuleVideoUploaded {
      _key
      _type
      ...scrollyModuleVideoUploadedData
      options {
        ...ScrollModuleOptions
      }
    }
  }

  fragment ScrollyContentModules on SanityModuleScrollySectionOrScrollyModuleImageOrScrollyModuleMultiImagesOrScrollyModuleRichTextOrScrollyModuleSpacerOrScrollyModuleVideoEmbedOrScrollyModuleVideoUploaded {
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

    ... on SanityScrollyModuleMultiImages {
      _key
      _type
      ...scrollyModuleMultiImagesData
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

    ... on SanityScrollyModuleVideoUploaded {
      _key
      _type
      ...scrollyModuleVideoUploadedData
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
