import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@/atoms/Box'
import ListItemCard from '@/components/ListItemCard.tsx'
import { Tag } from '@/components/TagList'

export type RelationalGridItem = {
  _key?: string
  _type?: string
  title: string
  featuredImage: any
  description: any
  excerpt: any
  tags?: Tag[]
}

export type ModuleRelationalGrid = {
  _key?: string
  _type?: string
  postType: string
}

// interface RelationalGridProps extends ModuleRelationsGrid {}

const RelationalGrid: FC<ModuleRelationalGrid> = (props) => {
  const { postType } = props
  const { allSanityJobs, allSanityNews } = useStaticQuery(
    graphql`
      query AllJobsOrAllNews {
        allSanityJobs {
          nodes {
            _key
            _type
            title
            featuredImage {
              ...ImageWithPreview
            }
            description {
              ...RichTextData
            }
          }
        }
        allSanityNews {
          nodes {
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
  )

  const gridItems: RelationalGridItem[] =
    postType === 'jobs' ? allSanityJobs.nodes : allSanityNews.nodes

  return (
    <Box display="flex" flexWrap="wrap">
      {gridItems.map((item) => (
        <ListItemCard width="50%" key={item._key} image={item.featuredImage} {...item} />
      ))}
    </Box>
  )
}

export default RelationalGrid

export const query = graphql`
  fragment moduleRelationalGridData on SanityModuleRelationalGrid {
    postType
  }
`
