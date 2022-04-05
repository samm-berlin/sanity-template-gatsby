import React, { FC, useState } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { Tag } from 'web/types/custom-graphql-types'

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
            <Box
              key={`tag-${tag.title}-${index}`}
              height="5rem"
              mb="1px"
              mr="1px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="grey"
            >
              <Text px="2">{tag.title}</Text>
            </Box>
          ))}
      {tags && tags.length !== 0 && (numberOfTags || numberOfTagsFallback) < tags.length && (
        <Box
          height="5rem"
          mb="1px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setShowAll(!showAll)}
          cursor="pointer"
          backgroundColor="grey"
        >
          <Text px="2">{showAll ? 'show less' : '...'}</Text>
        </Box>
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
