import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'

export type ModuleStatement = {
  fontSize: 'small' | 'medium' | 'large'
  textField?: string
  authorName?: string
}

type VariantDict = {
  small: 'bodyTitleSmall'
  medium: 'bodyTitle'
  large: 'head'
}

const variantDict: VariantDict = {
  small: 'bodyTitleSmall',
  medium: 'bodyTitle',
  large: 'head'
}

type ComponentDict = {
  small: 'h4'
  medium: 'h3'
  large: 'h1'
}

const componentDict: ComponentDict = {
  small: 'h4',
  medium: 'h3',
  large: 'h1'
}

const StatementModule: FC<ModuleStatement> = (props) => {
  const { fontSize, textField, authorName } = props

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      {textField && (
        <Text
          textAlign="center"
          component={componentDict[fontSize]}
          variant={variantDict[fontSize]}
        >
          {textField}
        </Text>
      )}
      {authorName && <Text textAlign="center">{authorName}</Text>}
    </Box>
  )
}

export default StatementModule

export const query = graphql`
  fragment moduleStatementData on SanityModuleStatement {
    fontSize
    textField: text
    authorName
  }
`
