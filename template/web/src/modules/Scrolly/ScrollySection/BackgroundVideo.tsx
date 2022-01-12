import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import React, { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import {
  SanityModuleDefaultFields,
  SanityVideoEmbed,
  SanityImageType
} from 'web/types/graphql-types'

interface ScrollySectionsBackgroundProps {
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
  const { video, autoplay, controls, loop, muted, title, posterFrame, aspectRatio } = props

  const [playing, setPlaying] = useState(autoplay)

  const width = aspectRatio.x / aspectRatio.y
  const height = aspectRatio.y / aspectRatio.x

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <Box
      position="absolute"
      minWidth={`calc(100vh * ${width})`}
      minHeight={`calc(100vw * ${height})`}
      width="100%"
      height="100%"
    >
      {video?.url && (
        <ReactPlayer
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
            objectFit: 'cover'
          }}
        />
      )}
    </Box>
  )
}

export default ScrollySectionBackground

export const query = graphql`
  fragment moduleVideoEmbedData on SanityModuleVideoEmbed {
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
