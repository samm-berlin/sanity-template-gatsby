import React, { FC, useRef } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import VideoPlayer from '@/atoms/VideoJS'
import { ScrollyModuleMuxVideo } from 'web/types/custom-graphql-types'

interface ScrollyMuxVideoProps extends ScrollyModuleMuxVideo {
  anchor: string
  background: boolean
  sectionID: string
  scrubbed: boolean
}

const ScrollyMuxVideo: FC<ScrollyMuxVideoProps> = (props) => {
  const { autoplay, anchor, background, controls, loop, muted, scrubbed, sectionID, video } = props
  const videoRef = useRef<HTMLVideoElement>(null)

  const videoJsOptions = {
    autoplay: autoplay,
    controls: controls,
    loop: loop,
    muted: muted,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: video?.asset?.playbackId,
        type: 'video/mux'
      }
    ]
  }

  return (
    <Box
      position={background ? 'absolute' : 'relative'}
      height={background ? '100vh' : '100%'}
      width={background ? '100%' : undefined}
    >
      {video?.asset && <VideoPlayer videoRef={videoRef} options={videoJsOptions}></VideoPlayer>}
    </Box>
  )
}

export default ScrollyMuxVideo

export const query = graphql`
  fragment scrollyModuleVideoData on SanityScrollyModuleMuxVideo {
    _key
    _type
    autoplay
    controls
    loop
    muted
    video {
      _key
      _type
      asset {
        _key
        _type
        status
        assetId
        playbackId
        filename
        thumbTime
      }
    }
    aspectRatio {
      _key
      _type
      x
      y
    }
  }
`
