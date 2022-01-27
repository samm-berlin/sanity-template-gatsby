/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import { RichTextBlockContent } from '@/modules/RichText'

const RichTextModule: FC<any> = ({ text }) => (
  <Box
    m={5}
    maxWidth={'33vw'}
    style={{ textAlign: text.alignment || 'justify' }}
    position="relative"
  >
    <RichTextBlockContent text={text} />
  </Box>
)

export default RichTextModule

export const query = graphql`
  fragment RichTextData on SanityRichTextExtended {
    alignment
    textRaw: _rawText(resolveReferences: { maxDepth: 6 })
  }

  fragment scrollyModuleRichTextData on SanityScrollyModuleRichText {
    text {
      ...RichTextData
    }
  }
`
