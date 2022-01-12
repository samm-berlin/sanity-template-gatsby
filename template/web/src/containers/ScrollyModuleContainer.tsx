import React, { FC, useEffect } from 'react'
import Box from '@/atoms/Box'
import { graphql } from 'gatsby'
import { SanityScrollyModuleDefaultFields } from 'web/types/graphql-types'

const ModuleContainer: FC<SanityScrollyModuleDefaultFields> = (props) => {
  const { children, scrollOptions, layoutOptions } = props
  useEffect(() => {
    console.log(props)
  }, [])
  return <Box height={'100vh'}>{children}</Box>
}

export default ModuleContainer

export const query = graphql`
  fragment ScrollModuleOptions on SanityScrollyModuleDefaultFields {
    scrollOptions {
      flow
      pinnedDistance
      pinnedOffset
    }
    layoutOptions {
      alignment
    }
  }
`
