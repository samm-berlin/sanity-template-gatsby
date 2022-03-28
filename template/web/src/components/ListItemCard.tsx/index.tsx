import Box from '@/atoms/Box'
import React, { FC, useEffect } from 'react'
import SanityImage from '@/atoms/SanityImage'
import Text from '@/atoms/Text'
import TagList from '@/components/TagList'
import { graphql } from 'gatsby'
import RichText from '@/modules/RichText'

interface ListItemCardProps {
  date?: string
  description?: any
  excerpt?: any
  image?: any
  tags?: string[]
  title?: string
  _type?: string // 'jobs' | 'news' | 'search'
  width?: string
}

const ListItemCard: FC<ListItemCardProps> = (props) => {
  const { image, date, title, _type, description, excerpt, tags, width } = props

  return (
    <Box width={width}>
      <Box>{image && <SanityImage image={image} height="100%" loading="lazyLoading" />}</Box>
      {date && date}
      {title && <Text> {title} </Text>}
      {description && <RichText text={description} />}
      {excerpt && <RichText {...excerpt} />}
      {tags && <TagList tags={tags}></TagList>}
    </Box>
  )
}

export default ListItemCard

// export const query = graphql`
//   fragment moduleRelationalGridData on SanityJobsOrSanityNews {
//     ... on SanityJobs {
//       title
//     }
//   }
// `
