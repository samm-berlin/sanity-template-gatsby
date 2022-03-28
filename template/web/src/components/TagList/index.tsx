import React, { FC, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'

const Tag = styled(Box)`
  background-color: grey;
  height: 31px;
  margin-right: 1px;
`

const ButtonBox = styled(Box)`
  cursor: pointer;
  background-color: grey;
  height: 31px;
`

export type Tag = {
  title: string
}

export type TagListProps = {
  numberOfTags?: number
  tags?: Tag[]
}

const TagList: FC<TagListProps> = (props) => {
  const { numberOfTags, tags } = props
  const [showAll, setShowAll] = useState(false)

  const numberOfTagsFallback = 4

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {tags &&
        tags
          .filter((tag, index) =>
            showAll ? tags.length : index + 1 < (numberOfTags || numberOfTagsFallback)
          )
          .map((tag, index) => (
            <Tag
              key={`tag-${tag.title}-${index}`}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text px="2">{tag.title}</Text>
            </Tag>
          ))}
      {tags && tags.length !== 0 && (numberOfTags || numberOfTagsFallback) < tags.length && (
        <ButtonBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setShowAll(!showAll)}
        >
          <Text px="2">{showAll ? 'show less' : '...'}</Text>
        </ButtonBox>
      )}
    </Box>
  )
}

export default TagList

export const query = graphql`
  fragment tagsData on SanityTag {
    title
  }
`
