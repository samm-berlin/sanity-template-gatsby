import React, { FC, useEffect, useState, useRef } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import ReactPlayer from 'react-player'

import {
  SanityModuleDefaultFields,
  SanityVideoEmbed,
  SanityImageType
} from 'web/types/graphql-types'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollySectionsBackgroundProps {
  _key?: string
  _type?: string
  anchor: string
  aspectRatio: { x: number; y: number }
  background: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  options?: SanityModuleDefaultFields
  posterFrame?: SanityImageType
  scrubbed: boolean
  sectionID?: string
  title?: string
  video?: SanityVideoEmbed
}

const ScrollyVideoUploaded: FC<ScrollySectionsBackgroundProps> = (props) => {
  const { anchor, background, scrubbed, sectionID, video } = props

  const videoRef = useRef<React.LegacyRef<ReactPlayer>>(null)
  const videoref = useRef(null)

  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (background) {
      const tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: `#${sectionID}`,
          scrub: true,
          start: 'top top',
          end: 'bottom bottom'
        }
      })

      setTimeout(() => {
        tl.fromTo(
          videoref.current,
          { currentTime: 0 },
          { currentTime: videoref?.current?.duration || 1 }
        )
      }, 1000)
    }
  }, [])

  // TODO: Finish !

  useEffect(() => {
    if (!background) {
      if (scrubbed) {
        ScrollTrigger.create({
          trigger: `#${anchor}`,
          start: 'top top',
          end: 'bottom bottom'
        })
      } else {
        ScrollTrigger.create({
          trigger: `#${anchor}`,
          start: 'top top',
          end: 'bottom bottom'
        })
      }
    }
  }, [])

  return (
    <Box
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : '100%'}
      width={background ? '100%' : undefined}
    >
      {video?.url && (
        <video
          ref={videoref}
          src={video?.url}
          playsInline={true}
          webkit-playsinline="true"
          preload="auto"
          muted={true}
          style={
            background
              ? {
                  objectFit: 'cover',
                  height: '100vh',
                  width: '100%'
                }
              : undefined
          }
        ></video>
      )}
    </Box>
  )
}

export default ScrollyVideoUploaded

export const query = graphql`
  fragment scrollyModuleVideoUploadedData on SanityScrollyModuleVideoUploaded {
    _key
    _type
    controls
    loop
    muted
    title
    video {
      url
    }
    aspectRatio {
      x
      y
    }
    posterFrame {
      asset {
        url
      }
    }
  }
`
