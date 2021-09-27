/* eslint-disable react/display-name */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import {
  SanityContentModules,
  SanityModuleImage,
  SanityModuleRichText,
} from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import ImageModule from '@/modules/Image'
import RichText from '@/modules/RichText'

const modulesMap = {
  moduleRichText: (props: SanityModuleRichText) => <RichText {...props} />,
  moduleImage: (props: SanityModuleImage) => <ImageModule {...props} />,
  fragment: <div />
}

const ModuleLoop: FC<SanityContentModules> = ({ modules }) => (
  <Box>
    {modules?.map(module => {
      console.log(module);
      if (module?._type)
        return modulesMap[module?._type]({ key: module?._key, ...module })
      else return <div />
    })}
  </Box>
)

export default ModuleLoop

export const query = graphql`
  fragment contentModulesData on SanityContentModules {
    modules {
      ... on SanityModuleRichText {
        _key
        _type
        ...moduleRichTextData
      }
      ... on SanityModuleImage {
        _key
        _type
        ...moduleImageData
      }

    }
  }
`
