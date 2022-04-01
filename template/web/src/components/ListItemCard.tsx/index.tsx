import Box from '@/atoms/Box'
import React, { FC, useEffect } from 'react'
import SanityImage from '@/atoms/SanityImage'
import Text from '@/atoms/Text'
import TagList, { Tag } from '@/components/TagList'
import { graphql, navigate } from 'gatsby'
import RichText from '@/modules/RichText'
import styled from 'styled-components'
import { Slug } from 'web/types/custom-graphql-types'

interface ListItemCardProps {
  date?: string
  description?: any
  excerpt?: string
  image?: any
  imageAspectRatio?: string | string[]
  isHeader?: boolean
  tags?: Tag[]
  title?: string
  _type?: string // 'jobs' | 'news' | 'search'
  slug?: Slug
  width?: string
}

// width == 0, 1, 2

const ListItemCard: FC<ListItemCardProps> = (props) => {
  const {
    date,
    description,
    excerpt,
    isHeader,
    image,
    imageAspectRatio,
    tags,
    title,
    _type,
    slug,
    width
  } = props

  const ListItemAsHeader = () => (
    <Box
      position="relative"
      onClick={() => slug && navigate(slug.current)}
      cursor={slug && 'pointer'}
    >
      {image && (
        <SanityImage
          image={image}
          height="100%"
          loading="lazyLoading"
          aspectRatio={imageAspectRatio}
        />
      )}
      {title && (
        <Box
          display={['none', 'unset']}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text variant="bodyTitle" component="h1" color="white">
            {title}
          </Text>
        </Box>
      )}
    </Box>
  )

  return (
    <Box width={width}>
      {isHeader ? (
        ListItemAsHeader()
      ) : (
        <Box onClick={() => slug && navigate(slug.current)} cursor={slug && 'pointer'}>
          {image && (
            <SanityImage
              image={image}
              height="100%"
              loading="lazyLoading"
              aspectRatio={imageAspectRatio}
            />
          )}
        </Box>
      )}
      {date && (
        <Text pt="1" variant="caption">
          {date}
        </Text>
      )}
      {!isHeader && title && (
        <Text pt="1" component="h4" variant="bodyTitleSmall">
          {title}
        </Text>
      )}
      {isHeader && title && (
        <Box display={['unset', 'none']}>
          <Text pt="1" component="h4" variant="bodyTitleSmall">
            {title}
          </Text>
        </Box>
      )}
      {description && (
        <Box pt="1">
          <RichText text={description} />
        </Box>
      )}
      {excerpt && (
        <Box pt="1">
          <Text>{excerpt}</Text>
        </Box>
      )}
      {tags && (
        <Box pt="2">
          <TagList tags={tags}></TagList>
        </Box>
      )}
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
