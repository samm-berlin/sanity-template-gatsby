import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import ListItemCard from '@/components/ListItemCard.tsx'
import { Tag } from '@/components/TagList'

export type RelatedListItem = {
  _key: string
  _type: string
  title: string
  featuredImage: any
  excerpt: any
  tags?: Tag[]
}

export type ModuleRelatedList = {
  title: string
  relatedPosts: RelatedListItem[]
}

const RelatedList: FC<ModuleRelatedList> = (props) => {
  const { title, relatedPosts } = props

  useEffect(() => {
    console.log(relatedPosts)
  }, [])

  return (
    <Box>
      <Text>{title}</Text>
      <Box display="flex" flexWrap="wrap">
        {relatedPosts.map((post) => (
          <ListItemCard
            {...post}
            key={post._key}
            width={'calc(100% / 3)'}
            title={post.title}
            image={post.featuredImage}
          />
        ))}
      </Box>
    </Box>
  )
}

export default RelatedList

export const query = graphql`
  fragment moduleRelatedListData on SanityModuleRelatedList {
    title
    relatedPosts {
      ... on SanityNews {
        _key
        _type
        title
        featuredImage {
          ...ImageWithPreview
        }
        excerpt {
          ...RichTextData
        }
        tags {
          ...tagsData
        }
      }
      ... on SanityProjects {
        _key
        _type
        title
        featuredImage {
          ...ImageWithPreview
        }
        excerpt {
          ...RichTextData
        }
        tags {
          ...tagsData
        }
      }
    }
  }
`
