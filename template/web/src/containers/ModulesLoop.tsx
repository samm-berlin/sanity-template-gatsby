/* eslint-disable react/display-name */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import {
  SanityContentModules,
  SanityModuleImage,
  SanityModuleImageTwoColumns,
  SanityModuleRichText,
  SanityModuleHero,
  SanityModuleHeroSlider,
  SanityModuleFurtherReading,
  SanityModuleIntroGallery
} from '../../graphql-types'
import { Box } from '@material-ui/core'
import ImageModule from '@/modules/Image'
import ImageTwoColumnsModule from '@/modules/ImageTwoColumns'
import RichText from '@/modules/RichText'
import Hero from '@/modules/Hero'
import HeroSlider from '@/modules/HeroSlider'
import FurtherReading from '@/modules/FurtherReading'
import IntroGallery from '@/modules/IntroGallery'

const modulesMap = {
  moduleRichText: (props: SanityModuleRichText) => <RichText {...props} />,
  moduleImage: (props: SanityModuleImage) => <ImageModule {...props} />,
  moduleImageTwoColumns: (props: SanityModuleImageTwoColumns) => (
    <ImageTwoColumnsModule {...props} />
  ),
  moduleHero: (props: SanityModuleHero) => <Hero {...props} />,
  moduleHeroSlider: (props: SanityModuleHeroSlider) => (
    <HeroSlider {...props} />
  ),
  moduleIntroGallery: (props: SanityModuleIntroGallery) => (
    <IntroGallery {...props}></IntroGallery>
  ),
  moduleFurtherReading: (props: SanityModuleFurtherReading) => (
    <FurtherReading {...props} />
  ),
  fragment: <div />
}

const ModuleLoop: FC<SanityContentModules> = ({ modules }) => (
  <Box>
    {modules?.map(module => {
      if (module?._type)
        return modulesMap[module?._type]({ key: module?._key, ...module })
      else return <div />
    })}
  </Box>
)

// const ModuleLoop: FC<SanityContentModules> = ({ modules }) => {
//   if (modules) {
//     return modules?.map(module =>
//       modulesMap[module?._type || 'fragment'] ? (
//         modulesMap[module?._type || 'fragment']({
//           key: module?._key,
//           ...module
//         })
//       ) : (
//         <div />
//       )
//     )
//   } else return null
// }

export default ModuleLoop

export const query = graphql`
  fragment contentModulesData on SanityContentModules {
    modules {
      ... on SanityModuleRichText {
        _key
        _type
        ...moduleRichTextData
      }
      ... on SanityModuleImageTwoColumns {
        _key
        _type
        ...moduleImageTwoColumnsData
      }
      ... on SanityModuleImage {
        _key
        _type
        ...moduleImageData
      }
      ... on SanityModuleHero {
        _key
        _type
        ...moduleHeroData
      }
      ... on SanityModuleFurtherReading {
        _key
        _type
        ...moduleFurtherReadingData
      }
      ... on SanityModuleHeroSlider {
        _key
        _type
        ...moduleHeroSliderData
      }
      ... on SanityModuleIntroGallery {
        _key
        _type
        ...moduleIntroGalleryData
      }
    }
  }
`
