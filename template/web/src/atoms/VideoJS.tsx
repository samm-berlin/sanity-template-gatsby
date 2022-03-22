import React, { FC, useRef, useEffect, RefObject } from 'react'
import videojs from '@mux/videojs-kit'
import '@mux/videojs-kit/dist/index.css'
import { VideoJsPlayerOptions } from 'video.js'
import vjs from 'video.js'

type VideoJSProps = {
  options?: VideoJsPlayerOptions
  onReady?: (player: vjs.Player) => void
  videoRef: RefObject<HTMLVideoElement>
}

export const VideoJS: FC<VideoJSProps> = (props) => {
  const playerRef = useRef<vjs.Player>()
  const { options, onReady, videoRef } = props

  useEffect(() => {
    console.log(options)
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready')
        onReady && onReady(player)
      }))
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current
      // player.autoplay(options.autoplay)
      // player.src(options.sources)
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = undefined
      }
    }
  }, [playerRef])

  return (
    <video ref={videoRef} id="mux-default" className="video-js  vjs-16-9  vjs-big-play-centered" />
  )
}

export default VideoJS
