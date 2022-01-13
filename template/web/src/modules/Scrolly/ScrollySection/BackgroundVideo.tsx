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

  const videoRef = useRef(null)

  const [playing, setPlaying] = useState(autoplay)

  const width = aspectRatio.x / aspectRatio.y
  const height = aspectRatio.y / aspectRatio.x

  useEffect(() => {
    console.log(document?.querySelector(`.s${sectionID}`)?.offsetHeight)
    const st = ScrollTrigger.create({
      trigger: videoRef?.current?.wrapper,
      start: 'bottom bottom',
      end: () => `${document?.querySelector(`.s${sectionID}`)?.offsetHeight} bottom`,
      markers: true,
      onToggle: (self) => {
        console.log(self, playing, videoRef.current.wrapper.style.opacity)
        setPlaying(!playing)
        if (videoRef.current.wrapper.style.opacity === '1')
          videoRef.current.wrapper.style.opacity = 0
        else videoRef.current.wrapper.style.opacity = 1
      },
      onUpdate: (self) => {
        console.log(self.progress)
      }, // scrub
      pin: true,
      pinSpacing: true
    })
    return () => {
      st.kill()
    }
  }, [])

  return (
    <Box width="100%" height="100vh">
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
            opacity: '0'
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
  fragment moduleVideoEmbedData on SanityModuleVideoEmbed {
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
