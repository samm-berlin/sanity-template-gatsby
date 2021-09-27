/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from '@/atoms/Link'
import Text from '@/atoms/Text'
import Box from '@/atoms/Box'

const Block = (props: any): JSX.Element | null => {
  const { style = 'body1' } = props.node
  if (props.children) {
    return (
      <Text
        component="span"
        variant={style === 'normal' ? 'body1' : style}
      >
        block
        {props.children}
      </Text>
    )
  } else return null
}

const serializers = {
  types: {
    h1: (props: any) => <Text component="h1" variant="h3" {...props} />,
    h2: (props: any) => <Text component="h2" variant="h4" {...props} />,
    h3: (props: any) => <Text component="h3" variant="h5" {...props} />,
    li: (props: any) => <li className="special-list-item">{props.children}</li>,
    block: Block
  },
  marks: {
    link: (props: any) => {
      return (
        <Link
          target={props.mark.targetBlank ? '_blank' : ''}
          to={props.mark.url}
        >
          {props.children[0]}
        </Link>
      )
    }
  }
}

const RichTextModule: FC<any> = ({ text }) => {
  return (
    <Box my={3} px={6} mx="auto" maxWidth="1440px">
      <BlockContent blocks={text.textRaw} serializers={serializers} />
    </Box>
  )
}

export default RichTextModule

export const query = graphql`
  fragment moduleRichTextData on SanityModuleRichText {
    text {
      textRaw: _rawText(resolveReferences: { maxDepth: 6 })
    }
  }
`
