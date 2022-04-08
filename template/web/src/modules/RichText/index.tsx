/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Link from '@/atoms/Link'
import Text from '@/atoms/Text'
import Box from '@/atoms/Box'
import { SanityButton } from '@/atoms/Button'

const Block = (props: any): JSX.Element | null => {
  const { style } = props.node
  const variants = {
    h1: 'head',
    h2: 'head',
    h3: 'subhead',
    h4: 'subhead',
    caption: 'caption',
    p: 'body',
    span: 'body',
    normal: 'body'
  }
  if (props.children) {
    return (
      <Text
        as={style === 'normal' ? 'p' : style === 'caption' ? 'span' : style}
        variant={variants[style]}
      >
        {props.children}
      </Text>
    )
  } else return null
}

const serializers = {
  types: {
    richText: (props: any) => <>{JSON.stringify(props)}</>,
    h1: (props: any) => <Text as="h1" variant="head" {...props} />,
    h2: (props: any) => <Text as="h2" variant="head" {...props} />,
    h3: (props: any) => <Text as="h3" variant="subhead" {...props} />,
    h4: (props: any) => <Text as="h3" variant="subhead" {...props} />,
    span: (props: any) => <Text variant="body" {...props} />,
    listItem: (props: any) => <Text as="li" {...props} />,
    block: Block,
    button: (props: any) => <SanityButton {...props.node} />
  },
  listItem: (props: any) => <Text as="li" {...props} />,
  marks: {
    link: (props: any) => {
      return (
        <Link target={props.mark.targetBlank ? '_blank' : ''} to={props.mark.url}>
          <Text as="span" color="brand" {...props} />
        </Link>
      )
    },

    colorSanity: (props: any) => (
      <Text as={props._type} color={props.mark.hex} opacity={props.mark.alpha} {...props} />
    )
  }
}

export const RichTextBlockContent: FC<any> = ({ text }) => (
  <BlockContent blocks={text.textRaw} serializers={serializers} />
)

const RichTextModule: FC<any> = ({ text }) => (
  <Box style={{ textAlign: text.alignment }}>
    <RichTextBlockContent text={text.text || text} />
  </Box>
)

export default RichTextModule

export const query = graphql`
  fragment OnlyRichTextData on SanityRichText {
    textRaw: _rawText(resolveReferences: { maxDepth: 6 })
  }

  fragment RichTextData on SanityRichTextExtended {
    alignment
    text {
      textRaw: _rawText(resolveReferences: { maxDepth: 6 })
    }
  }

  fragment moduleRichTextData on SanityModuleRichText {
    text {
      ...RichTextData
    }
  }
`
