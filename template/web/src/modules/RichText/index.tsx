/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from '@/atoms/Link'
import Text from '@/atoms/Text'
import Box from '@/atoms/Box'
import { Button, SanityButton } from '@/atoms/Button'

const Block = (props: any): JSX.Element | null => {
  if (props.children) {
    return (
      <Text as="p">
        {props.children}
      </Text>
    )
  } else return null
}

const serializers = {
  types: {
    h1: (props: any) => <Text as="h1" {...props} />,
    h2: (props: any) => <Text as="h2" {...props} />,
    h3: (props: any) => <Text as="h3" {...props} />,
    h4: (props: any) => <Text as="h3" {...props} />,
    span: (props: any) => <Text {...props} />,
    listItem: (props: any) => <Text as="li" {...props} />,
    block: Block,
    button: (props: any) => <SanityButton {...props.node} />
  },
  listItem: (props: any) => <Text as="li" {...props} />,
  marks: {
    link: (props: any) => {
      return (
        <Link
          target={props.mark.targetBlank ? '_blank' : ''}
          to={props.mark.url}
        >
          <Text as="span" color="brand" {...props} />
        </Link>
      )
    },

    colorSanity: (props: any) => <Text
      as={props._type}
      color={props.mark.hex}
      opacity={props.mark.alpha}
      {...props}
    />
  }
}

const RichTextModule: FC<any> = ({ text }) =>
  <Box style={{ textAlign: text.alignment }}>
    <BlockContent blocks={text.textRaw} serializers={serializers} />
  </Box>

export default RichTextModule

export const query = graphql`

  fragment RichTextData on SanityRichTextExtended {
    alignment
    textRaw: _rawText(resolveReferences: { maxDepth: 6 })
  }

  fragment moduleRichTextData on SanityModuleRichText {
    text { ...RichTextData }
  }
`
