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

  return (
    <Box>
      <Text px={2} pb={2} component="h2" variant="relatedTitle">
        {title}
      </Text>
      <Box display="flex" flexWrap="wrap">
        {relatedPosts.map((post, index) => (
          <Box
            key={post._key}
            width={['100%', 'calc(100% / 3)']}
            pl={[2, index % 3 === 0 ? 2 : 4]}
            pr={[2, index % 3 === 2 ? 2 : 4]}
            mb={[4, 0]}
          >
            <ListItemCard
              {...post}
              title={post.title}
              image={post.featuredImage}
              imageAspectRatio={['16/9', '4/3']}
            />
          </Box>
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
        slug {
          _key
          _type
          current
        }
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
        slug {
          _key
          _type
          current
        }
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
