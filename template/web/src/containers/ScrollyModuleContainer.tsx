import React, { FC, useEffect } from 'react'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import { SanityScrollyModuleDefaultFields } from 'web/types/graphql-types'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ModuleContainerProps extends SanityScrollyModuleDefaultFields {
  anchor?: string
}

const ModuleContainer: FC<ModuleContainerProps> = (props) => {
  const { children, scrollOptions, layoutOptions, anchor } = props

  useEffect(() => {
    if (scrollOptions?.flow === 'pinned') {
      console.log(scrollOptions)

      const startTrigger =
        Number.isFinite(scrollOptions?.pinnedOffset) &&
        `top${scrollOptions?.pinnedOffset < 0 ? '-' : '+'}=${Math.abs(scrollOptions?.pinnedOffset)}`

      ScrollTrigger.create({
        trigger: document.querySelector(`#a${anchor}`),
        start: `${startTrigger || 'top'} center`,
        markers: true,
        end: `top+=${scrollOptions.pinnedDistance} center`,
        pin: true,
        pinSpacing: scrollOptions.pinSpacing
      })
    }

    return () => {
      ScrollTrigger.getById(`#a${anchor}`).kill()
    }
  }, [])

  return (
    <Box
      id={`a${anchor}`}
      height={'100%'}
      display="flex"
      flexDirection="column"
      alignItems={layoutOptions?.alignment || 'center'}
    >
      {children}
    </Box>
  )
}

export default ModuleContainer

export const query = graphql`
  fragment ScrollModuleOptions on SanityScrollyModuleDefaultFields {
    scrollOptions {
      flow
      pinnedDistance
      pinnedOffset
      pinSpacing
    }
    layoutOptions {
      alignment
    }
  }
`
