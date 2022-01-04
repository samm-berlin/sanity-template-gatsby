import React, { FC, useMemo, useState } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import ReactPlayer from 'react-player'
import {
  SanityImage as SanityImageType,
  SanityModuleDefaultFields,
  SanityVideoEmbed
} from 'web/types/graphql-types'

export interface VideoEmbedModuleProps {
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

const VideoEmbedModule: FC<VideoEmbedModuleProps> = ({
  video,
  autoplay,
  controls,
  loop,
  muted,
  title,
  posterFrame,
  aspectRatio
}) => {
  const [playing, SetPlaying] = useState(autoplay)

  return (
    <>
      {title && (
        <Text as="h2" variant="head" mb={1}>
          {title}
        </Text>
      )}
      <Box pt={`${(aspectRatio.y / aspectRatio.x) * 100}%`} position="relative">
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
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        )}
      </Box>
    </>
  )
}

export default VideoEmbedModule

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

// fragment Image on SanityImage {
//   hotspot {
//     height
//     width
//     x
//     y
//   }
//   crop {
//     bottom
//     left
//     right
//     top
//   }
//   asset {
//     _id
//     altText
//   }
// }

// fragment ImageWithPreview on SanityImage {
//   ...Image
//   asset {
//     metadata {
//       preview: lqip
//     }
//   }
