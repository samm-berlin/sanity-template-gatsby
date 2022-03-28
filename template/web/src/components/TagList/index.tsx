import React, { FC, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Box from '@/atoms/Box'

const Tag = styled(Box)`
  background-color: grey;
`

const ButtonBox = styled(Box)`
  cursor: pointer;
`

export type TagListProps = {
  numberOfTags?: number
  tags?: string[]
}

const TagList: FC<TagListProps> = (props) => {
  const { numberOfTags, tags } = props
  const [showAll, setShowAll] = useState(false)

  return (
    <Box display="flex" flexDirection="row">
      {tags &&
        tags
          .filter((tag, index) => index + 1 < (numberOfTags || 5))
          .map((tag, index) => <Tag key={`tag-${tag}-${index}`}>{{ tag }}</Tag>)}
      <ButtonBox onClick={() => setShowAll(!showAll)}> {showAll ? '...' : 'show less'} </ButtonBox>
    </Box>
  )
}

export default TagList

export const query = graphql`
  fragment tagsData on SanityTag {
    title
  }
`
