import React, { FC, useEffect } from 'react'
import {
  SanityScrollyModuleRichText,
  SanityScrollyModuleImage,
  SanityScrollyModuleSpacer,
  SanityScrollyContentModules,
  SanityModuleScrollySection
} from 'web/types/graphql-types'
import ScrollyModuleContainer from '@/containers/ScrollyModuleContainer'
import RichText from './RichText'
import SpacerModule from './Spacer'
import ImageModule from './Image'
import ScrollySectionModule from './ScrollySection'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'

const modulesMap = {
  scrollyModuleRichText: (props: SanityScrollyModuleRichText) => <RichText {...props} />,
  scrollyModuleImage: (props: SanityScrollyModuleImage) => <ImageModule {...props} />,
  scrollyModuleSpacer: (props: SanityScrollyModuleSpacer) => <SpacerModule {...props} />,
  moduleScrollySection: (props: SanityModuleScrollySection) => <ScrollySectionModule {...props} />,
  fragment: <div />
}

const ScrollyModuleLoop: FC<SanityScrollyContentModules> = (props) => {
  const { modules } = props

  useEffect(() => {}, [])

  return (
    <Box height="100%">
      {modules?.map((module) => {
        if (module?._type) {
          return (
            <ScrollyModuleContainer
              scrollOptions={module.options?.scrollOptions}
              layoutOptions={module.options?.layoutOptions}
              anchor={module._key || undefined}
            >
              {modulesMap[module?._type]({ key: module?._key, ...module })}
            </ScrollyModuleContainer>
          )
        } else return <div />
      })}
    </Box>
  )
}

export default ScrollyModuleLoop

export const query = graphql`
  fragment ScrollyContentModules on SanityModuleScrollySectionOrScrollyModuleImageOrScrollyModuleRichTextOrScrollyModuleSpacer {
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
