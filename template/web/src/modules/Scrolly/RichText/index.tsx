/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import { RichTextBlockContent } from '@/modules/RichText'

type RichTextModuleProps = {
  text: any
}

const RichTextModule: FC<RichTextModuleProps> = (props) => {
  const { text } = props

  return (
    <Box style={{ textAlign: text.alignment || 'justify' }} position="relative">
      <RichTextBlockContent text={text} />
    </Box>
  )
}

export default RichTextModule

export const query = graphql`
  fragment RichTextData on SanityRichTextExtended {
    alignment
    text {
      textRaw: _rawText(resolveReferences: { maxDepth: 6 })
    }
  }

  fragment scrollyModuleRichTextData on SanityScrollyModuleRichText {
    text {
      ...RichTextData
    }
  }
`
