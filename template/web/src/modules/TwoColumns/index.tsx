import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { SanityModuleTwoColumn } from 'web/types/graphql-types'
import theme from '@/styles/theme'
import Box from '@/atoms/Box'
import ModuleLoop from '..'

const TwoColModule: FC<SanityModuleTwoColumn> = ({ firstColumn, secondColumn, ...props }) =>
  <Box display="flex" flexDirection="row" flexWrap="wrap" height="100%">
    <Box width="50%" minWidth={theme.minComponentWidth} flexGrow={1}>
      <ModuleLoop modules={firstColumn?.modules} />
    </Box>
    <Box width="50%" minWidth={theme.minComponentWidth} flexGrow={1}>
      <ModuleLoop modules={secondColumn?.modules} />
    </Box>
  </Box>

export default TwoColModule
