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
  sectionID?: string
  anchor: string
  _key?: string
  _type?: string
  options?: SanityModuleDefaultFields
  title?: string
  video?: SanityVideoEmbed
  posterFrame?: SanityImageType
  muted?: boolean
  controls?: boolean
  loop?: boolean
  aspectRatio: { x: number; y: number }
  background: boolean
}

const ScrollyVideoEmbed: FC<ScrollySectionsBackgroundProps> = (props) => {
  const { sectionID, video, controls, loop, posterFrame, background } = props

  const videoRef = useRef<React.LegacyRef<ReactPlayer>>(null)

  const [playing, setPlaying] = useState(false)

  // const width = aspectRatio.x / aspectRatio.y
  // const height = aspectRatio.y / aspectRatio.x

  useEffect(() => {
    background &&
      ScrollTrigger.create({
        trigger: `#${sectionID}`,
        onEnter: () => {
          setPlaying(true)
          console.log(playing)
        },
        onLeaveBack: () => setPlaying(false),
        onLeave: () => {
          setPlaying(false)
          console.log(playing)
        },
        onEnterBack: () => setPlaying(true),
        start: () => 'top top',
        end: () => 'bottom bottom',
        markers: true
      })
  }, [])

  return (
    <Box
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : '100%'}
      width={background ? '100%' : undefined}
    >
      {video?.url && (
        <ReactPlayer
          ref={videoRef}
          url={video?.url}
          controls={controls}
          loop={loop}
          muted={false}
          playsinline={true}
          playing={playing}
          light={posterFrame?.asset?.url ? posterFrame?.asset?.url : false}
          height={background ? '100vh' : '100%'}
          width="100%"
          style={{
            objectFit: 'contain',
            opacity: '1'
          }}
        ></ReactPlayer>
      )}
    </Box>
  )
}

export default ScrollyVideoEmbed

export const query = graphql`
  fragment scrollyModuleVideoEmbedData on SanityScrollyModuleVideoEmbed {
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
