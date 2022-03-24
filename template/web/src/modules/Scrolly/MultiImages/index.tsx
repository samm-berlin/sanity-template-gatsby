import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import SanityImage from '@/atoms/SanityImage'
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  Scalars
} from 'web/types/graphql-types'
import { ScrollyModuleDefaultFields } from 'web/types/custom-graphql-types'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export type ImageField = {
  _key?: string
  _type?: string
  asset?: SanityImageAsset
  hotspot?: SanityImageHotspot
  crop?: SanityImageCrop
  _rawAsset?: Scalars['JSON']
  _rawHotspot?: Scalars['JSON']
  _rawCrop?: Scalars['JSON']
}

export type ScrollyModuleMultiImages = {
  _key: string
  _type: string
  images: ImageField[]
  transitionType: string
  transitionTime: number // between 0 and 100
}

export interface ScrollyModuleMultiImagesProps extends ScrollyModuleMultiImages {
  background: boolean
  sectionID: string
  options: ScrollyModuleDefaultFields
}

const MultiImages: FC<ScrollyModuleMultiImagesProps> = (props) => {
  const { images, transitionType, transitionTime, sectionID, background } = props

  useEffect(() => {
    console.log(props)
  }, [])

  const className = background ? `${sectionID}-multi-images` : `${sectionID}-multi-images`

  useEffect(() => {
    gsap.utils.toArray(`.${className}`).forEach((module) => {
      const N_images = images.length
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${sectionID}`,
          endTrigger: `#${sectionID}-end`,
          start: 'top top',
          end: 'end top',
          // end: () => '+=' + module.offsetWidth,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          markers: true
        },
        defaults: { ease: 'none' }
      })

      const t = transitionTime / 100
      const y = (1 - (N_images - 1) * t) / N_images

      images.forEach((image, index) => {
        console.log(index)
        if (index !== 0) {
          tl.fromTo(
            module.querySelector(`.i${image._key}`),
            { xPercent: -100, x: 0 },
            { xPercent: 0, duration: t },
            index === 1 ? 0 : `>+${y}`
          )
          tl.fromTo(
            module.querySelector(`.i${image._key} .child`),
            { xPercent: 100, x: 0 },
            { xPercent: 0, duration: t },
            '<'
          )
        }
      })
    })
  }, [])

  return (
    <Box
      className={className}
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : '100%'}
      width="100%"
      overflowX="hidden"
    >
      {images.map((i, index) => (
        <Box
          key={i._key}
          className={`i${i._key}`}
          position="absolute"
          overflow="hidden"
          top="0"
          height="100%"
          width="100%"
          style={index ? { transform: 'translate(-100%, 0px)' } : {}}
        >
          <Box className={'child'} height="100%" width="100%">
            <SanityImage image={i} loading="eager" objectFit={background ? 'cover' : 'contain'} />
          </Box>
        </Box>
      ))}
      <button
        className="scrollbutton"
        onClick={() => {
          ScrollTrigger.refresh()
        }}
      />
    </Box>
  )
}

export default MultiImages

export const query = graphql`
  fragment scrollyModuleMultiImagesData on SanityScrollyModuleMultiImages {
    images {
      _key
      _type
      ...ImageWithPreview
    }
    transitionType
    transitionTime
  }
`
