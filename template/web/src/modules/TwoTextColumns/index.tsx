import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import theme from '@/styles/theme'
import Box from '@/atoms/Box'
import RichTextModule from '../RichText'

export type ModuleTwoTextColumns = {
  firstTextColumn: any
  secondTextColumn: any
}

const TwoTextColumnsModule: FC<ModuleTwoTextColumns> = (props) => {
  const { firstTextColumn, secondTextColumn } = props

  useEffect(() => {
    console.log(firstTextColumn, secondTextColumn)
  }, [])

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" height="100%">
      <Box width="50%" minWidth={theme.minComponentWidth} flexGrow={1}>
        <RichTextModule text={firstTextColumn} />
      </Box>
      <Box width="50%" minWidth={theme.minComponentWidth} flexGrow={1}>
        <RichTextModule text={secondTextColumn} />
      </Box>
    </Box>
  )
}

export default TwoTextColumnsModule

export const query = graphql`
  fragment moduleTwoTextColumnsData on SanityModuleTwoTextColumns {
    firstTextColumn {
      ...RichTextData
    }
    secondTextColumn {
      ...RichTextData
    }
  }
`
