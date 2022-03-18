import React, { FC, useEffect } from 'react'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { moduleWidth } from '@/styles/theme'
import { ScrollyModuleDefaultFields } from 'web/types/custom-graphql-types'

gsap.registerPlugin(ScrollTrigger)

interface ModuleContainerProps extends ScrollyModuleDefaultFields {
  anchor?: string
  sectionID?: string
  background?: boolean
}

const getStartPosition = (position?: 'center' | 'top' | 'bottom') => {
  if (!position || position === 'center') return 'center center'
  else if (position === 'top') return 'top top+=10%'
  else return 'top bottom-=10%'
}

const getEndPosition = (distance?: number, position?: 'center' | 'top' | 'bottom') => {
  const pos1 = distance || 0
  if (!position || position === 'center') return `bottom+=${pos1} center`
  else if (position === 'top') return `bottom+=${pos1} top+=10%`
  else return `bottom+=${pos1} bottom-=10%`
}

const ModuleContainer: FC<ModuleContainerProps> = (props) => {
  const { children, scrollOptions, layoutOptions, anchor, sectionID, background } = props

  const scrollTriggerOptions: ScrollTrigger.Vars = {}

  if (background) {
    scrollTriggerOptions.trigger = `#${anchor}`
    scrollTriggerOptions.endTrigger = `#${sectionID}-end`
    scrollTriggerOptions.pin = true
    scrollTriggerOptions.pinSpacing = false
    scrollTriggerOptions.markers = false
    scrollTriggerOptions.start = () => `#${sectionID} top`
    scrollTriggerOptions.end = () => 'bottom bottom'
    scrollTriggerOptions.id = `${anchor}-trigger`
  } else {
    if (scrollOptions?.pinned) {
      scrollTriggerOptions.trigger = `#${anchor}`
      scrollTriggerOptions.pin = scrollOptions?.pinned || false
      scrollTriggerOptions.pinSpacing = false
      scrollTriggerOptions.markers = scrollOptions?.markers || false
      scrollTriggerOptions.start = () => getStartPosition(scrollOptions.pinnedPosition)
      scrollTriggerOptions.end = () =>
        getEndPosition(scrollOptions.pinnedDistance, scrollOptions.pinnedPosition)
      scrollTriggerOptions.id = `${anchor}-trigger`
    }
    if (scrollOptions?.fadeIn) {
      scrollTriggerOptions.toggleActions = 'play reverse play reverse'
      scrollTriggerOptions.snap = 1
    }
  }

  useEffect(() => {
    if (scrollOptions?.fadeIn) {
      gsap.to(`#${anchor}`, {
        opacity: 1,
        scrollTrigger: scrollTriggerOptions
      })
    } else {
      ScrollTrigger.create(scrollTriggerOptions)
    }
    scrollOptions?.pinSpacing && ScrollTrigger.refresh()

    return () => {
      if (background) ScrollTrigger.getById(`#${sectionID}`).kill()
      else scrollOptions?.pinned && ScrollTrigger.getById(`#${anchor}`).kill()
    }
  }, [])

  return (
    <Box
      id={`${anchor}`}
      className="scrollyContainer"
      display="flex"
      flexDirection="column"
      alignItems={layoutOptions?.horizontalPosition || 'center'}
      justifyContent={layoutOptions?.height && 'center'}
      style={scrollOptions?.fadeIn ? { opacity: 0 } : undefined}
      height={layoutOptions?.height ? `${layoutOptions.height}vh` : undefined}
    >
      <Box width={layoutOptions?.width && `${moduleWidth[layoutOptions.width] * 100}%`}>
        {children}
      </Box>
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
      horizontalPosition
      height
      width
    }
  }
`
