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
  _key?: string
  _type?: string
  options?: SanityModuleDefaultFields
  title?: string
  video?: SanityVideoEmbed
  posterFrame?: SanityImageType
  muted?: boolean
  controls?: boolean
  loop?: boolean
  autoplay?: boolean
  aspectRatio: { x: number; y: number }
}

const ScrollySectionBackground: FC<ScrollySectionsBackgroundProps> = (props) => {
  const {
    sectionID,
    _key,
    video,
    autoplay,
    controls,
    loop,
    muted,
    title,
    posterFrame,
    aspectRatio,
    children
  } = props

  const videoRef = useRef<React.LegacyRef<ReactPlayer>>(null)

  const [playing, setPlaying] = useState(autoplay)

  const width = aspectRatio.x / aspectRatio.y
  const height = aspectRatio.y / aspectRatio.x

  // pinned --> distance
  // pinned --> section

  useEffect(() => {}, [])

  return (
    <Box width="100%" height="100vh" className="test1234">
      {video?.url && (
        <ReactPlayer
          ref={videoRef}
          url={video.url}
          controls={controls}
          loop={loop}
          muted={muted || autoplay}
          playsinline={true}
          playing={playing}
          light={autoplay ? false : posterFrame?.asset?.url ? posterFrame?.asset?.url : false}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            opacity: '1'
          }}
        >
          {children}
        </ReactPlayer>
      )}
    </Box>
  )
}

export default ScrollySectionBackground

export const query = graphql`
  fragment scrollyModuleVideoEmbedData on SanityScrollyModuleVideoEmbed {
    _key
    _type
    autoplay
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
