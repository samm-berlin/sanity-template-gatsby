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
  autoplay?: boolean
  aspectRatio: { x: number; y: number }
  background: boolean
}

const ScrollySectionBackground: FC<ScrollySectionsBackgroundProps> = (props) => {
  const {
    sectionID,
    anchor,
    _key,
    video,
    autoplay,
    controls,
    loop,
    muted,
    title,
    posterFrame,
    aspectRatio,
    background
  } = props

  const videoRef = useRef<React.LegacyRef<ReactPlayer>>(null)
  const videoref = useRef(null)

  const [playing, setPlaying] = useState(false)

  const width = aspectRatio.x / aspectRatio.y
  const height = aspectRatio.y / aspectRatio.x

  // pinned --> distance
  // pinned --> section

  /*
  useEffect(() => {
    console.log(videoRef.current, anchor)
    console.log(ScrollTrigger.getById(`${anchor}-trigger`))
    ScrollTrigger.create({
      trigger: `#${anchor}`,
      endTrigger: `#${sectionID}`,
      // onEnter: () => setPlaying(true),
      // onLeaveBack: () => setPlaying(false),
      // onLeave: () => setPlaying(false),
      // onEnterBack: () => setPlaying(true),
      onUpdate: ({ progress }) => {
        videoRef?.current?.seekTo(progress)
        setPlaying(false)
      },
      start: () => `#${sectionID} top`,
      end: () => 'bottom bottom',
      markers: true
    })
  }, []) */

  useEffect(() => {
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
      console.log(videoref.current)
      console.log(videoref?.current?.duration)
      tl.fromTo(
        videoref.current,
        { currentTime: 0 },
        { currentTime: videoref?.current?.duration || 1 }
      )
    }, 1000)
  }, [])

  return (
    <Box
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : undefined}
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
        /*
        <ReactPlayer
          ref={videoRef}
          url={'/the_tent_(2021)-excerpts-360p.mp4'}
          controls={controls}
          loop={loop}
          muted={muted || autoplay}
          playsinline={true}
          playing={playing}
          light={autoplay ? false : posterFrame?.asset?.url ? posterFrame?.asset?.url : false}
          width="100%"
          height="100vh"
          style={{
            objectFit: 'cover',
            opacity: '1'
          }}
        ></ReactPlayer> */
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
