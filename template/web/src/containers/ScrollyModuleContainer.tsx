import React, { FC, useEffect } from 'react'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type SanityScrollOptions = {
  _key?: string
  _type?: string
  flow?: 'regular' | 'pinned'
  pinnedDistance?: number
  pinnedOffset?: number
  pinSpacing?: boolean
}

type SanityScrollyModuleDefaultFields = {
  _key?: string
  _type?: string
  scrollOptions?: SanityScrollOptions
  layoutOptions?: SanityLayoutOptions
}

type SanityLayoutOptions = {
  _key?: string
  _type?: string
  alignment?: string
}

interface ModuleContainerProps extends SanityScrollyModuleDefaultFields {
  anchor?: string
  sectionID?: string
  background?: boolean
}

const getStartPosition = (position?: 'center' | 'top' | 'bottom') => {
  if (!position || position === 'center') return 'center center'
  else if (position === 'top') return 'top top+=200'
  else return 'top bottom-=200'
}

const getEndPosition = (distance?: number, position?: 'center' | 'top' | 'bottom') => {
  const pos1 = distance || 0
  if (!position || position === 'center') return `bottom+=${pos1} center`
  else if (position === 'top') return `bottom+=${pos1} top+=200`
  else return `bottom+=${pos1} top+=200`
}

const ModuleContainer: FC<ModuleContainerProps> = (props) => {
  const { children, scrollOptions, layoutOptions, anchor, sectionID, background } = props

  const scrollTriggerOptions: ScrollTrigger.Vars = {}

  if (background) {
    scrollTriggerOptions.trigger = `#a${anchor}`
    scrollTriggerOptions.endTrigger = `#${sectionID}-end`
    scrollTriggerOptions.pin = true
    scrollTriggerOptions.pinSpacing = false
    scrollTriggerOptions.markers = true
    scrollTriggerOptions.start = () => `#${sectionID} top`
    scrollTriggerOptions.end = () => 'bottom bottom'
    scrollTriggerOptions.refreshPriority = 5
  } else {
    if (scrollOptions?.pinned) {
      scrollTriggerOptions.refreshPriority = 10
      scrollTriggerOptions.trigger = `#a${anchor}`
      scrollTriggerOptions.pin = scrollOptions?.pinned || false
      scrollTriggerOptions.pinSpacing = scrollOptions?.pinSpacing || false
      scrollTriggerOptions.markers = scrollOptions?.markers || false
      scrollTriggerOptions.start = getStartPosition(scrollOptions.pinnedPosition)
      scrollTriggerOptions.end = getEndPosition(
        scrollOptions.pinnedDistance,
        scrollOptions.pinnedPosition
      )
    }
    if (scrollOptions?.fadeIn) {
      scrollTriggerOptions.toggleActions = 'play reverse play reverse'
    }
  }

  useEffect(() => {
    // console.log(`#${sectionID} top`)
    // console.log(props, scrollTriggerOptions)
    ScrollTrigger.create(scrollTriggerOptions)
    scrollOptions?.pinSpacing && ScrollTrigger.refresh()
    return () => {
      if (background) ScrollTrigger.getById(`#${sectionID}`).kill()
      else scrollOptions?.pinned && ScrollTrigger.getById(`#a${anchor}`).kill()
    }
  }, [])

  /*
  useEffect(() => {
    if (scrollOptions?.flow === 'pinned') {
      const startTrigger =
        Number.isFinite(scrollOptions?.pinnedOffset) &&
        `top${scrollOptions?.pinnedOffset < 0 ? '-' : '+'}=${Math.abs(scrollOptions?.pinnedOffset)}`

      ScrollTrigger.create({
        trigger: document.querySelector(`#a${anchor}`),
        start: `${startTrigger || 'top'} center`,
        markers: false,
        end: `top+=${scrollOptions.pinnedDistance} center`,
        pin: true,

      })
    }

    return () => {
      ScrollTrigger.getById(`#a${anchor}`).kill()
    }
  }, []) */

  return (
    <Box
      id={`a${anchor}`}
      className="scrollyContainer"
      display="flex"
      flexDirection="column"
      alignItems={layoutOptions?.alignment || 'center'}
      justifyContent={layoutOptions?.height && 'center'}
      style={scrollOptions?.fadeIn ? { opacity: 0, transition: 'opacity 2s' } : undefined}
      height={layoutOptions?.height ? `${layoutOptions.height}vh` : undefined}
    >
      {children}
    </Box>
  )
}

export default ModuleContainer

export const query = graphql`
  fragment ScrollModuleOptions on SanityScrollyModuleDefaultFields {
    scrollOptions {
      pinned
      pinnedDistance
      pinnedPosition
      pinSpacing
      fadeIn
      markers
    }
    layoutOptions {
      alignment
      height
    }
  }
`
