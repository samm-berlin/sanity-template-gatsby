import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleSpacer } from 'web/types/graphql-types'
import Box from '@/atoms/Box'

const SpacerModule: FC<SanityModuleSpacer> = ({ height }) => <Box height={`${height}vh`}></Box>

export default SpacerModule

export const query = graphql`
  fragment moduleSpacerData on SanityModuleSpacer {
    height
  }
`
